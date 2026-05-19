import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

const vehicles = [
  {
    title: 'Camion de déménagement',
    location: 'Adewi Lomé',
    details: 'Aménagement & déménagement',
    availability: 'Disponible',
    price: 'sur demande',
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Fourgon de transport',
    location: 'Agoè Zongo',
    details: 'Transport et logistique',
    availability: 'Disponible',
    price: 'sur demande',
    image: 'https://images.unsplash.com/photo-1518128957394-9f6d34a92e82?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Camion utilitaire',
    location: 'Lomé Centre',
    details: 'Aménagement & déménagement',
    availability: 'Disponible',
    price: 'sur demande',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
  }
];

export const DemenagementPersonnelsPage = () => {
  const [search, setSearch] = useState('');
  const filteredVehicles = vehicles.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase()) ||
    v.location.toLowerCase().includes(search.toLowerCase()) ||
    v.details.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        <section className="bg-gradient-to-r from-primary to-primary-container py-20 px-6 text-white">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Une équipe professionnelle de déménagement</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Trouvez des véhicules et une équipe professionnelle pour vos déménagements avec TAOMAN Groupe Investissement.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 animate-fade-in-up">
              <div>
                <h2 className="text-4xl font-bold text-on-surface">Véhicules disponibles</h2>
                <p className="text-on-surface-variant mt-2 max-w-2xl">
                  Parcourez notre sélection de véhicules adaptés à tous types de déménagements professionnels et particuliers.
                </p>
              </div>
              <div className="w-full md:w-96">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher par type, lieu ou service"
                  className="w-full px-4 py-3 border border-outline rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVehicles.map((vehicle, idx) => (
                <div key={idx} className="group overflow-hidden rounded-3xl shadow-2xl border border-outline/20 bg-white hover:shadow-2xl transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 80}ms` }}>
                  <div className="relative h-72 overflow-hidden">
                    <img src={vehicle.image} alt={vehicle.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-primary text-white rounded-full px-4 py-2 text-sm font-semibold">{vehicle.availability}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-on-surface">{vehicle.title}</h3>
                      <span className="text-sm text-on-surface-variant">{vehicle.price}</span>
                    </div>
                    <p className="text-on-surface-variant mb-4">{vehicle.details}</p>
                    <div className="flex items-center gap-3 text-sm text-on-surface-variant mb-6">
                      <span className="inline-flex items-center gap-2">
                        <span className="text-primary"></span> {vehicle.location}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-bold px-5 py-3 rounded-2xl hover:shadow-xl transition-all duration-300">
                      Réserver maintenant
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
