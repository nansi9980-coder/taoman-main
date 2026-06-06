/**
 * Arrière-plan vidéo cinématique pour le hero.
 * Vidéo locale : public/video/Hero.mp4
 */

import { useRef, useEffect, useState, useCallback } from 'react';

export const VideoHeroBackground = ({
  src = '/video/Hero.mp4',
  poster = '/images/hero-logistics-bg.png',
  objectPosition = 'center center',
  overlay = true,
  overlayIntensity = 'strong',
  overlayVariant = 'left',
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || videoError) return;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        /* Autoplay bloqué : le poster reste visible */
      });
  }, [videoError]);

  useEffect(() => {
    tryPlay();
  }, [tryPlay]);

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

  const showPoster = !isPlaying || videoError;

  return (
    <div className="absolute inset-0 overflow-hidden z-0" aria-hidden="true">
      {poster && showPoster && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      )}

      {!videoError && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectPosition }}
          poster={poster}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          onLoadedData={tryPlay}
          onCanPlay={tryPlay}
          onPlaying={() => setIsPlaying(true)}
          onError={() => setVideoError(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {videoError && !poster && (
        <svg
          viewBox="0 0 1440 900"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="1440" height="900" fill="#020d1a" />
        </svg>
      )}

      {overlay && (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${overlayClass} pointer-events-none`} />
          <div className={`absolute inset-0 bg-gradient-to-r ${horizontalOverlay} pointer-events-none`} />
        </>
      )}
    </div>
  );
};

export default VideoHeroBackground;
