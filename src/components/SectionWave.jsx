/** Séparateur vague animé entre deux sections. */
export const SectionWave = ({ color = 'var(--color-surface-container-low, #f4f6fb)', flip = false, className = '' }) => (
  <div
    className={`section-wave ${flip ? 'section-wave--flip' : ''} ${className}`.trim()}
    style={{ '--wave-color': color }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="section-wave__svg">
      <path
        fill="currentColor"
        d="M0,48 C240,80 480,16 720,48 C960,80 1200,16 1440,48 L1440,80 L0,80 Z"
      />
    </svg>
  </div>
);
