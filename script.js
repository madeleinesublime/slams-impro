(() => {
  "use strict";

  const COPY = {
    sv: {
      // Nyckeln väljs med data-page på <body>. home är fallback.
      pages: {
        home: {
          title: "Slams — improviserad komedi från Midsommarkransen",
          description: "Slams är sju improvisatörer som spelar improviserad komedi i Midsommarkransen i Stockholm. Inget är skrivet i förväg. Biljett 150 kr — se kommande shower eller anlita oss."
        },
        fiction: {
          title: "Slams Fiction — improviserad komedi i Midsommarkransen",
          description: "Slams Fiction är Slams egen show i Presens improkällare i Midsommarkransen — en tv-kväll, fast på scen, med såpa, bloopers, film och snabbspolning genom hela genrer. Inget manus, en ny gäst varje kväll, och en sändning som aldrig går i repris. Biljett 150 kr, start 20:00."
        }
      },
      nav: { shows: "Shower", ensemble: "Ensemblen", impro: "Vad är impro?", faq: "Frågor & svar", hire: "Anlita oss", tickets: "Biljetter<span class='visually-hidden'> (öppnas i ny flik)</span>", toTop: "Till toppen" },
      hero: {
        countdown: "Nästa show om",
        cta: "Köp biljett",
        title: "Ingen vet vad som kommer hända. Inte vi heller.",
        lead: "<p>Vi bygger improviserad komedi från scratch, varje kväll, i en källare i Midsommarkransen – en av Stockholms mest oförutsägbara scener. Inget manus, ingen plan, bara publikens förslag som bränsle. Scener, karaktärer och världar som aldrig har funnits förut och aldrig kommer tillbaka.</p><p>Allt kan hända. Målet är bara att ni ska skratta hela vägen hem.</p>",
        bannerAlt: "Slams sju improvisatörer står tätt ihop utomhus framför grönska"
      },
      shows: {
        title: "Höstens shower",
        buy: "Biljett",
        currency: "kr",
        soon: "Biljetter släpps senare",
        guestTag: "Gästspel",
        closePhoto: "Stäng bild",
        buyGuest: "Biljett hos Improvisationsteatern<span class='visually-hidden'> (öppnas i ny flik)</span>",
        buyPresens: "Biljett hos Presens Impro<span class='visually-hidden'> (öppnas i ny flik)</span>"
      },
      fiction: {
        kicker: "Vår återkommande show",
        title: "Slams Fiction",
        p1: "Slams Fiction är vår egen show i Presens improkällare i Midsommarkransen. Ingenting är skrivet i förväg — vi bygger hela kvällen på förslag från er i publiken, och spelar den bara en gång.",
        p2: "Varje kväll har vi med en gäst som får ställa till det för oss — en ny röst på scenen som tvingar oss att tänka om.",
        lTime: "Tid", lPrice: "Pris", vPrice: "150 kr", lPlace: "Plats",
        lLength: "Längd", vLength: "Ca 2 timmar", lGuest: "Gäst", vGuest: "Varje kväll",
        cta: "Köp biljett"
      },
      quote: {
        heading: "Vad publiken säger",
        text: "<p>Slams är det roligaste jag vet, för trots att de som spelar är vuxna tycker även barn att det är kul! Jag älskar hur ni kan ta ett enda ord och göra en hel fantastisk show – och hur ni kan dra ut ett skämt så att det dyker upp igen flera scener senare. Det är så sjukt roligt!</p>",
        age: "14 år"
      },
      // Sidan /slams-fiction/.
      fic: {
        crumbHome: "Slams",
        crumbHere: "Slams Fiction",
        title: "Slams Fiction — improviserad komedi i Midsommarkransen",
        heading: "Slams Fiction",
        lead: "<p>Tänk dig en helt vanlig tv-kväll i soffan — fast ingen har sett avsnittet förut, för det finns inte. Vi zappar mellan såpa, bloopers, film och snabbspolning genom hela genrer, och håller ihop det till en kväll som är roligare än din egen tv-soffa.</p><p>Allt är påhittat på plats, inget är repeterat, och vi kör aldrig samma sändning två gånger. Biljett 150 kronor. Start 20:00, dörrarna öppnar 19:30, och vi håller på i ungefär två timmar med paus.</p>",
        ctaDates: "Se kommande datum",
        countdown: "Nästa Slams Fiction om",

        h1: "Vad är Slams Fiction?",
        b1a: "Slams Fiction är improviserad komedi — impro comedy — men byggd som en tv-kväll. Ingenting är bestämt innan vi går upp på scenen: inget manus, inga repetitioner, ingen regissör som klippt ihop sändningen i förväg. Det enda vi tar med oss upp är varandra och det ni i publiken ropar ut.",
        b1b: "Namnet kommer av att allt ni ser är påhittat i samma stund som det sänds. Vi ber om ett förslag — ett ord, en plats, ett minne, en känsla — och bygger sedan hela kvällen på det. Karaktärer dyker upp, relationer uppstår, en handling formar sig, och allt det där hade inte funnits om just ni inte hade suttit där just den kvällen.",
        b1c: "Vi är sju improvisatörer: Madeleine, Bastian, Sara, Kim, Johanna, Louise och Ville. Vi spelar inte alla varje gång, och vi vet aldrig i förväg vem som hamnar var. Kvällen hoppar mellan tv-genrer som om vi bläddrade i tablåerna — en såpa som spårar ur, bloopers från en tagning som aldrig hände, en trailer för en film som inte finns, snabbspolning där vi hoppar över hela relationer på tre sekunder. Genren är bara vilken kanal vi råkar landa på — köttet, det som faktiskt händer i scenen, är nytt varje gång.",
        b1d: "Slams är en del av Presens Impro, och Slams Fiction spelas i deras improkällare i Midsommarkransen. Det är en liten lokal, vilket är hela poängen: ni sitter nära, ni hörs, och avståndet mellan scen och publik är ungefär tre meter.",

        h2: "Så går en kväll till",
        b2a: "Dörrarna öppnar 19:30. Kom gärna i tid — det finns gott att dricka och något litet att snacka på, men ät middag innan. Impro är bäst på full mage.",
        b2b: "Platserna är onumrerade, så det är först till kvarn. Vårt tips: var osvensk och sätt dig långt fram. Det är de bästa platserna, och nej, du hamnar inte på scen för det. Publiken är aldrig med i showen.",
        b2c: "20:00 zappar vi igång. Någon av oss frågar publiken om ett förslag, någon ropar något, och sen är sändningen igång. Första halvan är ungefär fyrtiofem minuter — kanske en såpa som spårar ur, kanske bloopers från en tagning som aldrig filmades. Sen paus, där ni hinner fylla på glaset och rösta internt om vilken genre som var bäst. Efter pausen kör vi ett nytt program, ofta med en helt annan känsla och minst en snabbspolning genom några genrer vi inte hann med. Runt 22:00 är sändningen slut för i kväll.",
        b2d: "Vad som händer däremellan kan vi inte lova. Vi har spelat hela kvällar i en tvättstuga klockan tre på natten, i en saloon i Norrland och på en rymdfärja med dålig wifi. Ibland går något fel på scenen — någon säger emot sig själv, en rekvisita som inte finns tappas bort, två av oss har byggt varsin version av samma rum. Då blir det oftast som roligast, och nej: det går aldrig i repris.",

        h3: "Gästen som ställer till det",
        b3a: "Varje Slams Fiction har en inbjuden gäst. Det kan vara en annan improgrupp, en enskild improvisatör eller någon som gör något helt annat än vi. Gästen spelar med oss — inte som förband, utan på scen tillsammans med ensemblen.",
        b3b: "Anledningen är enkel: en grupp som spelat ihop länge blir bra på varandra. Vi vet var Sara brukar ta en scen och vad Ville gör när det blir tyst. En gäst känner inte till något av det, och tvingar oss att lyssna på riktigt istället för att luta oss mot vanan. Det märks från publikplats, och det är därför vi gör det varje gång istället för ibland.",
        b3c: "Vill ni gästspela hos oss? Mejla <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a> och berätta vilka ni är och vad ni helst gör på scen.",

        h4: "Behöver jag kunna något om impro?",
        b4a: "Nej. Du behöver inte ha sett impro förut, du behöver inte kunna vad ett format är, och framför allt behöver du inte upp på scenen. Det är den vanligaste frågan vi får, och svaret är alltid detsamma: publiken är aldrig med i showen. Du sitter kvar på din plats hela kvällen.",
        b4b: "Det enda vi ber om är förslag, och även det är frivilligt. Ropar du inget ropar någon annan. Vill du ändå ha något att komma med finns <a href='../#impro'>scengeneratorn på startsidan</a> — slumpa fram en plats och en relation och ta med dig förslaget till showen.",
        b4c: "Det finns ingen åldersgräns, men humorn är vuxen. Eftersom ingenting är bestämt i förväg vet inte ens vi vart en scen tar vägen. Showerna spelas på svenska.",

        h5: "Kommande Slams Fiction",
        b5: "Alla datum nedan spelas i Presens improkällare i Midsommarkransen. Passerade shower står kvar överstrukna — de kommer inte igen.",

        h6: "Hitta hit",
        b6a: "Presens improkällare ligger på Tegelbruksvägen 28, 126 34 Hägersten — ett par minuters promenad från Midsommarkransens tunnelbanestation på röda linjen. Det är södra Stockholm, ungefär tio minuter från T-Centralen.",
        b6b: "Lokalen är en källare, precis som namnet säger. Det finns toalett. Hittar du inte in är du inte först — leta efter Presens-skylten.",

        h7: "Kort om showen",
        lDoors: "Dörrar",
        lLang: "Språk",
        vLang: "Svenska",
        more: "Fler frågor? Det mesta besvaras under <a href='../#faq'>Frågor och svar</a> på startsidan, och resten svarar vi gärna på via <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a>.",
        readMore: "Läs mer om Slams Fiction"
      },
      ens: { title: "Sju personer, oändligt många karaktärer", lead: "Vi kan inte lova vilka vi är på scenen. Men det här är vad som brukar hända." },
      impro: {
        title: "Vad är impro comedy?",
        p1: "Ingenting är bestämt i förväg. Vi frågar publiken om inspiration — det kan vara ett ord, en plats, ett minne eller något helt annat — och sen spelar vi upp det direkt, utan skyddsnät.",
        p2: "Vad vi gör är olika varje föreställning. Det vi vet är att vi hittar det roliga och förstärker det. Och när något går fel på scenen — då blir det oftast som roligast.",
        formatsLabel: "Format vi bland annat har spelat"
      },
      gen: { kicker: "Prova själv", title: "Slumpa fram en scen", l1: "Plats", l2: "Relation", l3: "Och plötsligt", btn: "Slumpa fram ett nytt förslag", note: "Just den här scenen har vi aldrig spelat. Ta med förslaget till showen." },
      faq: {
        title: "Frågor och svar",
        lead: "Det ni brukar undra innan ni kommer. Och nej — du behöver inte upp på scenen.",
        q1: "Vad är Slams?",
        a1: "Slams är en improgrupp med sju improvisatörer som spelar improviserad komedi i Midsommarkransen i Stockholm. Vi är en del av <a href='https://presensimpro.se/' target='_blank' rel='noopener'>Presens Impro</a>. Ingenting i showen är skrivet i förväg — allt byggs på förslag från publiken.",
        q2: "Vad är improviserad komedi?",
        a2: "Improviserad komedi, eller impro, är komedi som skapas i samma stund som den spelas. Det finns inget manus och ingen repetition. Vi ber publiken om ett ord, en plats eller ett minne och spelar upp scenerna direkt utifrån det.",
        q3: "Är det samma show varje gång?",
        a3: "Nej, aldrig. Varje föreställning är helt ny och spelas bara en enda gång — vi gör inga repriser. Du kan se Slams hur många gånger som helst och aldrig se samma scen två gånger. Vi använder etablerade improformat som Harold, La Ronde och Armando, men innehållet är nytt varje kväll.",
        q4: "Måste jag vara med på scenen?",
        a4: "Nej. Publiken är aldrig med i showen — du sitter tryggt kvar på din plats hela kvällen. Vi ber om förslag från publiken, men det är helt frivilligt att ropa ut något. Det är er improgaranti: vi spelar utifrån era förslag, inte något vi förberett i förväg. Vill du själv stå på scen finns det improkurser hos <a href='https://presensimpro.se/' target='_blank' rel='noopener'>Presens Impro</a>.",
        q5: "Vilket språk spelas showerna på?",
        a5: "Slams spelar på svenska. Ibland gör vi gästspel på engelska, och då står det tydligt i informationen om just den showen.",
        q6: "Finns det någon åldersgräns?",
        a6: "Det finns ingen åldersgräns, men humorn är vuxen. Eftersom ingenting är bestämt i förväg vet inte ens vi vart en scen tar vägen, så innehållet kan bli oväntat. Våra shower ses alltid på egen risk.",
        q7: "Var ligger lokalen?",
        a7: "Vi spelar i Presens improkällare på Tegelbruksvägen 28, 126 34 Hägersten — ett stenkast från Midsommarkransens tunnelbanestation i södra Stockholm. Det finns toalett i lokalen.",
        q8: "När börjar Slams Fiction?",
        a8: "Slams Fiction börjar klockan 20:00 och dörrarna öppnar 19:30. Gästspel kan ha andra starttider — det står i informationen om just den showen. Kommande datum hittar du under <a href='#shows'>Kommande shower</a> här på sidan.",
        q9: "Hur lång är föreställningen?",
        a9: "Ungefär två timmar inklusive paus. Showen börjar 20:00.",
        q10: "Vad kostar en biljett och var köper jag den?",
        a10: "En biljett kostar 150 kronor och säljs i förköp via <a href='https://presensimpro.se/' target='_blank' rel='noopener'>Presens Impro</a>.",
        q11: "Kan jag köpa biljett i dörren?",
        a11: "Ja, det går bra att köpa biljett i dörren så länge showen inte är slutsåld. Dörrarna öppnar 19:30. Vill du vara säker på en plats är förköp tryggast.",
        q12: "Finns det mat och dryck i lokalen?",
        a12: "Det finns gott att dricka och något litet att snacka på, men kom inte hungrig — impro är bäst på full mage. Ät innan och ta ett glas hos oss.",
        q13: "Är platserna numrerade — var ska jag sitta?",
        a13: "Platserna är onumrerade, så det är först till kvarn. Vårt tips: var osvensk och sätt dig långt fram. Det är de bästa platserna, och nej — du hamnar inte på scen. Publiken är aldrig med i showen.",
        q14: "Spelar ni på andra scener och festivaler?",
        a14: "Det gör vi gärna! Kommande gästspel dyker upp här under <a href='#shows'>Kommande shower</a>. Har du en scen eller festival där du vill att Slams ska vara med? Mejla oss på <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a> — vi berättar mer.",
        q15: "Hur kommer jag igång med impro själv?",
        a15: "Vill du prova impro själv går du en kurs hos <a href='https://presensimpro.se/' target='_blank' rel='noopener'>Presens Impro</a>, som Slams är en del av. Slams shower är till för att upplevas från publikplats — vi tar aldrig upp någon ur publiken på scenen.",
        q16: "Jag vill gästspela på er show — hur gör jag?",
        a16: "Vad kul! Mejla oss på <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a> och berätta om er grupp — vilka ni är, vad ni spelar för slags impro och vad ni helst gör på scen.",
        note: "Hittar du inte svaret? Mejla <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a> — vi svarar gärna."
      },
      hire: {
        title: "Anlita oss",
        p1: "Vill du anlita oss? Hör av dig med datum och sammanhang.",
        mailLabel: "Eller mejla oss direkt:",
        photoAlt: "Slams sju improvisatörer samlade runt en björkstam"
      },
      form: { name: "Namn", email: "Mejl", occasion: "Vad är det för tillfälle?", message: "Berätta mer", send: "Skicka förfrågan", note: "Öppnar din mejlklient med allt ifyllt till slamsimpro@gmail.com." },
      footer: {
        presens: "Slams är en del av Presens Impro.",
        credit: "Gillar du vår hemsida? Hör av dig till <span class='credit-mail'>madeleine.kalin [at] gmail.com</span> om du behöver hjälp att bygga din egen."
      }
    },
    en: {
      pages: {
        home: {
          title: "Slams — improv comedy from Midsommarkransen",
          description: "Slams are seven improvisers performing improvised comedy in Midsommarkransen, Stockholm. Nothing is written in advance. Tickets 150 SEK — see upcoming shows or hire us."
        },
        fiction: {
          title: "Slams Fiction — improv comedy in Midsommarkransen",
          description: "Slams Fiction is Slams' own show in the Presens improv basement in Midsommarkransen — a TV night, but on stage, with soap opera, bloopers, film and fast-forwarding through entire genres. No script, a new guest every night, and a broadcast that never reruns. Tickets 150 SEK, 8 PM."
        }
      },
      nav: { shows: "Shows", ensemble: "The ensemble", impro: "What is impro?", faq: "Q&A", hire: "Hire us", tickets: "Tickets<span class='visually-hidden'> (opens in a new tab)</span>", toTop: "Back to top" },
      hero: {
        countdown: "Next show in",
        cta: "Get tickets",
        title: "No one knows what's about to happen. Neither do we.",
        lead: "<p>We build improv comedy from scratch, every night, in a basement in Midsommarkransen – one of Stockholm's most unpredictable stages. No script, no plan, just the audience's suggestions as fuel. Scenes, characters and worlds that have never existed before and will never come back.</p><p>Anything can happen. Our only goal is for you to laugh all the way home.</p>",
        bannerAlt: "The seven Slams improvisers standing close together outdoors in front of greenery"
      },
      shows: {
        title: "This autumn's shows",
        buy: "Tickets",
        currency: "SEK",
        soon: "Tickets released later",
        guestTag: "Guest show",
        closePhoto: "Close photo",
        buyGuest: "Tickets at Improvisationsteatern<span class='visually-hidden'> (opens in a new tab)</span>",
        buyPresens: "Tickets at Presens Impro<span class='visually-hidden'> (opens in a new tab)</span>"
      },
      fiction: {
        kicker: "Our recurring show",
        title: "Slams Fiction",
        p1: "Slams Fiction is our own show in Presens improkällare in Midsommarkransen. Nothing is written in advance — we build the whole night from your suggestions, and we play it only once.",
        p2: "Every night a guest joins us to make things harder for us — a new voice on stage that forces us to think again.",
        lTime: "Time", lPrice: "Price", vPrice: "150 SEK", lPlace: "Venue",
        lLength: "Length", vLength: "About 2 hours", lGuest: "Guest", vGuest: "Every night",
        cta: "Get tickets"
      },
      quote: {
        heading: "What the audience says",
        text: "<p>Slams is the funniest thing I know, because even though the people on stage are adults, kids think it’s fun too! I love how you can take a single word and turn it into a whole brilliant show – and how you can stretch out a joke so it turns up again several scenes later. It’s so ridiculously funny!</p>",
        age: "age 14"
      },
      fic: {
        crumbHome: "Slams",
        crumbHere: "Slams Fiction",
        title: "Slams Fiction — improv comedy in Midsommarkransen",
        heading: "Slams Fiction",
        lead: "<p>Picture an ordinary night on the couch in front of the TV — except nobody has seen this episode before, because it doesn't exist. We flip between soap opera, bloopers, film and fast-forwarding through entire genres, and hold it all together into an evening that's funnier than your own couch.</p><p>Everything is made up on the spot, nothing is rehearsed, and we never air the same broadcast twice. Tickets 150 SEK. We start at 8 PM, doors open at 7:30, and we run for about two hours with an interval.</p>",
        ctaDates: "See upcoming dates",
        countdown: "Next Slams Fiction in",

        h1: "What is Slams Fiction?",
        b1a: "Slams Fiction is improvised comedy — improv comedy — but built as a TV night. Nothing is decided before we step on stage: no script, no rehearsal, no director who cut the broadcast together in advance. All we bring on stage is each other and whatever you in the audience shout out.",
        b1b: "The name comes from the fact that everything you see is made up in the same moment it airs. We ask for a suggestion — a word, a place, a memory, a feeling — and then build the whole evening on it. Characters turn up, relationships form, a plot takes shape, and none of it would have existed if you hadn't been sitting there that particular night.",
        b1c: "There are seven of us: Madeleine, Bastian, Sara, Kim, Johanna, Louise and Ville. We don't all play every time, and we never know in advance who ends up where. The evening flips between TV genres like we're scrolling the schedule — a soap opera that spins off the rails, bloopers from a take that never happened, a trailer for a film that doesn't exist, fast-forwarding through entire relationships in three seconds. The genre is only whichever channel we happen to land on — the flesh, what actually happens in the scene, is new every time.",
        b1d: "Slams is part of Presens Impro, and Slams Fiction is performed in their improv basement in Midsommarkransen. It's a small room, which is the whole point: you sit close, we can hear you, and the distance between stage and audience is about three metres.",

        h2: "How an evening works",
        b2a: "Doors open at 7:30 PM. Come early if you can — there's plenty to drink and something small to nibble on, but eat dinner first. Improv is best on a full stomach.",
        b2b: "Seating is unnumbered, so it's first come, first served. Our tip: be un-Swedish and sit at the front. Those are the best seats, and no, it won't land you on stage. The audience is never part of the show.",
        b2c: "We flip the switch at 8 PM. One of us asks the audience for a suggestion, somebody shouts something, and off we go. The first half runs about forty-five minutes — maybe a soap opera that spins off the rails, maybe bloopers from a take that never happened. Then an interval, where you can top up your glass and vote among yourselves for the best genre. After the break we run a new programme, often with a completely different energy and at least one fast-forward through a couple of genres we didn't get to. We finish around 10 PM.",
        b2d: "What happens in between, we can't promise. We've played whole evenings in a laundry room at three in the morning, in a saloon up north and on a space shuttle with bad wifi. Sometimes something goes wrong on stage — someone contradicts themselves, an imaginary prop gets lost, two of us have built different versions of the same room. That's usually when it gets funniest — and no, it never airs as a rerun.",

        h3: "The guest who throws us off",
        b3a: "Every Slams Fiction has an invited guest. It might be another improv group, a solo improviser, or someone who does something completely different from us. The guest performs with us — not as a support act, but on stage alongside the ensemble.",
        b3b: "The reason is simple: a group that has played together for a long time gets good at each other. We know where Sara tends to take a scene and what Ville does when it goes quiet. A guest knows none of that, and forces us to actually listen instead of leaning on habit. You can tell from the audience, and that's why we do it every time rather than now and then.",
        b3c: "Want to guest with us? Email <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a> and tell us who you are and what you like doing on stage.",

        h4: "Do I need to know anything about improv?",
        b4a: "No. You don't need to have seen improv before, you don't need to know what a format is, and above all you don't need to go on stage. It's the most common question we get, and the answer is always the same: the audience is never part of the show. You stay in your seat all evening.",
        b4b: "All we ask for is suggestions, and even that is voluntary. If you don't shout, someone else will. If you'd still like something to bring, there's <a href='../#impro'>the scene generator on the home page</a> — roll a place and a relationship and bring the suggestion to the show.",
        b4c: "There's no age limit, but the humour is adult. Since nothing is decided in advance, not even we know where a scene is heading. The shows are performed in Swedish.",

        h5: "Upcoming Slams Fiction",
        b5: "Every date below is performed in the Presens improv basement in Midsommarkransen. Past shows stay on the list, struck through — they're not coming back.",

        h6: "Getting here",
        b6a: "The Presens improv basement is at Tegelbruksvägen 28, 126 34 Hägersten — a couple of minutes' walk from Midsommarkransen metro station on the red line. That's southern Stockholm, about ten minutes from T-Centralen.",
        b6b: "The venue is a basement, exactly as the name says. There's a toilet. If you can't find the way in, you're not the first — look for the Presens sign.",

        h7: "The show at a glance",
        lDoors: "Doors",
        lLang: "Language",
        vLang: "Swedish",
        more: "More questions? Most of them are answered under <a href='../#faq'>Q&amp;A</a> on the home page, and we're happy to answer the rest at <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a>.",
        readMore: "Read more about Slams Fiction"
      },
      ens: { title: "Seven people, endless characters", lead: "We can't promise who we'll be on stage. But this is what usually happens." },
      impro: {
        title: "What is impro comedy?",
        p1: "Nothing is decided in advance. We ask the audience for inspiration — a word, a place, a memory, anything at all — and then we play it out immediately, with no safety net.",
        p2: "What we do is different every single show. What we do know is that we find the funny and then we amplify it. And when something goes wrong on stage — that's usually when it gets funniest.",
        formatsLabel: "Formats we've played, among others"
      },
      gen: { kicker: "Try it yourself", title: "Roll a random scene", l1: "Place", l2: "Relationship", l3: "And suddenly", btn: "Give us a suggestion", note: "We have never played this exact scene. Bring the suggestion to the show." },
      faq: {
        title: "Questions and answers",
        lead: "The things people wonder before they come. And no — you don't have to go on stage.",
        q1: "What is Slams?",
        a1: "Slams is an improv group of seven improvisers performing improvised comedy in Midsommarkransen, Stockholm. We're part of <a href='https://presensimpro.se/' target='_blank' rel='noopener'>Presens Impro</a>. Nothing in the show is written in advance — it is all built from audience suggestions.",
        q2: "What is improvised comedy?",
        a2: "Improvised comedy, or impro, is comedy created in the very moment it is performed. There is no script and no rehearsal. We ask the audience for a word, a place or a memory, and play the scenes straight from that.",
        q3: "Is it the same show every time?",
        a3: "Never. Every performance is brand new and played only once — we don't do reruns. You can see Slams as many times as you like and never see the same scene twice. We use established impro formats like Harold, La Ronde and Armando, but the content is new every night.",
        q4: "Do I have to go on stage?",
        a4: "No. The audience is never part of the show — you stay safely in your seat all night. We ask the audience for suggestions, but calling one out is entirely voluntary. That is your improv guarantee: we play from your suggestions, not something we prepared in advance. If you do want to be on stage, <a href='https://presensimpro.se/' target='_blank' rel='noopener'>Presens Impro</a> runs impro courses.",
        q5: "What language are the shows in?",
        a5: "Slams performs in Swedish. We occasionally do guest shows in English, and when we do it is clearly stated in the information for that specific show.",
        q6: "Is there an age limit?",
        a6: "There is no age limit, but the humour is adult. Since nothing is decided in advance, not even we know where a scene will go, so the content can get unexpected. Our shows are always watched at your own risk.",
        q7: "Where is the venue?",
        a7: "We play in Presens improkällare at Tegelbruksvägen 28, 126 34 Hägersten — a stone's throw from Midsommarkransen metro station in southern Stockholm. There are toilets in the venue.",
        q8: "When does Slams Fiction start?",
        a8: "Slams Fiction starts at 20:00 and doors open at 19:30. Guest shows can have different start times — that is stated in the information for that specific show. You will find upcoming dates under <a href='#shows'>Upcoming shows</a> on this page.",
        q9: "How long is the show?",
        a9: "About two hours including an intermission. The show starts at 20:00.",
        q10: "How much is a ticket and where do I buy it?",
        a10: "A ticket costs 150 SEK and is sold in advance through <a href='https://presensimpro.se/' target='_blank' rel='noopener'>Presens Impro</a>.",
        q11: "Can I buy a ticket at the door?",
        a11: "Yes, you can buy a ticket at the door as long as the show is not sold out. Doors open at 19:30. If you want to be certain of a seat, buying in advance is safest.",
        q12: "Is there food and drink at the venue?",
        a12: "There is plenty to drink and something small to snack on, but don't come hungry — impro is best on a full stomach. Eat before and have a drink with us.",
        q13: "Are the seats numbered — where should I sit?",
        a13: "Seats are unnumbered, so it is first come, first served. Our tip: don't be shy, sit right at the front. Those are the best seats, and no — you will not end up on stage. The audience is never part of the show.",
        q14: "Do you perform at other venues and festivals?",
        a14: "We'd love to! Upcoming guest shows appear here under <a href='#shows'>Upcoming shows</a>. Got a stage or festival where you'd like Slams to be part of it? Email us at <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a> — we'll tell you more.",
        q15: "How do I get started with impro myself?",
        a15: "If you want to try impro yourself, take a course at <a href='https://presensimpro.se/' target='_blank' rel='noopener'>Presens Impro</a>, which Slams is part of. Slams shows are made to be enjoyed from a seat in the audience — we never bring anyone from the audience on stage.",
        q16: "I want to guest-perform on your show — how do I do that?",
        a16: "How exciting! Email us at <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a> and tell us about your group — who you are, what kind of impro you play, and what you love doing on stage. The more you share, the easier it is for us to find a date that works.",
        note: "Can't find your answer? Email <a href='mailto:slamsimpro@gmail.com'>slamsimpro@gmail.com</a> — we are happy to help."
      },
      hire: {
        title: "Hire us",
        p1: "Want to hire us? Get in touch with a date and some context.",
        mailLabel: "Or email us directly:",
        photoAlt: "The seven Slams improvisers gathered around a birch trunk"
      },
      form: { name: "Name", email: "Email", occasion: "What's the occasion?", message: "Tell us more", send: "Send request", note: "Opens your mail client with everything filled in to slamsimpro@gmail.com." },
      footer: {
        presens: "Slams is part of Presens Impro.",
        credit: "Like our website? Get in touch at <span class='credit-mail'>madeleine.kalin [at] gmail.com</span> if you need help building your own."
      }
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

  // All showdata kommer från shows.js — samma fil som byggskriptet läser, så
  // listan, nedräkningen och den strukturerade datan aldrig kan säga emot
  // varandra. Se kommentaren högst upp i shows.js.
  const SHOWDATA = window.SLAMS_SHOWS;
  const SHOWS = SHOWDATA.SHOWS;

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

    // Copy that contains inline links (FAQ answers, contact lines).
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const value = getPath(COPY[lang], el.getAttribute("data-i18n-html"));
      if (typeof value === "string") el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const value = getPath(COPY[lang], el.getAttribute("data-i18n-alt"));
      if (typeof value === "string") el.alt = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = getPath(COPY[lang], el.getAttribute("data-i18n-aria"));
      if (typeof value === "string") el.setAttribute("aria-label", value);
    });

    document.getElementById("lang-sv").classList.toggle("is-active", lang === "sv");
    document.getElementById("lang-sv").setAttribute("aria-pressed", String(lang === "sv"));
    document.getElementById("lang-en").classList.toggle("is-active", lang === "en");
    document.getElementById("lang-en").setAttribute("aria-pressed", String(lang === "en"));

    // Varje sida säger med data-page på <body> vilken titel och beskrivning
    // som hör till den, så att språkbytet inte skriver över undersidans med
    // startsidans.
    const page = COPY[lang].pages[document.body.dataset.page] || COPY[lang].pages.home;
    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:locale", lang === "sv" ? "sv_SE" : "en_GB");

    renderShows();
    renderMemberRoles();
    renderSuggestion();
    upgradeContactMail();
    buildFaqSchema();
    buildEventsSchema();
  }

  // Madeleine's private address, so it is never written out in full anywhere in
  // the source — address harvesters mostly just regex for user@domain, and
  // neither the HTML nor this file contains that shape. Without JavaScript the
  // "[at]" spelling stays readable; with it, you get a real mailto link.
  // Must run after the data-i18n-html pass, which rewrites the paragraph.
  function upgradeContactMail() {
    const address = ["madeleine.kalin", "gmail", "com"];
    const joined = `${address[0]}@${address[1]}.${address[2]}`;

    document.querySelectorAll(".credit-mail").forEach((el) => {
      const link = document.createElement("a");
      link.href = `mailto:${joined}`;
      link.textContent = joined;
      el.replaceChildren(link);
    });
  }

  function setMeta(attr, key, value) {
    const el = document.querySelector(`meta[${attr}="${key}"]`);
    if (el) el.setAttribute("content", value);
  }

  // Keeps the FAQPage structured data in sync with whatever is on screen.
  // The Swedish version is hardcoded in index.html so crawlers that don't
  // run JavaScript still get it.
  function buildFaqSchema() {
    const target = document.getElementById("faq-schema");
    if (!target) return;

    const mainEntity = Array.from(document.querySelectorAll(".faq-item")).map((item) => ({
      "@type": "Question",
      name: item.querySelector(".faq-q").textContent.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: item.querySelector(".faq-a").textContent.replace(/\s+/g, " ").trim()
      }
    }));

    target.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: lang,
      mainEntity
    }, null, 2);
  }

  const showByDate = new Map(SHOWS.map((show) => [show.date, show]));

  // Past rows hide their meta/tag/link with CSS, so every lookup here has to
  // tolerate the element simply not being there.
  function setText(item, selector, value) {
    const el = item.querySelector(selector);
    if (el) el.textContent = value;
  }

  function renderShows() {
    const now = Date.now();
    document.querySelectorAll(".show-item").forEach((item) => {
      const show = showByDate.get(item.dataset.showDate);
      if (!show) return;
      // Read the date parts straight off the string so the rendered day never
      // depends on the visitor's own time zone.
      const [, month, day] = show.date.split("-").map(Number);
      const weekday = WEEKDAYS[lang][new Date(show.date + "T12:00:00Z").getUTCDay()];

      const price = show.price ? ` · ${show.price} ${COPY[lang].shows.currency}` : "";
      const place = SHOWDATA.venueOf(show).label[lang];

      setText(item, ".show-date", `${day} ${MONTHS[lang][month - 1]}`);
      setText(item, ".show-name", show[lang]);
      setText(item, ".show-meta", `${weekday} ${show.time} · ${place}${price}`);

      // Once a show's start time is behind us it collapses to a struck-through
      // name and date — see the .show-item--past rules in styles.css.
      item.classList.toggle("show-item--past", SHOWDATA.startTime(show) < now);
    });
  }

  // Håller event-schemat i takt med sidan, på samma sätt som buildFaqSchema:
  // språket följer språkvalet, och en show som redan varit tappar sitt
  // erbjudande i stället för att ligga kvar som köpbar. Den svenska versionen
  // ligger färdigbyggd i HTML:en (se tools/build-site.mjs) så att crawlers
  // utan JavaScript får samma data.
  function buildEventsSchema() {
    const target = document.getElementById("events-schema");
    if (!target) return;

    const existing = JSON.parse(target.textContent);
    const now = Date.now();

    const graph = existing["@graph"].map((node) => {
      if (node["@type"] !== "TheaterEvent") return node;

      const show = SHOWS.find((s) => SHOWDATA.startISO(s) === node.startDate);
      if (!show) return node;

      // Namn och beskrivning följer språkvalet, men inte inLanguage — det
      // beskriver vilket språk föreställningen spelas på, och showerna är på
      // svenska oavsett vilket språk besökaren läser sidan på.
      const updated = { ...node, name: show[lang] };
      updated.description = SHOWDATA.DESCRIPTIONS[show.desc][lang];
      if (SHOWDATA.startTime(show) < now) delete updated.offers;
      return updated;
    });

    target.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
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
    ["a", "b", "c"].forEach((key) => {
      const el = document.getElementById("sugg-" + key);
      if (el) el.textContent = s[key][lastPick[key]];
    });
  }

  function rollSuggestion() {
    lastPick = {
      a: pickIndex(SUGG[lang].a, lastPick.a),
      b: pickIndex(SUGG[lang].b, lastPick.b),
      c: pickIndex(SUGG[lang].c, lastPick.c)
    };
    renderSuggestion();
  }

  // data-show-filter="fiction" på nedräkningen räknar bara på Slams
  // Fiction-kvällarna; utan attribut räknas alla shower.
  function nextShowTimestamp(now, filter) {
    const list = filter === "fiction" ? SHOWS.filter(SHOWDATA.isFiction) : SHOWS;
    const upcoming = list.map(SHOWDATA.startTime).sort((a, b) => a - b);
    return upcoming.find((ts) => ts > now) ?? upcoming[upcoming.length - 1];
  }

  function updateCountdown() {
    const el = document.getElementById("countdown-value");
    if (!el) return;

    const now = Date.now();
    const target = nextShowTimestamp(now, el.dataset.showFilter);
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
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

    const layer = document.getElementById("egg-layer");
    if (!layer) return;

    eggActive = true;
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

  // Undersidorna har ingen POW-knapp men samma tangentbordsgenväg.
  function setupEasterEgg() {
    const trigger = document.getElementById("pow-trigger");
    if (trigger) trigger.addEventListener("click", fireEgg);

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
    if (!btn) return;
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

  // Porträtten. Bild 1 ligger alltid som grund. Ett klick visar bild 2, nästa
  // klick går alltid tillbaka till bild 1, och klicket efter det visar bild 3
  // för de tre som har en sådan — så cykeln blir 1 → 2 → 1 → 3 → 1 → 2 för dem
  // med tre bilder, och 1 → 2 → 1 för de andra.
  //
  // data-alt håller vilken bild som är näst i tur, data-show vad som visas nu.
  // Med mus förhandsvisar hover nästa bild ända till man klickat på kortet;
  // därefter är klicket det som styr, så bild 1 verkligen kommer tillbaka.
  function setupPortraitToggle() {
    document.querySelectorAll(".member").forEach((member) => {
      const hasThird = Boolean(member.querySelector(".photo-c"));

      member.addEventListener("click", () => {
        member.classList.add("is-tapped");

        if (member.dataset.show) {
          delete member.dataset.show;
          // Lägg den andra bilden näst i tur inför nästa klick.
          if (hasThird) member.dataset.alt = member.dataset.alt === "c" ? "b" : "c";
          return;
        }

        member.dataset.show = hasThird && member.dataset.alt === "c" ? "c" : "b";
      });
    });
  }

  // Guest photos have no hover on touch, so tapping one opens the same photo
  // full-size instead — with an obvious close button, since there's nothing
  // else on the page (no click-outside-to-dismiss habit) to teach that.
  function setupGuestLightbox() {
    const lightbox = document.getElementById("guest-lightbox");
    const lightboxImg = document.getElementById("guest-lightbox-img");
    const closeBtn = document.getElementById("guest-lightbox-close");
    if (!lightbox) return;

    let lastFocused = null;

    function open(photo) {
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.closest(".show-name-row")?.querySelector(".show-name")?.textContent ?? "";
      lastFocused = document.activeElement;
      lightbox.hidden = false;
      document.body.classList.add("lightbox-open");
      closeBtn.focus();
    }

    function close() {
      lightbox.hidden = true;
      document.body.classList.remove("lightbox-open");
      if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll(".guest-photo").forEach((photo) => {
      photo.addEventListener("click", () => open(photo));
    });
    closeBtn.addEventListener("click", close);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) close();
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) close();
    });
  }

  function setupGenerator() {
    const btn = document.getElementById("roll-btn");
    if (btn) btn.addEventListener("click", rollSuggestion);
  }

  function setupForm() {
    const form = document.getElementById("hire-form");
    if (!form) return;

    form.addEventListener("submit", (event) => {
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
    setupPortraitToggle();
    setupGuestLightbox();
    setupGenerator();
    setupForm();
    setupEasterEgg();
  });
})();
