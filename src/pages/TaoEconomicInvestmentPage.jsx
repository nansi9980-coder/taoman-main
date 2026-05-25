import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useSiteContent } from '../context/SiteContentContext';
import { BRAND_NAME } from '../constants/branding';
import { normalizeSectors } from '../data/sectors-defaults';

const DEFAULT_TGI = {
  title: BRAND_NAME,
  subtitle: 'Bâtissez votre indépendance financière',
  description:
    'Une opportunité transformative pour les investisseurs recherchant des rendements durables et un impact communautaire significatif à Lomé et au-delà.',
  stats: [
    { label: 'Investissement Minimum', value: '500K FCFA', icon: '💰' },
    { label: 'Rendement Moyen', value: '150K FCFA/mois', icon: '📈' },
    { label: 'Délai Retour', value: '10 mois', icon: '⏱️' },
    { label: 'Retour Total Moyen', value: '2M FCFA', icon: '🎯' },
  ],
};

export const TaoEconomicInvestmentPage = () => {
  const navigate = useNavigate();
  const { section } = useSiteContent();
  const tgi = section('investmentTgi') || section('investmentTie');

  const investmentStats = tgi.stats?.length ? tgi.stats : DEFAULT_TGI.stats;
  const heroTitle = tgi.title || DEFAULT_TGI.title;
  const heroSubtitle = tgi.subtitle || DEFAULT_TGI.subtitle;
  const heroDescription = tgi.description || DEFAULT_TGI.description;

  const sectors = normalizeSectors(section('sectors'));

  const benefits = [
    { icon: '✓', title: 'Transparence Totale', desc: 'Accès complet aux rapports et données d\'investissement' },
    { icon: '✓', title: 'Rendements Réguliers', desc: 'Paiements mensuels garantis de votre rendement' },
    { icon: '✓', title: 'Équipe Expérimentée', desc: 'Gestion professionnelle par des experts du secteur' },
    { icon: '✓', title: 'Support Dédié', desc: 'Équipe de support disponible 24/7 pour vos questions' },
    { icon: '✓', title: 'Flexibilité', desc: 'Options de retrait et de réinvestissement flexible' },
    { icon: '✓', title: 'Impact Social', desc: 'Contribution au développement économique local' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="investissement" />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary via-primary-container to-primary py-20 px-6 text-white">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{heroTitle}</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-6">{heroSubtitle}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">{heroDescription}</p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <button
                onClick={() => navigate('/contact?topic=invest')}
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Nous contacter pour investir
              </button>
              <button
                onClick={() => navigate('/inscription')}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Commencer à Investir
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-bold text-center text-on-surface mb-16">Nos Chiffres Clés</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {investmentStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-8 rounded-2xl text-center border border-outline/20 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <h3 className="text-2xl font-bold text-on-surface mb-2">{stat.value}</h3>
                  <p className="text-on-surface-variant">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Pillars */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-bold text-center text-on-surface mb-12">Les trois piliers de TGI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-8 border border-primary/20 hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Rentabilité Économique</h3>
                <p className="text-on-surface-variant">
                  Des rendements attractifs basés sur des projets économiques viables et testés sur le marché.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-8 border border-primary/20 hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Impact Social</h3>
                <p className="text-on-surface-variant">
                  Contribuez au développement économique local et à la création d'emplois durables.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-8 border border-primary/20 hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Indépendance Financière</h3>
                <p className="text-on-surface-variant">
                  Atteignez votre liberté financière grâce à des revenus passifs réguliers et croissants.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">Diversification</p>
              <h2 className="text-4xl font-black text-on-surface mb-4">Secteurs d'investissement</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
                Cinq secteurs stratégiques mobilisés par TGI : chaque domaine dispose de sa page dédiée.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, idx) => (
                <Link
                  key={sector.slug || idx}
                  to={sector.slug ? `/secteurs/${sector.slug}` : '/secteurs'}
                  className="group bg-white rounded-2xl p-6 border border-outline-variant/40 hover:shadow-xl hover:-translate-y-1 transition-all animate-fade-in-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary">
                    {sector.tag || 'Secteur'}
                  </span>
                  <h3 className="mt-4 text-xl font-black text-on-surface group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>
                  <p className="mt-2 text-on-surface-variant text-sm leading-relaxed line-clamp-3">
                    {sector.short || sector.description || ''}
                  </p>
                  <p className="mt-4 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                    Découvrir →
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/secteurs" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
                Voir tous les secteurs →
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-bold text-center text-on-surface mb-16">Nos Avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-6 border border-primary/20 hover:shadow-lg transition-all animate-fade-in-up"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-primary font-bold mt-1">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-on-surface mb-2">{benefit.title}</h4>
                      <p className="text-on-surface-variant">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-container to-primary text-white">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à Commencer?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              {`Rejoignez les investisseurs qui construisent leur avenir financier avec ${BRAND_NAME}.`}
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <button
                onClick={() => navigate('/inscription')}
                className="px-10 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                S'inscrire Maintenant
              </button>
              <button
                onClick={() => navigate('/contact?topic=invest')}
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Parler à un conseiller
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
