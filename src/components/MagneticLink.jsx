import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/** Lien avec léger effet magnétique au survol. */
export const MagneticLink = ({ to, href, children, className = '', external = false, ...props }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({
      x: (e.clientX - (left + width / 2)) * 0.15,
      y: (e.clientY - (top + height / 2)) * 0.15,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const motionProps = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: reset,
    animate: { x: pos.x, y: pos.y },
    transition: { type: 'spring', stiffness: 200, damping: 18 },
    className: `magnetic-link inline-block ${className}`.trim(),
    ...props,
  };

  if (href || external) {
    return (
      <motion.a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Link to={to} className="block">
        {children}
      </Link>
    </motion.div>
  );
};
