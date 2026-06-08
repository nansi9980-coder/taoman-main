import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import logo from '../assets/logo.png';
import { useTheme } from '../context/ThemeContext';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { mediaUrl } from '../config';
import { NavDropdownDesktop, NavDropdownMobile } from './NavDropdown';
import { getBrandName, BRAND_LINE_1, BRAND_LINE_2 } from '../constants/branding';
import { Flag } from './Flag';
import { DEFAULT_SECTORS, getSectorBySlug } from '../data/sectors-defaults';
import { localizeSector } from '../utils/localizedSector';
import { useSiteFeatures } from '../hooks/useSiteFeatures';

export const Header = ({ activeLink = 'accueil' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const { colorMode, setColorMode } = useTheme();
  const { section } = useSiteContent();
  const { language, setLanguage, languages: languageOptions, languageMeta: currentLanguage, nav: t } = useLanguage();
  const branding = section('branding');
  const logoSrc = branding?.logoUrl ? mediaUrl(branding.logoUrl) : logo;
  const { simulatorPublicVisible } = useSiteFeatures();

  const brandName = getBrandName(language);
  const sectorEntries = [
    { slug: 'logistique-transports', href: '/secteurs/logistique-transports' },
    { slug: 'agro-business', href: '/secteurs/agro-business' },
    { slug: 'commerce-general', href: '/secteurs/commerce-general' },
    { slug: 'btp-immobilier', href: '/secteurs/btp-immobilier' },
    { slug: 'numerique-services', href: '/secteurs/numerique-services' },
    { slug: 'marketing-international', href: '/secteurs/marketing-international' },
    { slug: 'education-financiere', href: '/secteurs/education-financiere' },
  ];
  const navigationItems = useMemo(() => {
    const investChildren = [
      { name: t.tgi, desc: t.tgiDesc, href: '/investissement/tgi' },
      { name: t.investOpportunities, desc: t.investOpportunitiesDesc, href: '/investissement#opportunites' },
      { name: t.investCriteria, desc: t.investCriteriaDesc, href: '/investissement#criteres' },
      { name: t.submitProject, desc: t.submitProjectDesc, href: '/investissement/soumettre' },
      ...(simulatorPublicVisible
        ? [{ name: t.simulator, desc: t.simulatorDesc, href: '/investissement/simulateur' }]
        : []),
    ];

    return [
      { name: t.home, href: '/', key: 'accueil' },
      {
        name: t.about,
        href: '/about',
        key: 'about',
        children: [
          { name: t.profile, desc: t.profileDesc, href: '/about#profile' },
          { name: t.governance, desc: t.governanceDesc, href: '/about#governance' },
          { name: t.institutionalContact, desc: t.institutionalContactDesc, href: '/contact' },
        ],
      },
      {
        name: t.projects,
        href: '/secteurs',
        key: 'projets',
        children: sectorEntries.map((entry) => {
          const base = getSectorBySlug(entry.slug, DEFAULT_SECTORS);
          const localized = localizeSector(base, language);
          return {
            name: localized?.title || entry.slug,
            desc: localized?.short || '',
            href: entry.href,
          };
        }),
      },
      {
        name: t.invest,
        href: '/investissement',
        key: 'investissement',
        children: investChildren,
      },
      {
        name: t.services,
        href: '/services',
        key: 'services',
        children: [
          { name: t.allServices, desc: t.allServicesDesc, href: '/services' },
          { name: t.quote, desc: t.quoteDesc, href: '/contact' },
          { name: t.carWash, desc: t.carWashDesc, href: '/lavage-auto/devis' },
          { name: t.moving, desc: t.movingDesc, href: '/demenagement/devis' },
          { name: t.movingPersonnel, desc: t.movingPersonnelDesc, href: '/demenagement/personnels' },
          { name: t.officeCare, desc: t.officeCareDesc, href: '/entretien/bureaux' },
          { name: t.transport, desc: t.transportDesc, href: '/contact?topic=info&service=transport' },
          { name: t.audits, desc: t.auditsDesc, href: '/contact?topic=info&service=audit' },
        ],
      },
      { name: t.contact, href: '/contact', key: 'contact' },
    ];
  }, [t, language, sectorEntries, simulatorPublicVisible]);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error('Erreur parsing user data', e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 overflow-visible transition-all duration-300 ${
        scrolled ? 'header-glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="header-inner mx-auto flex h-20 max-w-[1680px] min-w-0 items-center gap-1 overflow-visible px-3 sm:gap-2 sm:px-5 xl:px-8 transition-all duration-300">
        <Link
          to="/"
          className="interactive group flex shrink-0 items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-[1.02] max-w-[38%] sm:max-w-none motion-reduce:hover:scale-100"
        >
          <img
            src={logoSrc}
            alt={brandName}
            className="h-10 w-auto sm:h-12 object-contain drop-shadow-md"
          />
          <div className="hidden md:block leading-tight min-w-0">
            <p className="text-sm xl:text-base font-black tracking-[0.15em] xl:tracking-[0.2em] text-primary truncate">
              {BRAND_LINE_1}
            </p>
            <p className="text-xs xl:text-sm font-bold text-on-surface-variant truncate hidden xl:block">
              {BRAND_LINE_2}
            </p>
          </div>
        </Link>

        <nav
          className="hidden lg:flex flex-1 min-w-0 items-center justify-center gap-0 overflow-visible px-1"
          aria-label="Navigation principale"
        >
          {navigationItems.map((link) =>
            link.children ? (
              <NavDropdownDesktop
                key={`${link.key}-${link.name}`}
                link={link}
                activeLink={activeLink}
              />
            ) : (
              <Link
                key={`${link.key}-${link.name}`}
                to={link.href}
                className={`nav-link-hover hover-link-shine interactive relative shrink-0 cursor-pointer rounded-full px-3 py-2.5 text-sm font-bold leading-tight transition-all duration-300 xl:text-[15px] whitespace-nowrap motion-reduce:transition-none ${
                  activeLink === link.key
                    ? 'bg-primary/10 text-primary'
                    : 'text-on-surface hover:bg-surface-container-low hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-1.5 xl:gap-2">
          <div className="group relative hidden md:block">
            <button
              type="button"
              className="interactive inline-flex items-center gap-1.5 cursor-pointer rounded-xl border border-outline-variant bg-surface px-2 py-2 text-sm font-bold text-on-surface shadow-sm transition-all duration-300 hover:border-primary hover:text-primary xl:px-3"
              aria-label={t.chooseLanguage}
            >
              <Flag code={currentLanguage.code} className="h-4 w-5 lg:h-4 lg:w-6" />
              <span className="font-mono text-xs font-bold tracking-wide">{language}</span>
            </button>
            <div className="pointer-events-none absolute right-0 top-full z-40 h-3 w-full" aria-hidden="true" />
            <div className="invisible absolute right-0 top-full z-50 mt-2 w-52 origin-top-right scale-95 rounded-2xl border border-outline-variant/40 bg-surface p-2 opacity-0 shadow-2xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none">
              {languageOptions.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`interactive flex items-center gap-2.5 w-full cursor-pointer rounded-xl px-3 py-2 text-left text-sm font-bold transition-colors duration-200 ${
                    language === item.code
                      ? 'bg-primary text-white'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <Flag code={item.code} className="h-4 w-6" />
                  <span className="font-mono text-xs opacity-80">{item.code}</span>
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
            className="interactive inline-flex h-9 cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-outline-variant bg-surface px-2 text-on-surface shadow-sm transition-all duration-300 hover:border-primary sm:px-2.5 xl:h-10 xl:w-10 xl:px-0"
            aria-label={colorMode === 'dark' ? t.lightModeAria : t.darkModeAria}
            title={colorMode === 'dark' ? t.light : t.dark}
          >
            {colorMode === 'dark' ? (
              <Sun className="h-4 w-4 xl:h-5 xl:w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4 xl:h-5 xl:w-5" aria-hidden="true" />
            )}
            <span className="text-xs font-bold xl:hidden">{colorMode === 'dark' ? t.light : t.dark}</span>
          </button>

          {user ? (
            <div className="hidden xl:flex items-center gap-2">
              <div className="interactive flex cursor-pointer items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2 transition-shadow duration-200 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                  {user.firstName
                    ? user.firstName.charAt(0).toUpperCase()
                    : user.email.charAt(0).toUpperCase()}
                </div>
                <span className="text-base font-bold text-on-surface">
                  {user.firstName || t.client}
                </span>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="interactive cursor-pointer text-base font-bold text-error transition-colors hover:underline"
              >
                {t.logout}
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/connexion"
                className="interactive hidden cursor-pointer rounded-xl border-2 border-primary px-2.5 py-2 text-xs font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white md:inline-block xl:px-4 xl:py-2 xl:text-sm"
              >
                {t.login}
              </Link>
              <Link
                to="/inscription"
                className="interactive hidden cursor-pointer rounded-xl bg-gradient-to-r from-primary to-primary-container px-2.5 py-2 text-xs font-bold text-white shadow-md transition-all duration-300 hover:opacity-90 hover:shadow-lg md:inline-block xl:px-4 xl:py-2 xl:text-sm"
              >
                {t.register}
              </Link>
            </>
          )}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={menuOpen}
            className="interactive cursor-pointer p-2 text-on-surface transition-colors hover:text-primary lg:hidden"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant shadow-xl animate-fade-down">
          <nav className="flex flex-col gap-0 p-6">
            {navigationItems.map((link) => (
              <div
                key={`${link.key}-${link.name}`}
                className="border-b border-outline-variant/40 py-2 last:border-b-0"
              >
                <NavDropdownMobile
                  link={link}
                  expanded={mobileExpanded === link.key}
                  onToggle={() =>
                    setMobileExpanded((prev) => (prev === link.key ? null : link.key))
                  }
                  onNavigate={closeMobileMenu}
                />
              </div>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                  <Flag code={language} className="h-4 w-6" />
                </div>
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  className="interactive w-full cursor-pointer rounded-xl border border-outline-variant bg-surface pl-11 pr-3 py-2 text-sm font-bold text-on-surface"
                  aria-label={t.chooseLanguage}
                >
                  {languageOptions.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.code} - {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                className="interactive inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-outline-variant bg-surface px-3 py-2 text-sm font-bold text-on-surface transition-colors hover:border-primary"
                aria-label={colorMode === 'dark' ? t.lightModeAria : t.darkModeAria}
              >
                {colorMode === 'dark' ? (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                )}
                {colorMode === 'dark' ? t.light : t.dark}
              </button>
            </div>
            <div className="border-t border-outline-variant mt-4 pt-4 space-y-2">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                      {user.firstName
                        ? user.firstName.charAt(0).toUpperCase()
                        : user.email.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-bold text-on-surface">
                      {user.firstName || t.client}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="interactive block w-full cursor-pointer py-2.5 text-center text-error font-bold border-2 border-error rounded-lg transition-all hover:bg-error hover:text-white"
                  >
                    {t.logout}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/connexion"
                    className="interactive block w-full cursor-pointer py-2.5 text-center text-primary font-bold border-2 border-primary rounded-lg transition-all duration-300 hover:bg-primary hover:text-white"
                    onClick={closeMobileMenu}
                  >
                    {t.login}
                  </Link>
                  <Link
                    to="/inscription"
                    className="interactive block w-full cursor-pointer py-2.5 text-center bg-primary text-white font-bold rounded-lg transition-all hover:opacity-90"
                    onClick={closeMobileMenu}
                  >
                    {t.register}
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
