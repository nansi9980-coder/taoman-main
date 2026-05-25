import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';
import { getApiErrorMessage } from '../utils/apiError';
import { DEFAULT_SECTORS } from '../data/sectors-defaults';

export const SubmitProjectPage = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    sector: '',
    location: '',
    amount: '',
    horizon: '',
    description: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    website: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError('');

    try {
      const response = await fetch(`${API_URL}/quotes/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.contactName,
          phone: formData.contactPhone,
          address: formData.location,
          title: `Soumission de projet - ${formData.projectName}`,
          description: [
            `Secteur: ${formData.sector}`,
            `Ticket recherché: ${formData.amount}`,
            `Horizon: ${formData.horizon}`,
            `Localisation: ${formData.location}`,
            `Email: ${formData.contactEmail}`,
            `Site web: ${formData.website || '—'}`,
            '',
            'Description:',
            formData.description,
          ].join('\n'),
          service: 'Soumission de projet',
          email: formData.contactEmail,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          projectName: '',
          sector: '',
          location: '',
          amount: '',
          horizon: '',
          description: '',
          contactName: '',
          contactEmail: '',
          contactPhone: '',
          website: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError(await getApiErrorMessage(response, "Impossible d'envoyer votre soumission."));
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitError(error.message || 'Erreur réseau. Réessayez plus tard.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="investissement" />

      <main className="flex-grow pt-24">
        <section className="relative overflow-hidden bg-[#07111f] py-20 px-6 text-white">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="relative z-10 mx-auto max-w-[1100px]">
            <Link to="/investissement" className="text-sm text-cyan-200 font-bold hover:underline">
              ← Investir avec nous
            </Link>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">Soumettre un projet</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-black tracking-[-0.04em]">
              Présentez votre projet à TAOMAN
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75 leading-relaxed">
              Décrivez votre projet, son secteur, son ticket et son horizon. Notre comité d'investissement examine chaque dossier et revient vers vous sous 5 jours ouvrés.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-10">
            <div className="bg-white rounded-3xl shadow-lg p-8 border border-outline-variant/40">
              <h2 className="text-2xl font-black text-on-surface mb-2">Formulaire de soumission</h2>
              <p className="text-sm text-on-surface-variant mb-6">
                Les champs marqués <span className="text-red-500">*</span> sont obligatoires.
              </p>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700">
                  ✓ Votre projet a bien été reçu. Notre équipe revient vers vous sous 5 jours ouvrés.
                </div>
              )}
              {submitError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-lg text-red-700">{submitError}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Nom du projet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      required
                      placeholder="Ex: Mini-usine d'huile de palme"
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Secteur <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionner</option>
                      {DEFAULT_SECTORS.map((s) => (
                        <option key={s.slug} value={s.title}>{s.title}</option>
                      ))}
                      <option value="Autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Localisation
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Ex: Lomé, Kara, Atakpamé"
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Ticket recherché (FCFA)
                    </label>
                    <input
                      type="text"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="Ex: 5 000 000"
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Horizon visé
                    </label>
                    <select
                      name="horizon"
                      value={formData.horizon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Sélectionner</option>
                      <option value="3 mois">3 mois</option>
                      <option value="6 mois">6 mois</option>
                      <option value="10 mois">10 mois</option>
                      <option value="Au-delà de 10 mois">Au-delà de 10 mois</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Site web / Lien (optionnel)
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-on-surface mb-2">
                    Description du projet <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    required
                    placeholder="Présentez votre projet : produit/service, marché, modèle économique, équipe, état d'avancement."
                    className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Nom du contact <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="contactPhone"
                      value={formData.contactPhone}
                      onChange={handleChange}
                      required
                      placeholder="+228 ..."
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3.5 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.01] disabled:opacity-50"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer ma soumission'}
                </button>
              </form>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-3xl bg-[#07111f] text-white p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">Processus</p>
                <h3 className="mt-3 text-xl font-black">Comment nous examinons votre dossier</h3>
                <ol className="mt-5 space-y-4">
                  {[
                    ['1', 'Réception', 'Nous accusons réception sous 24h.'],
                    ['2', 'Analyse', 'Étude par notre comité (5 jours ouvrés).'],
                    ['3', 'Échange', 'Appel ou rendez-vous pour clarifier le projet.'],
                    ['4', 'Décision', 'Termes d\'engagement et calendrier de mobilisation.'],
                  ].map(([n, t, d]) => (
                    <li key={n} className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-300 text-[#07111f] font-black">{n}</span>
                      <div>
                        <p className="font-black">{t}</p>
                        <p className="text-sm text-white/70">{d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl bg-white border border-outline-variant/40 p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Besoin d'aide ?</p>
                <h3 className="mt-3 text-xl font-black text-on-surface">Parlez-en à notre équipe</h3>
                <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">
                  Notre équipe vous aide à structurer votre dossier avant soumission.
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center justify-center w-full rounded-2xl border border-primary px-4 py-3 font-bold text-primary hover:bg-primary hover:text-white transition"
                >
                  Contacter TAOMAN
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
