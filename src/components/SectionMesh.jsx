/** Orbes + lignes diagonales pour sections claires. */
export const SectionMesh = ({ className = '' }) => (
  <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`.trim()} aria-hidden="true">
    <div className="section-mesh-orb section-mesh-orb--1" />
    <div className="section-mesh-orb section-mesh-orb--2" />
    <div className="section-mesh-lines" />
  </div>
);
