/**
 * Fond vidéo hero — lecture fiable (autoplay, repli, poster).
 */

import { useRef, useEffect, useCallback, useState } from 'react';
import { Play } from 'lucide-react';

const DEFAULT_SOURCES = ['/video/Hero.mp4', '/video/Hero2.mp4'];

export const VideoHeroBackground = ({
  src = '/video/Hero.mp4',
  poster = '/images/hero-logistics-bg.png',
  objectPosition = 'center center',
  overlay = true,
  overlayIntensity = 'strong',
  overlayVariant = 'left',
  fallbackSources = DEFAULT_SOURCES,
  playLabel = 'Lancer la vidéo',
}) => {
  const videoRef = useRef(null);
  const sources = fallbackSources?.length ? fallbackSources : [src];
  const [sourceIdx, setSourceIdx] = useState(() => Math.max(0, sources.indexOf(src)));
  const [failed, setFailed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [needsPlay, setNeedsPlay] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const showVideo = !reduceMotion && !failed;

  const currentSrc = sources[sourceIdx] ?? src;

  const playVideo = useCallback(() => {
    const el = videoRef.current;
    if (!el || failed) return;
    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;
    el.setAttribute('playsinline', '');
    el.setAttribute('webkit-playsinline', '');
    const attempt = el.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt
        .then(() => setNeedsPlay(false))
        .catch(() => setNeedsPlay(true));
    }
  }, [failed]);

  const handleManualPlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = true;
    el.play()
      .then(() => setNeedsPlay(false))
      .catch(() => setNeedsPlay(true));
  };

  useEffect(() => {
    if (!showVideo) return undefined;
    const el = videoRef.current;
    if (!el) return undefined;

    el.src = currentSrc;
    el.load();
    setNeedsPlay(false);
    playVideo();

    const onReady = () => playVideo();
    const onPause = () => {
      if (!el.ended && el.currentTime > 0) setNeedsPlay(true);
    };
    const onPlaying = () => setNeedsPlay(false);
    el.addEventListener('loadeddata', onReady);
    el.addEventListener('canplay', onReady);
    el.addEventListener('pause', onPause);
    el.addEventListener('playing', onPlaying);

    const onVisibility = () => {
      if (document.visibilityState === 'visible') playVideo();
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pointerdown', playVideo, { passive: true });
    window.addEventListener('touchstart', playVideo, { passive: true });

    return () => {
      el.removeEventListener('loadeddata', onReady);
      el.removeEventListener('canplay', onReady);
      el.removeEventListener('pause', onPause);
      el.removeEventListener('playing', onPlaying);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointerdown', playVideo);
      window.removeEventListener('touchstart', playVideo);
    };
  }, [currentSrc, playVideo, showVideo]);

  const onVideoError = () => {
    if (sourceIdx < sources.length - 1) {
      setFailed(false);
      setSourceIdx((i) => i + 1);
      return;
    }
    setFailed(true);
  };

  const overlayMap = {
    light: 'from-[#020d1a]/50 via-[#020d1a]/35 to-[#020d1a]/55',
    medium: 'from-[#020d1a]/65 via-[#020d1a]/45 to-[#020d1a]/70',
    strong: 'from-[#020d1a]/75 via-[#020d1a]/55 to-[#020d1a]/80',
    max: 'from-[#020d1a]/88 via-[#020d1a]/78 to-[#020d1a]/90',
  };
  const overlayClass = overlayMap[overlayIntensity] || overlayMap.strong;

  const horizontalOverlay =
    overlayVariant === 'center'
      ? overlayIntensity === 'max'
        ? 'from-[#020d1a]/92 via-[#020d1a]/82 to-[#020d1a]/92'
        : 'from-[#020d1a]/80 via-[#020d1a]/60 to-[#020d1a]/80'
      : 'from-[#020d1a]/88 via-[#020d1a]/70 to-[#020d1a]/45';

  return (
    <div className="absolute inset-0 overflow-hidden z-0 hero-video-shell" aria-hidden="true">
      {/* Poster de secours si toutes les sources échouent */}
      {(failed || reduceMotion) && poster && (
        <img
          src={poster}
          alt=""
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          style={{ objectPosition }}
          loading="eager"
          decoding="async"
        />
      )}

      {showVideo && (
        <video
          ref={videoRef}
          src={currentSrc}
          className="absolute inset-0 z-[1] h-full w-full object-cover hero-video-layer"
          style={{ objectPosition }}
          poster={poster}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          onLoadedData={playVideo}
          onCanPlayThrough={playVideo}
          onError={onVideoError}
        />
      )}

      <div className="hero-video-grain z-[2]" />
      <div className="hero-video-vignette z-[2]" />
      <div className="scan-line-effect z-[2]" />
      <div className="hero-video-orb hero-video-orb-a z-[2]" />
      <div className="hero-video-orb hero-video-orb-b z-[2]" />

      {overlay && (
        <>
          <div className={`absolute inset-0 z-[3] bg-gradient-to-br ${overlayClass} pointer-events-none`} />
          <div className={`absolute inset-0 z-[3] bg-gradient-to-r ${horizontalOverlay} pointer-events-none`} />
        </>
      )}

      {showVideo && needsPlay && !failed && (
        <button
          type="button"
          onClick={handleManualPlay}
          className="absolute bottom-6 right-6 z-[8] inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#020d1a]/70 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-[#020d1a]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
          aria-label={playLabel}
        >
          <Play className="h-4 w-4 fill-current" />
          {playLabel}
        </button>
      )}
    </div>
  );
};

export default VideoHeroBackground;
