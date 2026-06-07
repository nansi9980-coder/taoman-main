import { useState, useRef } from 'react';

/** Comparateur avant / après par glissière. */
export const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  className = '',
}) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const updateFromEvent = (clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div
      ref={containerRef}
      className={`before-after relative overflow-hidden rounded-[2rem] select-none touch-none ${className}`.trim()}
      onPointerMove={(e) => e.buttons > 0 && updateFromEvent(e.clientX)}
      onPointerDown={(e) => {
        containerRef.current?.setPointerCapture(e.pointerId);
        updateFromEvent(e.clientX);
      }}
    >
      <img src={afterSrc} alt={afterLabel} className="block w-full h-full object-cover" draggable={false} />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img src={beforeSrc} alt={beforeLabel} className="block w-full h-full object-cover" draggable={false} />
      </div>
      <div className="absolute inset-y-0 z-10 flex items-center" style={{ left: `${position}%`, transform: 'translateX(-50%)' }}>
        <div className="before-after__handle flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border-2 border-primary text-primary font-black text-xs">
          ↔
        </div>
      </div>
      <span className="absolute top-4 left-4 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white backdrop-blur">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white backdrop-blur">
        {afterLabel}
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="before-after__range absolute inset-0 z-20 w-full h-full opacity-0 cursor-ew-resize"
        aria-label={`${beforeLabel} / ${afterLabel}`}
      />
    </div>
  );
};
