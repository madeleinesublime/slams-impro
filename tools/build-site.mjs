// Genererar showlistorna och event-schemat ur shows.js.
//
// Kör:  node tools/build-site.mjs
//
// Skriptet rör bara det som ligger mellan markörerna i HTML-filerna:
//
//   <!-- shows:start --> ... <!-- shows:end -->      showlistan
//   <!-- events:start --> ... <!-- events:end -->    JSON-LD med alla event
//
// Allt annat i filerna lämnas orört. Inga beroenden — bara Node.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "https://slamsimpro.se";

// shows.js är skriven för webbläsaren och sätter window/globalThis. Kör den i
// en tom scope och plocka ut resultatet, så finns datan bara på ett ställe.
function loadShows() {
  const src = readFileSync(join(ROOT, "shows.js"), "utf8");
  const scope = {};
  new Function("globalThis", "window", src)(scope, undefined);
  return scope.SLAMS_SHOWS;
}

const data = loadShows();
const { SHOWS, DESCRIPTIONS, LENGTH_MIN } = data;

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const MONTHS_SV = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const WEEKDAYS_SV = ["sön", "mån", "tis", "ons", "tors", "fre", "lör"];

// Läs datumdelarna direkt ur strängen så att den renderade dagen aldrig beror
// på tidszonen där bygget körs.
function svDate(show) {
  const [, month, day] = show.date.split("-").map(Number);
  return `${day} ${MONTHS_SV[month - 1]}`;
}

function svWeekday(show) {
  return WEEKDAYS_SV[new Date(show.date + "T12:00:00Z").getUTCDay()];
}

function svMeta(show) {
  const venue = data.venueOf(show);
  const price = show.price ? ` · ${show.price} kr` : "";
  return `${svWeekday(show)} ${show.time} · ${venue.label.sv}${price}`;
}

// ---------------------------------------------------------------- showlistan

const TICKET_LABEL_SV = {
  own: "Biljett",
  presens: "Biljett hos Presens Impro",
  improvisationsteatern: "Biljett hos Improvisationsteatern"
};

const TICKET_I18N_KEY = {
  own: "shows.buy",
  presens: "shows.buyPresens",
  improvisationsteatern: "shows.buyGuest"
};

function ticketMarkup(show) {
  const t = show.tickets;
  if (t.status === "soon") {
    return `        <span class="show-soon" data-i18n="shows.soon">Biljetter släpps senare</span>`;
  }

  const newTab = `<span class="visually-hidden"> (öppnas i ny flik)</span>`;
  if (t.host === "own") {
    return `        <a class="btn btn-ghost" href="${esc(t.url)}" target="_blank" rel="noopener" data-i18n="shows.buy">Biljett</a>`;
  }
  return `        <a class="show-link" href="${esc(t.url)}" target="_blank" rel="noopener" data-i18n-html="${TICKET_I18N_KEY[t.host]}">${TICKET_LABEL_SV[t.host]}${newTab}</a>`;
}

// Gästspel får en etikett i stället för gästfoto; egna shower tvärtom.
function nameRow(show) {
  const name = `<span class="show-name">${esc(show.sv)}</span>`;

  if (!data.isFiction(show)) {
    return [
      `          <span class="show-name-row">`,
      `            ${name}`,
      `            <span class="show-tag" data-i18n="shows.guestTag">Gästspel</span>`,
      `          </span>`
    ].join("\n");
  }

  if (!show.guestPhoto) return `          ${name}`;

  return [
    `          <span class="show-name-row">`,
    `            ${name}`,
    `            <img class="guest-photo" src="{BASE}assets/guests/${esc(show.guestPhoto)}" alt="" width="480" height="480" loading="lazy">`,
    `          </span>`
  ].join("\n");
}

function showItem(show) {
  const classes = ["show-item"];
  if (!data.isFiction(show)) classes.push("show-item--guest");

  return [
    `      <li class="${classes.join(" ")}" data-show-date="${show.date}">`,
    `        <time class="show-date" datetime="${show.date}T${show.time}">${svDate(show)}</time>`,
    `        <div class="show-info">`,
    nameRow(show),
    `          <span class="show-meta">${esc(svMeta(show))}</span>`,
    `        </div>`,
    ticketMarkup(show),
    `      </li>`
  ].join("\n");
}

// filter: "fiction" ger bara Slams Fiction-kvällarna, annars alla shower.
// base: sökvägsprefix för sidor som inte ligger i roten.
function showList(filter, base) {
  const list = filter === "fiction" ? SHOWS.filter(data.isFiction) : SHOWS;
  return list.map(showItem).join("\n").replaceAll("{BASE}", base);
}

// ------------------------------------------------------------ strukturerad data

const FICTION_ID = `${SITE}/slams-fiction/#series`;

function placeOf(show) {
  const venue = data.venueOf(show);
  const place = { "@type": "Place", name: venue.name };
  if (venue.alternateName) place.alternateName = venue.alternateName;
  place.address = { "@type": "PostalAddress", ...venue.address };
  return place;
}

// Passerade shower behåller sitt event — det är riktig historik — men tappar
// sitt erbjudande. Att ligga kvar som InStock på en show som varit är det som
// gjorde den gamla, handskrivna JSON-LD:n fel.
function offersOf(show, isPast) {
  if (isPast) return null;
  const t = show.tickets;
  const offer = {
    "@type": "Offer",
    price: String(show.price),
    priceCurrency: "SEK",
    url: t.url,
    availability: t.status === "soon" ? "https://schema.org/PreOrder" : "https://schema.org/InStock"
  };
  if (t.validFrom) offer.validFrom = t.validFrom;
  if (t.status !== "soon") offer.category = "primary";
  return offer;
}

function eventOf(show, now) {
  const venue = data.venueOf(show);
  const isPast = data.startTime(show) < now;

  const event = {
    "@type": "TheaterEvent",
    name: show.sv
  };
  if (data.isFiction(show)) event.superEvent = { "@id": FICTION_ID };

  Object.assign(event, {
    startDate: data.startISO(show),
    endDate: data.endISO(show),
    doorTime: data.doorISO(show),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: "sv",
    url: data.isFiction(show) ? `${SITE}/slams-fiction/` : `${SITE}/#shows`,
    image: `${SITE}/assets/hero-ensemble.jpg`,
    description: DESCRIPTIONS[show.desc].sv,
    location: placeOf(show),
    performer: { "@id": `${SITE}/#slams` },
    organizer: { "@type": "Organization", ...venue.organizer }
  });

  const offers = offersOf(show, isPast);
  if (offers) event.offers = offers;
  return event;
}

function seriesNode() {
  const venue = data.VENUES.kransen;
  return {
    "@type": "EventSeries",
    "@id": FICTION_ID,
    name: "Slams Fiction",
    url: `${SITE}/slams-fiction/`,
    description:
      "Slams Fiction är Slams egen återkommande show i Presens improkällare i Midsommarkransen i Stockholm. Ingenting är skrivet i förväg — hela kvällen byggs på publikens förslag och spelas bara en gång. Varje föreställning har en inbjuden gäst. Start 20:00, cirka två timmar inklusive paus, biljett 150 kr.",
    inLanguage: "sv",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: venue.name,
      alternateName: venue.alternateName,
      address: { "@type": "PostalAddress", ...venue.address }
    },
    performer: { "@id": `${SITE}/#slams` },
    organizer: { "@type": "Organization", ...venue.organizer },
    offers: {
      "@type": "Offer",
      price: "150",
      priceCurrency: "SEK",
      url: "https://presensimpro.se/forestallningar/?#kransenshower"
    }
  };
}

function eventsJsonLd(filter, now) {
  const list = filter === "fiction" ? SHOWS.filter(data.isFiction) : SHOWS;
  const graph = [seriesNode(), ...list.map((s) => eventOf(s, now))];
  const json = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
  return `<script type="application/ld+json" id="events-schema">\n${json}\n</script>`;
}

// ------------------------------------------------------------------- skrivning

function replaceBlock(source, marker, body, file) {
  const start = `<!-- ${marker}:start -->`;
  const end = `<!-- ${marker}:end -->`;
  const pattern = new RegExp(`${start}[\\s\\S]*?${end}`);
  if (!pattern.test(source)) {
    throw new Error(`Hittade inte markören ${start} … ${end} i ${file}`);
  }
  return source.replace(pattern, `${start}\n${body}\n${end}`);
}

const now = Date.now();

const PAGES = [
  { file: "index.html", filter: null, base: "" },
  { file: "slams-fiction/index.html", filter: "fiction", base: "../" }
];

for (const page of PAGES) {
  const path = join(ROOT, page.file);
  let html = readFileSync(path, "utf8");
  html = replaceBlock(html, "shows", showList(page.filter, page.base), page.file);
  html = replaceBlock(html, "events", eventsJsonLd(page.filter, now), page.file);
  writeFileSync(path, html);
  console.log(`skrev ${page.file}`);
}

// Sitemapen får dagens datum som lastmod — den ändras i praktiken varje gång
// showlistan gör det.
const today = new Date().toISOString().slice(0, 10);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...[
    { loc: `${SITE}/`, priority: "1.0" },
    { loc: `${SITE}/slams-fiction/`, priority: "0.8" }
  ].flatMap((u) => [
    "  <url>",
    `    <loc>${u.loc}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    "    <changefreq>monthly</changefreq>",
    `    <priority>${u.priority}</priority>`,
    "  </url>"
  ]),
  "</urlset>",
  ""
].join("\n");

writeFileSync(join(ROOT, "sitemap.xml"), sitemap);
console.log("skrev sitemap.xml");
