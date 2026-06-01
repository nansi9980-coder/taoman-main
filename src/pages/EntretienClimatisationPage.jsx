import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { API_URL } from '../config';
import { getApiErrorMessage } from '../utils/apiError';
import { DevisPageHero } from '../components/DevisPageHero';
import { useLanguage } from '../context/LanguageContext';
import { getAirconFormTranslations } from '../i18n/airconForm';

export const EntretienClimatisationPage = () => {
  const { language } = useLanguage();
  const t = getAirconFormTranslations(language);

  const [formData, setFormData] = useState({
    serviceType: '',
    acType: '',
    unitCount: '',
    power: '',
    desiredDate: '',
    name: '',
    phone: '',
    address: '',
    problemDescription: '',
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
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          title: `${t.quoteTitlePrefix} - ${formData.serviceType}`,
          description: `Type: ${formData.serviceType} | AC: ${formData.acType} | Unités: ${formData.unitCount} | Puissance: ${formData.power} | Date: ${formData.desiredDate} | Problème: ${formData.problemDescription}`,
          service: 'Climatisation',
          service_type: formData.serviceType,
          ac_type: formData.acType,
          unit_count: formData.unitCount,
          power: formData.power,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          serviceType: '',
          acType: '',
          unitCount: '',
          power: '',
          desiredDate: '',
          name: '',
          phone: '',
          address: '',
          problemDescription: '',
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setSubmitError(await getApiErrorMessage(response, t.submitError));
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitError(error.message || t.networkError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <DevisPageHero sectionKey="devisClimatisation" i18nNamespace="aircon" />

        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 animate-fade-in-up">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-on-surface mb-8">{t.formTitle}</h2>

                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-500 rounded-lg text-green-700 animate-fade-in-up">
                      {t.success}
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
                          {t.serviceType} <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">{t.select}</option>
                          {t.serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          {t.acType} <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="acType"
                          value={formData.acType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="">{t.select}</option>
                          {t.acOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          {t.unitCount} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="unitCount"
                          value={formData.unitCount}
                          onChange={handleChange}
                          placeholder={t.placeholderUnits}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">{t.power}</label>
                        <input
                          type="text"
                          name="power"
                          value={formData.power}
                          onChange={handleChange}
                          placeholder={t.placeholderPower}
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          {t.desiredDate} <span className="text-red-500">*</span>
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
                          {t.name} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.placeholderName}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          {t.phone} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t.placeholderPhone}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-on-surface mb-2">
                          {t.address} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder={t.placeholderAddress}
                          required
                          className="w-full px-4 py-3 border border-outline rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-bold text-on-surface mb-2">{t.problem}</label>
                        <textarea
                          name="problemDescription"
                          value={formData.problemDescription}
                          onChange={handleChange}
                          placeholder={t.placeholderProblem}
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
                      {loading ? t.submitting : t.submit}
                    </button>
                  </form>
                </div>
              </div>

              <div className="animate-fade-in-down">
                <div className="bg-gradient-to-br from-primary/10 to-primary-container/10 rounded-2xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-on-surface mb-6">{t.sidebar.title}</h3>
                  <p className="text-on-surface-variant mb-8 leading-relaxed">{t.sidebar.intro}</p>
                  <div className="space-y-6">
                    {t.sidebar.items.map((item) => (
                      <div
                        key={item.title}
                        className="bg-white p-4 rounded-xl border border-outline/20 hover:shadow-md transition-all"
                      >
                        <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                        <p className="text-sm text-on-surface-variant">{item.desc}</p>
                      </div>
                    ))}
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
