import { buildLangPacks, pickLangPack } from '../localePack';
const EN_BASE = {
  "aspects": [
    {
      "title": "Proven economic model",
      "desc": "Taoman Group Investissement only funds models validated in Togo, each preceded by a detailed profitability study."
    },
    {
      "title": "Data-driven management",
      "desc": "Monthly KPIs: revenue, margins, occupancy, customer satisfaction and consolidated cash flow."
    },
    {
      "title": "Secure legal framework",
      "desc": "Contracted investments, traced flows, formal distributions and certified reporting."
    },
    {
      "title": "Dedicated operational teams",
      "desc": "Projects run by our teams or performance-contract partners, no uncontrolled subcontracting."
    }
  ],
  "phases": [
    {
      "num": "01",
      "title": "Study & scoping",
      "duration": "Weeks 1 – 4",
      "desc": "Field validation, partner interviews and multi-scenario business plan."
    },
    {
      "num": "02",
      "title": "Capital mobilization",
      "duration": "Weeks 4 – 8",
      "desc": "TGI opening, contract signing and staged fund release."
    },
    {
      "num": "03",
      "title": "Operational deployment",
      "duration": "Months 2 – 5",
      "desc": "Asset acquisition, team setup, commercial launch and first reporting."
    },
    {
      "num": "04",
      "title": "Operations & distribution",
      "duration": "Months 5 – 10",
      "desc": "Operational steering, quarterly reporting and scheduled distributions."
    }
  ],
  "seoDiscoverService": "Discover {title} at Taoman Group Investissement.",
  "seoDiscoverSector": "Discover the {title} sector at Taoman Group Investissement.",
  "serviceTag": "Service",
  "otherServicesTitle": "Other group offerings",
  "otherServicesSubtitle": "Explore our services and sectors"
};
function t(o,m){if(typeof o==='string'){let s=o;for(const[a,b]of Object.entries(m))if(s.includes(a))s=s.split(a).join(b);return s;}if(Array.isArray(o))return o.map(x=>t(x,m));if(o&&typeof o==='object'){const r={};for(const[k,v]of Object.entries(o))r[k]=t(v,m);return r;}return o;}
export const ES = t(EN_BASE, {"Proven economic model":"Modelo económico probado","Study & scoping":"Estudio y encuadre","Discover {title}":"Descubrir {title}","Service":"Servicio","Other group offerings":"Otras ofertas del grupo"});
export const PT = t(EN_BASE, {"Proven economic model":"Modelo económico probado","Study & scoping":"Estudio y encuadre","Discover {title}":"Descubrir {title}","Service":"Servicio","Other group offerings":"Otras ofertas del grupo"});
export const DE = t(EN_BASE, {"Proven economic model":"Modelo económico probado","Study & scoping":"Estudio y encuadre","Discover {title}":"Descubrir {title}","Service":"Servicio","Other group offerings":"Otras ofertas del grupo"});
export const AR = t(EN_BASE, {"Proven economic model":"Modelo económico probado","Study & scoping":"Estudio y encuadre","Discover {title}":"Descubrir {title}","Service":"Servicio","Other group offerings":"Otras ofertas del grupo"});
export const ZH = t(EN_BASE, {"Proven economic model":"Modelo económico probado","Study & scoping":"Estudio y encuadre","Discover {title}":"Descubrir {title}","Service":"Servicio","Other group offerings":"Otras ofertas del grupo"});
