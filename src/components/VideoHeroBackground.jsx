/**
 * Arrière-plan vidéo cinématique pour le hero.
 * Vidéo locale : public/video/Hero.mp4
 * Fallback SVG animé si la vidéo ne se charge pas.
 */

import { useRef, useEffect, useState } from 'react';

export const VideoHeroBackground = ({
  src = '/video/Hero.mp4',
  poster = '/images/hero-logistics-bg.png',
  overlay = true,
  overlayIntensity = 'strong',
  overlayVariant = 'left',
}) => {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.play().catch(() => setVideoError(true));
  }, []);

  const overlayMap = {
    light: 'from-[#020d1a]/60 via-[#020d1a]/40 to-[#020d1a]/70',
    medium: 'from-[#020d1a]/75 via-[#020d1a]/55 to-[#020d1a]/80',
    strong: 'from-[#020d1a]/85 via-[#020d1a]/65 to-[#020d1a]/90',
  };
  const overlayClass = overlayMap[overlayIntensity] || overlayMap.strong;

  const horizontalOverlay =
    overlayVariant === 'center'
      ? 'from-[#020d1a]/88 via-[#020d1a]/72 to-[#020d1a]/88'
      : 'from-[#020d1a]/96 via-[#020d1a]/82 to-[#020d1a]/52';

  return (
    <div className="absolute inset-0 overflow-hidden -z-0" aria-hidden="true">
      {!videoError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          onCanPlayThrough={() => setVideoReady(true)}
          onError={() => setVideoError(true)}
        />
      )}

      {(!videoReady || videoError) && (
        <svg
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <radialGradient id="hg1" cx="30%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#0e4a7a" />
              <stop offset="100%" stopColor="#020d1a" />
            </radialGradient>
            <radialGradient id="hg2" cx="80%" cy="70%" r="50%">
              <stop offset="0%" stopColor="#0a3d62" />
              <stop offset="100%" stopColor="#020d1a" stopOpacity="0" />
            </radialGradient>
            <filter id="blur-city">
              <feGaussianBlur stdDeviation="1.5" />
            </filter>
          </defs>

          <rect width="1440" height="900" fill="url(#hg1)" />
          <rect width="1440" height="900" fill="url(#hg2)" />

          <g stroke="#1e6fa8" strokeWidth="0.4" opacity="0.25">
            {[...Array(14)].map((_, i) => (
              <line key={`v${i}`} x1={i * 110} y1="0" x2={i * 110} y2="900" />
            ))}
            {[...Array(9)].map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 100} x2="1440" y2={i * 100} />
            ))}
          </g>

          <g fill="#0a2540" filter="url(#blur-city)">
            <rect x="0" y="640" width="80" height="260" />
            <rect x="70" y="600" width="120" height="300" />
            <rect x="180" y="660" width="60" height="240" />
            <rect x="230" y="580" width="100" height="320" />
            <rect x="320" y="620" width="80" height="280" />
            <rect x="390" y="560" width="130" height="340" />
            <rect x="510" y="630" width="70" height="270" />
            <rect x="570" y="540" width="160" height="360" />
            <rect x="720" y="600" width="90" height="300" />
            <rect x="800" y="550" width="140" height="350" />
            <rect x="930" y="620" width="80" height="280" />
            <rect x="1000" y="570" width="110" height="330" />
            <rect x="1100" y="640" width="70" height="260" />
            <rect x="1160" y="580" width="130" height="320" />
            <rect x="1280" y="610" width="90" height="290" />
            <rect x="1360" y="650" width="80" height="250" />
          </g>

          {[
            [120, 80], [340, 160], [600, 90], [820, 200], [1100, 120],
            [1300, 80], [200, 300], [500, 350], [900, 280], [1200, 320],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="2" fill="#67e8f9" opacity="0.7">
              <animate
                attributeName="opacity"
                values="0.7;0.2;0.7"
                dur={`${2 + (i % 4)}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

          <g stroke="#67e8f9" strokeWidth="0.6" opacity="0.15">
            <line x1="120" y1="80" x2="340" y2="160" />
            <line x1="340" y1="160" x2="600" y2="90" />
            <line x1="600" y1="90" x2="820" y2="200" />
            <line x1="820" y1="200" x2="1100" y2="120" />
            <line x1="1100" y1="120" x2="1300" y2="80" />
            <line x1="200" y1="300" x2="500" y2="350" />
            <line x1="500" y1="350" x2="900" y2="280" />
            <line x1="900" y1="280" x2="1200" y2="320" />
          </g>
        </svg>
      )}

      {overlay && (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${overlayClass} pointer-events-none`} />
          <div className={`absolute inset-0 bg-gradient-to-r ${horizontalOverlay} pointer-events-none`} />
        </>
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, transparent 49%, rgba(125,211,252,0.03) 50%, transparent 51%)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  );
};

export default VideoHeroBackground;
