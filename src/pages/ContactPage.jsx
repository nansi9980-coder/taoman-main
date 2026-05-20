import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from "../config";
import { useSiteContent } from '../context/SiteContentContext';
import { getApiErrorMessage } from '../utils/apiError';

export const ContactPage = () => {
  const { section } = useSiteContent();
  const contactInfo = section('contact') || {};
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setSubmitError('');
    setSubmitting(true);
    
    try {
      const response = await fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        const msg = await getApiErrorMessage(response, "Erreur lors de l'envoi du message");
        throw new Error(msg);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      setSubmitError(error.message || "Votre message n'a pas pu être envoyé. Vérifiez votre connexion puis réessayez.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="contact" />

      <main className="flex-grow pt-24">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-on-primary">
          <div className="absolute -left-24 top-10 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute right-0 top-16 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
            <div className="relative z-10">
              <p className="text-sm uppercase tracking-[0.4em] text-on-primary/70 mb-4">Nous sommes à votre écoute</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Contactez TAOMAN Groupe Investissement
              </h1>
              <p className="text-xl text-on-primary/90 max-w-2xl mb-8">
                Pour toute demande de service, partenariat ou information, notre équipe répond avec réactivité et professionnalisme.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-6 border border-white/10 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-on-primary/60 mb-3">Délai</p>
                  <p className="text-3xl font-bold">Réponse en 24h</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 border border-white/10 shadow-lg">
                  <p className="text-xs uppercase tracking-[0.3em] text-on-primary/60 mb-3">Support</p>
                  <p className="text-3xl font-bold">Assistance dédiée</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 rounded-[2rem] bg-white/10 p-8 shadow-2xl backdrop-blur-xl border border-white/20">
              <h2 className="text-3xl font-bold mb-6">Nos coordonnées</h2>
              <div className="space-y-6 text-on-primary">
                <div>
                  <p className="text-sm text-on-primary/70">Téléphone</p>
                  <p className="text-2xl font-semibold">{contactInfo.phone || '+228 90 42 13 77'}</p>
                </div>
                <div>
                  <p className="text-sm text-on-primary/70">Email</p>
                  <p className="text-2xl font-semibold">{contactInfo.email || 'taomancontact@gmail.com'}</p>
                </div>
                <div>
                  <p className="text-sm text-on-primary/70">Adresse</p>
                  <p className="text-2xl font-semibold">{contactInfo.address || 'Vakpossito, Lomé - Togo'}</p>
                </div>
                <div className="rounded-3xl bg-primary/10 p-5 border border-primary/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-primary mb-2">Horaires</p>
                  <p className="text-on-primary">{contactInfo.hours || 'Lun - Dim : 08h00 - 20h00'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FORM & DETAILS ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="mb-10">
                <p className="text-sm uppercase tracking-[0.35em] text-primary mb-3">Formulaire de contact</p>
                <h2 className="text-4xl font-bold text-on-surface">Envoyez-nous une demande claire et précise</h2>
                <p className="text-lg text-on-surface-variant max-w-2xl mt-4">
                  Remplissez les informations ci-dessous afin que notre équipe vous réponde rapidement avec une proposition adaptée.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-surface-container-high p-10 rounded-[2rem] shadow-xl border border-outline-variant/20">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="space-y-3">
                    <span className="block text-sm font-bold text-on-surface">Nom complet *</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-3xl border border-outline-variant/60 bg-surface px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none"
                      placeholder="Votre nom"
                    />
                  </label>

                  <label className="space-y-3">
                    <span className="block text-sm font-bold text-on-surface">Email *</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-3xl border border-outline-variant/60 bg-surface px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none"
                      placeholder="votre@email.com"
                    />
                  </label>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mt-6">
                  <label className="space-y-3">
                    <span className="block text-sm font-bold text-on-surface">Téléphone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-outline-variant/60 bg-surface px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none"
                      placeholder="+228 XX XX XX XX"
                    />
                  </label>

                  <label className="space-y-3">
                    <span className="block text-sm font-bold text-on-surface">Sujet *</span>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full rounded-3xl border border-outline-variant/60 bg-surface px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none"
                      placeholder="Objet de votre message"
                    />
                  </label>
                </div>

                <label className="space-y-3 mt-6">
                  <span className="block text-sm font-bold text-on-surface">Message *</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full rounded-[1.75rem] border border-outline-variant/60 bg-surface px-4 py-4 text-on-surface placeholder:text-on-surface-variant focus:border-primary focus:outline-none resize-none"
                    placeholder="Expliquez-nous votre projet, votre besoin ou votre demande de devis."
                  />
                </label>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-primary to-primary-container text-white font-bold shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-0.5"
                  >
                    {submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                  <p className="text-sm text-on-surface-variant">
                    Nous répondons généralement sous 24 heures.
                  </p>
                </div>

                {submitted && (
                  <div className="mt-6 rounded-3xl bg-green-50 border border-green-200 p-4 text-green-900 font-semibold animate-fade-in">
                    ✓ Votre message a bien été envoyé. Merci, nous vous recontacterons rapidement.
                  </div>
                )}

                {submitError && (
                  <div className="mt-6 rounded-3xl bg-red-50 border border-red-200 p-4 text-red-900 font-semibold animate-fade-in">
                    {submitError}
                  </div>
                )}
              </form>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[2rem] bg-white p-8 shadow-xl border border-outline-variant/20">
                <h3 className="text-2xl font-bold text-on-surface mb-4">Vous pouvez aussi nous joindre</h3>
                <div className="space-y-5">
                  {[
                    { title: 'Téléphone', value: contactInfo.phone || '+228 90 42 13 77' },
                    { title: 'Email', value: contactInfo.email || 'taomancontact@gmail.com' },
                    { title: 'Adresse', value: contactInfo.address || 'Vakpossito, Lomé - Togo' },
                  ].map((item, idx) => (
                    <div key={idx} className="rounded-3xl bg-surface p-5 border border-outline-variant/20">
                      <p className="text-sm text-on-surface-variant uppercase tracking-[0.25em] mb-2">{item.title}</p>
                      <p className="text-lg font-semibold text-on-surface">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-primary/10 via-white/60 to-primary-container/10 p-8 shadow-xl border border-primary/10">
                <h3 className="text-2xl font-bold text-on-surface mb-4">Engagement qualité</h3>
                <ul className="space-y-4 text-on-surface-variant">
                  <li>• Réponse rapide et suivi personnalisé</li>
                  <li>• Conseils adaptés à votre besoin</li>
                  <li>• Confidentialité et transparence</li>
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// ============ QUOTE PAGE ============

export const QuotePage = () => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const user = JSON.parse(userData);
        setFormData(prev => ({
          ...prev,
          name: [user.firstName, user.lastName].filter(Boolean).join(' ') || prev.name,
          email: user.email || prev.email,
          phone: user.phone || prev.phone
        }));
      } catch(e) {
        console.error("Erreur de parsing user data", e);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    
    try {
      const response = await fetch(`${API_URL}/quotes/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: `Devis: ${formData.service}`,
          description: `Date souhaitée: ${formData.date}\n\nDescription: ${formData.description}`,
          service: formData.service,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(await getApiErrorMessage(response, "Impossible d'envoyer votre demande de devis."));
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
      setSubmitError(error.message || "Erreur réseau. Réessayez plus tard.");
    }
  };

  const services = [
    'Lavage Auto',
    'Déménagement',
    'Entretien Bureau',
    'Climatisation',
    'Autre'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="devis" />

      <main className="flex-grow pt-24">
        {/* ============ HERO ============ */}
        <section className="bg-gradient-to-r from-primary to-primary-container py-16 px-6 text-on-primary">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">Demander un devis</h1>
            <p className="text-xl text-on-primary/90">Service gratuit et sans engagement</p>
          </div>
        </section>

        {/* ============ FORM ============ */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-lg border border-outline-variant/20">
              {submitted ? (
                <div className="text-center py-10 animate-fade-in">
                  <div className="text-6xl mb-6">✅</div>
                  <h2 className="text-3xl font-bold text-on-surface mb-4">Demande envoyée !</h2>
                  <p className="text-lg text-on-surface-variant mb-8">
                    Votre demande de devis a bien été soumise. Vous recevrez une réponse par email dans les plus brefs délais.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData(prev => ({ ...prev, service: '', date: '', description: '' }));
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Faire une autre demande
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-on-surface mb-8">Remplissez le formulaire</h2>
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 font-semibold">
                      {submitError}
                    </div>
                  )}

                  <div className="space-y-6">
                {/* Service */}
                <div className="animate-fade-in-up">
                  <label htmlFor="service" className="block text-on-surface font-bold mb-2">
                    Service demandé *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Sélectionnez un service...</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Name */}
                <div className="animate-fade-in-up" style={{ animationDelay: '50ms' }}>
                  <label htmlFor="name" className="block text-on-surface font-bold mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <label htmlFor="email" className="block text-on-surface font-bold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  <label htmlFor="phone" className="block text-on-surface font-bold mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+228 XX XX XX XX"
                  />
                </div>

                {/* Preferred Date */}
                <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  <label htmlFor="date" className="block text-on-surface font-bold mb-2">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                {/* Description */}
                <div className="animate-fade-in-up" style={{ animationDelay: '250ms' }}>
                  <label htmlFor="description" className="block text-on-surface font-bold mb-2">
                    Description du projet
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-outline-variant rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                >
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