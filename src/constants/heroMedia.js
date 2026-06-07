/**
 * Spécifications médias hero — format paysage 16:9 recommandé pour toutes les pages.
 *
 * Télécharger / exporter en :
 *   - Images : 1920 × 1080 px, JPG qualité 80, 150–400 Ko max
 *   - Vidéo accueil : 1920 × 1080 px, MP4 H.264, 15–30 s, 5–8 Mo max
 *
 * Cadrage : laisser de l'espace sombre ou neutre à gauche si le texte est aligné à gauche.
 */
export const HERO_MEDIA_SPECS = {
  homeVideo: {
    src: '/video/Hero.mp4',
    poster: '/images/hero-logistics-bg.png',
    objectPosition: 'center center',
    export: { width: 1920, height: 1080, format: 'MP4 H.264', maxSizeMB: 5, durationSec: '15-30' },
  },
  about: {
    src: '/images/Apropos.png',
    objectPosition: '70% center',
    overlayVariant: 'left',
    export: { width: 1920, height: 1080, format: 'JPG', maxSizeKB: 350, note: 'Sujet à droite, zone libre à gauche pour le texte' },
  },
  contact: {
    src: '/images/Contact.jpg',
    objectPosition: 'center 35%',
    overlayVariant: 'center',
    export: { width: 1920, height: 1080, format: 'JPG', maxSizeKB: 400, note: 'Sujet centré' },
  },
  investment: {
    src: '/images/investissements.jpg',
    objectPosition: 'center 35%',
    overlayVariant: 'center',
    export: { width: 1920, height: 1080, format: 'JPG', maxSizeKB: 350, note: 'Sujet centré' },
  },
  services: {
    src: '/images/services.jpg',
    objectPosition: '75% center',
    overlayVariant: 'left',
    export: { width: 1920, height: 1080, format: 'JPG', maxSizeKB: 350, note: 'Sujet à droite (slider à droite)' },
  },
  /** Heroes vidéo des pages devis / services (sectionKey CMS). */
  serviceHeroes: {
    devisLavage: {
      video: '/video/lavage-auto.mp4',
      poster: '/realisations/lavage1.jpg',
      objectPosition: 'center center',
      overlayVariant: 'center',
      fallbackSources: ['/video/lavage-auto.mp4', '/video/Hero.mp4'],
      export: { width: 1920, height: 1080, format: 'MP4 H.264', maxSizeMB: 8, durationSec: '10-20', note: 'Lavage auto, cadrage centré' },
    },
    devisDemenagement: {
      video: '/video/Hero.mp4',
      poster: '/realisations/transport2.jpg',
      objectPosition: 'center center',
      overlayVariant: 'center',
      fallbackSources: ['/video/Hero.mp4', '/video/Hero2.mp4'],
      export: { width: 1920, height: 1080, format: 'MP4 H.264', maxSizeMB: 8, durationSec: '15-30', note: 'Logistique / camions' },
    },
    devisBureaux: {
      video: '/video/bureaux.mp4',
      poster: '/images/hero-office-bg.png',
      objectPosition: 'center center',
      overlayVariant: 'center',
      fallbackSources: ['/video/bureaux.mp4', '/video/Hero2.mp4', '/video/Hero.mp4'],
      export: { width: 1920, height: 1080, format: 'MP4 H.264', maxSizeMB: 8, durationSec: '10-20', note: 'Bureaux / entretien pro' },
    },
    devisClimatisation: {
      video: '/video/Hero2.mp4',
      poster: '/realisations/mecanique2.jpg',
      objectPosition: 'center center',
      overlayVariant: 'center',
      fallbackSources: ['/video/Hero2.mp4', '/video/Hero.mp4'],
      export: { width: 1920, height: 1080, format: 'MP4 H.264', maxSizeMB: 8, durationSec: '10-20', note: 'Climatisation / technique' },
    },
  },
  projects: {
    src: '/images/projet.jpg',
    objectPosition: 'center 35%',
    overlayVariant: 'center',
    export: { width: 1920, height: 1080, format: 'JPG', maxSizeKB: 350, note: 'Sujet centré' },
  },
};
