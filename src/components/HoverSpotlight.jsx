import { useRef } from 'react';

/** Ajoute un halo lumineux qui suit la position du curseur à l'intérieur de l'élément. */
export const HoverSpotlight = ({ children, className = '', as: Tag = 'div', ...props }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--spot-x', `${x}%`);
    el.style.setProperty('--spot-y', `${y}%`);
  };

  return (
    <Tag
      ref={ref}
      className={`hover-spotlight ${className}`.trim()}
      onMouseMove={handleMove}
      {...props}
    >
      <span className="hover-spotlight-layer" aria-hidden="true" />
      {children}
    </Tag>
  );
};
