import { BRAND_NAME } from '../constants/branding';
import { MOVING_PERSONNEL_FLEET_ENABLED } from '../constants/serviceVisibility';

export const DEFAULT_QUICK_ACCESS = {
  eyebrow: 'Accès rapide',
  title: 'Toutes les pages en un clic',
  ctaLabel: 'Ouvrir la page →',
  links: [
    { label: 'Contact', href: '/contact' },
    { label: 'Lavage Auto', href: '/lavage-auto/devis' },
    { label: 'Déménagement', href: '/demenagement/devis' },
    { label: 'Entretien bureaux', href: '/entretien/bureaux' },
    ...(MOVING_PERSONNEL_FLEET_ENABLED
      ? [{ label: 'Personnel déménagement', href: '/demenagement/personnels' }]
      : []),
    { label: 'Investissement TGI', href: '/investissement/tgi' },
  ],
};

export const DEFAULT_HERO = {
  badgeMain: `Partenaire stratégique — ${BRAND_NAME}`,
  badges: [],
  title: BRAND_NAME,
  subtitle: 'Investir avec nous au Togo — infrastructures, énergie, agro, logistique et numérique',
  description: `${BRAND_NAME} attire les capitaux, structure des partenariats public-privé et accompagne des projets stratégiques avec reporting transparent et suivi investisseur.`,
  btn1: 'Nous contacter pour investir',
  btn2: 'Se connecter',
  imageCaption: 'Projets suivis sur le terrain',
};
