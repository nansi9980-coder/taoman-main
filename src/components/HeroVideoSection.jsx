import React from 'react';
import '../styles/HeroVideoSection.css';

export const HeroVideoSection = ({ 
  videoSource = '/videos/hero-4k.mp4',
  title = 'Transformez votre visibilité numérique',
  subtitle = 'Avec design, innovation et stratégie',
  ctaText = 'EN SAVOIR PLUS',
  onCtaClick = () => {}
}) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-video">
      {/* Vidéo 4K en arrière-plan */}
      <video 
        className="hero-video__bg" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
      </video>

      {/* Overlay semi-transparent avec gradient */}
      <div className="hero-video__overlay"></div>

      {/* Contenu superposé */}
      <div className="hero-video__content">
        <h1 className="hero-video__title">
          {title.split('<span>').map((part, idx) => 
            part.includes('</span>') 
              ? <span key={idx} className="accent">{part.replace('</span>', '')}</span>
              : part
          )}
        </h1>
        <p className="hero-video__subtitle">{subtitle}</p>
        <button 
          className="hero-video__cta"
          onClick={onCtaClick}
        >
          {ctaText}
        </button>
      </div>

      {/* Carousel indicator dots */}
      <div className="hero-video__indicators">
        {[0, 1, 2].map((dot) => (
          <span 
            key={dot}
            className={`dot ${dot === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(dot)}
          ></span>
        ))}
      </div>
    </section>
  );
};
