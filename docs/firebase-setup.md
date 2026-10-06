# Attivare la sincronizzazione Firebase (una volta sola, ~15 minuti)

Il codice è già nel lead scorer. Finché `firebase-config.js` contiene `null` lo strumento funziona solo in locale.

## 1. Crea il progetto
1. Vai su https://console.firebase.google.com con il tuo account Google → **Aggiungi progetto** (nome es. `piscine-lead-scorer`). Google Analytics: disattivalo.
2. **Build → Firestore Database → Crea database**. Posizione: **eur3 (Europa)** o `europe-west`. Modalità: **produzione**.

## 2. Accesso (due utenti)
1. **Build → Authentication → Inizia → Email/password → Abilita**.
2. Scheda **Users → Aggiungi utente**: crea l'account di tuo padre e il tuo (email + password a tua scelta, minimo 8 caratteri).
3. Scheda **Settings → User actions**: togli la spunta a "Enable create (sign-up)" così nessun altro può registrarsi.

## 3. Regole di sicurezza (fondamentale)
1. **Firestore → Regole**: incolla il contenuto di `firestore.rules`, sostituendo le due email con quelle reali, poi **Pubblica**.

## 4. Collega l'app
1. **Impostazioni progetto (ingranaggio) → Le tue app → `</>` Web** → registra l'app (senza Hosting).
2. Copia l'oggetto `firebaseConfig` e incollalo in `firebase-config.js` al posto di `null`:
   `window.PSL_FIREBASE = { apiKey:"...", authDomain:"...", projectId:"...", storageBucket:"...", messagingSenderId:"...", appId:"..." };`
   (La config non è un segreto: la protezione sono le regole del punto 3.)
3. Carica il file su GitHub (commit su `main`). Dopo un minuto, in **Archivio** compare il riquadro "Sincronizzazione": accedi con l'email e la password create al punto 2.
4. In Authentication → Settings → **Authorized domains** deve esserci `lrnzcrlt.github.io`.

## Come funziona
- I lead restano anche sul dispositivo: senza connessione si lavora normalmente e alla riconnessione tutto si allinea.
- Se due dispositivi modificano lo stesso lead, vince il salvataggio più recente di quel lead.
- Eliminare un lead lascia nel cloud solo l'id (nessun dato personale) per propagare la cancellazione.
- I pesi personalizzati non vengono sincronizzati: restano per dispositivo.

## Privacy (GDPR)
I nomi e i telefoni dei clienti finiscono sui server Google (regione UE scelta al punto 1). Titolare del trattamento è la ditta di tuo padre: serve un'informativa ai clienti che citi l'uso di un gestionale in cloud. Backup periodico comunque consigliato.
