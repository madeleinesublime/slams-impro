// Slams — enda källan för showdata.
//
// Varje show beskrivs här och ingen annanstans. Listan på startsidan, listan
// på Slams Fiction-sidan och varje TheaterEvent i strukturerad data byggs av
// den här filen — dels av tools/build-site.mjs, så att crawlers utan
// JavaScript får samma sak, dels av script.js vid körning, så att språkval
// och passerade shower blir rätt även om ingen kört bygget.
//
// Kör `node tools/build-site.mjs` när du har ändrat något här.
(() => {
  "use strict";

  const DOORS_BEFORE_MIN = 30;
  const LENGTH_MIN = 120;

  const VENUES = {
    kransen: {
      name: "Presens improkällare",
      alternateName: "Presens improkällare i Midsommarkransen",
      label: { sv: "Midsommarkransen", en: "Midsommarkransen" },
      address: {
        streetAddress: "Tegelbruksvägen 28",
        postalCode: "126 34",
        addressLocality: "Hägersten",
        addressCountry: "SE"
      },
      organizer: { name: "Presens Impro", url: "https://presensimpro.se/" }
    },
    salongen: {
      name: "Salongen, Södermalm",
      label: { sv: "Södermalm", en: "Södermalm" },
      address: { addressLocality: "Stockholm", addressCountry: "SE" },
      organizer: { name: "Stockholms Improvisationsteater", url: "https://improvisationsteater.se/" }
    }
  };

  // Vilken beskrivning en show får i strukturerad data. Väljs med `desc`.
  const DESCRIPTIONS = {
    fiction: {
      sv: "Slams Fiction — en tv-kväll, fast på scen, med Slams och en inbjuden gäst i Presens improkällare i Midsommarkransen. Såpa, bloopers, film och snabbspolning genom hela genrer, allt påhittat på plats och sänt bara den kvällen. Cirka två timmar inklusive paus.",
      en: "Slams Fiction — a TV night, but on stage, with Slams and an invited guest in the Presens improv basement in Midsommarkransen, Stockholm. Soap opera, bloopers, film and fast-forwarding through entire genres, all made up on the spot and aired only that night. About two hours including an interval."
    },
    klubbkransen: {
      sv: "Slams gästspelar på Klubb Kransen i Presens improkällare i Midsommarkransen. Detta är inte en Slams Fiction-föreställning utan ett gästspel.",
      en: "Slams guest on Klubb Kransen in the Presens improv basement in Midsommarkransen, Stockholm. This is a guest appearance, not a Slams Fiction show."
    },
    salongen: {
      sv: "Slams gästspelar i Salongen på Södermalm i Stockholm. Detta är inte en Slams Fiction-föreställning utan ett gästspel hos Stockholms Improvisationsteater.",
      en: "Slams guest in Salongen on Södermalm in Stockholm. This is a guest appearance with Stockholms Improvisationsteater, not a Slams Fiction show."
    }
  };

  // series: "fiction" = del av EventSeries Slams Fiction, annars gästspel.
  // tickets.host: "own" = vår egen biljettknapp, annars vem som säljer.
  // tickets.status: "onsale" | "soon" (biljetter ej släppta än).
  const SHOWS = [
    {
      date: "2026-08-29", time: "20:00", venue: "kransen", price: 120,
      series: null, desc: "klubbkransen",
      sv: "Klubb Kransen", en: "Klubb Kransen",
      tickets: {
        status: "onsale", host: "presens", validFrom: "2026-08-13",
        url: "https://presensimpro.culmas.io/show/W77OlIMh9rlFUS9PAHh3?from=component-api"
      }
    },
    {
      date: "2026-09-19", time: "20:00", venue: "kransen", price: 150,
      series: "fiction", desc: "fiction", guestPhoto: "sista-kvarten.jpg",
      sv: "Slams Fiction med Sista kvarten", en: "Slams Fiction with Sista kvarten",
      tickets: {
        status: "onsale", host: "own", validFrom: "2026-08-08",
        url: "https://presensimpro.culmas.io/show/uQ2tW2vODfqXUoJtY4xK?from=component-api"
      }
    },
    {
      date: "2026-10-09", time: "20:00", venue: "kransen", price: 150,
      series: null, desc: "klubbkransen",
      sv: "Klubb Kransen", en: "Klubb Kransen",
      tickets: {
        status: "onsale", host: "presens", validFrom: "2026-08-13",
        url: "https://presensimpro.culmas.io/show/lABPUiGDMRERrDl90GRx?from=component-api"
      }
    },
    {
      date: "2026-10-17", time: "20:00", venue: "kransen", price: 150,
      series: "fiction", desc: "fiction", guestPhoto: "grannskapet.jpg",
      sv: "Slams Fiction med Grannskapet", en: "Slams Fiction with Grannskapet",
      tickets: {
        status: "onsale", host: "own", validFrom: "2026-08-08",
        url: "https://presensimpro.culmas.io/show/zUeD4YuByn4zZOW4qAVI/?from=component-api"
      }
    },
    {
      date: "2026-11-07", time: "20:00", venue: "kransen", price: 150,
      series: "fiction", desc: "fiction",
      sv: "Slams Fiction (med gäst)", en: "Slams Fiction (with a guest)",
      tickets: {
        status: "onsale", host: "own", validFrom: "2026-08-08",
        url: "https://presensimpro.culmas.io/show/GNqfvDOK5xXIyrjXRh2C?from=component-api"
      }
    },
    {
      date: "2026-11-20", time: "20:00", venue: "kransen", price: 150,
      series: null, desc: "klubbkransen",
      sv: "Klubb Kransen", en: "Klubb Kransen",
      tickets: {
        status: "onsale", host: "presens", validFrom: "2026-08-08",
        url: "https://presensimpro.culmas.io/show/JRWmR4Ld0JbqAVb38WCA?from=component-api"
      }
    },
    {
      date: "2026-12-04", time: "20:00", venue: "kransen", price: 150,
      series: "fiction", desc: "fiction", guestPhoto: "knut.jpg",
      sv: "Slams Fiction med Knut", en: "Slams Fiction with Knut",
      tickets: {
        status: "soon", host: "own",
        url: "https://presensimpro.se/forestallningar/?#kransenshower"
      }
    },
    {
      date: "2026-12-12", time: "20:00", venue: "kransen", price: 150,
      series: "fiction", desc: "fiction",
      sv: "Slams Fiction med Dramatiska", en: "Slams Fiction with Dramatiska",
      tickets: {
        status: "soon", host: "own",
        url: "https://presensimpro.se/forestallningar/?#kransenshower"
      }
    },
    {
      date: "2026-12-19", time: "19:00", venue: "salongen", price: 150,
      series: null, desc: "salongen",
      sv: "Salongen", en: "Salongen",
      tickets: {
        status: "onsale", host: "improvisationsteatern",
        url: "https://improvisationsteater.se/utbud/salongen-varen-2026-pa-sondagar-kl-18/"
      }
    }
  ];

  // Europe/Stockholm är UTC+2 från sista söndagen i mars till sista söndagen i
  // oktober, och UTC+1 resten av året. Utan detta gick nedräkningen en timme
  // fel för varje show i vinterhalvan av säsongen.
  function stockholmOffset(dateStr) {
    const [year, month, day] = dateStr.split("-").map(Number);
    if (month > 3 && month < 10) return "+02:00";
    if (month < 3 || month > 10) return "+01:00";

    const lastOfMonth = new Date(Date.UTC(year, month, 0));
    const lastSunday = lastOfMonth.getUTCDate() - lastOfMonth.getUTCDay();
    if (month === 3) return day >= lastSunday ? "+02:00" : "+01:00";
    return day < lastSunday ? "+02:00" : "+01:00";
  }

  function shiftClock(time, minutes) {
    const [h, m] = time.split(":").map(Number);
    const total = h * 60 + m + minutes;
    const hh = String(Math.floor(total / 60) % 24).padStart(2, "0");
    const mm = String(total % 60).padStart(2, "0");
    return hh + ":" + mm;
  }

  // ISO-tid med Stockholmsoffset, så att bygget och webbläsaren räknar på
  // samma absoluta tidpunkt oavsett var de körs.
  function stamp(show, minutesFromStart) {
    const time = minutesFromStart ? shiftClock(show.time, minutesFromStart) : show.time;
    return show.date + "T" + time + ":00" + stockholmOffset(show.date);
  }

  const api = {
    SHOWS,
    VENUES,
    DESCRIPTIONS,
    DOORS_BEFORE_MIN,
    LENGTH_MIN,
    stockholmOffset,
    startISO: (show) => stamp(show, 0),
    endISO: (show) => stamp(show, LENGTH_MIN),
    doorISO: (show) => stamp(show, -DOORS_BEFORE_MIN),
    startTime: (show) => new Date(stamp(show, 0)).getTime(),
    venueOf: (show) => VENUES[show.venue],
    isFiction: (show) => show.series === "fiction"
  };

  // Samma fil laddas som <script> i webbläsaren och läses av byggskriptet.
  if (typeof window !== "undefined") window.SLAMS_SHOWS = api;
  else if (typeof globalThis !== "undefined") globalThis.SLAMS_SHOWS = api;
})();
