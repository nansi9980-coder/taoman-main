/**
 * Arrière-plan photo pour le hero avec overlays pour la lisibilité du texte.
 */
export const PhotoHeroBackground = ({
  src = '/images/hero-office-bg.png',
  objectPosition = 'center 35%',
  overlayIntensity = 'strong',
}) => {
  const overlayMap = {
    light: {
      horizontal: 'from-[#020d1a]/75 via-[#020d1a]/50 to-[#020d1a]/30',
      vertical: 'from-[#020d1a]/60 via-transparent to-[#020d1a]/25',
    },
    medium: {
      horizontal: 'from-[#020d1a]/88 via-[#020d1a]/68 to-[#020d1a]/40',
      vertical: 'from-[#020d1a]/75 via-transparent to-[#020d1a]/35',
    },
    strong: {
      horizontal: 'from-[#020d1a]/96 via-[#020d1a]/82 to-[#020d1a]/52',
      vertical: 'from-[#020d1a]/88 via-transparent to-[#020d1a]/40',
    },
  };
  const overlay = overlayMap[overlayIntensity] || overlayMap.strong;

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <img
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className={`absolute inset-0 bg-gradient-to-r ${overlay.horizontal}`} />
      <div className={`absolute inset-0 bg-gradient-to-t ${overlay.vertical}`} />
    </div>
  );
};

export default PhotoHeroBackground;
