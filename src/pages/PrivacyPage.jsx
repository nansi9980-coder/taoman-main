import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />

      <main className="flex-grow pt-24">
        {/* ============ HERO ============ */}
        <section className="bg-gradient-to-r from-primary to-primary-container py-16 px-6 text-on-primary">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Politique de Confidentialité</h1>
            <p className="text-xl text-on-primary/90">Comment nous protégeons vos données personnelles</p>
          </div>
        </section>

        {/* ============ CONTENT ============ */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10">

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-on-surface mb-4">1. Collecte des données</h2>
              <p className="text-on-surface-variant leading-relaxed">
                TAOMAN Groupe Investissement collecte des données personnelles lorsque vous utilisez nos formulaires
                de contact, de devis ou d'inscription. Ces données incluent notamment votre nom,
                adresse email, numéro de téléphone et toute information que vous nous communiquez
                volontairement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-2xl font-bold text-on-surface mb-4">2. Utilisation des données</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Les données collectées sont utilisées uniquement dans les buts suivants :
              </p>
              <ul className="space-y-2 text-on-surface-variant list-disc list-inside">
                <li>Traitement de vos demandes de services ou de devis</li>
                <li>Gestion de votre compte client</li>
                <li>Envoi d'informations relatives à nos services (avec votre consentement)</li>
                <li>Amélioration de notre site et de nos services</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl font-bold text-on-surface mb-4">3. Conservation des données</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation
                des finalités pour lesquelles elles ont été collectées, dans le respect des
                obligations légales applicables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="text-2xl font-bold text-on-surface mb-4">4. Partage des données</h2>
              <p className="text-on-surface-variant leading-relaxed">
                TAOMAN Groupe Investissement ne vend ni ne loue vos données personnelles à des tiers. Vos données
                ne sont partagées qu'avec les prestataires nécessaires à la réalisation de nos
                services (ex. : traitement des paiements), et uniquement dans ce cadre strict.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h2 className="text-2xl font-bold text-on-surface mb-4">5. Vos droits</h2>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Conformément à la réglementation en vigueur, vous disposez des droits suivants
                concernant vos données personnelles :
              </p>
              <ul className="space-y-2 text-on-surface-variant list-disc list-inside">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement (droit à l'oubli)</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit à la portabilité de vos données</li>
              </ul>
              <p className="text-on-surface-variant leading-relaxed mt-4">
                Pour exercer ces droits, contactez-nous à{' '}
                <a href="mailto:taomancontact@gmail.com" className="text-primary font-bold hover:underline">
                  taomancontact@gmail.com
                </a>.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <h2 className="text-2xl font-bold text-on-surface mb-4">6. Cookies</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Notre site peut utiliser des cookies pour améliorer votre expérience de navigation.
                Vous pouvez à tout moment désactiver les cookies via les paramètres de votre
                navigateur. Le refus des cookies peut limiter certaines fonctionnalités du site.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};