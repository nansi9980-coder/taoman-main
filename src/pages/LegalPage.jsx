import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const LegalPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />

      <main className="flex-grow pt-24">
        {/* ============ HERO ============ */}
        <section className="bg-gradient-to-r from-primary to-primary-container py-16 px-6 text-on-primary">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Mentions Légales</h1>
            <p className="text-xl text-on-primary/90">Informations légales de TAOMAN Groupe Investissement</p>
          </div>
        </section>

        {/* ============ CONTENT ============ */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-10">

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-on-surface mb-4">1. Éditeur du site</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Le présent site est édité par <strong>TAOMAN Groupe Investissement</strong>, entreprise de services
                basée à Vakpossito, Lomé, Togo.
              </p>
              <ul className="mt-4 space-y-2 text-on-surface-variant">
                <li><strong>Email :</strong> taomancontact@gmail.com</li>
                <li><strong>Téléphone :</strong> +228 90 42 13 77</li>
                <li><strong>Adresse :</strong> Vakpossito, Lomé – Togo</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-2xl font-bold text-on-surface mb-4">2. Hébergement</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Le site est hébergé par un prestataire tiers. Pour toute question relative à l'hébergement,
                veuillez nous contacter à l'adresse indiquée ci-dessus.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl font-bold text-on-surface mb-4">3. Propriété intellectuelle</h2>
              <p className="text-on-surface-variant leading-relaxed">
                L'ensemble des contenus présents sur ce site (textes, images, logos, graphiques) est
                la propriété exclusive de TAOMAN Groupe Investissement et est protégé par les lois en vigueur sur
                la propriété intellectuelle. Toute reproduction, même partielle, est strictement
                interdite sans autorisation préalable.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <h2 className="text-2xl font-bold text-on-surface mb-4">4. Limitation de responsabilité</h2>
              <p className="text-on-surface-variant leading-relaxed">
                TAOMAN Groupe Investissement s'efforce d'assurer l'exactitude et la mise à jour des informations
                diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision
                ou l'exhaustivité des informations mises à disposition. En conséquence, TAOMAN Groupe Investissement
                décline toute responsabilité pour toute imprécision ou omission portant sur les
                informations disponibles sur ce site.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant/20 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <h2 className="text-2xl font-bold text-on-surface mb-4">5. Contact</h2>
              <p className="text-on-surface-variant leading-relaxed">
                Pour toute question ou réclamation concernant le présent site, vous pouvez nous
                contacter via notre{' '}
                <a href="/contact" className="text-primary font-bold hover:underline">
                  page de contact
                </a>.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};