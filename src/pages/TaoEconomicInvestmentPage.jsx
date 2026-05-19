import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import btpIcon from '../assets/btp_sector.jpeg';
import agroIcon from '../assets/agro_sector.jpeg';
import transportIcon from '../assets/transport_sector.jpeg';

export const TaoEconomicInvestmentPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const investmentStats = [
    { label: 'Investissement Minimum', value: '500K FCFA', icon: '💰' },
    { label: 'Rendement Moyen', value: '150K FCFA/mois', icon: '📈' },
    { label: 'Délai Retour', value: '10 mois', icon: '⏱️' },
    { label: 'Retour Total Moyen', value: '2M FCFA', icon: '🎯' },
  ];

  const sectors = [
    {
      title: 'BTP & Immobilier',
      icon: btpIcon,
      description: 'Projets de construction durable',
      details: 'Investissez dans des projets immobiliers de qualité avec un potentiel de croissance élevé',
      opportunities: 'Villas residential, Immeubles de bureaux, Centres commerciaux'
    },
    {
      title: 'Agro & Énergie',
      icon: agroIcon,
      description: 'Agriculture moderne et énergies renouvelables',
      details: 'Participez à la révolution agricole et énergétique en Afrique de l\'Ouest',
      opportunities: 'Fermes modernes, Panneaux solaires, Biocarburants'
    },
    {
      title: 'Transport & Logistique',
      icon: transportIcon,
      description: 'Solutions logistiques intégrées',
      details: 'Investissez dans les chaînes d\'approvisionnement modernes et rentables',
      opportunities: 'Flottes de véhicules, Entrepôts, Services de déménagement'
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">TAOMAN Groupe Investissement</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-6">Bâtissez votre indépendance financière</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Une opportunité transformative pour les investisseurs recherchant des rendements durables et un impact communautaire significatif à Lomé et au-delà.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <button
                onClick={() => navigate('/investissement/simulateur')}
                className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Simuler mes Revenus
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
            <h2 className="text-4xl font-bold text-center text-on-surface mb-12">Les Trois Piliers de TIE</h2>
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

        {/* Sectors Section */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-4xl font-bold text-center text-on-surface mb-16">Secteurs d'Investissement</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sectors.map((sector, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="bg-gradient-to-br from-primary/20 to-primary-container/20 p-8 border-b border-outline/20">
                    <img src={sector.icon} alt={sector.title} className="w-20 h-20 object-contain mb-4 bg-white/50 rounded-xl p-2" />
                    <h3 className="text-2xl font-bold text-on-surface mb-2">{sector.title}</h3>
                    <p className="text-on-surface-variant">{sector.description}</p>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="font-bold text-on-surface mb-2">À propos:</p>
                      <p className="text-on-surface-variant">{sector.details}</p>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface mb-2">Opportunités:</p>
                      <p className="text-on-surface-variant text-sm">{sector.opportunities}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              Rejoignez les investisseurs qui construisent leur avenir financier avec TAOMAN Groupe Investissement.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <button
                onClick={() => navigate('/inscription')}
                className="px-10 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                S'inscrire Maintenant
              </button>
              <button
                onClick={() => navigate('/investissement/simulateur')}
                className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Calculer mes Rendements
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
