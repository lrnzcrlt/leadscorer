// Configurazione Firebase (NON è un segreto: la sicurezza è nelle regole di Firestore, vedi docs/firebase-setup.md).
// Finché resta null, lo strumento funziona solo in locale, come prima.
// Per attivare la sincronizzazione sostituisci null con l'oggetto firebaseConfig della tua app web, ad esempio:
// window.PSL_FIREBASE = { apiKey:"...", authDomain:"...", projectId:"...", storageBucket:"...", messagingSenderId:"...", appId:"..." };
window.PSL_FIREBASE = null;
