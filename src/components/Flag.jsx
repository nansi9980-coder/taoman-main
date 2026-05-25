/**
 * Composant Flag — drapeaux SVG inline (zéro dépendance externe).
 * Compatible Windows, macOS, Linux. Pas de problème de rendu d'émoji.
 *
 * Usage : <Flag code="FR" className="h-4 w-6" />
 */

const flags = {
  FR: (
    <svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="2" height="4" fill="#0055A4" />
      <rect x="2" width="2" height="4" fill="#FFFFFF" />
      <rect x="4" width="2" height="4" fill="#EF4135" />
    </svg>
  ),
  EN: (
    <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <clipPath id="flag-gb-t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#flag-gb-t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  ),
  ES: (
    <svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="6" height="4" fill="#AA151B" />
      <rect y="1" width="6" height="2" fill="#F1BF00" />
    </svg>
  ),
  PT: (
    <svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="6" height="4" fill="#FF0000" />
      <rect width="2.4" height="4" fill="#006600" />
      <circle cx="2.4" cy="2" r="0.6" fill="#FFCC00" stroke="#FFFFFF" strokeWidth="0.06" />
    </svg>
  ),
  DE: (
    <svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="6" height="4" fill="#000000" />
      <rect y="1.33" width="6" height="1.34" fill="#DD0000" />
      <rect y="2.67" width="6" height="1.33" fill="#FFCC00" />
    </svg>
  ),
  AR: (
    <svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="6" height="4" fill="#006C35" />
      <text x="3" y="2.45" fill="#FFFFFF" fontSize="1.1" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
        ع
      </text>
    </svg>
  ),
  ZH: (
    <svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="6" height="4" fill="#DE2910" />
      <g fill="#FFDE00">
        <polygon points="1.2,0.8 1.42,1.32 1.95,1.32 1.52,1.66 1.69,2.18 1.2,1.85 0.72,2.18 0.88,1.66 0.45,1.32 0.98,1.32" />
        <polygon points="2.3,0.4 2.4,0.6 2.6,0.6 2.45,0.75 2.5,0.95 2.3,0.85 2.1,0.95 2.15,0.75 2,0.6 2.2,0.6" />
        <polygon points="2.8,0.95 2.9,1.15 3.1,1.15 2.95,1.3 3,1.5 2.8,1.4 2.6,1.5 2.65,1.3 2.5,1.15 2.7,1.15" />
        <polygon points="2.8,1.85 2.9,2.05 3.1,2.05 2.95,2.2 3,2.4 2.8,2.3 2.6,2.4 2.65,2.2 2.5,2.05 2.7,2.05" />
        <polygon points="2.3,2.35 2.4,2.55 2.6,2.55 2.45,2.7 2.5,2.9 2.3,2.8 2.1,2.9 2.15,2.7 2,2.55 2.2,2.55" />
      </g>
    </svg>
  ),
};

export const Flag = ({ code, className = 'h-4 w-6' }) => {
  const flag = flags[code];
  if (!flag) return null;
  return (
    <span
      className={`inline-block overflow-hidden rounded-sm ring-1 ring-black/10 shadow-sm shrink-0 ${className}`}
      aria-hidden="true"
    >
      {flag}
    </span>
  );
};
