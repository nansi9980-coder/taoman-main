import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_URL } from "../config";
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { mergeCmsSection } from '../utils/cmsSectionDefaults';
import { getJobsTranslations } from '../i18n/jobs';
import { PremiumBackdrop } from '../components/PremiumBackdrop';
import { FloatingDecor } from '../components/FloatingDecor';
import { TextReveal } from '../components/TextReveal';
import { Reveal } from '../components/Reveal';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { MagneticButton } from '../components/MagneticButton';
import { BRAND_NAME } from '../constants/branding';
import { SeoHead } from '../components/SeoHead';

export const JobsPage = () => {
  const navigate = useNavigate();
  const { section } = useSiteContent();
  const { translations: tc, language } = useLanguage();
  const tJ = tc?.jobs?.hero || {};
  const tJobs = getJobsTranslations(language);
  const jobsContent = mergeCmsSection('jobs', section('jobs'), language);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${API_URL}/jobs/public`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        });
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
            <p className="text-gray-600">{tJobs.loading}</p>
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
    : [{ value: 'all', label: tJobs.filterAll }];


  const applyForJob = (jobTitle) => {
    const params = new URLSearchParams({
      topic: 'info',
      subject: jobTitle ? `Candidature — ${jobTitle}` : 'Candidature spontanée',
    });
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-[80px]">
      <SeoHead
        title={tJ.title || jobsContent.title || tJobs.filterTitle}
        description={tJ.description || jobsContent.subtitle}
        path="/jobs"
        keywords="emploi Taoman Group Investissement, carrières Lomé, recrutement Togo"
      />
      <Header activeLink="jobs" />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-6 text-white hero-scan-line">
          <PremiumBackdrop variant="dark" intensity="soft" particles={14} />
          <FloatingDecor className="z-[1]" />
          <div className="max-w-[1200px] mx-auto px-lg text-center relative z-10">
            {tJ.eyebrow && (
              <p className="mb-4 text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">{tJ.eyebrow}</p>
            )}
            <h1 className="font-display text-4xl md:text-6xl font-black mb-md">
              <TextReveal
                elementType="span"
                immediate
                className="block bg-gradient-to-r from-cyan-100 via-white to-cyan-100 bg-clip-text text-transparent"
                text={tJ.title || jobsContent.title}
              />
            </h1>
            <p className="text-body-lg text-white/90 mb-xl max-w-3xl mx-auto">{tJ.description || jobsContent.subtitle}</p>
          </div>
        </section>

        <MarqueeTicker
          items={[BRAND_NAME, tJobs.filterTitle || 'Carrières', 'Lomé · Togo', 'Rejoignez Taoman']}
          speed={30}
        />

        {/* Job Listings */}
        <section className="py-xxl max-w-[1200px] mx-auto px-lg w-full">
          {/* Filters */}
          <div className="mb-xl">
            <h2 className="text-headline-md text-on-surface font-bold mb-md">{jobsContent.filterTitle || tJobs.filterTitle}</h2>
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
          <Reveal preset="fadeUp" childSelector=".job-card-premium" stagger={0.08}>
          <div className="space-y-md">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="job-card-premium bg-white p-xl rounded-xl border border-outline-variant shadow-sm hover-card-premium interactive hover-glow motion-reduce:hover:translate-y-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-lg items-start md:items-center">
                  <div className="md:col-span-2">
                    <h3 className="text-headline-md text-on-surface font-bold mb-md">
                      {job.title}
                    </h3>
                    <p className="text-body-sm text-on-surface-variant mb-md">
                      Taoman Group Investissement • {job.location || tJobs.defaultLocation}
                    </p>
                    <span className="inline-block px-md py-xs bg-primary-container/10 text-primary-container rounded-lg text-label-sm font-bold">
                      {job.type}
                    </span>
                  </div>

                  <div className="md:col-span-1">
                    <p className="text-headline-md text-primary font-bold mb-md">
                      {job.startDate ? new Date(job.startDate).toLocaleDateString(tJobs.locale) : tJobs.dateAsap}
                    </p>
                  </div>

                  <div className="md:col-span-1 text-right">
                    <MagneticButton
                      className="w-full md:w-auto px-lg py-md rounded-lg"
                      onClick={() => applyForJob(job.title)}
                    >
                      {tJobs.apply}
                    </MagneticButton>
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
                        {tJobs.skillsLabel}
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
          </Reveal>

          {filteredJobs.length === 0 && (
            <div className="text-center py-xxl">
              <p className="text-headline-md text-on-surface-variant">
                {jobsContent.emptyMessage || tJobs.empty}
              </p>
            </div>
          )}
        </section>

        {/* Why Join Section */}
        <section className="bg-surface-container-low py-xxl">
          <div className="max-w-[1200px] mx-auto px-lg">
            <h2 className="text-headline-lg text-on-surface font-bold mb-xl text-center">
              {tJobs.whyJoin.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              {tJobs.whyJoin.items.map((item, idx) => (
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
              {tJobs.cta.title}
            </h2>
            <p className="text-body-lg text-on-primary/90 mb-xl">
              {tJobs.cta.description}
            </p>
            <MagneticButton
              className="bg-on-primary text-primary px-xl py-md rounded-lg font-label-md"
              onClick={() => applyForJob('')}
            >
              {tJobs.cta.button}
            </MagneticButton>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};