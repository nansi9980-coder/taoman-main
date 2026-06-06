import { motion, useReducedMotion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -12 },
};

export const PageTransition = ({ children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: reduceMotion ? 0 : 0.35,
      }}
      className="flex flex-col min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
