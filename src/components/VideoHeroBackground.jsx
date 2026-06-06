/**
 * Arrière-plan vidéo cinématique pour le hero.
 * Vidéo locale : public/video/Hero.mp4 (+ repli Hero2.mp4)
 */

import { useRef, useEffect, useState, useCallback } from 'react';

const FALLBACK_SOURCES = ['/video/Hero.mp4', '/video/Hero2.mp4'];

export const VideoHeroBackground = ({
  src = '/video/Hero.mp4',
  poster = '/images/hero-logistics-bg.png',
  objectPosition = 'center center',
  overlay = true,
  overlayIntensity = 'strong',
  overlayVariant = 'left',
  fallbackSources = FALLBACK_SOURCES,
}) => {
  const videoRef = useRef(null);
  const [sourceIndex, setSourceIndex] = useState(() =>
    Math.max(0, fallbackSources.indexOf(src))
  );
  const [mediaReady, setMediaReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  const activeSrc = fallbackSources[sourceIndex] ?? src;

  const tryPlay = useCallback(async () => {
    const video = videoRef.current;
    if (!video || allFailed) return;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.defaultMuted = true;
    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      /* Autoplay bloqué : la vidéo reste visible en pause, poster en dessous */
    }
  }, [allFailed]);

  const handleReady = useCallback(() => {
    setMediaReady(true);
    tryPlay();
  }, [tryPlay]);

  const handleError = useCallback(() => {
    setMediaReady(false);
    setIsPlaying(false);
    if (sourceIndex < fallbackSources.length - 1) {
      setSourceIndex((i) => i + 1);
      return;
    }
    setAllFailed(true);
  }, [sourceIndex, fallbackSources.length]);

  useEffect(() => {
    setMediaReady(false);
    setIsPlaying(false);
    setAllFailed(false);
  }, [activeSrc]);

  useEffect(() => {
    tryPlay();
  }, [activeSrc, tryPlay]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) tryPlay();
      },
      { threshold: 0.15 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [tryPlay, activeSrc]);

  useEffect(() => {
    const resume = () => tryPlay();
    document.addEventListener('visibilitychange', resume);
    window.addEventListener('pointerdown', resume, { once: true, passive: true });
    window.addEventListener('touchstart', resume, { once: true, passive: true });
    return () => {
      document.removeEventListener('visibilitychange', resume);
    };
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

  const showPoster = poster && (!isPlaying || allFailed);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 hero-video-shell" aria-hidden="true">
      <div className="hero-video-grain" />
      <div className="hero-video-vignette" />
      <div className="scan-line-effect z-[2]" />
      <div className="hero-video-orb hero-video-orb-a" />
      <div className="hero-video-orb hero-video-orb-b" />

      {poster && (
        <img
          src={poster}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 hero-ken-burns ${
            showPoster ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition }}
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      )}

      {!allFailed && (
        <video
          key={activeSrc}
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            mediaReady ? 'opacity-100 hero-video-playing' : 'opacity-0'
          }`}
          style={{ objectPosition }}
          poster={poster}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          onLoadedData={handleReady}
          onCanPlay={handleReady}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={handleError}
        >
          <source src={activeSrc} type="video/mp4" />
        </video>
      )}

      {allFailed && !poster && (
        <div className="absolute inset-0 bg-[#020d1a]" />
      )}

      {overlay && (
        <>
          <div className={`absolute inset-0 z-[3] bg-gradient-to-br ${overlayClass} pointer-events-none`} />
          <div className={`absolute inset-0 z-[3] bg-gradient-to-r ${horizontalOverlay} pointer-events-none`} />
        </>
      )}
    </div>
  );
};

export default VideoHeroBackground;
