import { DEFAULT_SIMULATOR_CONFIG, PLACEMENT_OPTIONS } from '../data/simulator-defaults';

export function toPositiveNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

/** Fusionne config API admin avec les défauts. */
export function mergeSimulatorConfig(raw = {}) {
  const base = { ...DEFAULT_SIMULATOR_CONFIG, ...raw };
  return {
    ...base,
    sectorRates: {
      ...DEFAULT_SIMULATOR_CONFIG.sectorRates,
      ...(raw.sectorRates || {}),
    },
    features: Array.isArray(raw.features) && raw.features.length
      ? raw.features
      : DEFAULT_SIMULATOR_CONFIG.features,
  };
}

export function getRateForPlacement(placement, config) {
  const rates = config.sectorRates || {};
  const rate = rates[placement];
  if (rate != null && rate !== '') return String(rate);
  return config.annualRate || DEFAULT_SIMULATOR_CONFIG.annualRate;
}

export function computeInvestmentResults(inputs) {
  const {
    investment,
    duration,
    annualRate,
    monthlyContribution,
    compoundFrequency,
    inflation,
    taxRate,
    minInvestment = 0,
    maxDuration = 10,
  } = inputs;

  const capital = Math.max(toPositiveNumber(investment), toPositiveNumber(minInvestment) || 0);
  const months = Math.min(
    Math.max(Number(duration) || 1, 1),
    Math.max(Number(maxDuration) || 10, 1),
  );
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
    annualizedReturn:
      months > 0
        ? (Math.pow(finalCapital / Math.max(totalContributions, 1), 12 / months) - 1) * 100
        : 0,
    rows,
  };
}

export function formatSimulatorMoney(value, locale = 'fr-FR') {
  try {
    return `${Math.round(value).toLocaleString(locale)} FCFA`;
  } catch {
    return `${Math.round(value)} FCFA`;
  }
}

export { PLACEMENT_OPTIONS };
