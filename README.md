# slamsimpro.se

Statisk sajt, ingen ramverksbyggkedja. Öppna `index.html` i en webbläsare så
funkar den — med ett undantag: showdatan genereras.

## Lägga till eller ändra en show

1. Redigera **`shows.js`**. Det är den enda platsen showdata finns.
2. Kör:

   ```
   node tools/build-site.mjs
   ```

3. Committa både `shows.js` och de genererade filerna.

Byggskriptet skriver om det som ligger mellan markörerna

```
<!-- shows:start -->  …  <!-- shows:end -->     showlistan
<!-- events:start --> …  <!-- events:end -->    JSON-LD med alla event
```

i `index.html` och `slams-fiction/index.html`, och regenererar `sitemap.xml`.
Rör inget annat i filerna — resten är handskrivet och lämnas orört.

**Varför ett byggsteg?** Showdatan behöver finnas i HTML:en även för besökare
och crawlers utan JavaScript. Innan detta stod varje show på tre ställen
(listan, en array i `script.js` och JSON-LD:n), vilket gled isär: passerade
shower låg kvar i strukturerad data som köpbara.

Vid körning läser `script.js` samma `shows.js` och uppdaterar listan efter
språkval, markerar passerade shower och tar bort deras erbjudande ur
JSON-LD:n — så datan blir rätt även om någon glömmer köra bygget.

## Sidor

| Fil | URL |
| --- | --- |
| `index.html` | `/` |
| `slams-fiction/index.html` | `/slams-fiction/` |
| `intro.html` | showintrot (nås via BOM!-märket) |
| `404.html` | felsida |

Texten på båda sidorna finns på svenska och engelska i `COPY` i `script.js`.
HTML:en innehåller den svenska versionen; `data-i18n`-attributen byter ut den
vid språkval. Nya sidor sätter `data-page` på `<body>` och lägger sin titel och
metabeskrivning under `pages` i `COPY`.
