import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const InvestmentSimulatorPage = () => {
  const isAuthenticated = Boolean(localStorage.getItem('token') && localStorage.getItem('user'));
  const [mode, setMode] = useState('avance');
  const [investment, setInvestment] = useState('500000');
  const [duration, setDuration] = useState('10');
  const [annualRate, setAnnualRate] = useState('18');
  const [monthlyContribution, setMonthlyContribution] = useState('50000');
  const [compoundFrequency, setCompoundFrequency] = useState('12');
  const [inflation, setInflation] = useState('3');
  const [taxRate, setTaxRate] = useState('5');
  const [placementType, setPlacementType] = useState('Diversifie');

  const formatMoney = (value) => `${Math.round(value).toLocaleString('fr-FR')} FCFA`;

  const toPositiveNumber = (value) => {
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
  };

  const computeResults = () => {
    const capital = toPositiveNumber(investment);
    const months = Math.min(Math.max(Number(duration) || 1, 1), 10);
    const rate = toPositiveNumber(annualRate) / 100;
    const monthly = toPositiveNumber(monthlyContribution);
    const frequency = Math.max(Number(compoundFrequency) || 12, 1);
    const monthlyRate = Math.pow(1 + rate / frequency, frequency / 12) - 1;
    const inflationRate = toPositiveNumber(inflation) / 100 / 12;
    const tax = toPositiveNumber(taxRate) / 100;

    let balance = capital;
    const rows = [];
    let totalInterest = 0;
    let totalTax = 0;

    for (let month = 1; month <= months; month += 1) {
      const startBalance = balance;
      const interest = balance * monthlyRate;
      const taxAmount = interest * tax;
      const monthlyNetGain = interest - taxAmount;
      balance = balance + interest - taxAmount + monthly;
      totalInterest += interest;
      totalTax += taxAmount;
      const cumulativeContributions = capital + monthly * month;
      const realBalance = balance / Math.pow(1 + inflationRate, month);

      rows.push({
        month,
        startBalance,
        contribution: monthly,
        cumulativeContributions,
        interest,
        taxAmount,
        monthlyNetGain,
        balance,
        realBalance,
      });
    }

    const totalMonthlyContributions = monthly * months;
    const totalContributions = capital + totalMonthlyContributions;
    const finalCapital = rows.at(-1)?.balance || capital;
    const profit = finalCapital - totalContributions;
    const roi = totalContributions > 0 ? (profit / totalContributions) * 100 : 0;

    return {
      capital,
      months,
      monthly,
      totalMonthlyContributions,
      totalContributions,
      totalInterest,
      totalTax,
      realFinalCapital: rows.at(-1)?.realBalance || capital,
      finalCapital,
      profit,
      roi,
      annualizedReturn: months > 0 ? (Math.pow(finalCapital / Math.max(totalContributions, 1), 12 / months) - 1) * 100 : 0,
      rows,
    };
  };

  const results = computeResults();
  const maxChartValue = Math.max(...results.rows.map((row) => row.balance), results.capital, 1);
  const activeFields = {
    simple: ['investment', 'duration', 'annualRate'],
    avance: ['investment', 'duration', 'annualRate', 'monthlyContribution', 'compoundFrequency'],
    professionnel: ['investment', 'duration', 'annualRate', 'monthlyContribution', 'compoundFrequency', 'inflation', 'taxRate', 'placementType'],
  }[mode];

  const showField = (field) => activeFields.includes(field);

  return (
    <div className="flex flex-col min-h-screen bg-[#07111f]">
      <Header activeLink="investissement" />

      <main className="flex-grow pt-24">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden py-20 px-6 text-white">
          <div className="absolute -left-24 top-10 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />
          <div className="absolute right-0 top-16 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="max-w-[1400px] mx-auto text-center animate-fade-in-up relative z-10">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70 mb-4">Outil d'estimation</p>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-[-0.05em]">Simulateur d'Investissement</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Calculez vos projections sur 10 mois maximum avec intérêts composés, versements mensuels, inflation et fiscalité.
            </p>
          </div>
        </section>

        {/* ============ CALCULATOR ============ */}
        <section className="py-20 px-6 bg-surface">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Input Form */}
            <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-10 animate-fade-in-up border border-outline-variant/20">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.25em] text-primary font-bold">Paramètres</p>
                <h2 className="text-3xl font-bold mt-2 text-on-surface">Construire ma simulation</h2>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-8 rounded-2xl bg-surface-container-low p-2">
                {[
                  { key: 'simple', label: 'Simple' },
                  { key: 'avance', label: 'Avancé' },
                  { key: 'professionnel', label: 'Pro' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setMode(item.key)}
                    className={`rounded-xl px-4 py-3 text-sm font-bold ${mode === item.key ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:bg-white'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <div className="space-y-8">
                {showField('investment') && <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '100ms'}}>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Montant à investir (FCFA)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={investment}
                      onChange={(e) => setInvestment(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary focus:outline-none transition-colors bg-surface text-on-surface font-bold text-lg"
                      placeholder="500000"
                    />
                    <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-on-surface-variant font-bold">FCFA</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">Minimum recommandé: 500,000 FCFA</p>
                </div>}

                {showField('duration') && <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '150ms'}}>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Durée (mois, maximum 10)</label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="flex-1 h-2 bg-primary rounded-full cursor-pointer accent-primary"
                    />
                    <span className="text-2xl font-bold text-primary bg-primary/10 px-4 py-2 rounded-lg w-16 text-center">{duration}</span>
                  </div>
                </div>}

                {showField('annualRate') && <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '200ms'}}>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Taux annuel (%)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={annualRate}
                      onChange={(e) => setAnnualRate(e.target.value)}
                      className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary focus:outline-none transition-colors bg-surface text-on-surface font-bold text-lg"
                      placeholder="18"
                    />
                    <span className="absolute right-6 top-1/2 transform -translate-y-1/2 text-on-surface-variant font-bold">%</span>
                  </div>
                </div>}

                {showField('monthlyContribution') && <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '250ms'}}>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Versement mensuel (FCFA)</label>
                  <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg" />
                  <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Total des versements automatique</p>
                    <p className="mt-1 text-2xl font-black text-on-surface">
                      {formatMoney(results.totalMonthlyContributions)}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {formatMoney(results.monthly)} × {results.months} mois
                    </p>
                  </div>
                </div>}

                {showField('compoundFrequency') && <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Fréquence de composition</label>
                  <select value={compoundFrequency} onChange={(e) => setCompoundFrequency(e.target.value)} className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg">
                    <option value="1">Annuelle</option>
                    <option value="4">Trimestrielle</option>
                    <option value="12">Mensuelle</option>
                    <option value="365">Journalière</option>
                  </select>
                </div>}

                {showField('placementType') && <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '350ms'}}>
                  <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Type de placement</label>
                  <select value={placementType} onChange={(e) => setPlacementType(e.target.value)} className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg">
                    <option>Diversifie</option>
                    <option>Agro & Énergie</option>
                    <option>Transport & Logistique</option>
                    <option>BTP & Immobilier</option>
                  </select>
                </div>}

                {showField('inflation') && <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '400ms'}}>
                    <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Inflation (%)</label>
                    <input type="number" value={inflation} onChange={(e) => setInflation(e.target.value)} className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg" />
                  </div>
                  <div className="space-y-3 animate-fade-in-up" style={{animationDelay: '450ms'}}>
                    <label className="block text-sm font-bold text-on-surface uppercase tracking-[0.2em]">Fiscalité (%)</label>
                    <input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} className="w-full px-6 py-4 border-2 border-outline-variant rounded-2xl focus:border-primary bg-surface text-on-surface font-bold text-lg" />
                  </div>
                </div>}
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              <div className="bg-[#07111f] rounded-[2rem] shadow-xl p-8 md:p-10 animate-fade-in-up text-white" style={{animationDelay: '100ms'}}>
                <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-2">Capital final estimé</p>
                <p className="text-5xl font-black text-white">{formatMoney(results.finalCapital)}</p>
                <p className="text-white/60 mt-2">Placement: {placementType} sur {results.months} mois</p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    ['Capital initial', formatMoney(results.capital)],
                    ['Total versements', formatMoney(results.totalMonthlyContributions)],
                    ['Capital engagé', formatMoney(results.totalContributions)],
                    ['Intérêts bruts', formatMoney(results.totalInterest)],
                    ['Fiscalité totale', formatMoney(results.totalTax)],
                    ['Bénéfice net', formatMoney(results.profit)],
                    ['ROI', `${results.roi.toFixed(2)}%`],
                    ['Rendement annualisé', `${results.annualizedReturn.toFixed(2)}%`],
                    ['Capital réel', formatMoney(results.realFinalCapital)],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-xs text-white/55">{label}</p>
                      <p className="mt-2 text-xl font-black text-cyan-200">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-outline-variant/20 animate-fade-in-up" style={{animationDelay: '150ms'}}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary font-bold">Graphique évolutif</p>
                    <h3 className="text-2xl font-bold text-on-surface">Projection mensuelle</h3>
                  </div>
                  <p className="font-bold text-on-surface-variant">{results.months} mois</p>
                </div>
                <div className="flex h-56 items-end gap-2 rounded-2xl bg-surface-container-low p-4">
                  {results.rows.map((row) => (
                    <div key={row.month} className="flex flex-1 flex-col items-center gap-2">
                      <div className="w-full rounded-t-xl bg-gradient-to-t from-primary to-cyan-300" style={{ height: `${Math.max((row.balance / maxChartValue) * 100, 6)}%` }} title={formatMoney(row.balance)}></div>
                      <span className="text-xs font-bold text-on-surface-variant">{row.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2rem] shadow-xl p-8 border border-outline-variant/20 animate-fade-in-up overflow-hidden" style={{animationDelay: '200ms'}}>
                <h3 className="text-2xl font-bold text-on-surface mb-4">Tableau d'amortissement</h3>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[980px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-outline-variant text-on-surface-variant">
                        <th className="py-3">Mois</th>
                        <th>Capital départ</th>
                        <th>Versement mois</th>
                        <th>Total versé</th>
                        <th>Intérêt brut</th>
                        <th>Fiscalité</th>
                        <th>Gain net</th>
                        <th>Capital final</th>
                        <th>Capital réel</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.rows.map((row) => (
                        <tr key={row.month} className="border-b border-outline-variant/40">
                          <td className="py-3 font-bold text-on-surface">{row.month}</td>
                          <td>{formatMoney(row.startBalance)}</td>
                          <td>{formatMoney(row.contribution)}</td>
                          <td className="font-semibold text-on-surface">{formatMoney(row.cumulativeContributions)}</td>
                          <td className="text-emerald-700 font-semibold">{formatMoney(row.interest)}</td>
                          <td className="text-red-700">{formatMoney(row.taxAmount)}</td>
                          <td className="font-semibold text-emerald-700">{formatMoney(row.monthlyNetGain)}</td>
                          <td className="font-black text-on-surface">{formatMoney(row.balance)}</td>
                          <td className="font-bold text-primary">{formatMoney(row.realBalance)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <button
                onClick={() => window.location.href = isAuthenticated ? '/dashboard' : '/connexion'}
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-fade-in-up"
                style={{animationDelay: '300ms'}}
              >
                {isAuthenticated ? 'Ouvrir le dashboard complet' : 'Se connecter pour ouvrir le dashboard'}
              </button>
            </div>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="bg-surface-container-low py-16 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🔒', title: 'Sécurisé', desc: 'Vos données sont protégées et chiffrées' },
                { icon: '📈', title: 'Transparent', desc: 'Suivi en temps réel de vos investissements' },
                { icon: '⚡', title: 'Rapide', desc: 'Investissez en moins de 5 minutes' }
              ].map((item, idx) => (
                <div key={idx} className="text-center animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
                  <p className="text-5xl mb-4">{item.icon}</p>
                  <h3 className="text-xl font-bold text-on-surface mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
