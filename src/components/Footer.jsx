import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { getBrandName } from '../constants/branding';
import { getFooterTranslations } from '../i18n/navigation';
import { useSiteFeatures } from '../hooks/useSiteFeatures';

export const Footer = () => {
  const { section } = useSiteContent();
  const footer = section('footer');
  const contact = section('contact');
  const isAuthenticated = Boolean(localStorage.getItem('token') && localStorage.getItem('user'));
  const { language } = useLanguage();
  const { simulatorPublicVisible } = useSiteFeatures();

  const t = getFooterTranslations(language);
  const brandName = getBrandName(language);

  const navigationLinks = [
    { name: t.home, href: '/' },
    { name: t.services, href: '/services' },
    { name: t.invest, href: '/investissement' },
    ...(isAuthenticated ? [{ name: t.dashboard, href: '/dashboard' }] : []),
    { name: t.opportunities, href: '/jobs' },
    { name: t.faq, href: '/faq' },
    { name: t.contactLink, href: '/contact' },
    { name: t.about, href: '/about' },
  ];

  const quickLinks = [
    { name: t.carWash, href: '/lavage-auto/devis' },
    { name: t.moving, href: '/demenagement/devis' },
    { name: t.officeCare, href: '/entretien/bureaux' },
    { name: t.movingStaff, href: '/demenagement/personnels' },
    { name: 'Taoman Group Investissement TGI', href: '/investissement/tgi' },
    ...(simulatorPublicVisible ? [{ name: t.simulator, href: '/investissement/simulateur' }] : []),
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-12">
        <div className="group">
          <Link
            to="/"
            aria-label={brandName}
            className="flex items-center gap-5 mb-6 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-3xl motion-reduce:hover:scale-100"
          >
            <img
              src={logo}
              alt={brandName}
              className="h-24 w-24 object-contain bg-white rounded-3xl p-3 shadow-2xl"
              loading="lazy"
              decoding="async"
              width="96"
              height="96"
            />
            <div>
              <h3 className="text-3xl font-black leading-tight">{brandName}</h3>
              <p className="text-sm font-semibold text-outline-variant">{t.tagline}</p>
            </div>
          </Link>
          <p className="text-outline-variant text-sm leading-relaxed">
            {footer.description || t.description}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-surface">{t.navigation}</h4>
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="interactive text-outline-variant hover:text-primary-fixed transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link.name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-surface">{t.quickLinks}</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="interactive text-outline-variant hover:text-primary-fixed transition-all duration-300 hover:translate-x-1 inline-block text-sm"
                >
                  {link.name} →
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4 text-surface">{t.contact}</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm text-outline-variant">{contact.address || 'Agoè Cacaveli, en face de Toganim — Lomé, Togo'}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <a
                href={`tel:${(contact.phone || '+22890421377').replace(/\s/g, '')}`}
                className="text-primary-fixed font-bold hover:text-surface transition-colors"
              >
                {contact.phone || '+228 90 42 13 77'}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">✉️</span>
              <a
                href={`mailto:${contact.email || 'taomancontact@gmail.com'}`}
                className="text-primary-fixed font-bold hover:text-surface transition-colors break-all text-sm"
              >
                {contact.email || 'taomancontact@gmail.com'}
              </a>
            </div>
            <p className="text-sm text-outline-variant">{contact.hours || '24h/24, 7j/7'}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 border-t border-surface-variant/20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="mailto:taomancontact@gmail.com"
              aria-label={`${brandName} — email`}
              className="w-10 h-10 bg-primary-container/20 hover:bg-primary-container rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <span className="text-surface">@</span>
            </a>
            <a
              href="mailto:taomancontact@gmail.com"
              aria-label={`${brandName} — LinkedIn`}
              className="w-10 h-10 bg-primary-container/20 hover:bg-primary-container rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <span className="text-surface">in</span>
            </a>
            <a
              href="tel:+22890421377"
              aria-label={`${brandName} — téléphone`}
              className="w-10 h-10 bg-primary-container/20 hover:bg-primary-container rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <span className="text-surface">tel</span>
            </a>
            <a
              href="/contact"
              aria-label={`${brandName} — contact`}
              className="w-10 h-10 bg-primary-container/20 hover:bg-primary-container rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <span className="text-surface">?</span>
            </a>
          </div>

          <p className="text-center text-outline-variant text-sm">
            © {brandName}. {t.rights}
          </p>

          <div className="flex gap-4 justify-center md:justify-end text-sm">
            <Link to="/mentions-legales" className="text-outline-variant hover:text-primary-fixed transition-colors">
              {t.legal}
            </Link>
            <span className="text-outline-variant">/</span>
            <Link to="/confidentialite" className="text-outline-variant hover:text-primary-fixed transition-colors">
              {t.privacy}
            </Link>
            <span className="text-outline-variant">/</span>
            <Link to="/termes-conditions" className="text-outline-variant hover:text-primary-fixed transition-colors">
              {t.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
