import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Colonne 1 - Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary rounded-2xl flex items-center justify-center text-white font-black text-2xl">
                T
              </div>
              <span className="font-black text-3xl tracking-tighter">TAOMAN</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              La plateforme qui relie capital, services et exécution terrain au Togo.
            </p>
          </div>

          {/* Colonne 2 - Navigation */}
          <div>
            <h4 className="font-bold text-on-surface mb-4">Navigation</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-primary transition-colors">Accueil</Link>
              <Link to="/services" className="block hover:text-primary transition-colors">Services</Link>
              <Link to="/investissement" className="block hover:text-primary transition-colors">Investissement</Link>
              <Link to="/jobs" className="block hover:text-primary transition-colors">Emplois</Link>
            </div>
          </div>

          {/* Colonne 3 - Services */}
          <div>
            <h4 className="font-bold text-on-surface mb-4">Services</h4>
            <div className="space-y-2 text-sm">
              <Link to="/lavage-auto/devis" className="block hover:text-primary transition-colors">Lavage Auto</Link>
              <Link to="/demenagement/devis" className="block hover:text-primary transition-colors">Déménagement</Link>
              <Link to="/entretien/bureaux" className="block hover:text-primary transition-colors">Entretien Bureaux</Link>
              <Link to="/entretien/climatisation" className="block hover:text-primary transition-colors">Climatisation</Link>
            </div>
          </div>

          {/* Colonne 4 - Contact & Légal */}
          <div>
            <h4 className="font-bold text-on-surface mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-on-surface-variant">
              <p>Lomé, Togo</p>
              <p>+228 90 00 00 00</p>
              <p>contact@taoman.tg</p>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-on-surface mb-3">Légal</h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/mentions-legales" className="hover:text-primary">Mentions légales</Link>
                <Link to="/confidentialite" className="hover:text-primary">Confidentialité</Link>
                <Link to="/conditions" className="hover:text-primary">Conditions d'utilisation</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-outline-variant text-center text-xs text-on-surface-variant">
          © {new Date().getFullYear()} TAOMAN Groupe Investissement. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

// Export par défaut (au cas où)
export default Footer;
