(() => {
  "use strict";

  const COPY = {
    sv: {
      nav: { shows: "Shower", ensemble: "Ensemblen", impro: "Vad är impro?", hire: "Anlita oss", tickets: "Biljetter", toTop: "Till toppen" },
      hero: {
        countdown: "Nästa show om",
        cta: "Köp biljett",
        title: "Improviserad komedi som skapas i ögonblicket.",
        lead: "Vi är sju improvisatörer som bygger scener, karaktärer och hela världar utifrån publikens förslag. Målet är enkelt: att ni skrattar hela vägen hem.",
        bannerAlt: "Ensemblen i silhuett mot en sjö och granskog"
      },
      shows: { title: "Kommande shower", lead: "Alla shower kl 20:00 i Midsommarkransen. Biljetter 150 kr, och varje kväll har vi med en gäst som får ställa till det för oss.", buy: "Biljett", note: "Biljetter säljs via Presens Impro. Kom i tid — vi börjar när ni sitter ner." },
      ens: { title: "Sju personer, oändligt många karaktärer", lead: "Vi kan inte lova vilka vi är på scenen. Men det här är vad som brukar hända." },
      impro: {
        title: "Vad är impro comedy?",
        p1: "Ingenting är bestämt i förväg. Vi frågar publiken om inspiration — det kan vara ett ord, en plats, ett minne eller något helt annat — och sen spelar vi upp det direkt, utan skyddsnät.",
        p2: "Vad vi gör är olika varje föreställning. Det vi vet är att vi hittar det roliga och förstärker det. Och när något går fel på scenen — då blir det oftast som roligast.",
        formatsLabel: "Format vi bland annat har spelat"
      },
      gen: { kicker: "Prova själv", title: "Slumpa fram en scen", l1: "Plats", l2: "Relation", l3: "Och plötsligt", btn: "Slumpa fram ett nytt förslag", note: "Just den här scenen har vi aldrig spelat. Ta med förslaget till showen." },
      hire: {
        title: "Anlita oss",
        p1: "Vi spelar gärna på företagsevent, konferenser, fester, föreningsträffar och allt annat där folk behöver skratta tillsammans.",
        p2: "Är det för välgörande ändamål spelar vi gratis. Punkt. Ni behöver bara ge oss en scen, en publik och ett ord att börja med.",
        joke: "Annars är vi förvånansvärt prisvärda.",
        jokeSub: "Hör av dig med datum och sammanhang, så improviserar vi fram ett pris som funkar.",
        mailLabel: "Eller mejla oss direkt:"
      },
      form: { name: "Namn", email: "Mejl", occasion: "Vad är det för tillfälle?", message: "Berätta mer", send: "Skicka förfrågan", note: "Öppnar din mejlklient med allt ifyllt till slamsimpro@gmail.com." },
      footer: { presens: "Slams är en del av Presens Impro." }
    },
    en: {
      nav: { shows: "Shows", ensemble: "The ensemble", impro: "What is impro?", hire: "Hire us", tickets: "Tickets", toTop: "Back to top" },
      hero: {
        countdown: "Next show in",
        cta: "Get tickets",
        title: "Improv comedy, written while you watch.",
        lead: "We're seven improvisers building scenes, characters and entire worlds out of audience suggestions. The goal is simple: that you laugh all the way home.",
        bannerAlt: "The ensemble in silhouette against a lake and pine forest"
      },
      shows: { title: "Upcoming shows", lead: "Every show at 20:00 in Midsommarkransen. Tickets 150 SEK, and each night a guest joins us to make things harder.", buy: "Tickets", note: "Tickets are sold through Presens Impro. Come early — we start once you sit down." },
      ens: { title: "Seven people, endless characters", lead: "We can't promise who we'll be on stage. But this is what usually happens." },
      impro: {
        title: "What is impro comedy?",
        p1: "Nothing is decided in advance. We ask the audience for inspiration — a word, a place, a memory, anything at all — and then we play it out immediately, with no safety net.",
        p2: "What we do is different every single show. What we do know is that we find the funny and then we amplify it. And when something goes wrong on stage — that's usually when it gets funniest.",
        formatsLabel: "Formats we've played, among others"
      },
      gen: { kicker: "Try it yourself", title: "Roll a random scene", l1: "Place", l2: "Relationship", l3: "And suddenly", btn: "Give us a suggestion", note: "We have never played this exact scene. Bring the suggestion to the show." },
      hire: {
        title: "Hire us",
        p1: "We happily play corporate events, conferences, parties, club nights and anything else where people need to laugh together.",
        p2: "If it's for charity, we play for free. Full stop. Just give us a stage, an audience and one word to start from.",
        joke: "Otherwise we're surprisingly affordable.",
        jokeSub: "Send us a date and some context and we'll improvise a price that works.",
        mailLabel: "Or email us directly:"
      },
      form: { name: "Name", email: "Email", occasion: "What's the occasion?", message: "Tell us more", send: "Send request", note: "Opens your mail client with everything filled in to slamsimpro@gmail.com." },
      footer: { presens: "Slams is part of Presens Impro." }
    }
  };

  const MEMBER_ROLES = {
    Madeleine: { sv: "Hittar på abstrakta roller — typ en kexchoklad i en varuautomat på tunnelbanan.", en: "Invents abstract roles — like a chocolate bar in a subway vending machine." },
    Bastian: { sv: "Stark karaktär som helst tar sig ut på rymdäventyr.", en: "A strong character who'd rather be off on a space adventure." },
    Sara: { sv: "Den onda primadonnan. Utan förvarning.", en: "The evil prima donna. Without warning." },
    Kim: { sv: "Tar alla under sina vingar och drar historien framåt.", en: "Takes everyone under their wing and drives the story forward." },
    Johanna: { sv: "Hittar en helt ny tvist som ingen annan tänkt på.", en: "Finds a twist nobody else saw coming." },
    Louise: { sv: "Den gamla tanten i parken som också råkar råna banker.", en: "The old lady in the park who also happens to rob banks." },
    Ville: { sv: "Den ökända banditen som kommer tillbaka till saloonen.", en: "The infamous bandit riding back into the saloon." }
  };

  const SHOWS = [
    { date: "2026-09-19", sv: "Slams + gäst", en: "Slams + guest" },
    { date: "2026-10-17", sv: "Slams + gäst", en: "Slams + guest" },
    { date: "2026-11-07", sv: "Slams + gäst", en: "Slams + guest" },
    { date: "2026-11-21", sv: "Slams + gäst", en: "Slams + guest" },
    { date: "2026-12-12", sv: "Slams + gäst", en: "Slams + guest" }
  ];

  const SUGG = {
    sv: {
      a: ["En tvättstuga kl 03:00", "Ett kassaskåp inifrån", "Midsommarkransens tunnelbaneperrong", "En bilprovning", "Ett bröllop utan brudpar", "En rymdfärja med dålig wifi", "En saloon i Norrland", "En parkbänk i regn"],
      b: ["Två syskon som inte pratat på tolv år", "Chefen och den nyanställda", "Bankrånare och deras terapeut", "Ett gammalt par på första dejten igen", "Rivaliserande primadonnor", "Kapten och en väldigt trött besättning"],
      c: ["dyker en kexchoklad upp", "börjar alla tala i rim", "kommer banditen tillbaka", "visar det sig att någon är utomjording", "tar strömmen slut", "bryter någon ut i opera", "rånas banken tvärs över gatan"]
    },
    en: {
      a: ["A laundry room at 3 AM", "The inside of a safe", "A subway platform in Midsommarkransen", "A car inspection", "A wedding with no couple", "A space shuttle with bad wifi", "A saloon up north", "A park bench in the rain"],
      b: ["Two siblings who haven't spoken in twelve years", "The boss and the new hire", "Bank robbers and their therapist", "An old couple on a first date again", "Rival prima donnas", "A captain and a very tired crew"],
      c: ["a chocolate bar shows up", "everyone starts speaking in rhyme", "the bandit rides back in", "someone turns out to be an alien", "the power goes out", "someone bursts into opera", "the bank across the street gets robbed"]
    }
  };

  const MONTHS = { sv: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] };
  const WEEKDAYS = { sv: ["sön", "mån", "tis", "ons", "tors", "fre", "lör"], en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] };

  let lang = "sv";
  let lastPick = { a: 0, b: 0, c: 0 };

  function getPath(obj, path) {
    return path.split(".").reduce((o, k) => (o == null ? undefined : o[k]), obj);
  }

  function applyTranslations() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = getPath(COPY[lang], el.getAttribute("data-i18n"));
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const value = getPath(COPY[lang], el.getAttribute("data-i18n-alt"));
      if (typeof value === "string") el.alt = value;
    });

    document.getElementById("lang-sv").classList.toggle("is-active", lang === "sv");
    document.getElementById("lang-sv").setAttribute("aria-pressed", String(lang === "sv"));
    document.getElementById("lang-en").classList.toggle("is-active", lang === "en");
    document.getElementById("lang-en").setAttribute("aria-pressed", String(lang === "en"));

    document.title = lang === "sv"
      ? "Slams — improviserad komedi från Midsommarkransen"
      : "Slams — improv comedy from Midsommarkransen";

    renderShows();
    renderMemberRoles();
    renderSuggestion();
  }

  function renderShows() {
    document.querySelectorAll(".show-item").forEach((item) => {
      const show = SHOWS[Number(item.dataset.showIndex)];
      if (!show) return;
      const dt = new Date(show.date + "T20:00:00+02:00");
      const dateEl = item.querySelector(".show-date");
      dateEl.textContent = `${dt.getDate()} ${MONTHS[lang][dt.getMonth()]}`;
      item.querySelector(".show-name").textContent = show[lang];
      const metaLabel = lang === "sv" ? "Midsommarkransen" : "Midsommarkransen";
      item.querySelector(".show-meta").textContent = `${WEEKDAYS[lang][dt.getDay()]} 20:00 · ${metaLabel}`;
    });
  }

  function renderMemberRoles() {
    document.querySelectorAll(".member").forEach((member) => {
      const name = member.dataset.member;
      const roles = MEMBER_ROLES[name];
      if (!roles) return;
      member.querySelector(".member-role").textContent = roles[lang];
    });
  }

  function pickIndex(arr, excludeIndex) {
    if (arr.length <= 1) return 0;
    let index;
    do {
      index = Math.floor(Math.random() * arr.length);
    } while (index === excludeIndex);
    return index;
  }

  function renderSuggestion() {
    const s = SUGG[lang];
    document.getElementById("sugg-a").textContent = s.a[lastPick.a];
    document.getElementById("sugg-b").textContent = s.b[lastPick.b];
    document.getElementById("sugg-c").textContent = s.c[lastPick.c];
  }

  function rollSuggestion() {
    lastPick = {
      a: pickIndex(SUGG[lang].a, lastPick.a),
      b: pickIndex(SUGG[lang].b, lastPick.b),
      c: pickIndex(SUGG[lang].c, lastPick.c)
    };
    renderSuggestion();
  }

  function nextShowTimestamp(now) {
    const upcoming = SHOWS
      .map((s) => new Date(s.date + "T20:00:00+02:00").getTime())
      .sort((a, b) => a - b);
    return upcoming.find((ts) => ts > now) ?? upcoming[upcoming.length - 1];
  }

  function updateCountdown() {
    const now = Date.now();
    const target = nextShowTimestamp(now);
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
    const el = document.getElementById("countdown-value");
    el.textContent = lang === "sv"
      ? `${days} d ${hours} h ${minutes} min`
      : `${days}d ${hours}h ${minutes}m`;
    el.setAttribute("datetime", `PT${days * 24 + hours}H${minutes}M`);
  }

  const EGG_WORDS = ["POW!", "WOW!", "BOM!", "ZAP!", "BAM!", "TADA!", "AJ!", "OOPS!", "SLAMS!", "HA!", "KABOOM!", "PANG!"];
  const EGG_COLORS = ["#E8A22B", "#D9455A", "#3E6EA8", "#BFA0E0", "#A8C86A", "#F2B7A4", "#5BC4B4"];
  let eggActive = false;

  function fireEgg() {
    if (eggActive) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    eggActive = true;
    const layer = document.getElementById("egg-layer");
    layer.innerHTML = "";

    EGG_WORDS.forEach((text, i) => {
      const angle = (i / EGG_WORDS.length) * Math.PI * 2 + 0.4;
      const dist = 240 + (i % 4) * 90;
      const dx = Math.round(Math.cos(angle) * dist * 1.5);
      const dy = Math.round(Math.sin(angle) * dist);
      const rot = (i % 2 ? 1 : -1) * (6 + ((i * 5) % 22));
      const size = 36 + ((i * 13) % 40);
      const duration = 1500 + (i % 5) * 220;

      const span = document.createElement("span");
      span.className = "egg-word";
      span.textContent = text;
      span.style.color = EGG_COLORS[i % EGG_COLORS.length];
      span.style.fontSize = size + "px";
      span.style.setProperty("--dx", dx + "px");
      span.style.setProperty("--dy", dy + "px");
      span.style.setProperty("--r", rot + "deg");
      span.style.animation = `slams-fly ${duration}ms cubic-bezier(.2,.7,.3,1) forwards`;
      layer.appendChild(span);
    });

    setTimeout(() => {
      layer.innerHTML = "";
      eggActive = false;
    }, 2400);
  }

  function setupEasterEgg() {
    document.getElementById("pow-trigger").addEventListener("click", fireEgg);

    let buffer = "";
    window.addEventListener("keydown", (event) => {
      const target = event.target;
      if (target && /input|textarea/i.test(target.tagName || "")) return;
      if (!event.key || event.key.length !== 1) return;
      buffer = (buffer + event.key.toLowerCase()).slice(-6);
      if (buffer.endsWith("pow") || buffer.endsWith("slams")) fireEgg();
    });
  }

  function setupToTop() {
    const btn = document.getElementById("to-top");
    const threshold = 600;
    let visible = false;

    const sync = () => {
      const shouldShow = window.scrollY > threshold;
      if (shouldShow !== visible) {
        visible = shouldShow;
        btn.classList.toggle("is-visible", shouldShow);
      }
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
  }

  function setupLangSwitch() {
    document.getElementById("lang-sv").addEventListener("click", () => {
      lang = "sv";
      applyTranslations();
    });
    document.getElementById("lang-en").addEventListener("click", () => {
      lang = "en";
      applyTranslations();
    });
  }

  function setupGenerator() {
    document.getElementById("roll-btn").addEventListener("click", rollSuggestion);
  }

  function setupForm() {
    document.getElementById("hire-form").addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const t = COPY[lang].form;
      const subjectPrefix = lang === "sv" ? "Förfrågan till Slams — " : "Booking request for Slams — ";
      const body = [
        `${t.name}: ${data.get("name") || ""}`,
        `${t.email}: ${data.get("email") || ""}`,
        `${t.occasion}: ${data.get("occasion") || ""}`,
        "",
        data.get("message") || ""
      ].join("\n");
      const subject = subjectPrefix + (data.get("name") || "");
      window.location.href = `mailto:slamsimpro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    setupLangSwitch();
    setupToTop();
    setupGenerator();
    setupForm();
    setupEasterEgg();
  });
})();
