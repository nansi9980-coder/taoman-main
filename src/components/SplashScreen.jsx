import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import { BRAND_NAME } from '../constants/branding';

const SESSION_KEY = 'taoman_splash_shown';

export const SplashScreen = ({ minDuration = 2200, once = false }) => {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (once && sessionStorage.getItem(SESSION_KEY) === '1') return false;
    return true;
  });

  useEffect(() => {
    if (!visible) return undefined;
    
    document.body.style.overflow = 'hidden';

    const timer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = '';
      if (once) {
        try { sessionStorage.setItem(SESSION_KEY, '1'); } catch {}
      }
    }, minDuration);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [visible, minDuration, once]);

  // Si on réduit les animations
  const isReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 }
    }
  };

  const letterAnim = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 10 } }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.1,
            filter: "blur(10px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07111f] overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-400 rounded-full blur-[120px]" 
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="relative w-32 h-32 mb-8"
            >
              {/* Rings around logo */}
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-cyan-400/30 rounded-full border-t-cyan-400"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-white/10 rounded-full border-b-white/50"
              />
              
              <img
                src={logo}
                alt={BRAND_NAME}
                className="w-full h-full object-contain relative z-10"
                decoding="async"
                fetchpriority="high"
              />
            </motion.div>

            {/* Animated Letters */}
            <motion.h1 
              variants={letterContainer}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-5xl font-black text-white tracking-[0.2em] mb-2 flex"
            >
              {"TAOMAN".split("").map((char, i) => (
                <motion.span key={i} variants={letterAnim} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-cyan-200 text-sm md:text-base font-bold tracking-[0.3em] uppercase"
            >
              Group Investment
            </motion.p>

            {/* Progress line */}
            <div className="mt-12 w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: minDuration / 1000 - 0.5, ease: "circOut" }}
                className="absolute inset-0 bg-cyan-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
