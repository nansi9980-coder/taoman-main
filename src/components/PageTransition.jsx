import { motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const pageVariants = {
  initial: { opacity: 1, y: 16 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 1, y: -8 },
};

export const PageTransition = ({ children }) => {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 450);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: reduceMotion ? 0 : 0.3,
      }}
      onAnimationComplete={() => ScrollTrigger.refresh()}
      className="flex flex-col min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
