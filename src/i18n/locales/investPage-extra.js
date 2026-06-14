/** Traductions page investissement (ES, PT, DE, AR, ZH) */
const EN_BASE = {
  "default": {
    "badge": "Invest with TAOMAN GROUP INVESTMENTS",
    "title": "TAOMAN GROUP INVESTMENTS",
    "description": "Investing with TAOMAN GROUP INVESTMENTS means joining a structured player with rigorous sector selection, field support and transparent reporting.",
    "stats": [
      {
        "value": "500K CFA",
        "label": "Minimum ticket"
      },
      {
        "value": "10 months",
        "label": "Maximum horizon"
      },
      {
        "value": "5",
        "label": "Investment sectors"
      },
      {
        "value": "24/7",
        "label": "Tracking after login"
      }
    ]
  },
  "quickNav": [
    {
      "id": "opportunites",
      "label": "Investment opportunities"
    },
    {
      "id": "programmes",
      "label": "TAOMAN GROUP INVESTMENTS TGI"
    },
    {
      "id": "criteres",
      "label": "Investment criteria"
    },
    {
      "id": "soumettre",
      "label": "Submit a project"
    }
  ],
  "tgiLink": "TAOMAN GROUP INVESTMENTS TGI →",
  "navAria": "Invest with TAOMAN GROUP INVESTMENTS - sections",
  "programs": {
    "intro": "Choose the TAOMAN GROUP INVESTMENTS program that fits you, or start by simulating your return.",
    "premium": "Premium",
    "tgiTitle": "TAOMAN GROUP INVESTMENTS TGI",
    "tgiDesc": "Structured investment program with sector diversification, project monitoring and reporting.",
    "tgiCta": "Discover TGI",
    "contactBadge": "Contact",
    "advisorTitle": "TAOMAN GROUP INVESTMENTS advisor",
    "advisorDesc": "Speak directly with a Group advisor to validate your investor profile, choose the right sector and formalize your commitment.",
    "advisorCta": "Request a meeting"
  },
  "submit": {
    "intro": "Have a project to fund? Our investment committee reviews each file and responds within five business days.",
    "bullets": [
      "Rigorous review by our committee",
      "Structured feedback within five business days",
      "Structuring support if needed",
      "Fast mobilization if approved"
    ],
    "formCta": "Fill in the form",
    "advisorCta": "Talk to an advisor",
    "processTitle": "4-step process",
    "steps": [
      {
        "n": "1",
        "title": "Receipt",
        "desc": "Acknowledgment within 24 h."
      },
      {
        "n": "2",
        "title": "Analysis",
        "desc": "Committee review (5 business days)."
      },
      {
        "n": "3",
        "title": "Discussion",
        "desc": "Call or meeting to clarify."
      },
      {
        "n": "4",
        "title": "Decision",
        "desc": "Terms and schedule."
      }
    ]
  },
  "opportunities": {
    "intro": "TAOMAN GROUP INVESTMENTS structures investments around five priority sectors, each with a dedicated page.",
    "targetReturn": "Target return",
    "profile": "Profile",
    "discoverSector": "Discover sector",
    "sectorTag": "Sector",
    "apiTitle": "Open investment projects",
    "activeProject": "Active project",
    "targetRoi": "Target ROI"
  },
  "criteria": {
    "intro": "We apply a structured grid: economic viability, team, governance and reporting.",
    "items": [
      {
        "title": "Clear economic model",
        "desc": "Identified revenue sources, realistic margins."
      },
      {
        "title": "Experienced team",
        "desc": "Committed sponsor, complementary team, field presence."
      },
      {
        "title": "Adapted ticket",
        "desc": "Capital structured from 500K CFA to several million."
      },
      {
        "title": "Defined horizon",
        "desc": "Controlled cycle, ideally aligned to 10 months."
      },
      {
        "title": "Governance",
        "desc": "OHADA accounting, clear contracts, documented governance."
      },
      {
        "title": "Regular reporting",
        "desc": "Quarterly reports with field evidence."
      }
    ],
    "cta": "Submit your project"
  },
  "guarantee": {
    "intro": "Investors must understand return, risk, documents and flows before committing.",
    "items": [
      {
        "title": "KYC & compliance",
        "desc": "Identity, phone, documents and profile validation."
      },
      {
        "title": "Contracts & records",
        "desc": "PDF documents in your investor space."
      },
      {
        "title": "Project reporting",
        "desc": "Photos, progress, KPIs and field comments."
      },
      {
        "title": "Wallet & withdrawals",
        "desc": "Deposit, withdrawal and commission history."
      }
    ]
  },
  "finalCta": {
    "title": "Ready to invest or submit a project?",
    "desc": "Talk to a TAOMAN GROUP INVESTMENTS advisor — response within 48 hours.",
    "contact": "Contact us to invest",
    "submit": "Submit a project"
  },
  "faq": {
    "full": "Full FAQ",
    "notFoundTitle": "Didn't find your answer?",
    "notFoundDesc": "Our investment team is available for your questions.",
    "contact": "Contact us",
    "faqPage": "View full FAQ"
  },
  "seoTitle": "Invest with us in Togo"
};

function t(obj, map) {
  if (typeof obj === 'string') {
    let s = obj;
    for (const [a, b] of Object.entries(map)) {
      if (s.includes(a)) s = s.split(a).join(b);
    }
    return s;
  }
  if (Array.isArray(obj)) return obj.map((x) => t(x, map));
  if (obj && typeof obj === 'object') {
    const o = {};
    for (const [k, v] of Object.entries(obj)) o[k] = t(v, map);
    return o;
  }
  return obj;
}

export const ES = t(EN_BASE, {"Invest with TAOMAN GROUP INVESTMENTS":"Invertir con TAOMAN GROUP INVESTMENTS","Investing with TAOMAN GROUP INVESTMENTS means joining a structured player with rigorous sector selection, field support and transparent reporting.":"Invertir con TAOMAN GROUP INVESTMENTS es unirse a un actor estructurado con selección sectorial rigurosa, acompañamiento en el terreno e informes transparentes.","Minimum ticket":"Ticket mínimo","Maximum horizon":"Horizonte máximo","Investment sectors":"Sectores de inversión","Tracking after login":"Seguimiento tras el acceso","TAOMAN GROUP INVESTMENTS TGI & Simulator":"TAOMAN GROUP INVESTMENTS TGI y simulador","Submit a project":"Enviar un proyecto","Investment opportunities":"Oportunidades de inversión","Investment criteria":"Criterios de inversión","Invest with TAOMAN GROUP INVESTMENTS - sections":"Invertir con TAOMAN GROUP INVESTMENTS - secciones","Choose the TAOMAN GROUP INVESTMENTS program that fits you, or start by simulating your return.":"Elija el programa TAOMAN GROUP INVESTMENTS que le convenga o comience simulando su rendimiento.","Discover TGI":"Descubrir el TGI","Request a meeting":"Solicitar una reunión","Fill in the form":"Rellenar el formulario","Talk to an advisor":"Hablar con un asesor","Target return":"Rendimiento objetivo","Discover sector":"Descubrir el sector","Sector":"Sector","Submit your project":"Enviar su proyecto","Contact us to invest":"Contáctenos para invertir","Full FAQ":"FAQ completa","Contact us":"Contáctenos","View full FAQ":"Ver toda la FAQ","Invest with us in Togo":"Invertir con nosotros en Togo","Premium":"Premium","Contact":"Contacto","TAOMAN GROUP INVESTMENTS advisor":"Asesor TAOMAN GROUP INVESTMENTS","4-step process":"Proceso en 4 pasos","Profile":"Perfil","Open investment projects":"Proyectos abiertos a inversión","Active project":"Proyecto activo","Target ROI":"ROI objetivo"});
export const PT = t(EN_BASE, {"Invest with TAOMAN GROUP INVESTMENTS":"Invertir con TAOMAN GROUP INVESTMENTS","Investing with TAOMAN GROUP INVESTMENTS means joining a structured player with rigorous sector selection, field support and transparent reporting.":"Invertir con TAOMAN GROUP INVESTMENTS es unirse a un actor estructurado con selección sectorial rigurosa, acompañamiento en el terreno e informes transparentes.","Minimum ticket":"Ticket mínimo","Maximum horizon":"Horizonte máximo","Investment sectors":"Sectores de inversión","Tracking after login":"Seguimiento tras el acceso","TAOMAN GROUP INVESTMENTS TGI & Simulator":"TAOMAN GROUP INVESTMENTS TGI y simulador","Submit a project":"Enviar un proyecto","Investment opportunities":"Oportunidades de inversión","Investment criteria":"Criterios de inversión","Invest with TAOMAN GROUP INVESTMENTS - sections":"Invertir con TAOMAN GROUP INVESTMENTS - secciones","Choose the TAOMAN GROUP INVESTMENTS program that fits you, or start by simulating your return.":"Elija el programa TAOMAN GROUP INVESTMENTS que le convenga o comience simulando su rendimiento.","Discover TGI":"Descubrir el TGI","Request a meeting":"Solicitar una reunión","Fill in the form":"Rellenar el formulario","Talk to an advisor":"Hablar con un asesor","Target return":"Rendimiento objetivo","Discover sector":"Descubrir el sector","Sector":"Sector","Submit your project":"Enviar su proyecto","Contact us to invest":"Contáctenos para invertir","Full FAQ":"FAQ completa","Contact us":"Contáctenos","View full FAQ":"Ver toda la FAQ","Invest with us in Togo":"Invertir con nosotros en Togo","Premium":"Premium","Contact":"Contacto","TAOMAN GROUP INVESTMENTS advisor":"Asesor TAOMAN GROUP INVESTMENTS","4-step process":"Proceso en 4 pasos","Profile":"Perfil","Open investment projects":"Proyectos abiertos a inversión","Active project":"Proyecto activo","Target ROI":"ROI objetivo","Invertir con TAOMAN GROUP INVESTMENTS":"Investir com TAOMAN GROUP INVESTMENTS","Invertir con nosotros en Togo":"Investir connosco no Togo","Contáctenos":"Contacte-nos","Enviar un proyecto":"Submeter um projeto"});
export const DE = t(EN_BASE, {"Invest with TAOMAN GROUP INVESTMENTS":"Mit TAOMAN GROUP INVESTMENTS investieren","Invest with us in Togo":"Mit uns in Togo investieren","Submit a project":"Projekt einreichen","Contact us to invest":"Kontakt für Investition"});
export const AR = t(EN_BASE, {"Invest with TAOMAN GROUP INVESTMENTS":"الاستثمار مع TAOMAN GROUP INVESTMENTS","Invest with us in Togo":"استثمر معنا في توغو","Submit a project":"تقديم مشروع","Contact us to invest":"اتصل بنا للاستثمار"});
export const ZH = t(EN_BASE, {"Invest with TAOMAN GROUP INVESTMENTS":"与 TAOMAN GROUP INVESTMENTS 投资","Invest with us in Togo":"在多哥与我们投资","Submit a project":"提交项目","Contact us to invest":"联系我们投资"});
