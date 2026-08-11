/* Showintro: en uppsättningsskärm och en sekvens som spelas i helskärm.
   Bakgrundsfilmen loopar via två lager som korsklipper i varandra; ovanpå den
   tonas ett kort per improvisatör in och ut, växelvis med filmen till höger
   och till vänster, och till slut tonas titeln upp. Allt är tyst. */
(() => {
  "use strict";

  // Filerna heter som de gör i assets/intro/ — versaler och allt, eftersom
  // GitHub Pages skiljer på stora och små bokstäver. clip: null betyder att
  // ingen film är inspelad än; då visas bara namnet.
  const ENSEMBLE = [
    { first: "Madeleine", last: "Kalin",               color: "#E8A22B", portrait: "assets/portraits/madeleine-1.jpg", clip: "assets/intro/Madeleine1.MP4" },
    { first: "Bastian",   last: "Sandin",              color: "#5BC4B4", portrait: "assets/portraits/bastian-1.jpg",   clip: "assets/intro/bastian1.MP4" },
    { first: "Sara",      last: "Johansson-Gullersby", color: "#E66874", portrait: "assets/portraits/sara-1.jpg",      clip: "assets/intro/sara1.MP4" },
    { first: "Kim",       last: "Juliusson Lifwergren", color: "#7FA6E8", portrait: "assets/portraits/kim-1.jpg",      clip: "assets/intro/kim1.MP4" },
    { first: "Johanna",   last: "Niklasson",           color: "#F2B7A4", portrait: "assets/portraits/johanna-1.jpg",   clip: "assets/intro/johanna1.MP4" },
    { first: "Louise",    last: "Askling",             color: "#BFA0E0", portrait: "assets/portraits/louise-1.jpg",    clip: "assets/intro/louise1.MP4" },
    { first: "Ville",     last: "HE",                  color: "#A8C86A", portrait: "assets/portraits/ville-1.jpg",     clip: "assets/intro/ville1.MP4" }
  ];

  const FADE_MS = 700;           // ska matcha --fade i intro.css
  const GAP_MS = 260;            // lucka mellan två kort
  const NO_CLIP_MS = 3600;       // hur länge ett kort utan film ligger kvar
  const FALLBACK_CLIP_MS = 6000; // om filmens längd inte går att läsa
  const READY_TIMEOUT_MS = 8000; // vi väntar inte längre än så på laddning
  const LEAD_IN_MS = 900;        // bakgrunden får ligga ensam en stund först
  const LOOKAHEAD = 2;           // så många filmer laddas i förväg
  const BG_CROSSFADE_MS = 1200;  // ska matcha --bg-crossfade i intro.css
  // timeupdate kommer i kliv om ~250 ms, så överlämningen startar med marginal
  // för att övertoningen ska hinna bli klar innan filmen tar slut.
  const BG_HANDOVER_MARGIN_S = BG_CROSSFADE_MS / 1000 + 0.35;

  const setup = document.getElementById("setup");
  const stage = document.getElementById("stage");
  const bgVideos = [document.getElementById("bg-a"), document.getElementById("bg-b")];
  const slotsEl = document.getElementById("slots");
  const titleCard = document.getElementById("title-card");
  const titleText = document.getElementById("title-text");
  const form = document.getElementById("setup-form");
  const pickList = document.getElementById("pick-list");
  const pickCount = document.getElementById("pick-count");
  const setupError = document.getElementById("setup-error");
  const playBtn = document.getElementById("play-btn");
  const playLabel = document.getElementById("play-label");
  const titleInput = document.getElementById("title-input");
  const preload = document.getElementById("preload");
  const preloadFill = document.getElementById("preload-fill");
  const preloadText = document.getElementById("preload-text");

  const BACKGROUND_SRC = "assets/intro/background.MOV";

  // Varje körning får ett eget nummer. Avbryts showen räknas det upp och den
  // pågående sekvensen ser att den inte längre är aktuell och lägger av.
  let runId = 0;
  let running = false;
  let slots = [];
  let bgFront = 0;
  let bgHandingOver = false;
  // Förladdade filmer: filnamn -> blob-URL. Finns filmen här spelas den ur
  // minnet i stället för att strömmas.
  const loaded = new Map();

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  /* ---------- Förladdning ----------
     Filmerna hämtas hem redan på uppsättningsskärmen och läggs som blobbar i
     minnet. Showen behöver då inte hämta en enda byte, vilket också gör att
     omspolningen alltid funkar — en blob är spolbar även om servern inte
     svarar på Range-förfrågningar. */

  function mediaUrls() {
    const clips = ENSEMBLE.map((person) => person.clip).filter(Boolean);
    return [BACKGROUND_SRC, ...clips];
  }

  function srcFor(url) {
    return loaded.get(url) || url;
  }

  function showProgress(fraction, filesDone, filesTotal, allDone) {
    preloadFill.style.width = `${Math.round(Math.min(1, Math.max(0, fraction)) * 100)}%`;
    if (allDone) {
      preload.classList.add("is-done");
      preloadText.textContent = filesDone === filesTotal
        ? `Alla ${filesTotal} filmer ligger i minnet — intron spelas utan att ladda.`
        : `${filesDone} av ${filesTotal} filmer förladdade — resten strömmas.`;
      return;
    }
    const percent = Math.round(Math.min(1, Math.max(0, fraction)) * 100);
    preloadText.textContent = `Laddar filmerna — ${percent} % (${filesDone} av ${filesTotal} klara)`;
  }

  async function fileSizes(urls) {
    return Promise.all(urls.map(async (url) => {
      try {
        const response = await fetch(url, { method: "HEAD" });
        return Number(response.headers.get("content-length")) || 0;
      } catch (error) {
        return 0;
      }
    }));
  }

  async function fetchToBlob(url, onBytes) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${url}: ${response.status}`);
    if (!response.body) return response.blob();

    const reader = response.body.getReader();
    const chunks = [];
    for (;;) {
      const step = await reader.read();
      if (step.done) break;
      chunks.push(step.value);
      onBytes(step.value.length);
    }
    return new Blob(chunks, { type: response.headers.get("content-type") || "video/mp4" });
  }

  async function preloadMedia() {
    const urls = mediaUrls();
    const sizes = await fileSizes(urls);
    const total = sizes.reduce((sum, size) => sum + size, 0);

    let doneBytes = 0;
    let doneFiles = 0;

    for (let index = 0; index < urls.length; index += 1) {
      const url = urls[index];
      let inFlight = 0;
      try {
        const blob = await fetchToBlob(url, (bytes) => {
          inFlight += bytes;
          // Utan Content-Length faller vi tillbaka på att räkna filer.
          showProgress(total ? (doneBytes + inFlight) / total : doneFiles / urls.length, doneFiles, urls.length, false);
        });
        loaded.set(url, URL.createObjectURL(blob));
        doneFiles += 1;
        if (url === BACKGROUND_SRC) applyBackgroundSrc();
      } catch (error) {
        /* filen får strömmas i stället — showen ska ändå gå att köra */
      }
      doneBytes += sizes[index] || inFlight;
      showProgress(total ? doneBytes / total : doneFiles / urls.length, doneFiles, urls.length, false);
    }

    showProgress(1, doneFiles, urls.length, true);
  }

  // Bakgrunden ligger i två element som kan dela på samma blob, så filmen
  // hämtas bara en gång. Byts aldrig under pågående show.
  function applyBackgroundSrc() {
    if (running) return;
    const src = srcFor(BACKGROUND_SRC);
    bgVideos.forEach((video) => {
      if (video.src !== src) video.src = src;
    });
  }

  /* ---------- Guldtypografin ----------
     Varje bokstav blir ett eget element så att O, R, S och A kan formas
     individuellt i deco.css, och hela raden dubbleras i två lager: ett för
     3D-djupet och ett för guldgradienten. */

  function decoLetters(text) {
    const frag = document.createDocumentFragment();
    Array.from(text.toUpperCase()).forEach((char) => {
      const span = document.createElement("span");
      if (char === " ") {
        span.className = "sp";
        span.textContent = " ";
      } else {
        const key = char.toLowerCase();
        span.className = /^[a-zåäöéü]$/.test(key) ? `l l-${key}` : "l";
        span.textContent = char;
      }
      frag.append(span);
    });
    return frag;
  }

  function decoLine(text) {
    const line = document.createElement("span");
    line.className = "name-line";

    const deco = document.createElement("span");
    deco.className = "deco";

    const extrude = document.createElement("span");
    extrude.className = "deco-layer deco-extrude";
    extrude.setAttribute("aria-hidden", "true");
    extrude.append(decoLetters(text));

    const face = document.createElement("span");
    face.className = "deco-layer deco-face";
    face.append(decoLetters(text));

    deco.append(extrude, face);
    line.append(deco);
    return line;
  }

  // scaleX i deco.css ändrar inte layoutbredden, så en lång rad kan sticka ut
  // utan att webbläsaren bryter den. Vi mäter den ritade bredden och drar ner
  // grafiken tills raden ryms.
  function fitDecoLines(root, available) {
    if (!available || available <= 0) return;
    root.querySelectorAll(".deco").forEach((deco) => {
      deco.style.fontSize = "";
      const drawn = deco.getBoundingClientRect().width;
      if (drawn <= available || drawn === 0) return;
      const base = parseFloat(getComputedStyle(deco).fontSize);
      const scaled = Math.floor(base * (available / drawn) * 0.99);
      deco.style.fontSize = `${Math.max(16, scaled)}px`;
    });
  }

  /* ---------- Uppsättning ---------- */

  function buildPickList() {
    ENSEMBLE.forEach((person, index) => {
      const li = document.createElement("li");
      const label = document.createElement("label");
      label.className = "pick-card";
      label.style.setProperty("--member-color", person.color);

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = true;
      input.value = String(index);

      const thumb = document.createElement("span");
      thumb.className = "thumb";
      const img = document.createElement("img");
      img.src = person.portrait;
      img.alt = "";
      const tick = document.createElement("span");
      tick.className = "tick";
      thumb.append(img, tick);

      const who = document.createElement("span");
      who.className = "who";
      const name = document.createElement("strong");
      name.textContent = person.last ? `${person.first} ${person.last}` : person.first;
      const note = document.createElement("span");
      if (person.clip) {
        note.textContent = "film";
      } else {
        note.textContent = "ingen film än";
        note.className = "no-clip";
      }
      who.append(name, note);

      label.append(input, thumb, who);
      li.append(label);
      pickList.append(li);
    });

    pickList.addEventListener("change", syncCount);
    document.getElementById("pick-all").addEventListener("click", () => setAll(true));
    document.getElementById("pick-none").addEventListener("click", () => setAll(false));
    syncCount();
  }

  function boxes() {
    return Array.from(pickList.querySelectorAll("input[type=checkbox]"));
  }

  function setAll(checked) {
    boxes().forEach((box) => { box.checked = checked; });
    syncCount();
  }

  function syncCount() {
    const picked = boxes().filter((box) => box.checked).length;
    pickCount.textContent = picked === 1 ? "1 vald" : `${picked} valda`;
    if (picked > 0) setupError.hidden = true;
  }

  function selectedPeople() {
    return boxes()
      .filter((box) => box.checked)
      .map((box) => ENSEMBLE[Number(box.value)]);
  }

  /* ---------- Scenen ---------- */

  function buildSlots(people) {
    slotsEl.textContent = "";
    slots = people.map((person, index) => {
      const el = document.createElement("div");
      el.className = "slot";
      el.style.setProperty("--member-color", person.color);
      // Första filmen kommer till höger, nästa till vänster, och så vidare.
      el.dataset.side = index % 2 === 0 ? "right" : "left";
      el.dataset.clip = person.clip ? "yes" : "none";

      const name = document.createElement("div");
      name.className = "slot-name";
      name.append(decoLine(person.first));
      if (person.last) name.append(decoLine(person.last));
      const rule = document.createElement("span");
      rule.className = "rule";
      name.append(rule);
      el.append(name);

      const record = { el, name, video: null };

      if (person.clip) {
        const box = document.createElement("div");
        box.className = "slot-clip";
        const video = document.createElement("video");
        video.src = srcFor(person.clip);
        video.playsInline = true;
        video.muted = true;
        video.preload = "none";
        video.setAttribute("aria-hidden", "true");
        // Saknas eller strular filen får kortet bli ett namnkort i stället för
        // en svart ruta — showen ska aldrig stanna på ett trasigt klipp.
        video.addEventListener("error", () => {
          record.video = null;
          el.dataset.clip = "none";
          box.remove();
        });
        box.append(video);
        el.append(box);
        record.video = video;
      }

      slotsEl.append(el);
      return record;
    });
  }

  function buildTitle(title) {
    titleText.textContent = "";
    const words = title.split(/\s+/).filter(Boolean);
    // Ett ord per rad ger titelkortskänslan, men bara upp till tre rader.
    const lines = words.length > 0 && words.length <= 3 ? words : [title];
    lines.forEach((line) => titleText.append(decoLine(line)));
    titleText.dataset.lines = String(lines.length);
  }

  function prime(index) {
    const record = slots[index];
    if (!record || !record.video) return;
    if (record.video.preload !== "auto") {
      record.video.preload = "auto";
      record.video.load();
    }
  }

  function whenReady(video, timeout) {
    if (!video || video.readyState >= 3) return Promise.resolve();
    return new Promise((resolve) => {
      const done = () => {
        clearTimeout(timer);
        video.removeEventListener("canplay", done);
        video.removeEventListener("error", done);
        resolve();
      };
      const timer = setTimeout(done, timeout);
      video.addEventListener("canplay", done);
      video.addEventListener("error", done);
    });
  }

  // Kortet ligger kvar precis så länge som filmen är lång, så att uttoningen
  // avslutas i samma stund som klippet tar slut.
  function visibleMs(video) {
    if (!video) return NO_CLIP_MS;
    const seconds = video.duration;
    const ms = Number.isFinite(seconds) && seconds > 0 ? Math.round(seconds * 1000) : FALLBACK_CLIP_MS;
    return Math.max(ms, FADE_MS * 2 + 400);
  }

  // Att spola tillbaka kräver att servern svarar på Range-förfrågningar. Gör
  // den inte det (python -m http.server, till exempel) blir seekable tom och
  // currentTime nollställs inte — då får load() göra jobbet i stället.
  function rewind(video) {
    if (!video) return;
    try {
      video.currentTime = 0;
      if (video.currentTime > 0.05 && video.seekable.length === 0) video.load();
    } catch (error) {
      video.load();
    }
  }

  async function playVideo(video) {
    if (!video) return;
    rewind(video);
    try {
      await video.play();
    } catch (error) {
      /* kortet visas ändå, med filmens första bild */
    }
  }

  /* ---------- Bakgrundsloopen ----------
     Skarven där filmen börjar om syns som ett hack. I stället för att låta
     samma element loopa startar vi det andra lagret från noll strax innan det
     första tar slut och korsklipper — övergången blir en mjuk övertoning. */

  function startBackground() {
    bgFront = 0;
    bgHandingOver = false;
    bgVideos.forEach((video, index) => {
      video.muted = true;
      // Ligger filmen i minnet är det gratis; annars börjar den strömma nu.
      if (video.preload !== "auto") video.preload = "auto";
      video.classList.toggle("is-front", index === 0);
      rewind(video);
      if (index === 0) video.play().catch(() => { /* står still i värsta fall */ });
      else video.pause();
    });
  }

  function stopBackground() {
    bgHandingOver = false;
    bgVideos.forEach((video) => {
      video.pause();
      video.classList.remove("is-front");
      rewind(video);
    });
  }

  function bgHandover() {
    if (!running || bgHandingOver) return;
    const front = bgVideos[bgFront];
    const duration = front.duration;
    if (!Number.isFinite(duration) || duration <= 0) return;
    if (front.currentTime < duration - BG_HANDOVER_MARGIN_S) return;

    bgHandingOver = true;
    const next = bgVideos[1 - bgFront];
    rewind(next);
    next.play().catch(() => { /* då ligger den gamla kvar */ });
    next.classList.add("is-front");
    front.classList.remove("is-front");
    bgFront = 1 - bgFront;

    // Det utgående lagret pausas först när det tonat bort, och ställs tillbaka
    // till noll så det är redo nästa gång det är dess tur.
    setTimeout(() => {
      front.pause();
      rewind(front);
      bgHandingOver = false;
    }, BG_CROSSFADE_MS + 120);
  }

  bgVideos.forEach((video) => video.addEventListener("timeupdate", bgHandover));

  /* ---------- Sekvensen ---------- */

  async function runSequence() {
    const myRun = runId;
    const alive = () => myRun === runId;

    prime(0);
    prime(1);
    await Promise.all([
      whenReady(bgVideos[0], READY_TIMEOUT_MS),
      whenReady(slots[0] && slots[0].video, READY_TIMEOUT_MS),
      document.fonts ? document.fonts.ready : Promise.resolve()
    ]);
    if (!alive()) return;

    await wait(LEAD_IN_MS);
    if (!alive()) return;

    for (let index = 0; index < slots.length; index += 1) {
      const record = slots[index];
      prime(index + LOOKAHEAD);

      // Mäts först nu, när helskärmen har satt sig och typsnittet är laddat.
      fitDecoLines(record.name, record.name.clientWidth);

      await playVideo(record.video);
      if (!alive()) return;

      record.el.classList.add("is-in");
      await wait(Math.max(0, visibleMs(record.video) - FADE_MS));
      if (!alive()) return;

      record.el.classList.remove("is-in");
      await wait(FADE_MS + GAP_MS);
      if (!alive()) return;

      if (record.video) record.video.pause();
    }

    fitDecoLines(titleText, titleText.clientWidth);
    titleCard.classList.add("is-in");
  }

  function start(people, title) {
    running = true;
    runId += 1;
    buildSlots(people);
    buildTitle(title);
    titleCard.classList.remove("is-in");

    stage.hidden = false;
    setup.hidden = true;

    // Helskärm måste begäras direkt i klicket, innan något inväntas.
    if (stage.requestFullscreen && !document.fullscreenElement) {
      stage.requestFullscreen({ navigationUI: "hide" }).catch(() => { /* kör i fönster i stället */ });
    }

    startBackground();
    runSequence();
  }

  function stop() {
    if (!running) return;
    running = false;
    runId += 1;

    slots.forEach((record) => {
      if (record.video) {
        record.video.pause();
        record.video.preload = "none";
      }
    });
    slots = [];
    slotsEl.textContent = "";
    titleCard.classList.remove("is-in");
    titleText.textContent = "";
    stopBackground();

    stage.hidden = true;
    setup.hidden = false;
    playBtn.disabled = false;
    playLabel.textContent = "Spela intro";

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => { /* redan ute */ });
    }
    playBtn.focus();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const people = selectedPeople();
    if (people.length === 0) {
      setupError.hidden = false;
      return;
    }
    const title = titleInput.value.trim() || "Slams";
    playBtn.disabled = true;
    playLabel.textContent = "Laddar…";
    start(people, title);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && running) stop();
  });

  // I helskärm fångar webbläsaren Esc själv, så avslutad helskärm får också
  // betyda "tillbaka till uppsättningen".
  document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement && running) stop();
  });

  buildPickList();
  preloadMedia();
})();
