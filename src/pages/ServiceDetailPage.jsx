import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';
import { useLanguage } from '../context/LanguageContext';
import { getServiceDetailTranslations } from '../i18n/serviceDetail';

const staticServices = {
  'taoman-groupe-3240165193': {
    title: 'Aménagement & déménagement',
    location: 'Adewi Lomé',
    description: 'Service complet de déménagement et aménagement pour particuliers et professionnels.',
    features: [
      'Équipe professionnelle',
      'Manutention sécurisée',
      'Transport national et international',
      'Assurance incluse',
    ],
    details: [
      'Des camions modernes et bien équipés pour tous types de déménagements.',
      'Service personnalisé selon vos besoins logistiques.',
      'Personnel formé pour emballage, chargement et déchargement.'
    ]
  },
  'taoman-groupe-8918912275': {
    title: 'Aménagement & déménagement',
    location: 'Agoè Zongo',
    description: 'Service de déménagement professionnel avec véhicules adaptés et personnel dédié.',
    features: [
      'Disponibilité rapide',
      'Équipe de manutention qualifiée',
      'Véhicules sécurisés',
      'Suivi client régulier'
    ],
    details: [
      'Planification de déménagement sur mesure.',
      'Emballage et protection des biens.',
      'Livraison en toute sécurité jusqu’à destination.'
    ]
  }
};

export const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = getServiceDetailTranslations(language);
  const [service, setService] = useState(null);

  useEffect(() => {
    const localService = staticServices[serviceId];
    if (localService) {
      setService(localService);
      return;
    }

    fetch(`${API_URL}/content/services/${serviceId}`)
      .then(res => res.json())
      .then(data => {
        if (data && data.title) {
          setService({
            title: data.title,
            location: data.location || 'Lomé',
            description: data.description || data.summary || 'Service détaillé disponible.',
            features: data.features || [],
            details: data.details || []
          });
        }
      })
      .catch(err => console.error('Erreur fetch service:', err));
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center px-6 py-20">
        <p className="text-on-surface-variant">{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-white">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{service.title}</h1>
            <p className="text-lg text-white/90 mb-6">{service.description}</p>
            <button
              onClick={() => {
                const path = service.title.toLowerCase().includes('lavage')
                  ? '/lavage-auto/devis'
                  : service.title.toLowerCase().includes('déménagement')
                    ? '/demenagement/devis'
                    : service.title.toLowerCase().includes('climatisation')
                      ? '/entretien/climatisation'
                      : service.title.toLowerCase().includes('bureaux')
                        ? '/entretien/bureaux'
                        : '/contact';
                navigate(path);
              }}
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              {t.requestQuote}
            </button>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up">
                <h2 className="text-3xl font-bold text-on-surface mb-6">{t.detailsTitle}</h2>
                {service.details.map((detail, idx) => (
                  <p key={idx} className="text-on-surface-variant leading-relaxed mb-4">{detail}</p>
                ))}
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-3xl p-8 border border-primary/20 animate-fade-in-up">
                <h3 className="text-2xl font-bold text-on-surface mb-4">{t.keyInfoTitle}</h3>
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
            </div>

            <aside className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg animate-fade-in-up">
                <h3 className="text-2xl font-bold text-on-surface mb-6">{t.featuresTitle}</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1 text-primary">•</span>
                      <span className="text-on-surface-variant">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-3xl p-8 border border-primary/20 shadow-lg animate-fade-in-up">
                <h3 className="text-2xl font-bold text-on-surface mb-6">{t.contactTitle}</h3>
                <p className="text-on-surface-variant mb-4">{t.contactDesc}</p>
                <button
                  onClick={() => navigate('/contact')}
                  className="w-full bg-primary text-white rounded-xl py-3 font-bold hover:bg-primary-container transition-all duration-300"
                >
                  {t.contactCta}
                </button>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
