import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const TermsConditionsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="about" />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-white">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nos Termes & Conditions</h1>
            <p className="text-xl text-white/90">Conditions d'utilisation de nos services</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-12 space-y-8 animate-fade-in-up">
              
              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">1. Acceptation des Conditions</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  En accédant et en utilisant ce site web, vous acceptez d'être lié par ces termes et conditions. Si vous n'acceptez pas les termes énoncés ici, veuillez ne pas utiliser ce site.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">2. Utilisation du Site</h2>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Vous vous engagez à utiliser ce site uniquement à des fins légales et de manière à ne pas violer les droits d'autrui ou à restreindre leur utilisation et leur plaisir du site web. Le comportement prohibé comprend :
                </p>
                <ul className="list-disc list-inside space-y-2 text-on-surface-variant">
                  <li>Harceler ou causer de la détresse ou de la gêne</li>
                  <li>Transmettre des messages obscènes ou offensants</li>
                  <li>Perturber le flux normal de la conversation</li>
                  <li>Utiliser un langage violent</li>
                  <li>Transmettre du contenu sexuellement explicite ou violent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">3. Contenu Utilisateur</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Vous conservez tous les droits relatifs au contenu que vous soumettez, publiez ou affichez sur ou via ce site (ci-après dénommé "Contenu utilisateur"). En soumettant, en publiant ou en affichant du contenu utilisateur, vous accordez à TAOMAN-GROUPE une licence mondiale, non exclusive, gratuite et libre de droits d'auteur.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">4. Limitation de Responsabilité</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  TAOMAN-GROUPE ne sera pas responsable des dommages directs, indirects, spéciaux, consécutifs ou punitifs résultant de votre utilisation du site ou de votre incapacité à utiliser le site ou le contenu, même si TAOMAN-GROUPE a été averti de la possibilité de tels dommages.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">5. Services et Tarifs</h2>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Les services offerts par TAOMAN-GROUPE sont décrits sur ce site. Nous nous réservons le droit de modifier les services et les tarifs sans préavis. Toute modification des tarifs sera effective après une période de notification appropriée.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">6. Investissements</h2>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  Les investissements offerts par TAOMAN-GROUPE comportent des risques. Les performances passées ne garantissent pas les résultats futurs. Avant d'investir, consultez nos documents d'information et demandez des conseils à un professionnel financier qualifié.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  TAOMAN-GROUPE ne peut garantir des rendements spécifiques. Les rendements potentiels sont basés sur des projections et des conditions de marché hypothétiques.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">7. Confidentialité des Données</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  TAOMAN-GROUPE prend la protection de vos données personnelles au sérieux. Consultez notre Politique de Confidentialité pour comprendre comment nous collectons, utilisons et protégeons vos informations.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">8. Propriété Intellectuelle</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Tout le contenu de ce site web, y compris les textes, les graphiques, les logos, les images et les logiciels, est la propriété de TAOMAN-GROUPE ou de ses fournisseurs de contenu et est protégé par les lois internationales sur le droit d'auteur.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">9. Liens vers des Sites Tiers</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Ce site web peut contenir des liens vers d'autres sites web. TAOMAN-GROUPE n'est pas responsable du contenu, de la précision ou des pratiques de ces sites externes. Nous vous encourageons à lire les conditions d'utilisation et les politiques de confidentialité de tout site tiers avant de visiter.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">10. Modifications des Conditions</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  TAOMAN-GROUPE se réserve le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur immédiatement après leur publication sur le site. Votre utilisation continue du site signifie votre acceptation des conditions modifiées.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">11. Droit Applicable</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Ces conditions et conditions sont régies par et construites selon les lois du Togo, et vous acceptez irrévocablement la juridiction des tribunaux dans ce domaine.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-on-surface mb-4">12. Contact</h2>
                <p className="text-on-surface-variant leading-relaxed">
                  Pour toute question concernant ces Termes et Conditions, veuillez nous contacter à:
                </p>
                <div className="mt-4 p-6 bg-gradient-to-r from-primary/10 to-primary-container/10 rounded-xl border border-primary/20">
                  <p className="text-on-surface font-bold">TAOMAN-GROUPE</p>
                  <p className="text-on-surface-variant">Email: taomancontact@gmail.com</p>
                  <p className="text-on-surface-variant">Téléphone: +228 91535682</p>
                  <p className="text-on-surface-variant">Adresse: Adewi, Lomé, Togo</p>
                </div>
              </section>

              <div className="pt-8 border-t border-outline/20">
                <p className="text-sm text-on-surface-variant text-center">
                  Dernière mise à jour: 11 mai 2026 | Copyright © 2026 TAOMAN-GROUPE. Tous droits réservés.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
