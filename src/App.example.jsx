import React from 'react';
import { HeroVideoSection } from './components/HeroVideoSection';
import { HeroCarousel } from './components/HeroCarousel';
import { ImageGallery } from './components/ImageGallery';
import { useScrollAnimation, useParallax } from './hooks/useScrollAnimation';
import './styles/animations.css';
import './App.css';

// ============================================
// EXEMPLE D'UTILISATION COMPLÈTE
// ============================================

function App() {
  // Hook pour animations au scroll
  const servicesRef = useScrollAnimation({ threshold: 0.2 });
  const parallaxRef = useParallax(50);

  return (
    <div className="App">
      
      {/* ========== SECTION 1: HERO AVEC VIDÉO 4K ========== */}
      <HeroVideoSection
        videoSource="/videos/hero-4k.mp4"
        title="Transformez votre <span>visibilité</span> numérique"
        subtitle="Solutions 4K, animations fluides et performance optimale"
        ctaText="DÉCOUVRIR NOS SERVICES"
        onCtaClick={() => {
          document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* ========== SECTION 2: HERO CAROUSEL 4K ========== */}
      <section className="carousel-wrapper">
        <HeroCarousel
          autoplayDelay={5000}
          showNavigationButtons={true}
          showPaginationDots={true}
          effect="fade"
        />
      </section>

      {/* ========== SECTION 3: SERVICES AVEC ANIMATIONS ========== */}
      <section id="services" className="services-section" ref={servicesRef}>
        <div className="services-container">
          <h2 className="section-title">Nos Services</h2>
          
          <div className="services-grid">
            <ServiceCard
              title="Design 4K"
              description="Images ultra-haute résolution optimisées pour web"
              icon="🎬"
            />
            <ServiceCard
              title="Animations Fluides"
              description="30+ animations réutilisables et performantes"
              icon="✨"
            />
            <ServiceCard
              title="Optimisation Web"
              description="WebP, lazy loading et compression vidéo"
              icon="⚡"
            />
            <ServiceCard
              title="Responsive Design"
              description="Mobile, tablet et desktop perfection"
              icon="📱"
            />
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: GALERIE D'IMAGES 4K ========== */}
      <ImageGallery
        items={[
          {
            id: 1,
            title: 'Projet Digital',
            imageSrc: '/images/gallery-1.jpg',
            imageWebP: '/images/gallery-1.webp',
            description: 'Transformation digitale réussie'
          },
          {
            id: 2,
            title: 'Analytics',
            imageSrc: '/images/gallery-2.jpg',
            imageWebP: '/images/gallery-2.webp',
            description: 'Solutions data-driven'
          },
          {
            id: 3,
            title: 'Cloud',
            imageSrc: '/images/gallery-3.jpg',
            imageWebP: '/images/gallery-3.webp',
            description: 'Migration réussie'
          }
        ]}
      />

      {/* ========== SECTION 5: PARALLAXE ========== */}
      <section className="parallax-section">
        <div ref={parallaxRef} className="parallax-content">
          <img 
            src="/images/parallax-bg.jpg" 
            alt="Parallax Background"
            className="parallax-image"
          />
        </div>
        
        <div className="parallax-text">
          <h2>Section avec Parallaxe</h2>
          <p>Scrollez pour voir l'effet parallaxe en action</p>
        </div>
      </section>

      {/* ========== SECTION 6: CTA FINALE ========== */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Prêt à transformer votre présence numérique?</h2>
          <p>Rejoignez les marques qui utilisent notre plateforme</p>
          <button className="cta-button animate-bounce">
            COMMENCER MAINTENANT
          </button>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <p>&copy; 2024 Taoman. Tous droits réservés.</p>
      </footer>

    </div>
  );
}

// ============================================
// COMPOSANT SERVICE CARD AVEC ANIMATION
// ============================================

function ServiceCard({ title, description, icon }) {
  const ref = useScrollAnimation({ threshold: 0.3 });

  return (
    <div ref={ref} className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;
