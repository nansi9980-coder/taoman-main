import { buildLangPacks, pickLangPack } from '../localePack';
const EN_BASE = {
  "defaultHero": {
    "subtitle": "Build your financial independence",
    "description": "A transformative opportunity for investors seeking sustainable returns and meaningful community impact in Lomé and beyond."
  },
  "stats": [
    {
      "label": "Minimum investment",
      "value": "500K CFA"
    },
    {
      "label": "Average return",
      "value": "150K CFA/month"
    },
    {
      "label": "Payback period",
      "value": "10 months"
    },
    {
      "label": "Average total return",
      "value": "1.5M CFA"
    }
  ],
  "statsIntro": "Simple, transparent indicators to understand our offer at a glance.",
  "pillarsIntro": "Profitability, impact and autonomy: our investment decisions balance these three pillars.",
  "pillars": [
    {
      "title": "Economic profitability",
      "desc": "Attractive returns based on viable projects tested in Togo with quarterly monitoring.",
      "tone": "from-blue-500/15 to-cyan-400/10"
    },
    {
      "title": "Social impact",
      "desc": "Local jobs, support for Togolese SMEs and real-economy development.",
      "tone": "from-amber-500/15 to-orange-400/10"
    },
    {
      "title": "Financial independence",
      "desc": "Regular growing passive income backed by tangible assets.",
      "tone": "from-emerald-500/15 to-teal-400/10"
    }
  ],
  "benefits": [
    {
      "title": "Full transparency",
      "desc": "Access to reports, contracts and investment data."
    },
    {
      "title": "Regular returns",
      "desc": "Structured monthly payments per your contract."
    },
    {
      "title": "Experienced team",
      "desc": "Managed by sector operational experts."
    },
    {
      "title": "Dedicated support",
      "desc": "Advisor available for your questions."
    },
    {
      "title": "Flexibility",
      "desc": "Withdrawal and reinvestment options."
    },
    {
      "title": "Social impact",
      "desc": "Contribution to local economic development."
    }
  ]
};
function t(o,m){if(typeof o==='string'){let s=o;for(const[a,b]of Object.entries(m))if(s.includes(a))s=s.split(a).join(b);return s;}if(Array.isArray(o))return o.map(x=>t(x,m));if(o&&typeof o==='object'){const r={};for(const[k,v]of Object.entries(o))r[k]=t(v,m);return r;}return o;}
export const ES = t(EN_BASE, {"Build your financial independence":"Construya su independencia financiera","Minimum investment":"Inversión mínima","Average return":"Rendimiento medio","Payback period":"Plazo de retorno","Average total return":"Retorno total medio","Full transparency":"Transparencia total","Economic profitability":"Rentabilidad económica","Social impact":"Impacto social","Financial independence":"Independencia financiera"});
export const PT = t(EN_BASE, {"Build your financial independence":"Construya su independencia financiera","Minimum investment":"Inversión mínima","Average return":"Rendimiento medio","Payback period":"Plazo de retorno","Average total return":"Retorno total medio","Full transparency":"Transparencia total","Economic profitability":"Rentabilidad económica","Social impact":"Impacto social","Financial independence":"Independencia financiera","Construya":"Construa"});
export const DE = t(EN_BASE, {"Build your":"Bauen Sie Ihre","Minimum investment":"Mindestinvestition"});
export const AR = t(EN_BASE, {"Build your":"ابنِ","Minimum investment":"الحد الأدنى للاستثمار"});
export const ZH = t(EN_BASE, {"Build your":"建立您的","Minimum investment":"最低投资额"});
