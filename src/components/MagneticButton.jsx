import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const MagneticButton = ({ children, className = '', onClick, variant = 'primary', ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // 0.2 is the magnetic strength
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  const baseClasses = "relative inline-flex items-center justify-center font-bold transition-colors duration-300 rounded-2xl overflow-hidden group hover-ripple hover-btn-glow";
  
  const variants = {
    primary: "bg-cyan-300 text-[#07111f] hover:bg-cyan-200",
    outline: "border border-white/25 bg-white/5 text-white backdrop-blur hover:bg-white hover:text-[#07111f]",
    glow: "btn-glow font-bold",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Effet Spotlight (Glow) au survol */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div 
          className="absolute -inset-10 bg-white/20 blur-xl rounded-full"
          style={{ transform: `translate(${x * 2}px, ${y * 2}px)` }}
        />
      </div>
    </motion.button>
  );
};
