# Lead Scorer – Piscine San Lorenzo

Strumento a file singolo (`leadscoreV3.html`) per valutare i lead, seguire la trattativa e non perdere nessun contatto. Funziona su qualsiasi dispositivo: basta aprire il file nel browser.

## Dove vengono salvati i lead
- **Sul dispositivo e nel browser che stai usando** (localStorage). Telefono e PC hanno archivi **separati**.
- Salvataggio automatico dopo 1,5 secondi dall'inserimento di nome, comune o telefono; salvataggio anche alla chiusura della pagina.
- Se il salvataggio fallisce (memoria piena) l'app lo segnala: non resta "salvato" in silenzio.
- Anche i **pesi** personalizzati vengono ricordati.

## Sincronizzazione cloud (opzionale)
Con Firebase i lead si allineano tra telefono e PC. Istruzioni in `docs/firebase-setup.md`; finché `firebase-config.js` è `null` tutto resta locale.

## Backup (importante)
Archivio → **Scarica backup** crea `lead-backup-AAAA-MM-GG.json`. L'app avvisa se l'ultimo backup ha più di 7 giorni. **Importa backup** riunisce i file di dispositivi diversi (vince la versione più recente di ogni lead).
Su iPhone/Safari i dati di siti non visitati per un po' possono essere cancellati: fai il backup con regolarità.

## Privacy – regola fondamentale
**Nessun dato dei clienti va caricato in questo repository.** I file di backup contengono nomi e telefoni: sono esclusi dal `.gitignore` e vanno tenuti solo sul tuo dispositivo/Drive personale.

## Limiti noti
- Nessuna sincronizzazione tra due persone/dispositivi (richiederebbe un backend, es. Google Sheet).
- Il calcolo delle penalità delle obiezioni può superare la scala 0–100 (formula v2.1 replicata, correzione prevista a parte).
