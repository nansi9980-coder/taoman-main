import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';
import { useLanguage } from '../context/LanguageContext';
import { getServiceDetailTranslations, getStaticServiceDetail } from '../i18n/serviceDetail';
import { localizeServiceCards } from '../utils/localizeServiceCards';
import { PageHeroEnhanced } from '../components/PageHeroEnhanced';
import { Reveal } from '../components/Reveal';
import { MagneticButton } from '../components/MagneticButton';
import { PremiumGlowCard } from '../components/PremiumGlowCard';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { HERO_MEDIA_SPECS } from '../constants/heroMedia';
import { BRAND_NAME } from '../constants/branding';

export const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getServiceDetailTranslations(language);
  const [service, setService] = useState(null);

  useEffect(() => {
    const localService = getStaticServiceDetail(serviceId, language);
    if (localService) {
      setService(localService);
      return;
    }

    fetch(`${API_URL}/content/services/${serviceId}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.title) {
          const [mapped] = localizeServiceCards([data], language);
          setService({
            title: mapped?.title || data.title,
            location: data.location || 'Lomé',
            description: mapped?.description || data.description || data.summary || t.loading,
            features: mapped?.features || data.features || [],
            details: data.details || [],
          });
        }
      })
      .catch((err) => console.error('Erreur fetch service:', err));
  }, [serviceId, language, t.loading]);

  const quotePath = () => {
    const title = (service?.title || '').toLowerCase();
    if (title.includes('lavage')) return '/lavage-auto/devis';
    if (title.includes('déménagement') || title.includes('demenagement')) return '/demenagement/devis';
    if (title.includes('climatisation')) return '/entretien/climatisation';
    if (title.includes('bureaux')) return '/entretien/bureaux';
    return '/contact';
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-6 py-20">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
          <p className="text-on-surface-variant">{t.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <PageHeroEnhanced
          photoProps={{
            src: HERO_MEDIA_SPECS.services.src,
            objectPosition: HERO_MEDIA_SPECS.services.objectPosition,
            overlayVariant: HERO_MEDIA_SPECS.services.overlayVariant,
            overlayIntensity: 'strong',
          }}
          title={service.title}
          description={service.description}
          align="center"
          contentClassName="px-4 py-8 md:px-10 md:py-10 rounded-3xl bg-[#020d1a]/45 backdrop-blur-md border border-white/10 shadow-2xl max-w-[900px]"
        >
          <MagneticButton
            onClick={() => navigate(quotePath())}
            className="px-8 py-4 bg-white text-primary rounded-2xl shadow-xl"
            variant="primary"
          >
            {t.requestQuote}
          </MagneticButton>
        </PageHeroEnhanced>

        <MarqueeTicker
          items={[BRAND_NAME, service.title, service.location, t.availabilityValue].filter(Boolean)}
          speed={28}
        />

        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <Reveal preset="fadeUp">
                <PremiumGlowCard className="rounded-3xl">
                  <div className="p-8">
                    <h2 className="text-3xl font-black text-on-surface mb-6 text-shimmer">{t.detailsTitle}</h2>
                    {service.details.map((detail, idx) => (
                      <p key={idx} className="text-on-surface-variant leading-relaxed mb-4">
                        {detail}
                      </p>
                    ))}
                  </div>
                </PremiumGlowCard>
              </Reveal>

              <Reveal preset="fadeUp" delay={0.1}>
                <div className="rounded-3xl p-8 border border-primary/20 bg-gradient-to-br from-primary/10 to-cyan-50/40 hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0">
                  <h3 className="text-2xl font-black text-on-surface mb-4">{t.keyInfoTitle}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="text-primary text-2xl">📍</span>
                      <div>
                        <p className="text-on-surface font-bold">{t.locationLabel}</p>
                        <p className="text-on-surface-variant">{service.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-primary text-2xl">✅</span>
                      <div>
                        <p className="text-on-surface font-bold">{t.availabilityLabel}</p>
                        <p className="text-on-surface-variant">{t.availabilityValue}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="space-y-8">
              <Reveal preset="fadeLeft">
                <div className="rounded-3xl p-8 bg-white border border-outline-variant/40 shadow-lg hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0">
                  <h3 className="text-2xl font-black text-on-surface mb-6">{t.featuresTitle}</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-black">
                          ✓
                        </span>
                        <span className="text-on-surface-variant">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal preset="fadeLeft" delay={0.12}>
                <PremiumGlowCard className="rounded-3xl">
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-on-surface mb-6">{t.contactTitle}</h3>
                    <p className="text-on-surface-variant mb-4">{t.contactDesc}</p>
                    <MagneticButton
                      onClick={() => navigate('/contact')}
                      className="w-full py-3 bg-primary text-white rounded-xl"
                    >
                      {t.contactCta}
                    </MagneticButton>
                  </div>
                </PremiumGlowCard>
              </Reveal>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
