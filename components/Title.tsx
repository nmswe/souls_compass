// components/Title.js

export default function Title({ children, className = '', level }) {
  // Colori diversi per ogni livello
  const levelColors = {
    0: 'from-[#E8D4B8] to-[#D4B896]', // Contatto - sabbia
    1: 'from-[#E8C547] to-[#D4AF37]', // Connessione - oro chiaro
    2: 'from-[#D4AF37] to-[#B8941F]', // Apertura - oro
    3: 'from-[#E8956F] to-[#D97757]', // Costruzione - terracotta chiaro
    4: 'from-[#D97757] to-[#C4603F]', // Sintonizzazione - terracotta
    5: 'from-[#C4603F] to-[#B8941F]', // Fusione - terracotta scuro + oro
    6: 'from-[#D4AF37] via-[#E8C547] to-[#D4AF37]', // Affinità Universale - oro brillante
  };
  
  const gradientClass = level !== undefined ? levelColors[level] : 'from-[#D4AF37] to-[#E8C547]';
  
  return (
    <h1 className={`bg-gradient-to-r ${gradientClass} text-[#2D2D3F] text-xl font-bold text-center py-5 px-8 rounded-xl mb-10 shadow-lg ${className}`}>
      {children}
    </h1>
  );
}