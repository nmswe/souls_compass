// styles/theme.js

export const desertTheme = {
  colors: {
    // Palette principale
    sand: {
      light: '#F5E6D3',
      DEFAULT: '#E8D4B8',
      dark: '#D4B896',
    },
    terracotta: {
      light: '#E8956F',
      DEFAULT: '#D97757',
      dark: '#C4603F',
    },
    gold: {
      light: '#E8C547',
      DEFAULT: '#D4AF37',
      dark: '#B8941F',
    },
    night: {
      light: '#4A4A5E',
      DEFAULT: '#2D2D3F',
      dark: '#1A1A28',
    },
    // Livelli di affinità
    levels: {
      0: '#E8D4B8', // Contatto - sabbia
      1: '#E8C547', // Connessione - oro chiaro
      2: '#D4AF37', // Apertura - oro
      3: '#E8956F', // Costruzione - terracotta chiaro
      4: '#D97757', // Sintonizzazione - terracotta
      5: '#C4603F', // Fusione - terracotta scuro
      6: '#B8941F', // Affinità Universale - oro intenso
    }
  },
  
  patterns: {
    dunes: `data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0, 50 10 T 100 10' fill='none' stroke='%23D4B896' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E`,
    geometric: `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L45 15 L30 30 L15 15 Z' fill='none' stroke='%23D4B896' stroke-width='0.5' opacity='0.2'/%3E%3C/svg%3E`,
    stars: `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 5 L22 15 L20 25 L18 15 Z M5 20 L15 22 L25 20 L15 18 Z' fill='%23D4AF37' opacity='0.3'/%3E%3C/svg%3E`,
  }
};

// Classi Tailwind customizzate
export const desertStyles = {
  page: "min-h-screen bg-gradient-to-b from-[#2D2D3F] via-[#4A4A5E] to-[#2D2D3F] flex items-center justify-center p-4 relative overflow-hidden",
  card: "bg-[#F5E6D3] border-4 border-[#D4AF37] rounded-2xl p-8 max-w-md w-full shadow-2xl relative backdrop-blur-sm",
  title: "bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#2D2D3F] text-xl font-bold text-center py-4 px-6 rounded-xl mb-8 shadow-lg",
  button: "w-full font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95",
  buttonPrimary: "bg-gradient-to-r from-[#D97757] to-[#E8956F] text-white border-2 border-[#C4603F]",
  buttonSecondary: "bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#2D2D3F] border-2 border-[#B8941F]",
};