import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';

export const Header = ({ activeLink = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { section } = useSiteContent();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-outline-variant">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl">
              T
            </div>
            <span className="font-black text-3xl tracking-tighter">TAOMAN</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className={`hover:text-primary transition-colors ${activeLink === 'home' ? 'text-primary' : ''}`}>
              Accueil
            </Link>
            <Link to="/services" className={`hover:text-primary transition-colors ${activeLink === 'services' ? 'text-primary' : ''}`}>
              Services
            </Link>
            <Link to="/investissement" className={`hover:text-primary transition-colors ${activeLink === 'investissement' ? 'text-primary' : ''}`}>
              Investissement
            </Link>
            <Link to="/jobs" className={`hover:text-primary transition-colors ${activeLink === 'jobs' ? 'text-primary' : ''}`}>
              Emplois
            </Link>
            <Link to="/contact" className={`hover:text-primary transition-colors ${activeLink === 'contact' ? 'text-primary' : ''}`}>
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-5 py-2.5 text-sm font-medium hover:bg-surface-container rounded-xl transition-colors">
              🌐 FR
            </button>

            <button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-surface-container transition-colors">
              🌙
            </button>

            <Link
              to="/connexion"
              className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-2xl hover:bg-primary-container transition-all"
            >
              Se connecter
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white py-6 px-6">
          <div className="flex flex-col gap-6 text-lg">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/investissement" onClick={() => setIsMenuOpen(false)}>Investissement</Link>
            <Link to="/jobs" onClick={() => setIsMenuOpen(false)}>Emplois</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};
