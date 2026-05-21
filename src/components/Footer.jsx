import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-3xl">
                T
              </div>
              <span className="font-black text-3xl tracking-tighter">TAOMAN</span>
            </div>
            <p className="text-on-surface-variant max-w-xs">
              La plateforme qui relie capital, services et exécution terrain.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <div className="space-y-3 text-sm">
              <Link to="/" className="block hover:text-primary">Accueil</Link>
              <Link to="/services" className="block hover:text-primary">Services</Link>
              <Link to="/investissement" className="block hover:text-primary">Investir</Link>
              <Link to="/jobs" className="block hover:text-primary">Emplois</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <div className="space-y-3 text-sm">
              <Link to="/lavage-auto/devis" className="block hover:text-primary">Lavage Auto</Link>
              <Link to="/demenagement/devis" className="block hover:text-primary">Déménagement</Link>
              <Link to="/entretien/bureaux" className="block hover:text-primary">Entretien Bureaux</Link>
              <Link to="/entretien/climatisation" className="block hover:text-primary">Climatisation</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <p>Lomé, Togo</p>
              <p>+228 XX XX XX XX</p>
              <p>contact@taoman.tg</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t text-center text-xs text-on-surface-variant">
          © 2025 TAOMAN Groupe Investissement. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
