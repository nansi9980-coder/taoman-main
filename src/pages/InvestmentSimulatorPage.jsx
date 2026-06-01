import { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { useSimulatorConfig } from '../hooks/useSimulatorConfig';
import {
  computeInvestmentResults,
  formatSimulatorMoney,
  getRateForPlacement,
  PLACEMENT_OPTIONS,
} from '../utils/investmentSimulator';
import { getSimulatorPageLabels } from '../i18n/simulatorPage';
import { SeoHead } from '../components/SeoHead';

export const InvestmentSimulatorPage = () => {
  const isAuthenticated = Boolean(localStorage.getItem('token') && localStorage.getItem('user'));
  const { translations: tc, language } = useLanguage();
  const tSim = tc?.simulator || {};
  const tHero = tSim.hero || {};
  const labels = getSimulatorPageLabels(language);
  const locale = language === 'FR' ? 'fr-FR' : 'en-US';
  const config = useSimulatorConfig();

  const [mode, setMode] = useState(config.defaultMode || 'avance');
  const [investment, setInvestment] = useState(config.investment);
  const [duration, setDuration] = useState(config.duration);
  const [annualRate, setAnnualRate] = useState(config.annualRate);
  const [monthlyContribution, setMonthlyContribution] = useState(config.monthlyContribution);
  const [compoundFrequency, setCompoundFrequency] = useState(config.compoundFrequency);
  const [inflation, setInflation] = useState(config.inflation);
  const [taxRate, setTaxRate] = useState(config.taxRate);
  const [placementType, setPlacementType] = useState('Diversifie');

  useEffect(() => {
    setMode(config.defaultMode || 'avance');
    setInvestment(String(config.investment));
    setDuration(String(config.duration));
    setAnnualRate(String(config.annualRate));
    setMonthlyContribution(String(config.monthlyContribution));
    setCompoundFrequency(String(config.compoundFrequency));
    setInflation(String(config.inflation));
    setTaxRate(String(config.taxRate));
  }, [config]);

  const applyPlacementRate = useCallback(
    (placement) => {
      setPlacementType(placement);
      setAnnualRate(getRateForPlacement(placement, config));
    },
    [config],
  );

  const results = useMemo(
    () =>
      computeInvestmentResults({
        investment,
        duration,
        annualRate,
        monthlyContribution,
        compoundFrequency,
        inflation,
        taxRate,
        minInvestment: config.minInvestment,
        maxDuration: config.maxDuration,
      }),
    [
      investment,
      duration,
      annualRate,
      monthlyContribution,
      compoundFrequency,
      inflation,
      taxRate,
      config.minInvestment,
      config.maxDuration,
    ],
  );

  const maxChartValue = useMemo(
    () => Math.max(...results.rows.map((row) => row.balance), results.capital, 1),
    [results],
  );

  const activeFields = {
    simple: ['investment', 'duration', 'annualRate'],
    avance: ['investment', 'duration', 'annualRate', 'monthlyContribution', 'compoundFrequency', 'placementType'],
    professionnel: [
      'investment',
      'duration',
      'annualRate',
      'monthlyContribution',
      'compoundFrequency',
      'placementType',
      'inflation',
      'taxRate',
    ],
  }[mode];

  const showField = (field) => activeFields.includes(field);
  const minInv = Number(config.minInvestment) || 500000;
  const maxDur = Number(config.maxDuration) || 10;

  const metricRows = [
    [labels.metrics.initial, formatSimulatorMoney(results.capital, locale)],
    [labels.metrics.monthlyTotal, formatSimulatorMoney(results.totalMonthlyContributions, locale)],
    [labels.metrics.engaged, formatSimulatorMoney(results.totalContributions, locale)],
    [labels.metrics.grossInterest, formatSimulatorMoney(results.totalInterest, locale)],
    [labels.metrics.totalTax, formatSimulatorMoney(results.totalTax, locale)],
    [labels.metrics.netProfit, formatSimulatorMoney(results.profit, locale)],
    ['ROI', `${results.roi.toFixed(2)}%`],
    [labels.metrics.annualized, `${results.annualizedReturn.toFixed(2)}%`],
    [labels.metrics.realCapital, formatSimulatorMoney(results.realFinalCapital, locale)],
  ];

  const features =
    Array.isArray(config.features) && config.features.length
      ? config.features
      : [
          { icon: '🔒', title: 'Sécurisé', desc: 'Vos données sont protégées' },
          { icon: '📈', title: 'Transparent', desc: 'Suivi en temps réel' },
          { icon: '⚡', title: 'Rapide', desc: 'Investissez en quelques minutes' },
        ];

  return (
    <div className="flex flex-col min-h-screen bg-[#07111f]">
      <SeoHead title={tHero.title} description={tSim.seoDescription || tHero.description} path="/investissement/simulateur" />
      <Header activeLink="investissement" />

      <main className="flex-grow pt-24">
        <section className="relative overflow-hidden py-20 px-6 text-white">
          <div className="absolute -left-24 top-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute right-0 top-16 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="max-w-[1400px] mx-auto text-center animate-fade-in-up relative z-10">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70 mb-4">{tHero.eyebrow || "Outil d'estimation"}</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-[-0.05em]">{tHero.title || "Simulateur d'Investissement"}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {tHero.description ||
                'Calculez vos projections avec intérêts composés, versements mensuels, inflation et fiscalité.'}
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-10 border border-outline-variant/20">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.25em] text-primary font-bold">{labels.params}</p>
                <h2 className="text-3xl font-bold mt-2 text-on-surface">{labels.buildTitle}</h2>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-8 rounded-2xl bg-surface-container-low p-2">
                {(['simple', 'avance', 'professionnel']).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setMode(key)}
                    className={`rounded-xl px-4 py-3 text-sm font-bold ${mode === key ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:bg-white'}`}
                  >
                    {labels.modes[key]}
                  </button>
                ))}
              </div>

              <div className="space-y-8">
                {showField('investment') && (
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">{labels.investment}</label>
                    <input
                      type="number"
                      min={minInv}
                      step="1000"
                      value={investment}
                      onChange={(e) => setInvestment(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary focus:outline-none bg-surface text-on-surface font-bold text-lg"
                    />
                    <p className="text-xs text-on-surface-variant">
                      {labels.minHint.replace('{min}', formatSimulatorMoney(minInv, locale))}
                    </p>
                  </div>
                )}

                {showField('duration') && (
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">
                      {labels.duration.replace('{max}', maxDur)}
                    </label>
                    <div className="flex gap-3 items-center">
                      <input
                        type="range"
                        min="1"
                        max={maxDur}
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="flex-1 h-2 bg-primary rounded-full cursor-pointer accent-primary"
                      />
                      <span className="text-2xl font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg w-16 text-center">{duration}</span>
                    </div>
                  </div>
                )}

                {showField('annualRate') && (
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">{labels.annualRate}</label>
                    <input
                      type="number"
                      step="0.1"
                      value={annualRate}
                      onChange={(e) => setAnnualRate(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary focus:outline-none bg-surface text-on-surface font-bold text-lg"
                    />
                  </div>
                )}

                {showField('monthlyContribution') && (
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">{labels.monthlyContribution}</label>
                    <input
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg"
                    />
                    <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{labels.totalContributionsAuto}</p>
                      <p className="mt-1 text-2xl font-black text-on-surface">{formatSimulatorMoney(results.totalMonthlyContributions, locale)}</p>
                      <p className="text-xs text-on-surface-variant">
                        {formatSimulatorMoney(results.monthly, locale)} × {results.months} {labels.months}
                      </p>
                    </div>
                  </div>
                )}

                {showField('compoundFrequency') && (
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">{labels.compoundFrequency}</label>
                    <select
                      value={compoundFrequency}
                      onChange={(e) => setCompoundFrequency(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg"
                    >
                      {Object.entries(labels.compoundOptions).map(([val, lab]) => (
                        <option key={val} value={val}>
                          {lab}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {showField('placementType') && (
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">{labels.placementType}</label>
                    <select
                      value={placementType}
                      onChange={(e) => applyPlacementRate(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg"
                    >
                      {PLACEMENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt} ({getRateForPlacement(opt, config)}%)
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {showField('inflation') && (
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">{labels.inflation}</label>
                      <input type="number" value={inflation} onChange={(e) => setInflation(e.target.value)} className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg" />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">{labels.tax}</label>
                      <input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#07111f] rounded-[2rem] shadow-xl p-8 md:p-10 text-white">
                <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-2">{labels.finalCapital}</p>
                <p className="text-5xl font-black text-white transition-all duration-300" key={results.finalCapital}>
                  {formatSimulatorMoney(results.finalCapital, locale)}
                </p>
                <p className="text-white/60 mt-2">
                  {labels.placementOn.replace('{placement}', placementType).replace('{months}', results.months)}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {metricRows.map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-xs text-white/55">{label}</p>
                      <p className="mt-2 text-xl font-black text-cyan-200">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-outline-variant/20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary font-bold">{labels.chartTitle}</p>
                    <h3 className="text-2xl font-bold text-on-surface">{labels.chartSubtitle}</h3>
                  </div>
                  <p className="font-bold text-on-surface-variant">
                    {results.months} {labels.months}
                  </p>
                </div>
                <div className="flex h-56 items-end gap-2 rounded-2xl bg-surface-container-low p-4">
                  {results.rows.map((row) => (
                    <div key={row.month} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t-xl bg-gradient-to-t from-primary to-cyan-300 transition-all duration-300"
                        style={{ height: `${Math.max((row.balance / maxChartValue) * 100, 6)}%` }}
                        title={formatSimulatorMoney(row.balance, locale)}
                      />
                      <span className="text-xs font-bold text-on-surface-variant">{row.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-outline-variant/20 overflow-hidden">
                <h3 className="text-2xl font-bold text-on-surface mb-4">{labels.tableTitle}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[980px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-outline-variant text-on-surface-variant">
                        <th className="py-3">{labels.cols.month}</th>
                        <th>{labels.cols.start}</th>
                        <th>{labels.cols.payment}</th>
                        <th>{labels.cols.totalPaid}</th>
                        <th>{labels.cols.grossInterest}</th>
                        <th>{labels.cols.tax}</th>
                        <th>{labels.cols.netGain}</th>
                        <th>{labels.cols.end}</th>
                        <th>{labels.cols.real}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.rows.map((row) => (
                        <tr key={row.month} className="border-b border-outline-variant/40">
                          <td className="py-3 font-bold text-on-surface">{row.month}</td>
                          <td>{formatSimulatorMoney(row.startBalance, locale)}</td>
                          <td>{formatSimulatorMoney(row.contribution, locale)}</td>
                          <td className="font-semibold text-on-surface">{formatSimulatorMoney(row.cumulativeContributions, locale)}</td>
                          <td className="text-emerald-700 font-semibold">{formatSimulatorMoney(row.interest, locale)}</td>
                          <td className="text-red-700">{formatSimulatorMoney(row.taxAmount, locale)}</td>
                          <td className="font-semibold text-emerald-700">{formatSimulatorMoney(row.monthlyNetGain, locale)}</td>
                          <td className="font-black text-on-surface">{formatSimulatorMoney(row.balance, locale)}</td>
                          <td className="font-bold text-primary">{formatSimulatorMoney(row.realBalance, locale)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  window.location.href = isAuthenticated ? '/dashboard' : '/connexion';
                }}
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition"
              >
                {isAuthenticated ? labels.ctaDashboard : labels.ctaLogin}
              </button>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-16 px-6">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl mb-4">{item.icon}</p>
                <h3 className="text-xl font-bold text-on-surface mb-2">{item.title}</h3>
                <p className="text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
