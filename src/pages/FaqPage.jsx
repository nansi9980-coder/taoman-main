import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useSiteContent } from '../context/SiteContentContext';
import { normalizeItemsSection } from '../utils/siteContent';

export const FaqPage = () => {
  const { section, loading } = useSiteContent();
  const faq = section('faq');
  const items = normalizeItemsSection(faq, []);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="faq" />
      <main className="flex-grow pt-28 px-6 pb-20">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">Questions fréquentes</h1>
          <p className="text-on-surface-variant mb-10">
            Retrouvez les réponses aux questions les plus courantes sur nos services et investissements.
          </p>
          {loading ? (
            <p className="text-on-surface-variant">Chargement...</p>
          ) : items.length === 0 ? (
            <p className="text-on-surface-variant">Aucune question pour le moment.</p>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <details
                  key={index}
                  className="rounded-2xl border border-outline-variant/40 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer font-bold text-on-surface text-lg">
                    {item.question}
                  </summary>
                  <p className="mt-4 text-on-surface-variant leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
