import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Truck } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DevisPageHero } from '../components/DevisPageHero';
import { SeoHead } from '../components/SeoHead';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';
import { getServicesTranslations } from '../i18n/services';

export const TransportDevisPage = () => {
  const { language, translations: tc } = useLanguage();
  const tSeo = tc?.transport || {};
  const tServ = getServicesTranslations(language);
  const item = tServ.items?.find((s) => s.id === 'transport');
  const detail = tServ.detailed?.items?.find((s) => s.id === 'transport');

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tSeo.hero?.title || 'Devis transport & livraison'}
        description={tSeo.seoDescription}
        path="/transport/devis"
        keywords="transport Lomé, livraison Togo, logistique CEDEAO, flotte camions, TAOMAN GROUP INVESTMENTS"
      />
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <DevisPageHero sectionKey="devisTransport" i18nNamespace="transport" />

        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal preset="fadeUp">
              <div className="bg-white rounded-[2rem] shadow-lg border border-outline-variant/30 p-8 md:p-10">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6">
                  <Truck className="h-7 w-7" strokeWidth={2.2} />
                </div>
                <h2 className="text-3xl font-black text-on-surface mb-4">{detail?.title || item?.title}</h2>
                <p className="text-on-surface-variant leading-relaxed mb-8">{detail?.intro || item?.description}</p>
                <ul className="space-y-4">
                  {(detail?.points || item?.bullets || []).map((point) => (
                    <li key={point} className="flex items-start gap-3 text-on-surface">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal preset="fadeUp" delay={0.1}>
              <div className="bg-gradient-to-br from-[#07111f] to-primary-container rounded-[2rem] p-8 md:p-10 text-white shadow-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-200 mb-3">
                  {item?.badge || 'Flotte propre'}
                </p>
                <h3 className="text-2xl font-black mb-4">{tServ.labels?.requestQuoteCta || 'Demander un devis'}</h3>
                <p className="text-white/85 leading-relaxed mb-6">
                  {item?.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                    <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">{tServ.labels?.timeLabel}</p>
                    <p className="font-black mt-1">{item?.sla}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4 border border-white/10">
                    <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">{tServ.labels?.priceLabel}</p>
                    <p className="font-black mt-1">{item?.priceFrom}</p>
                  </div>
                </div>
                <Link
                  to="/contact?topic=info&service=transport"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-[#07111f] hover:scale-[1.02] transition-transform"
                >
                  {tSeo.ctaContact || tServ.labels?.requestQuoteCta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
