/** Formes décoratives flottantes (hero / sections sombres). */
export const FloatingDecor = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`.trim()} aria-hidden="true">
    <span className="floating-shape floating-shape--ring w-24 h-24 top-[12%] right-[8%] animate-float-slow" />
    <span className="floating-shape floating-shape--ring w-16 h-16 bottom-[20%] left-[6%] animate-float-delay" />
    <span className="floating-shape floating-shape--dot w-3 h-3 top-[35%] left-[18%] animate-float" />
    <span className="floating-shape floating-shape--dot w-2 h-2 bottom-[30%] right-[22%] animate-float-slow" />
  </div>
);
