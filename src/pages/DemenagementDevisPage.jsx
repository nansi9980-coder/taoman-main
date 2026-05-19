import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';

export const DemenagementDevisPage = () => {
  const [formData, setFormData] = useState({
    departCity: '',
    arrivalCity: '',
    departQuarter: '',
    arrivalQuarter: '',
    moveDate: '',
    moveTime: '',
    knownVolume: '',
    volumeValue: '',
    name: '',
    firstName: '',
    phone: '',
    address: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/quotes/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.name}`,
          phone: formData.phone,
          address: formData.address,
          title: `Devis Déménagement - De ${formData.departCity} à ${formData.arrivalCity}`,
          description: `Départ: ${formData.departQuarter} (${formData.departCity}) | Arrivée: ${formData.arrivalQuarter} (${formData.arrivalCity}) | Date: ${formData.moveDate} | Heure: ${formData.moveTime} | Volume connu: ${formData.knownVolume} ${formData.volumeValue ? `(${formData.volumeValue})` : ''}`,
          service: 'Déménagement',
          departure_city: formData.departCity,
          arrival_city: formData.arrivalCity,
          departure_quarter: formData.departQuarter,
          arrival_quarter: formData.arrivalQuarter
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          departCity: '',
          arrivalCity: '',
          departQuarter: '',
          arrivalQuarter: '',
          moveDate: '',
          moveTime: '',
          knownVolume: '',
          volumeValue: '',
          name: '',
          firstName: '',
          phone: '',
          address: ''
        });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Erreur:', error);
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Devis Déménagement</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Spécialiste du déménagement premium, TAOMAN-GROUPE offre aux entreprises et particuliers une gamme complète de services de déménagement de qualité supérieure.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up">
              <h2 className="text-3xl font-bold text-on-surface mb-8">Remplissez votre demande de devis</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 animate-fade-in-up">
                  ✓ Votre demande a été envoyée avec succès ! Nous vous recontacterons sous peu.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Ville de départ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="departCity"
                      value={formData.departCity}
                      onChange={handleChange}
                      placeholder="Ex: Lomé"
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Ville d'arrivée <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="arrivalCity"
                      value={formData.arrivalCity}
                      onChange={handleChange}
                      placeholder="Ex: Accra"
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Quartier de départ <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="departQuarter"
                      value={formData.departQuarter}
                      onChange={handleChange}
                      placeholder="Ex: Adewi"
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Quartier d'arrivée <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="arrivalQuarter"
                      value={formData.arrivalQuarter}
                      onChange={handleChange}
                      placeholder="Ex: Jamestown"
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Date du déménagement <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="moveDate"
                      value={formData.moveDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Heure du déménagement <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      name="moveTime"
                      value={formData.moveTime}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-on-surface mb-3">
                      Connaissez-vous le volume approximatif de votre mobilier ? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="knownVolume"
                          value="Oui"
                          checked={formData.knownVolume === 'Oui'}
                          onChange={handleChange}
                          required
                          className="w-4 h-4"
                        />
                        <span className="text-on-surface">Oui</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="knownVolume"
                          value="Non"
                          checked={formData.knownVolume === 'Non'}
                          onChange={handleChange}
                          required
                          className="w-4 h-4"
                        />
                        <span className="text-on-surface">Non</span>
                      </label>
                    </div>
                  </div>

                  {formData.knownVolume === 'Oui' && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-bold text-on-surface mb-2">
                        Volume estimé
                      </label>
                      <input
                        type="text"
                        name="volumeValue"
                        value={formData.volumeValue}
                        onChange={handleChange}
                        placeholder="Ex: 50 m³"
                        className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Votre nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-on-surface mb-2">
                      Votre prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
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
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {loading ? 'Envoi en cours...' : 'VALIDER'}
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-6 border border-primary/20 hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                <h3 className="text-2xl font-bold text-primary mb-4">☆ Déménagement de particuliers</h3>
                <p className="text-on-surface-variant">
                  Service complet pour votre déménagement personnel avec toute l'aide dont vous avez besoin.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-6 border border-primary/20 hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                <h3 className="text-2xl font-bold text-primary mb-4">☆ Transferts spécialisés</h3>
                <p className="text-on-surface-variant">
                  Transferts administratifs, industriels, commerciaux et spécifiques pour tous vos besoins.
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-6 border border-primary/20 hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-2xl font-bold text-primary mb-4">☆ Manutention spécialisée</h3>
                <p className="text-on-surface-variant">
                  Gestion de volumes et poids hors normes avec expertise et professionnalisme.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
