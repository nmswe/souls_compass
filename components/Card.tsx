// components/Card.js

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-[#F5E6D3] border-4 border-[#D4AF37] rounded-2xl p-10 max-w-lg w-full shadow-2xl relative ${className}`}>
      {/* Pattern geometrico sottile negli angoli */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#D4AF37] opacity-30 rounded-tl-lg"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-[#D4AF37] opacity-30 rounded-tr-lg"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-[#D4AF37] opacity-30 rounded-bl-lg"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#D4AF37] opacity-30 rounded-br-lg"></div>
      
      {children}
    </div>
  );
}