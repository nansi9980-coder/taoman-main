import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';

export const Header = ({ activeLink = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');
  const location = useLocation();
  const { section } = useSiteContent();

  // Dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDark(savedTheme === 'dark');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const languages = [
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#0a0f1c]/95 backdrop-blur-md border-b border-outline-variant/50">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl group-hover:rotate-12 transition-transform">
              T
            </div>
            <div>
              <span className="font-black text-3xl tracking-tighter text-on-surface dark:text-white">TAOMAN</span>
            </div>
          </Link>

          {/* Navigation Desktop - Police plus grande */}
          <nav className="hidden md:flex items-center gap-10 text-[17px] font-semibold">
            <Link to="/" className={`hover:text-primary transition-colors ${activeLink === 'home' ? 'text-primary' : 'text-on-surface dark:text-white'}`}>
              Accueil
            </Link>
            <Link to="/services" className={`hover:text-primary transition-colors ${activeLink === 'services' ? 'text-primary' : 'text-on-surface dark:text-white'}`}>
              Services
            </Link>
            <Link to="/investissement" className={`hover:text-primary transition-colors ${activeLink === 'investissement' ? 'text-primary' : 'text-on-surface dark:text-white'}`}>
              Investir
            </Link>
            <Link to="/jobs" className={`hover:text-primary transition-colors ${activeLink === 'jobs' ? 'text-primary' : 'text-on-surface dark:text-white'}`}>
              Emplois
            </Link>
            <Link to="/contact" className={`hover:text-primary transition-colors ${activeLink === 'contact' ? 'text-primary' : 'text-on-surface dark:text-white'}`}>
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Langues avec drapeaux */}
            <div className="hidden md:flex items-center border border-outline-variant rounded-full px-1 py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${currentLang === lang.code ? 'bg-primary text-white' : 'hover:bg-surface-container'}`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Dark/Light Mode amélioré */}
            <button
              onClick={toggleDarkMode}
              className="w-11 h-11 flex items-center justify-center rounded-2xl hover:bg-surface-container transition-colors text-2xl"
              title={isDark ? "Mode clair" : "Mode sombre"}
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Bouton Connexion */}
            <Link
              to="/connexion"
              className="hidden md:block px-6 py-3 bg-primary text-white font-semibold rounded-2xl hover:bg-primary-container transition-all active:scale-95"
            >
              Se connecter
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-3xl"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Sous-titre réduit */}
      <div className="border-t border-outline-variant/30 bg-white/80 dark:bg-[#0a0f1c]/80 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-6 py-2.5 text-center">
          <p className="text-sm md:text-[15px] text-on-surface-variant dark:text-gray-400 font-medium">
            La plateforme qui relie capital, services et exécution terrain
          </p>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-[#0a0f1c] py-6 px-6">
          {/* ... menu mobile inchangé ... */}
        </div>
      )}
    </header>
  );
};
