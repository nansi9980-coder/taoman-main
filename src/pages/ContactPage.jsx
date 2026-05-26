import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Info,
  TrendingUp,
  Handshake,
  Lightbulb,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  Check,
  ChevronRight,
  Building2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Header } from '../components/Header';
import { SeoHead } from '../components/SeoHead';
import { Footer } from '../components/Footer';
import { PremiumBackdrop } from '../components/PremiumBackdrop';
import { API_URL } from '../config';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { getApiErrorMessage } from '../utils/apiError';
import { DEFAULT_SECTORS } from '../data/sectors-defaults';

/**
 * 4 sujets de contact, chacun avec son propre formulaire dédié.
 * Le sujet est sélectionné via l'URL `?topic=...` ou via les boutons.
 */
const TOPICS = {
  info: {
    id: 'info',
    icon: Info,
    badge: 'Information',
    title: 'Demande d\'information générale',
    headline: 'Une question sur TAOMAN Group Investment ?',
    desc: "Vous voulez en savoir plus sur le groupe, ses activités, ses services opérationnels (lavage, déménagement, entretien, mécanique, transport) ou son programme d'investissement TGI ? Posez-nous votre question, notre équipe vous répond sous 24 heures.",
    fields: ['name', 'email', 'phone', 'question', 'message'],
    submitLabel: 'Envoyer ma question',
    successText: 'Votre demande a bien été reçue. Notre équipe vous répond sous 24 heures.',
    serviceTag: 'Contact – Information',
  },
  invest: {
    id: 'invest',
    icon: TrendingUp,
    badge: 'Investissement',
    title: 'Investir avec TAOMAN',
    headline: 'Manifester un intérêt d\'investissement',
    desc: "Vous souhaitez allouer un capital à des projets opérés par TAOMAN Group Investment ? Indiquez votre profil, votre ticket envisagé et le ou les secteurs qui vous intéressent. Notre équipe vous rappelle pour une présentation détaillée des opportunités en cours.",
    fields: ['name', 'email', 'phone', 'profile', 'ticket', 'sector', 'horizon', 'message'],
    submitLabel: 'Envoyer ma manifestation d\'intérêt',
    successText: 'Votre manifestation d\'intérêt a bien été enregistrée. Un conseiller vous contacte sous 48 heures.',
    serviceTag: 'Contact – Investissement',
  },
  partner: {
    id: 'partner',
    icon: Handshake,
    badge: 'Partenariat',
    title: 'Devenir partenaire opérationnel',
    headline: 'Construire un partenariat avec TAOMAN',
    desc: "Vous représentez une entreprise, une coopérative ou une institution qui souhaite collaborer avec TAOMAN Group Investment (sous-traitance, distribution, fourniture, services support, projet conjoint) ? Présentez-nous votre proposition et nous étudions ensemble les synergies possibles.",
    fields: ['organization', 'sectorOrg', 'name', 'role', 'email', 'phone', 'proposalType', 'message'],
    submitLabel: 'Envoyer ma proposition',
    successText: 'Votre proposition de partenariat a bien été reçue. Notre direction étudie chaque dossier et revient vers vous sous 5 jours ouvrés.',
    serviceTag: 'Contact – Partenariat',
  },
  project: {
    id: 'project',
    icon: Lightbulb,
    badge: 'Projet à financer',
    title: 'Soumettre un projet à financer',
    headline: 'Présentez votre projet à notre comité',
    desc: "Vous portez un projet entrepreneurial à fort potentiel et vous cherchez un financement structuré ? Décrivez votre projet, son secteur, son ticket et son horizon. Notre comité d'investissement examine chaque dossier et revient vers vous avec une décision motivée sous 5 jours ouvrés.",
    fields: ['name', 'email', 'phone', 'projectName', 'sector', 'location', 'ticket', 'horizon', 'stage', 'message'],
    submitLabel: 'Soumettre mon projet',
    successText: 'Votre projet a bien été reçu. Le comité d\'investissement revient vers vous sous 5 jours ouvrés.',
    serviceTag: 'Contact – Soumission projet',
  },
};

const FIELD_LABELS = {
  name: { label: 'Votre nom complet', placeholder: 'Ex : Komla Mensah', type: 'text', required: true },
  email: { label: 'Adresse email', placeholder: 'votre@email.com', type: 'email', required: true },
  phone: { label: 'Téléphone', placeholder: '+228 90 00 00 00', type: 'tel', required: true },
  organization: { label: 'Nom de votre organisation', placeholder: 'Ex : SARL Mensah & Fils', type: 'text', required: true },
  role: { label: 'Votre fonction', placeholder: 'Ex : Directeur Général', type: 'text', required: true },
  sectorOrg: {
    label: "Secteur d'activité de votre organisation",
    placeholder: 'Ex : Distribution, BTP, Logistique...',
    type: 'text',
    required: true,
  },
  proposalType: {
    label: 'Type de partenariat envisagé',
    type: 'select',
    required: true,
    options: [
      'Fournisseur / Sous-traitant',
      'Distribution / Revente',
      'Co-investissement sur projet',
      'Partenariat institutionnel',
      'Échange de compétences',
      'Autre',
    ],
  },
  profile: {
    label: 'Votre profil',
    type: 'select',
    required: true,
    options: [
      'Particulier',
      'Diaspora togolaise',
      'Entreprise / PME',
      'Family Office',
      'Institutionnel',
    ],
  },
  ticket: {
    label: 'Ticket envisagé',
    type: 'select',
    required: false,
    options: [
      'Moins de 500 000 FCFA',
      '500 000 – 2 000 000 FCFA',
      '2 000 000 – 10 000 000 FCFA',
      '10 000 000 – 50 000 000 FCFA',
      'Plus de 50 000 000 FCFA',
    ],
  },
  sector: {
    label: 'Secteur concerné',
    type: 'select',
    required: false,
    options: DEFAULT_SECTORS.map((s) => s.title).concat(['Autre / Tous secteurs']),
  },
  horizon: {
    label: 'Horizon envisagé',
    type: 'select',
    required: false,
    options: ['3 mois', '6 mois', '10 mois', 'Au-delà de 10 mois', 'Pas encore décidé'],
  },
  projectName: { label: 'Nom du projet', placeholder: "Ex : Mini-usine d'huile de palme", type: 'text', required: true },
  location: { label: 'Localisation du projet', placeholder: 'Ex : Lomé, Kara, Atakpamé', type: 'text', required: false },
  stage: {
    label: "État d'avancement",
    type: 'select',
    required: true,
    options: [
      'Idée / Concept',
      'Étude de faisabilité réalisée',
      'Prototype / MVP',
      "Activité lancée, en croissance",
      'Activité existante à développer',
    ],
  },
  question: { label: 'Sujet de votre question', placeholder: 'Ex : Renseignement sur le service Lavage Auto', type: 'text', required: true },
  message: {
    label: 'Votre message',
    placeholder: 'Décrivez votre demande, votre projet ou votre question avec autant de détails que possible.',
    type: 'textarea',
    required: true,
  },
};

const ContactCard = ({ topic, onSelect, active }) => {
  const Icon = topic.icon;
  return (
    <button
      type="button"
      onClick={() => onSelect(topic.id)}
      className={`group text-left rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        active
          ? 'bg-gradient-to-br from-primary to-primary-container text-white border-primary shadow-2xl'
          : 'bg-white border-outline-variant/40 hover:border-primary/40'
      }`}
    >
      <span
        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
          active ? 'bg-white/15 text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'
        } transition-all`}
      >
        <Icon className="h-6 w-6" strokeWidth={2.2} />
      </span>
      <p className={`mt-5 text-xs font-black uppercase tracking-[0.3em] ${active ? 'text-cyan-200' : 'text-primary'}`}>
        {topic.badge}
      </p>
      <h3 className={`mt-2 text-xl font-black ${active ? 'text-white' : 'text-on-surface'}`}>{topic.title}</h3>
      <p className={`mt-3 text-sm leading-relaxed ${active ? 'text-white/85' : 'text-on-surface-variant'}`}>
        {topic.desc}
      </p>
      <span
        className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${
          active ? 'text-white' : 'text-primary'
        }`}
      >
        {active ? 'Sélectionné' : 'Choisir ce formulaire'}{' '}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
      </span>
    </button>
  );
};

const ContactForm = ({ topic, contactInfo }) => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Réinitialise quand on change de topic
  useEffect(() => {
    setFormData({});
    setSubmitted(false);
    setError('');
  }, [topic.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Construit un message lisible avec toutes les valeurs renseignées
      const lines = topic.fields
        .filter((f) => f !== 'message' && f !== 'name' && f !== 'email' && f !== 'phone')
        .map((f) => `${FIELD_LABELS[f]?.label || f} : ${formData[f] || '—'}`);
      const description = `Sujet : ${topic.title}\n${lines.join('\n')}\n\n${formData.message || ''}`.trim();

      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name || formData.organization || 'Contact TAOMAN',
          email: formData.email,
          phone: formData.phone,
          subject: `${topic.serviceTag} – ${formData.projectName || formData.question || topic.title}`,
          message: description,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({});
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError(await getApiErrorMessage(response, "Impossible d'envoyer votre message."));
      }
    } catch (err) {
      console.error('Erreur:', err);
      setError(err.message || 'Erreur réseau. Réessayez plus tard.');
    } finally {
      setLoading(false);
    }
  };

  const Icon = topic.icon;

  return (
    <div className="grid lg:grid-cols-[1.5fr_0.85fr] gap-8">
      {/* FORMULAIRE */}
      <div className="rounded-3xl bg-white border border-outline-variant/40 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-primary to-primary-container px-7 py-5 flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
            <Icon className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white/85">{topic.badge}</p>
            <h3 className="text-xl font-black text-white">{topic.headline}</h3>
          </div>
        </div>

        <div className="p-7">
          <p className="text-on-surface-variant leading-relaxed">{topic.desc}</p>

          {submitted && (
            <div className="mt-5 p-4 bg-green-50 border border-green-500 rounded-2xl text-green-700 flex items-start gap-3">
              <Check className="h-5 w-5 mt-0.5 shrink-0" strokeWidth={2.5} />
              <div>
                <p className="font-bold">Message envoyé.</p>
                <p className="text-sm mt-1">{topic.successText}</p>
              </div>
            </div>
          )}
          {error && (
            <div className="mt-5 p-4 bg-red-50 border border-red-500 rounded-2xl text-red-700">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {topic.fields.map((field) => {
              const config = FIELD_LABELS[field];
              if (!config) return null;
              const span = config.type === 'textarea' ? 'md:col-span-2' : '';
              return (
                <div key={field} className={span}>
                  <label className="block text-sm font-bold text-on-surface mb-2">
                    {config.label} {config.required && <span className="text-red-500">*</span>}
                  </label>
                  {config.type === 'textarea' ? (
                    <textarea
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleChange}
                      placeholder={config.placeholder}
                      rows={5}
                      required={config.required}
                      className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface placeholder:text-on-surface-variant/60"
                    />
                  ) : config.type === 'select' ? (
                    <select
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleChange}
                      required={config.required}
                      className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface"
                    >
                      <option value="">Sélectionner</option>
                      {config.options.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={config.type}
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleChange}
                      placeholder={config.placeholder}
                      required={config.required}
                      className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface placeholder:text-on-surface-variant/60"
                    />
                  )}
                </div>
              );
            })}
            <div className="md:col-span-2 mt-1">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3.5 px-6 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all disabled:opacity-50"
              >
                {loading ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send className="h-4 w-4" strokeWidth={2.5} />
                    {topic.submitLabel}
                  </>
                )}
              </button>
              <p className="mt-3 text-xs text-on-surface-variant text-center">
                En envoyant ce formulaire, vous acceptez d'être recontacté par TAOMAN Group Investment.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* SIDEBAR INFOS */}
      <aside className="space-y-5 lg:sticky lg:top-28 self-start">
        <div className="rounded-3xl bg-white border border-outline-variant/40 p-6">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-primary">Nous joindre directement</p>
          <div className="mt-5 space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Phone className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Téléphone</p>
                <p className="mt-0.5 font-bold text-on-surface">{contactInfo.phone || '+228 90 42 13 77'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Mail className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email</p>
                <p className="mt-0.5 font-bold text-on-surface break-all">{contactInfo.email || 'contact@taoman.group'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Adresse</p>
                <p className="mt-0.5 font-bold text-on-surface">{contactInfo.address || 'Vakpossito, Lomé – Togo'}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Horaires</p>
                <p className="mt-0.5 font-bold text-on-surface">{contactInfo.hours || 'Lun – Dim : 08h – 20h'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-[#08111d] via-[#0d1a30] to-[#08111d] text-white p-6">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-cyan-200">Notre engagement</p>
          <h4 className="mt-2 text-lg font-black text-white">Confidentialité et suivi personnalisé</h4>
          <p className="mt-3 text-sm text-white/75 leading-relaxed">
            Chaque demande est traitée par un interlocuteur unique. Vos données ne sont jamais transmises à des tiers et sont utilisées uniquement pour répondre à votre demande.
          </p>
        </div>
      </aside>
    </div>
  );
};

export const ContactPage = () => {
  const { section } = useSiteContent();
  const { content: tc, nav: tNav } = useLanguage();
  const tContact = tc.contact;
  const contactInfo = section('contact') || {};
  const [searchParams, setSearchParams] = useSearchParams();
  const topicId = searchParams.get('topic') || 'info';
  const topic = TOPICS[topicId] || TOPICS.info;

  const selectTopic = (id) => {
    setSearchParams({ topic: id });
    // Scroll to form
    setTimeout(() => {
      const el = document.getElementById('contact-form');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const topicsList = useMemo(() => Object.values(TOPICS), []);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tNav.contact}
        description={tContact.seoDescription}
        path="/contact"
        keywords="contact TAOMAN, devis Togo, partenariat investissement, soumettre projet Lomé"
      />
      <Header activeLink="contact" />

      <main id="main-content" className="flex-grow pt-24">
        <section className="relative overflow-hidden py-20 px-6 text-white">
          <PremiumBackdrop variant="dark" intensity="normal" particles={12} />
          <div className="relative z-10 max-w-[1200px] mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-cyan-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.4} /> {tContact.hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[1.05] bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent">
              {tContact.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed">
              {tContact.hero.description}
            </p>
          </div>
        </section>

        {/* 4 OPTIONS */}
        <section className="py-16 px-6 bg-surface">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
                <Building2 className="h-4 w-4" strokeWidth={2.4} /> 4 formulaires dédiés
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black text-on-surface tracking-tight">
                Quel est l'objet de votre demande ?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-on-surface-variant text-lg">
                Chaque formulaire est conçu pour aller à l'essentiel et orienter votre demande vers la bonne équipe TAOMAN.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {topicsList.map((t) => (
                <ContactCard key={t.id} topic={t} onSelect={selectTopic} active={t.id === topicId} />
              ))}
            </div>
          </div>
        </section>

        {/* FORMULAIRE SELECTIONNE */}
        <section id="contact-form" className="py-16 px-6 bg-gradient-to-b from-surface-container-low to-surface scroll-mt-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-8 flex items-center gap-2 text-sm text-on-surface-variant flex-wrap">
              <span>Contact</span>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.4} />
              <span className="text-primary font-bold">{topic.badge}</span>
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.4} />
              <span className="text-on-surface font-bold">{topic.title}</span>
            </div>
            <ContactForm topic={topic} contactInfo={contactInfo} />
          </div>
        </section>

        {/* BANDEAU GROUPE TAOMAN */}
        <section className="py-16 px-6 bg-gradient-to-br from-primary to-primary-container">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.4fr_0.8fr] gap-8 items-center text-white">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-white/85">TAOMAN Group Investment</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black leading-tight">
                Un groupe togolais multi-activités, des services concrets, des investissements suivis.
              </h2>
              <p className="mt-4 text-lg text-white/85 max-w-2xl leading-relaxed">
                Services opérationnels (Lavage, Déménagement, Entretien, Mécanique, Transport) + Programme d'investissement TGI sur 5 secteurs (Logistique, Agro, Commerce, BTP, Numérique).
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-primary px-6 py-3.5 font-bold shadow-md hover:scale-[1.02] transition"
              >
                Voir nos services <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
              <Link
                to="/investissement"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur hover:bg-white hover:text-primary transition"
              >
                Découvrir TGI <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

/**
 * QuotePage – formulaire de devis générique (conservé pour compatibilité).
 */
export const QuotePage = () => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setFormData((prev) => ({
          ...prev,
          name: [user.firstName, user.lastName].filter(Boolean).join(' ') || prev.name,
          email: user.email || prev.email,
          phone: user.phone || prev.phone,
        }));
      } catch (e) {
        console.error('Erreur de parsing user data', e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    try {
      const response = await fetch(`${API_URL}/quotes/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: `Devis: ${formData.service}`,
          description: `Date souhaitée: ${formData.date}\n\nDescription: ${formData.description}`,
          service: formData.service,
        }),
      });
      if (response.ok) setSubmitted(true);
      else setSubmitError(await getApiErrorMessage(response, "Impossible d'envoyer votre demande de devis."));
    } catch (error) {
      console.error('Erreur réseau:', error);
      setSubmitError(error.message || 'Erreur réseau. Réessayez plus tard.');
    }
  };

  const services = ['Lavage Auto', 'Déménagement', 'Entretien Bureau', 'Autre'];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="devis" />
      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-r from-primary to-primary-container py-16 px-6 text-white">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>Demander un devis</h1>
            <p className="text-xl" style={{ color: 'rgba(255,255,255,0.9)' }}>Service gratuit et sans engagement</p>
          </div>
        </section>
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-lg border border-outline-variant/40">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700 mb-6">
                    <Check className="h-8 w-8" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-3xl font-bold text-on-surface mb-4">Demande envoyée !</h2>
                  <p className="text-lg text-on-surface-variant mb-8">
                    Votre demande de devis a bien été soumise. Vous recevrez une réponse par email dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData((prev) => ({ ...prev, service: '', date: '', description: '' }));
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    Faire une autre demande
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-on-surface mb-8">Remplissez le formulaire</h2>
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 font-semibold">{submitError}</div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-on-surface font-bold mb-2">Service demandé *</label>
                      <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface">
                        <option value="">Sélectionnez un service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">Nom complet *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface" placeholder="votre@email.com" />
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">Téléphone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface" placeholder="+228 XX XX XX XX" />
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">Date souhaitée</label>
                      <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface" />
                    </div>
                    <div>
                      <label className="block text-on-surface font-bold mb-2">Description du projet</label>
                      <textarea name="description" value={formData.description} onChange={handleChange} rows="5" className="w-full px-4 py-3 border border-outline rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-surface text-on-surface" placeholder="Décrivez votre projet en détail..." />
                    </div>
                    <button type="submit" className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      Demander un devis
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
