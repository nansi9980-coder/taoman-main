import React from 'react';
import '../styles/ImageGallery.css';

export const ImageGallery = ({ items = [] }) => {
  const defaultItems = [
    {
      id: 1,
      title: 'Projet Digital',
      imageSrc: '/images/gallery-1.jpg',
      imageWebP: '/images/gallery-1.webp',
      description: 'Transformation digitale réussie'
    },
    {
      id: 2,
      title: 'Analytics & Data',
      imageSrc: '/images/gallery-2.jpg',
      imageWebP: '/images/gallery-2.webp',
      description: 'Solutions data-driven'
    },
    {
      id: 3,
      title: 'Cloud Innovation',
      imageSrc: '/images/gallery-3.jpg',
      imageWebP: '/images/gallery-3.webp',
      description: 'Migration cloud sécurisée'
    }
  ];

  const galleryItems = items.length > 0 ? items : defaultItems;

  return (
    <section className="image-gallery">
      <div className="image-gallery__header">
        <h2>Nos Réalisations 4K</h2>
        <p>Portfolio de projets high-end avec images ultra-haute résolution</p>
      </div>

      <div className="gallery-container">
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            {/* Format WebP pour meilleure compression, JPG en fallback */}
            <picture>
              {item.imageWebP && (
                <source 
                  srcSet={`${item.imageWebP} 1x, ${item.imageWebP.replace('.webp', '-2x.webp')} 2x`}
                  type="image/webp" 
                />
              )}
              <source 
                srcSet={`${item.imageSrc} 1x, ${item.imageSrc.replace('.jpg', '-2x.jpg')} 2x`}
                type="image/jpeg" 
              />
              <img 
                src={item.imageSrc} 
                alt={item.title}
                className="gallery-item__img"
                loading="lazy"
                decoding="async"
              />
            </picture>

            {/* Overlay */}
            <div className="gallery-item__overlay">
              <div className="gallery-item__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
