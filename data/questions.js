// data/questions.js

export const questions = {
  easy: [
    {
      id: 'e1',
      text: 'Quale preferisci?',
      answers: ['Mare', 'Montagna']
    },
    {
      id: 'e2',
      text: 'Preferisci uscire o stare a casa?',
      answers: ['Uscire', 'Stare a casa']
    },
    {
      id: 'e3',
      text: 'Sei più mattiniero o nottambulo?',
      answers: ['Mattiniero', 'Nottambulo']
    },
    {
      id: 'e4',
      text: 'Preferisci caldo o freddo?',
      answers: ['Caldo', 'Freddo']
    },
    {
      id: 'e5',
      text: 'Cane o gatto?',
      answers: ['Cane', 'Gatto']
    },
    {
      id: 'e6',
      text: 'Preferisci leggere o guardare film?',
      answers: ['Leggere', 'Film']
    },
  ],
  
  medium: [
    {
      id: 'm1',
      text: 'Come preferisci passare il weekend?',
      answers: ['Con amici', 'In solitudine', 'Con il partner']
    },
    {
      id: 'm2',
      text: 'Quando hai un problema preferisci:',
      answers: ['Parlarne subito', 'Rifletterci da solo', 'Distrarmi']
    },
    {
      id: 'm3',
      text: 'In una discussione tendi a:',
      answers: ['Essere diretto', 'Mediare', 'Evitare il conflitto']
    },
    {
      id: 'm4',
      text: 'Come gestisci lo stress?',
      answers: ['Sport/attività', 'Parlando con qualcuno', 'Isolandomi']
    },
    {
      id: 'm5',
      text: 'Cosa ti motiva di più?',
      answers: ['Successo personale', 'Aiutare gli altri', 'Nuove esperienze']
    },
    {
      id: 'm6',
      text: 'Prendi decisioni basandoti su:',
      answers: ['Logica', 'Emozioni', 'Istinto']
    },
  ],
  
  hard: [
    {
      id: 'h1',
      text: 'Cosa ti spaventa di più in una relazione?',
      answers: ['Perdere me stesso', 'Essere abbandonato', 'Non essere capito', 'Ferire l\'altro']
    },
    {
      id: 'h2',
      text: 'Come mostri affetto?',
      answers: ['Parole', 'Gesti fisici', 'Azioni concrete', 'Tempo di qualità']
    },
    {
      id: 'h3',
      text: 'Di fronte a un\'ingiustizia preferisci:',
      answers: ['Reagire immediatamente', 'Riflettere e pianificare', 'Cercare supporto', 'Lasciar perdere']
    },
    {
      id: 'h4',
      text: 'Cosa significa per te fiducia?',
      answers: ['Trasparenza totale', 'Rispetto degli spazi', 'Sostegno incondizionato', 'Coerenza nel tempo']
    },
    {
      id: 'h5',
      text: 'Come affronti i tuoi difetti?',
      answers: ['Li accetto', 'Ci lavoro attivamente', 'Li nascondo', 'Li giustifico']
    },
    {
      id: 'h6',
      text: 'Cosa cerchi davvero in una connessione profonda?',
      answers: ['Essere visto per chi sono', 'Crescita reciproca', 'Sicurezza emotiva', 'Complicità totale']
    },
  ]
};

// Configurazione livelli
export const levels = [
  { id: 0, name: 'Contatto', easy: 0, medium: 0, hard: 0, requiredCorrect: 0 },
  { id: 1, name: 'Connessione', easy: 4, medium: 0, hard: 0, requiredCorrect: 4 },
  { id: 2, name: 'Apertura', easy: 4, medium: 2, hard: 0, requiredCorrect: 10 },
  { id: 3, name: 'Costruzione', easy: 2, medium: 4, hard: 0, requiredCorrect: 16 },
  { id: 4, name: 'Sintonizzazione', easy: 2, medium: 2, hard: 2, requiredCorrect: 22 },
  { id: 5, name: 'Fusione', easy: 0, medium: 3, hard: 3, requiredCorrect: 28 },
  { id: 6, name: 'Affinità Universale', easy: 0, medium: 0, hard: 6, requiredCorrect: 34 },
];