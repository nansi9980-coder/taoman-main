import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';
import { getApiErrorMessage } from '../utils/apiError';

export const EntretienBureauxPage = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    surfaceArea: '',
    roomCount: '',
    desiredDate: '',
    name: '',
    phone: '',
    address: '',
    specificNeeds: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          title: `Devis Entretien Bureaux - ${formData.surfaceArea}m²`,
          description: `Type: ${formData.serviceType} | Surface: ${formData.surfaceArea}m² | Pièces: ${formData.roomCount} | Date: ${formData.desiredDate} | Besoins spécifiques: ${formData.specificNeeds}`,
          service: 'Entretien Bureaux',
          service_type: formData.serviceType,
          surface_area: formData.surfaceArea,
          room_count: formData.roomCount
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          serviceType: '',
          surfaceArea: '',
          roomCount: '',
          desiredDate: '',
          name: '',
          phone: '',
          address: '',
          specificNeeds: ''
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setSubmitError(await getApiErrorMessage(response, "Impossible d'envoyer votre demande de devis."));
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitError(error.message || "Erreur réseau. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-white">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Obtenez votre devis gratuit pour l'entretien des bureaux !</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Services complets d'entretien et de nettoyage pour vos espaces de bureaux professionnels
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2 animate-fade-in-up">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-on-surface mb-8">Remplissez votre demande</h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 animate-fade-in-up">
                      ✓ Votre devis a été envoyé avec succès ! Nous vous recontacterons sous peu.
                    </div>
                  )}
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-500 rounded-lg text-red-700">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Type d'entretien souhaité <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Sélectionner</option>
                          <option value="Nettoyage ponctuel">Nettoyage ponctuel</option>
                          <option value="Entretien régulier hebdomadaire">Hebdomadaire</option>
                          <option value="Entretien régulier bihebdomadaire">Bihebdomadaire</option>
                          <option value="Entretien régulier mensuel">Mensuel</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Superficie à entretenir (m²) <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="surfaceArea"
                          value={formData.surfaceArea}
                          onChange={handleChange}
                          placeholder="Ex: 250"
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Nombre de pièces <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="roomCount"
                          value={formData.roomCount}
                          onChange={handleChange}
                          placeholder="Ex: 10"
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Date souhaitée <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          name="desiredDate"
                          value={formData.desiredDate}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Votre nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Votre nom complet"
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
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+228 ..."
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Votre adresse <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Votre adresse complète"
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Vos besoins spécifiques
                        </label>
                        <textarea
                          name="specificNeeds"
                          value={formData.specificNeeds}
                          onChange={handleChange}
                          placeholder="Ex: nettoyage vitres, sols spéciaux, etc."
                          rows="4"
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50"
                    >
                      {loading ? 'Envoi en cours...' : 'VALIDER'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="animate-fade-in-down">
                <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-on-surface mb-6">Pourquoi TAOMAN Groupe Investissement ?</h3>
                  
                  <p className="text-on-surface-variant mb-8 leading-relaxed">
                    Nous vous proposons une expérience client nouvelle basée sur des services d'entretien professionnel et de qualité.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-xl border border-outline/20 hover:shadow-md transition-all">
                      <h4 className="font-bold text-primary mb-2">🏢 Nettoyage des bureaux</h4>
                      <p className="text-sm text-on-surface-variant">
                        Excellent service d'entretien complet pour un environnement de travail propre et sain.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-outline/20 hover:shadow-md transition-all">
                      <h4 className="font-bold text-primary mb-2">👥 Équipes professionnelles</h4>
                      <p className="text-sm text-on-surface-variant">
                        Agents d'entretien sélectionnés pour leur rigueur et professionnalisme, intervention discrète.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-outline/20 hover:shadow-md transition-all">
                      <h4 className="font-bold text-primary mb-2">🌿 Produits respectueux</h4>
                      <p className="text-sm text-on-surface-variant">
                        Nous utilisons exclusivement des produits écologiques sans danger pour vos employés.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
