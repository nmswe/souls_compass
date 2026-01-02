// components/Button.js
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
}

export default function Button({ children, onClick, variant = 'primary', className = '' }: ButtonProps) {  
  const baseStyles = "w-full font-semibold py-5 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#D97757] to-[#E8956F] text-white border-2 border-[#C4603F] hover:from-[#E8956F] hover:to-[#D97757]",
    secondary: "bg-gradient-to-r from-[#D4AF37] to-[#E8C547] text-[#2D2D3F] border-2 border-[#B8941F] hover:from-[#E8C547] hover:to-[#D4AF37]",
    success: "bg-gradient-to-r from-[#6B8E23] to-[#9ACD32] text-white border-2 border-[#556B2F]",
    danger: "bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white border-2 border-[#654321]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}