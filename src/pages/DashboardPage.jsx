import { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { apiAuthFetch } from '../config';

export const DashboardPage = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const [data, setData] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) return;
    Promise.all([
      apiAuthFetch('/me/dashboard'),
      apiAuthFetch('/me/quotes'),
    ])
      .then(([dashboard, quotesList]) => {
        setData(dashboard);
        setQuotes(Array.isArray(quotesList) ? quotesList : []);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  if (!token || !user) {
    return <Navigate to="/connexion" replace />;
  }

  const stats = data?.stats || {};
  const investments = data?.featuredInvestments || [];

  const investorStats = [
    { label: 'Devis soumis', value: String(stats.quotesTotal ?? 0), detail: `${stats.quotesPending ?? 0} en attente` },
    { label: 'Devis en cours', value: String(stats.quotesInProgress ?? 0), detail: 'En révision ou envoyés' },
    { label: 'Investissements actifs', value: String(stats.activeInvestments ?? 0), detail: 'Opportunités ouvertes' },
    { label: 'Montant estimé', value: `${(stats.totalAmount ?? 0).toLocaleString('fr-FR')} FCFA`, detail: 'Sur vos devis' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Header activeLink="dashboard" />
      <main className="flex-grow pt-24">
        <section className="relative overflow-hidden bg-[#07111f] px-6 py-20 text-white">
          <div className="relative z-10 mx-auto max-w-[1400px]">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">Espace client</p>
            <h1 className="mb-6 text-5xl font-black">Bonjour {user.firstName || user.email}</h1>
            {loading && <p className="text-white/70">Chargement...</p>}
            {error && <p className="text-red-300">{error}</p>}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {investorStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm text-white/60">{stat.label}</p>
                  <p className="mt-2 text-3xl font-black">{stat.value}</p>
                  <p className="text-sm text-cyan-200">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px] grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-black text-on-surface mb-6">Mes devis</h2>
              {quotes.length === 0 ? (
                <p className="text-on-surface-variant">Aucun devis. <Link to="/contact" className="text-primary font-bold">Demander un devis</Link></p>
              ) : (
                <ul className="space-y-4">
                  {quotes.map((q) => (
                    <li key={q.id} className="rounded-xl border border-outline-variant/40 p-4">
                      <div className="flex justify-between gap-4">
                        <div>
                          <p className="font-bold text-on-surface">{q.title}</p>
                          <p className="text-sm text-on-surface-variant">{q.service || q.description}</p>
                        </div>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">{q.status}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-black text-on-surface mb-6">Investissements</h2>
              {investments.length === 0 ? (
                <p className="text-on-surface-variant">
                  <Link to="/investissement" className="text-primary font-bold">Découvrir nos opportunités</Link>
                </p>
              ) : (
                <ul className="space-y-4">
                  {investments.map((inv) => (
                    <li key={inv.id} className="rounded-xl border border-outline-variant/40 p-4">
                      <p className="font-bold">{inv.name}</p>
                      <p className="text-sm text-on-surface-variant">ROI {inv.roi ?? '—'}% · {inv.amount?.toLocaleString('fr-FR')} FCFA</p>
                    </li>
                  ))}
                </ul>
              )}
              <Link to="/investissement/simulateur" className="mt-6 inline-block rounded-2xl bg-primary px-6 py-3 font-bold text-white">
                Simulateur
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
