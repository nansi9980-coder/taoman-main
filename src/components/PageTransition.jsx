import { motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98, filter: 'blur(8px)' },
  in: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  out: { opacity: 0, y: -12, scale: 0.99, filter: 'blur(6px)' },
};

const pageVariantsReduced = {
  initial: { opacity: 1 },
  in: { opacity: 1 },
  out: { opacity: 1 },
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
      variants={reduceMotion ? pageVariantsReduced : pageVariants}
      transition={{
        type: 'tween',
        ease: [0.22, 1, 0.36, 1],
        duration: reduceMotion ? 0 : 0.45,
      }}
      onAnimationComplete={() => ScrollTrigger.refresh()}
      className="page-transition-blur flex flex-col min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
