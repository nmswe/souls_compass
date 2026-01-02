// components/PageLayout.js

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2D2D3F] via-[#4A4A5E] to-[#2D2D3F] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Stelle di sfondo */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[#E8C547] rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#E8C547] rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-[#E8C547] rounded-full animate-pulse"></div>
      </div>
      
      {/* Dune sottili */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#E8D4B8] to-transparent opacity-20"></div>
      
      {children}
    </div>
  );
}