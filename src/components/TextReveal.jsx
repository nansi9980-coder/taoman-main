import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const TextReveal = ({
  text = '',
  className = '',
  elementType = 'span',
  delay = 0,
  immediate = false,
  center = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-5%' });
  const shouldShow = immediate || isInView;
  const words = String(text).trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return null;
  }

  const container = {
    hidden: { opacity: immediate ? 1 : 0 },
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
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: immediate ? 1 : 0,
      y: immediate ? 0 : 40,
    },
  };

  const Tag = motion[elementType] || motion.span;

  const layoutClass = center ? 'flex flex-wrap justify-center w-full' : 'inline-flex flex-wrap';

  return (
    <Tag
      ref={ref}
      variants={container}
      initial={immediate ? 'visible' : 'hidden'}
      animate={shouldShow ? 'visible' : 'hidden'}
      className={`${layoutClass} ${className}`}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden inline-flex mr-[0.25em] last:mr-0">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

export default TextReveal;
