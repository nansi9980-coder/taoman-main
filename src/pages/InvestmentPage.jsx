import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import btpIcon from '../assets/btp_sector.jpeg';
import agroIcon from '../assets/agro_sector.jpeg';
import transportIcon from '../assets/transport_sector.jpeg';
import programmeImg from '../assets/programme.jpeg';
import simulateurImg from '../assets/simulateur.jpeg';

const DEFAULT_INVESTMENT = {
  badge: 'Investissement structuré',
  title: 'TAOMAN Groupe Investissement',
  description:
    'Une plateforme claire pour comprendre les projets, simuler les intérêts, suivre le capital et recevoir un reporting exploitable.',
  stats: [
    { value: '500K FCFA', label: 'Ticket minimum' },
    { value: '10 mois', label: 'Horizon maximum demandé' },
    { value: '3 modes', label: 'Simulation simple, avancée, pro' },
    { value: '24/7', label: 'Suivi portefeuille après connexion' },
  ],
};

export const InvestmentPage = () => {
  const navigate = useNavigate();
  const { section } = useSiteContent();
  const inv = section('investment');
  const badge = inv.badge || DEFAULT_INVESTMENT.badge;
  const title = inv.title || DEFAULT_INVESTMENT.title;
  const description = inv.description || DEFAULT_INVESTMENT.description;
  const statRows = (inv.stats?.length ? inv.stats : DEFAULT_INVESTMENT.stats).map((s) => [s.value, s.label]);
  const isAuthenticated = Boolean(localStorage.getItem('token') && localStorage.getItem('user'));
  const [apiInvestments, setApiInvestments] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/investments/public`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setApiInvestments(data);
      })
      .catch(() => {});
  }, []);

  const sectors = [
    {
      title: 'BTP & Immobilier',
      icon: btpIcon,
      description: 'Infrastructures et projets immobiliers de haute valeur',
      details: 'Programmes orientés construction, rénovation, équipements et revenus locatifs.',
      range: '12% - 18%',
      risk: 'Modéré'
    },
    {
      title: 'Agro & Énergie',
      icon: agroIcon,
      description: 'Agriculture et énergies renouvelables',
      details: 'Projets de transformation, distribution, énergie solaire et production locale.',
      range: '10% - 16%',
      risk: 'Equilibré'
    },
    {
      title: 'Transport & Logistique',
      icon: transportIcon,
      description: 'Solutions de mobilité et logistique intégrée',
      details: 'Flottes, entrepôts, distribution urbaine et services opérationnels.',
      range: '14% - 20%',
      risk: 'Dynamique'
    }
  ];

  const stats = statRows;

  const process = [
    ['01', 'Créer le compte', 'Inscription rapide, profil investisseur et accès sécurisé.'],
    ['02', 'Valider le KYC', 'Vérification identité, téléphone, documents et statut.'],
    ['03', 'Simuler puis investir', 'Projection sur 10 mois avant engagement.'],
    ['04', 'Suivre les performances', 'Dashboard, rapports, wallet, notifications et retraits.'],
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface pt-[80px]">
      <Header activeLink="investissement" />

      <main className="flex-grow">
        <section className="relative overflow-hidden bg-[#07111f] py-24 px-6 text-white">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{badge}</p>
              <h1 className="mb-6 text-5xl font-black tracking-[-0.05em] md:text-7xl">{title}</h1>
              <p className="mb-8 max-w-2xl text-xl text-white/75">{description}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button onClick={() => navigate('/investissement/simulateur')} className="rounded-2xl bg-white px-8 py-4 font-bold text-[#07111f] shadow-xl hover:scale-105">
                  Simuler sur 10 mois
                </button>
                <button onClick={() => navigate(isAuthenticated ? '/dashboard' : '/connexion')} className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur hover:bg-white hover:text-[#07111f]">
                  {isAuthenticated ? 'Voir mon dashboard' : 'Connexion investisseur'}
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 text-on-surface">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Projection</p>
                    <h2 className="text-2xl font-black">Scénario investisseur</h2>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">Live</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map(([value, label]) => (
                    <div key={label} className="rounded-2xl bg-surface-container-low p-4">
                      <p className="text-2xl font-black text-on-surface">{value}</p>
                      <p className="text-sm text-on-surface-variant">{label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex h-40 items-end gap-2 rounded-2xl bg-[#07111f] p-4">
                  {[28, 36, 45, 53, 62, 70, 78, 86, 92, 100].map((height, idx) => (
                    <div key={idx} className="flex-1 rounded-t-xl bg-gradient-to-t from-primary to-cyan-300" style={{ height: `${height}%` }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-outline-variant/40 bg-surface-container-low p-7 text-center shadow-sm">
                  <p className="text-4xl font-black text-primary">{value}</p>
                  <p className="mt-2 text-sm font-semibold text-on-surface-variant">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-20 px-6">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">Programmes</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Deux portes d'entrée simples</h2>
            </div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="group relative overflow-hidden bg-gradient-to-br from-[#0047AB] to-[#002366] p-10 rounded-[2.5rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,71,171,0.3)] transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>
                
                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <img src={programmeImg} alt="TIE Logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Premium</span>
                  </div>
                </div>

                <h3 className="text-4xl text-white font-bold mb-4 tracking-tight">
                  TAOMAN TIE
                </h3>
                <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
                  Programme d'investissement structuré avec diversification sectorielle, suivi projet et reporting.
                </p>
                
                <button
                  onClick={() => navigate('/investissement/tie')}
                  className="group/btn relative w-full overflow-hidden bg-white text-[#0047AB] py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-white/20 active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Découvrir le TIE 
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </button>
              </div>

              <div className="group relative overflow-hidden bg-gradient-to-br from-[#1A1A1A] to-[#333333] p-10 rounded-[2.5rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-3 animate-fade-in-up" style={{animationDelay: '150ms'}}>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 blur-2xl group-hover:bg-white/10 transition-colors"></div>

                <div className="flex items-start justify-between mb-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <img src={simulateurImg} alt="Simulateur Logo" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">Outil</span>
                  </div>
                </div>

                <h3 className="text-4xl text-white font-bold mb-4 tracking-tight">
                  Simulateur
                </h3>
                <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
                  Comparez plusieurs scénarios avec intérêts composés, versements mensuels, inflation et fiscalité.
                </p>
                
                <button
                  onClick={() => navigate('/investissement/simulateur')}
                  className="group/btn relative w-full overflow-hidden bg-white text-[#1A1A1A] py-5 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:shadow-white/20 active:scale-95"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Utiliser le simulateur
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </button>
              </div>
            </div>

            <h2 className="mt-20 text-center text-4xl font-black text-on-surface">
              Secteurs d'Investissement
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-on-surface-variant">
              Chaque secteur doit être lisible avec son niveau de risque, sa fourchette cible et ses preuves d'exécution.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {sectors.map((sector, idx) => (
                <div key={idx} className="rounded-[2rem] bg-white p-8 shadow-md transition-all hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                  <img src={sector.icon} alt={sector.title} className="mb-6 h-20 w-20 rounded-2xl bg-surface-container-low object-contain p-2" />
                  <h3 className="text-2xl font-bold text-on-surface">
                    {sector.title}
                  </h3>
                  <p className="mt-3 text-on-surface-variant">
                    {sector.description}
                  </p>
                  <p className="mt-4 text-sm text-on-surface">
                    {sector.details}
                  </p>
                  <div className="my-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-surface-container-low p-3">
                      <p className="text-xs text-on-surface-variant">Rendement cible</p>
                      <p className="font-black text-primary">{sector.range}</p>
                    </div>
                    <div className="rounded-2xl bg-surface-container-low p-3">
                      <p className="text-xs text-on-surface-variant">Profil</p>
                      <p className="font-black text-primary">{sector.risk}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/investissement/simulateur')}
                    className="w-full rounded-2xl bg-primary py-4 font-bold text-white hover:shadow-lg"
                  >
                    Simuler ce secteur
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary">Parcours investisseur</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Comment ça marche ?</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {process.map(([num, title, desc]) => (
                <div key={num} className="rounded-3xl border border-outline-variant/40 bg-white p-7 shadow-sm">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary font-black text-white">{num}</span>
                  <h3 className="text-xl font-bold text-on-surface">{title}</h3>
                  <p className="mt-3 text-sm text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#07111f] py-20 px-6 text-white">
          <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">Confiance</p>
              <h2 className="mt-3 text-4xl font-black">Ce qu'il faut afficher clairement</h2>
              <p className="mt-4 text-white/70">
                Un investisseur doit comprendre le rendement, le risque, les documents, les flux et le statut de chaque projet avant de s'engager.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['KYC & conformité', 'Identité, téléphone, documents et validation du profil.'],
                ['Contrats & justificatifs', 'Documents PDF disponibles dans le dashboard.'],
                ['Reporting projet', 'Photos, progression, indicateurs et commentaires terrain.'],
                ['Wallet & retraits', 'Historique des dépôts, retraits et commissions.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-white/65">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {apiInvestments.length > 0 && (
          <section className="py-16 px-6 bg-surface-container-low">
            <div className="mx-auto max-w-[1400px]">
              <h2 className="text-3xl font-black text-on-surface mb-8 text-center">Opportunités ouvertes</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {apiInvestments.map((inv) => (
                  <div key={inv.id} className="rounded-2xl bg-white p-6 shadow-md">
                    <h3 className="text-xl font-bold">{inv.name}</h3>
                    <p className="text-sm text-on-surface-variant mt-2">{inv.description || 'Projet actif'}</p>
                    <p className="mt-4 font-black text-primary">{inv.amount?.toLocaleString('fr-FR')} FCFA</p>
                    {inv.roi != null && <p className="text-sm text-on-surface-variant">ROI cible : {inv.roi}%</p>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-20 px-6">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="mb-10 text-center text-4xl font-black text-on-surface">Questions fréquentes</h2>
            <div className="grid gap-5">
              {[
                { q: 'Quel est le montant minimum ?', a: 'Le ticket de départ recommandé est de 500 000 FCFA.' },
                { q: 'Pourquoi 10 mois ?', a: 'Le simulateur respecte le plafond demandé : projection sur 10 mois maximum.' },
                { q: 'Où voir mes chiffres après connexion ?', a: 'Le dashboard apparaît uniquement après connexion et centralise portefeuille, wallet, documents et rapports.' },
                { q: 'Les rendements sont-ils fixes ?', a: 'Les chiffres affichés sont des projections. Le rendement réel dépend du projet, du risque et de la performance opérationnelle.' }
              ].map((item) => (
                <div key={item.q} className="rounded-3xl bg-surface-container-low p-7">
                  <h3 className="text-xl font-bold text-on-surface">{item.q}</h3>
                  <p className="mt-2 text-on-surface-variant">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 px-6">
          <div className="mx-auto max-w-[1200px] text-center">
            <h2 className="text-4xl font-black text-white">
              Prêt à tester votre scénario ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
              Commencez par une simulation claire, puis créez votre compte pour accéder au dashboard investisseur.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <button
                onClick={() => navigate('/investissement/simulateur')}
                className="rounded-2xl bg-white px-8 py-4 font-bold text-primary shadow-lg hover:scale-105"
              >
                Utiliser le simulateur
              </button>
              <button
                onClick={() => navigate(isAuthenticated ? '/dashboard' : '/inscription')}
                className="rounded-2xl border border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-primary"
              >
                {isAuthenticated ? 'Aller au dashboard' : "Créer mon compte"}
              </button>
              </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};