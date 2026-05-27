import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const TextReveal = ({ text, className = '', elementType = 'span', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Split text into words
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  const Tag = motion[elementType] || motion.span;

  return (
    <Tag
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-flex mr-[0.25em] last:mr-0">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
