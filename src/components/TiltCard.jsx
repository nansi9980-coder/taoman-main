import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const TiltCard = ({ children, className = '', ...props }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative perspective-1000 ${className}`}
      {...props}
    >
      <div 
        style={{ transform: "translateZ(30px)" }} 
        className="w-full h-full transition-shadow duration-300"
      >
        {children}
        
        {/* Effet reflet lumineux (Glare) */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 z-50 pointer-events-none rounded-inherit overflow-hidden"
            style={{
              background: `radial-gradient(circle at ${useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]).get()} ${useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]).get()}, rgba(255,255,255,0.2) 0%, transparent 60%)`
            }}
          />
        )}
      </div>
    </motion.div>
  );
};
