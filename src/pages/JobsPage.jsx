import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState, useEffect } from 'react';
import { API_URL } from "../config";
import { useSiteContent } from '../context/SiteContentContext';
import { mergeCmsSection } from '../utils/cmsSectionDefaults';

export const JobsPage = () => {
  const { section } = useSiteContent();
  const jobsContent = mergeCmsSection('jobs', section('jobs'));
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${API_URL}/jobs/public`);
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des emplois');
        }
        const data = await response.json();
        setJobListings(data || []);
      } catch (err) {
        setError(err.message);
        setJobListings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = selectedCategory === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.category?.toLowerCase() === selectedCategory.toLowerCase());

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Chargement des emplois...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    console.warn('Erreur de chargement des emplois:', error);
  }

  const categories = jobsContent.categories?.length
    ? jobsContent.categories
    : [{ value: 'all', label: 'Tous les postes' }];


  return (
    <div className="flex flex-col min-h-screen bg-background pt-[80px]">
      <Header activeLink="jobs" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary py-xxl text-on-primary">
          <div className="max-w-[1200px] mx-auto px-lg text-center">
            <h1 className="font-display text-display text-on-primary mb-md">{jobsContent.title}</h1>
            <p className="text-body-lg text-on-primary/90 mb-xl max-w-3xl mx-auto">{jobsContent.subtitle}</p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-xxl max-w-[1200px] mx-auto px-lg w-full">
          {/* Filters */}
          <div className="mb-xl">
            <h2 className="text-headline-md text-on-surface font-bold mb-md">{jobsContent.filterTitle || 'Filtrer par catégorie'}</h2>
            <div className="flex flex-wrap gap-md">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-lg py-md rounded-lg font-label-md transition-all ${
                    selectedCategory === cat.value
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-container-low text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-md">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-xl rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-lg items-start md:items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-headline-md text-on-surface font-bold mb-md">
                      {job.title}
                    </h3>
                    <p className="text-body-sm text-on-surface-variant mb-md">
                      TAOMAN Group Investment • {job.location || 'Lomé, Togo'}
                    </p>
                    <span className="inline-block px-md py-xs bg-primary-container/10 text-primary-container rounded-lg text-label-sm font-bold">
                      {job.type}
                    </span>
                  </div>

                  <div className="md:col-span-1">
                    <p className="text-headline-md text-primary font-bold mb-md">
                      {job.startDate ? new Date(job.startDate).toLocaleDateString("fr-FR") : "Dès que possible"}
                    </p>
                  </div>

                  <div className="md:col-span-1 text-right">
                    <button className="w-full md:w-auto bg-primary text-on-primary px-lg py-md rounded-lg font-label-md font-bold hover:opacity-90 transition-all">
                      Candidater
                    </button>
                  </div>
                </div>

                {/* Job Details */}
                <div className="mt-md pt-md border-t border-outline-variant">
                  <p className="text-body-md text-on-surface-variant mb-md whitespace-pre-wrap">
                    {job.description}
                  </p>
                  {job.skills && (
                    <div>
                      <p className="text-label-md font-bold text-on-surface mb-md">
                        Compétences & Qualifications requises:
                      </p>
                      <ul className="space-y-xs">
                        {job.skills.split(',').map((req, idx) => (
                          <li key={idx} className="text-body-sm text-on-surface-variant flex items-center gap-md">
                            <span className="w-1 h-1 bg-primary rounded-full"></span>
                            {req.trim()}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-xxl">
              <p className="text-headline-md text-on-surface-variant">
                {jobsContent.emptyMessage || "Aucune offre d'emploi dans cette catégorie."}
              </p>
            </div>
          )}
        </section>

        {/* Why Join Section */}
        <section className="bg-surface-container-low py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg">
            <h2 className="text-headline-lg text-on-surface font-bold mb-xl text-center">
              Pourquoi rejoindre TAOMAN Group Investment ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              {[
                { title: 'Carrière prometteuse', desc: 'Évolutivité rapide et formation continue' },
                { title: 'Équipe diverse', desc: 'Travailler avec des talents de différentes nationalités' },
                { title: 'Avantages compétitifs', desc: 'Salaires attractifs et bénéfices sociaux' },
                { title: 'Impact social', desc: 'Contribuer à des projets durables' },
                { title: 'Environnement bienveillant', desc: 'Équilibre travail-vie personnelle' },
                { title: 'Innovation', desc: 'Travailler avec les dernières technologies' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-xl rounded-xl shadow-sm">
                  <h3 className="text-headline-md text-on-surface font-bold mb-md">
                    {item.title}
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg text-center">
            <h2 className="text-headline-lg text-on-primary font-bold mb-md">
              N'avez-vous pas trouvé le poste idéal?
            </h2>
            <p className="text-body-lg text-on-primary/90 mb-xl">
              Envoyez-nous votre CV et nous vous contacterons dès qu'une opportunité correspondra à votre profil.
            </p>
            <button className="bg-on-primary text-primary px-xl py-md rounded-lg font-label-md font-bold hover:opacity-90 transition-all">
              Envoyer votre CV
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};