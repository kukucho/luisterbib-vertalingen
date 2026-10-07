# Luisterbib — vertalingen (cloud-sessie)

Dit is een werkrepository van Koens Werksysteem. Je vertaalt **spreekklare luisterteksten** (Nederlands) naar
**it · fr · pt · de · zh · ja**, zodat ze daarna met ElevenLabs ingesproken worden. De vertalingen gaan terug
naar de laptop; jij hoeft niets in te spreken.

## Bestanden
- `werklijst.jsonl` — één regel per tekst: `id`, `onderdeel`, `bron` (pad), `tekens`, `doel` (pad per taal).
- `bron/<Onderdeel>/…_luister.txt` — de Nederlandse voorleestekst (geen markdown, al spreekklaar).
- `vert/<taal>/<Onderdeel>/…_luister.txt` — hier komt jouw vertaling, zelfde relatieve pad als de bron.
- `vertaling/woordenlijst_<taal>.md` — vaste termen per taal (maak eerst, hou vast).
- `vertaling/stand.json` — `{ "<taal>": {"klaar": n, "afgekeurd": [...]} }`, werk dit bij na elke portie.

## Onderdelen
- **Geneeskunde** — Cecil Essentials-atomen (ziektes, systemen, organen, concepten) + portretten van bekende mensen.
- **GermanseGeneeskunde** — Germaanse Geneeskunde (Dr. Hamer): wetten, SBS, casussen, concepten. Termen: conflict,
  conflictactieve fase, oplossingsfase (PCL-A/PCL-B), epileptoïde crisis, Hamerse haard, kiemlaag (ento-/meso-/ectoderm).
- **Beerlandt** — Christiane Beerlandt, *De sleutel tot zelfbevrijding*: psychosomatische betekenis per klacht, jij-vorm.
- **Hellinger** — familieopstellingen (Bert Hellinger): ordes van de liefde, verstrikking, systeemgeweten.

## Regels (dezelfde als bij de andere talen van deze bib)
1. **Spreekklaar:** lopende tekst, geen markdown, geen koppen, geen opsommingstekens, geen handtekening, geen vertaalnotities.
2. **Getallen voluit** in de doeltaal (jaartallen, leeftijden, percentages, doseringen). Voor **zh/ja**: getallen in de
   lopende tekst als kanji-cijfers (四十九), nooit Arabische cijfers. Romeinse cijfers voluit ("twintigste eeuw").
3. **Elk getal en elke eigennaam blijft identiek van betekenis.** Een jaartal of een dosis die verschuift is een fout.
4. **Medische termen:** de officiële term in de doeltaal (ICD-/vakjargon zoals een arts het zou zeggen), daarna zo
   nodig in gewone taal zoals de bron doet. Persoonsnamen niet vertalen. Boektitels: de officiële vertaalde titel
   als die bestaat, anders de originele.
5. **Toon:** dezelfde als de bron — rustig, warm, aanspreking zoals in de bron (jij/u → de natuurlijke vorm in de doeltaal).
6. **Maak eerst per taal een woordenlijst** (`vertaling/woordenlijst_<taal>.md`) met de ±100 vaste termen van elk
   onderdeel, en gebruik die consequent over alle teksten.

## Werkwijze
- Werk per taal, per onderdeel, in porties van ±25 teksten. Zet subagents parallel in (meerdere porties tegelijk).
- **Controle per portie door een tweede agent:** blind terugvertalen naar het Nederlands en vergelijken met de bron:
  betekenis, elk getal, elke naam, niets weggelaten, niets toegevoegd. Alleen goedgekeurde teksten schrijf je naar `vert/`.
  Afgekeurde: verbeteren en opnieuw controleren; lukt het niet, noteer het `id` in `vertaling/stand.json` onder `afgekeurd`.
- **Commit na elke portie** (`git add vert vertaling && git commit -m "<taal> <onderdeel> portie n"`), en push.
  Zo kan de laptop tussentijds binnenhalen.
- Volgorde van talen: **it → fr → pt → de → zh → ja**. Volgorde van onderdelen: Hellinger (klein, om de werkwijze te
  ijken) → Beerlandt → GermanseGeneeskunde → Geneeskunde.
- Bestaat `vert/<taal>/<pad>` al, sla over (hervatbaar).
- Schrijf niets anders in deze repository dan `vert/` en `vertaling/`. Verander de bron niet.
