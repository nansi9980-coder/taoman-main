import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';

export const LavageAutoDevisPage = () => {
  const [formData, setFormData] = useState({
    typeService: '',
    location: '',
    vehicleType: '',
    vehicleModel: '',
    desiredDate: '',
    desiredTime: '',
    name: '',
    phone: '',
    address: '',
    remarks: ''
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
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          title: `Devis Lavage Auto - ${formData.vehicleModel}`,
          description: `Type: ${formData.typeService} | Lieu: ${formData.location} | Date: ${formData.desiredDate} | Heure: ${formData.desiredTime} | Remarques: ${formData.remarks}`,
          service: 'Lavage Auto',
          service_type: formData.typeService,
          vehicle_type: formData.vehicleType,
          vehicle_model: formData.vehicleModel,
          service_location: formData.location
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          typeService: '',
          location: '',
          vehicleType: '',
          vehicleModel: '',
          desiredDate: '',
          desiredTime: '',
          name: '',
          phone: '',
          address: '',
          remarks: ''
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Obtenez votre devis de lavage gratuit !</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Nos équipes certifiées sont prêtes à offrir le meilleur service de nettoyage automobile pour votre véhicule
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

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Type de lavage <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="typeService"
                          value={formData.typeService}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Sélectionner</option>
                          <option value="Lavage Interieur">Lavage Intérieur</option>
                          <option value="Lavage Exterieur">Lavage Extérieur</option>
                          <option value="Lavage Général">Lavage Général</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Vous souhaitez <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Sélectionner</option>
                          <option value="Un lavage à domicile">Un lavage à domicile</option>
                          <option value="Un lavage au Centre de lavage TAOMAN Groupe Investissement">Au centre de lavage TAOMAN Groupe Investissement</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Type de véhicule <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">Sélectionner</option>
                          <option value="Citadine">Citadine</option>
                          <option value="Berline">Berline</option>
                          <option value="Compacte">Compacte</option>
                          <option value="SUV">SUV</option>
                          <option value="4x4">4x4</option>
                          <option value="Moto">Moto</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          Marque et modèle <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="vehicleModel"
                          value={formData.vehicleModel}
                          onChange={handleChange}
                          placeholder="Ex: Toyota Corolla"
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
                          Heure souhaitée <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="time"
                          name="desiredTime"
                          value={formData.desiredTime}
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
                    </div>

                    <div>
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

                    <div>
                      <label className="block text-sm font-bold text-on-surface mb-2">
                        Remarques additionnelles
                      </label>
                      <textarea
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                        placeholder="Vos remarques ou informations additionnelles..."
                        rows="4"
                        className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
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
                    Nous vous proposons une expérience client nouvelle basée sur des services de nettoyage automobile sur-mesure et irréprochables. Nos conseillers-experts certifiés travaillent dans le strict respect de votre véhicule.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-white p-4 rounded-xl border border-outline/20 hover:shadow-md transition-all">
                      <h4 className="font-bold text-primary mb-2">🧼 Lavage Intérieur</h4>
                      <p className="text-sm text-on-surface-variant">
                        Nettoyage à la vapeur, élimination des taches, aspirateur, shampooing et polissage intérieur.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-outline/20 hover:shadow-md transition-all">
                      <h4 className="font-bold text-primary mb-2">✨ Lavage Extérieur</h4>
                      <p className="text-sm text-on-surface-variant">
                        Nettoyage détaillé de la carrosserie et lustre pour pneus pour un rendu comme neuf.
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-outline/20 hover:shadow-md transition-all">
                      <h4 className="font-bold text-primary mb-2">🌟 Lavage Général</h4>
                      <p className="text-sm text-on-surface-variant">
                        Service complet intérieur et extérieur pour un résultat optimal.
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
