import { useCallback, useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { apiAuthFetch } from '../config';
import { useLanguage } from '../context/LanguageContext';
import { getDashboardTranslations, translateQuoteStatus } from '../i18n/dashboard';

export const DashboardPage = () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const [data, setData] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');
  const { language } = useLanguage();
  const t = getDashboardTranslations(language);

  const loadDashboard = useCallback(
    async (silent = false) => {
      if (!token) return;
      if (!silent) setLoading(true);
      else setRefreshing(true);
      setError('');
      try {
        const [dashboard, quotesList] = await Promise.all([
          apiAuthFetch('/me/dashboard'),
          apiAuthFetch('/me/quotes'),
        ]);
        setData(dashboard);
        setQuotes(Array.isArray(quotesList) ? quotesList : []);
      } catch (err) {
        setError(err.message || t.errorLoad);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [token, t.errorLoad],
  );

  useEffect(() => {
    loadDashboard();
  }, [loadDashboard]);

  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === 'visible') loadDashboard(true);
    };
    document.addEventListener('visibilitychange', onVisible);
    const interval = setInterval(() => loadDashboard(true), 45000);
    return () => {
      document.removeEventListener('visibilitychange', onVisible);
      clearInterval(interval);
    };
  }, [loadDashboard]);

  if (!token || !user) {
    return <Navigate to="/connexion" replace />;
  }

  const stats = data?.stats || {};
  const investments = data?.featuredInvestments || [];

  const formatAmount = (n) => {
    try {
      return new Intl.NumberFormat(t.locale).format(n ?? 0);
    } catch {
      return String(n ?? 0);
    }
  };

  const formatDate = (iso) => {
    if (!iso) return '';
    try {
      return new Intl.DateTimeFormat(t.locale, { dateStyle: 'medium' }).format(new Date(iso));
    } catch {
      return '';
    }
  };

  const statusClass = (status) => {
    const key = (status || '').toLowerCase();
    if (key.includes('attente') || key.includes('pending')) return 'bg-amber-500/15 text-amber-800';
    if (key.includes('révision') || key.includes('review')) return 'bg-blue-500/15 text-blue-800';
    if (key.includes('envoy') || key.includes('sent')) return 'bg-emerald-500/15 text-emerald-800';
    if (key.includes('refus') || key.includes('reject')) return 'bg-red-500/15 text-red-800';
    if (key.includes('accept')) return 'bg-primary/15 text-primary';
    return 'bg-surface-container-high text-on-surface-variant';
  };

  const investorStats = [
    {
      label: t.stats.quotesTotalLabel,
      value: String(stats.quotesTotal ?? 0),
      detail: t.stats.quotesPendingDetail.replace('{n}', String(stats.quotesPending ?? 0)),
    },
    {
      label: t.stats.quotesInProgressLabel,
      value: String(stats.quotesInProgress ?? 0),
      detail: t.stats.quotesInProgressDetail,
    },
    {
      label: t.stats.activeInvestmentsLabel,
      value: String(stats.activeInvestments ?? 0),
      detail: t.stats.activeInvestmentsDetail,
    },
    {
      label: t.stats.amountLabel,
      value: `${formatAmount(stats.totalAmount ?? 0)} FCFA`,
      detail: t.stats.amountDetail,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Header activeLink="dashboard" />
      <main className="flex-grow pt-[132px]">
        <section className="relative overflow-hidden bg-[#07111f] px-6 py-20 text-white">
          <div className="relative z-10 mx-auto max-w-[1400px]">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{t.eyebrow}</p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h1 className="text-5xl font-black">
                {t.greeting.replace('{name}', user.firstName || user.email)}
              </h1>
              <button
                type="button"
                onClick={() => loadDashboard(true)}
                disabled={refreshing}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur hover:bg-white/20 disabled:opacity-60"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                {refreshing ? t.refreshing : t.refresh}
              </button>
            </div>
            {loading && <p className="mt-4 text-white/70">{t.loading}</p>}
            {error && <p className="mt-4 text-red-300">{error}</p>}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {investorStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm text-white/60">{stat.label}</p>
                  {loading ? (
                    <div className="mt-3 h-9 w-20 animate-pulse rounded-lg bg-white/20" />
                  ) : (
                    <p className="mt-2 text-3xl font-black">{stat.value}</p>
                  )}
                  <p className="text-sm text-cyan-200">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-[1400px] grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-black text-on-surface mb-6">{t.quotes.title}</h2>
              {loading ? (
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-20 animate-pulse rounded-xl bg-surface-container-low" />
                  ))}
                </div>
              ) : quotes.length === 0 ? (
                <p className="text-on-surface-variant">
                  {t.quotes.emptyLine}{' '}
                  <Link to="/contact" className="text-primary font-bold">
                    {t.quotes.emptyLinkLabel}
                  </Link>
                </p>
              ) : (
                <ul className="space-y-4">
                  {quotes.map((q) => (
                    <li key={q.id} className="rounded-xl border border-outline-variant/40 p-4">
                      <div className="flex justify-between gap-4">
                        <div className="min-w-0">
                          <p className="font-bold text-on-surface">{q.title}</p>
                          <p className="text-sm text-on-surface-variant">{q.service || q.description}</p>
                          <p className="mt-1 text-xs text-on-surface-variant">
                            {q.amount != null && q.amount > 0
                              ? `${formatAmount(q.amount)} FCFA`
                              : t.quotes.amountPending}
                            {q.updatedAt || q.createdAt
                              ? ` · ${formatDate(q.updatedAt || q.createdAt)}`
                              : ''}
                          </p>
                        </div>
                        <span
                          className={`shrink-0 self-start rounded-full px-3 py-1 text-xs font-bold ${statusClass(q.status)}`}
                        >
                          {translateQuoteStatus(q.status, language)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-black text-on-surface mb-6">{t.investments.title}</h2>
              {loading ? (
                <div className="space-y-3">
                  {[1, 2].map((i) => (
                    <div key={i} className="h-16 animate-pulse rounded-xl bg-surface-container-low" />
                  ))}
                </div>
              ) : investments.length === 0 ? (
                <p className="text-on-surface-variant">
                  <Link to="/investissement" className="text-primary font-bold">
                    {t.investments.emptyLinkLabel}
                  </Link>
                </p>
              ) : (
                <ul className="space-y-4">
                  {investments.map((inv) => (
                    <li key={inv.id} className="rounded-xl border border-outline-variant/40 p-4">
                      <p className="font-bold text-on-surface">{inv.name}</p>
                      {inv.description && (
                        <p className="mt-1 text-sm text-on-surface-variant line-clamp-2">{inv.description}</p>
                      )}
                      <p className="mt-2 text-sm text-on-surface-variant">
                        {t.investments.roiSuffix} {inv.roi ?? '—'}% · {formatAmount(inv.amount ?? 0)} FCFA
                      </p>
                      {inv.status && (
                        <span className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${statusClass(inv.status)}`}>
                          {translateQuoteStatus(inv.status, language)}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/investissement" className="inline-block rounded-2xl bg-primary px-6 py-3 font-bold text-white">
                  {t.investments.ctaExplore}
                </Link>
                <Link
                  to="/investissement/simulateur"
                  className="inline-block rounded-2xl border border-outline-variant px-6 py-3 font-bold text-on-surface hover:border-primary"
                >
                  {t.simulatorCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
