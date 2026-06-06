import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/HeroCarousel.css';

export const HeroCarousel = ({
  slides = [],
  autoplayDelay = 5000,
  showNavigationButtons = true,
  showPaginationDots = true,
  effect = 'fade' // 'fade', 'slide', 'cube'
}) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const defaultSlides = [
    {
      id: 1,
      imageSrc: '/images/hero-1.jpg',
      imageWebP: '/images/hero-1.webp',
      title: 'Innovation en Data',
      subtitle: 'Transformez vos données en insights stratégiques',
      cta: 'Découvrir'
    },
    {
      id: 2,
      imageSrc: '/images/hero-2.jpg',
      imageWebP: '/images/hero-2.webp',
      title: 'IA & Machine Learning',
      subtitle: 'Solutions intelligentes pour votre business',
      cta: 'Découvrir'
    },
    {
      id: 3,
      imageSrc: '/images/hero-3.jpg',
      imageWebP: '/images/hero-3.webp',
      title: 'Cloud & Infrastructure',
      subtitle: 'Évoluez vers le cloud en confiance',
      cta: 'Découvrir'
    }
  ];

  const carouselSlides = slides.length > 0 ? slides : defaultSlides;

  return (
    <section className="carousel-section">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        autoplay={{ 
          delay: autoplayDelay, 
          disableOnInteraction: false 
        }}
        effect={effect}
        loop
        slidesPerView={1}
        navigation={showNavigationButtons}
        pagination={showPaginationDots ? { clickable: true } : false}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="carousel-swiper"
      >
        {carouselSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="carousel-slide">
              <picture>
                {slide.imageWebP && (
                  <source 
                    srcSet={`${slide.imageWebP} 1x, ${slide.imageWebP.replace('.webp', '-2x.webp')} 2x`}
                    type="image/webp"
                  />
                )}
                <source 
                  srcSet={`${slide.imageSrc} 1x, ${slide.imageSrc.replace('.jpg', '-2x.jpg')} 2x`}
                  type="image/jpeg"
                />
                <img 
                  src={slide.imageSrc}
                  alt={slide.title}
                  className="carousel-slide__img"
                  loading="eager"
                  decoding="async"
                />
              </picture>

              <div className="carousel-slide__overlay"></div>

              <div className="carousel-slide__content">
                <h2 className="carousel-slide__title">{slide.title}</h2>
                <p className="carousel-slide__subtitle">{slide.subtitle}</p>
                <button className="carousel-slide__cta">
                  {slide.cta}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      {showPaginationDots && (
        <div className="carousel-pagination">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => swiperRef.current?.swiper.slideTo(index)}
              aria-label={`Aller à la diapositive ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Scroll indicator */}
      <div className="carousel-scroll-indicator">
        <div className="scroll-line"></div>
        <p>Découvrez nos projets</p>
      </div>
    </section>
  );
};
