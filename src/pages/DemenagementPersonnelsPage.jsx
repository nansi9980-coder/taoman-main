import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Truck,
  Package,
  ShieldCheck,
  Users,
  Clock,
  CheckCircle2,
  Phone,
  ArrowRight,
  Boxes,
  Building2,
  HomeIcon,
  Sparkles,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SeoHead } from '../components/SeoHead';
import { useLanguage } from '../context/LanguageContext';
import { getMovingPersonnelContent } from '../i18n/moving-personnel';
import transport1 from '../assets/realisations/transport1.jpg';
import transport2 from '../assets/realisations/transport2.jpg';
import mecanique1 from '../assets/realisations/mecanique1.png';

const VEHICLE_IMAGES = [transport2, mecanique1, transport1];
const TYPE_ICONS = [HomeIcon, Building2, Package];
const COMMITMENT_ICONS = [ShieldCheck, Users, Boxes, Clock];
const PROCESS_ICONS = [Phone, Search, CheckCircle2, Truck];

export const DemenagementPersonnelsPage = () => {
  const [search, setSearch] = useState('');
  const { translations: tc, language } = useLanguage();
  const tM = tc?.moving || {};
  const tCommon = tc?.common || {};
  const mp = getMovingPersonnelContent(language);
  const labels = mp.labels;

  const vehicles = useMemo(
    () => mp.vehicles.map((v, i) => ({ ...v, image: VEHICLE_IMAGES[i] })),
    [mp.vehicles],
  );
  const types = useMemo(
    () => mp.types.map((t, i) => ({ ...t, icon: TYPE_ICONS[i] })),
    [mp.types],
  );
  const commitments = useMemo(
    () => mp.commitments.map((c, i) => ({ ...c, icon: COMMITMENT_ICONS[i] })),
    [mp.commitments],
  );
  const processSteps = useMemo(
    () => mp.processSteps.map((s, i) => ({ ...s, icon: PROCESS_ICONS[i] })),
    [mp.processSteps],
  );

  const filteredVehicles = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return vehicles;
    return vehicles.filter((v) =>
      [v.title, v.location, v.details, v.capacity].some((field) => field.toLowerCase().includes(q))
    );
  }, [search, vehicles]);

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <SeoHead
        title={tM.hero?.title || 'Personnel et flotte déménagement'}
        description={tM.seoDescription}
        path="/demenagement/personnels"
        keywords="flotte déménagement Lomé, camion déménagement Togo, équipe déménageurs, Taoman Group Investissement"
      />
      <Header activeLink="services" />

      <main className="flex-grow pt-24">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-[#07111f] py-20 px-6 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,82,204,0.45),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.28),transparent_45%)]" />
            <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-blob-delay" />
          </div>

          <div className="relative z-10 max-w-[1300px] mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-cyan-100 backdrop-blur mb-6">
                <Truck className="h-4 w-4" /> {tM.hero?.eyebrow || 'Personnel & flotte Taoman Group Investissement'}
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-[-0.04em] mb-5 bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent">
                {tM.hero?.title || 'Une équipe professionnelle de déménagement'}
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
                {tM.hero?.description || "Taoman Group Investissement met à votre disposition une flotte de véhicules adaptés et une équipe de déménageurs formés pour vos déménagements à Lomé, en province et dans la sous-région CEDEAO."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/demenagement/devis"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#07111f] px-7 py-4 font-bold shadow-xl hover:scale-105 transition"
                >
                  {tCommon.requestQuote || 'Demander un devis'} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact?topic=info&service=demenagement"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 text-white px-7 py-4 font-bold backdrop-blur hover:bg-white hover:text-[#07111f] transition"
                >
                  <Phone className="h-4 w-4" /> {tCommon.contactUs || 'Nous contacter'}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-300/20 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-white/20 shadow-2xl">
                <img src={transport1} alt="Équipe Taoman Group Investissement avec camion de déménagement" className="w-full h-[420px] object-cover" loading="eager" fetchpriority="high" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="rounded-full bg-cyan-300 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#07111f]">
                    {labels.fleetBadge}
                  </span>
                  <span className="text-xs font-bold text-white/85">{labels.coverage}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ KPI strip ============ */}
        <section className="py-10 px-6 bg-surface-container-low border-y border-outline-variant/30">
          <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '+ 150', label: tM.kpi?.teams || 'Déménagements réalisés' },
              { value: '24 / 7', label: tM.kpi?.sla || 'Service & support' },
              { value: '6 – 20 m³', label: tM.kpi?.vehicles || 'Capacités véhicules' },
              { value: '15', label: tM.kpi?.cities || 'Couverture Togo + CEDEAO' },
            ].map((kpi) => (
              <div key={kpi.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-primary">{kpi.value}</span>
                <span className="mt-1 text-sm font-semibold text-on-surface-variant">{kpi.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ Types de déménagement ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{tM.types?.eyebrow || 'Qui accompagnons-nous ?'}</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">{tM.types?.title || 'Trois profils, une même exigence'}</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                {labels.typesIntro}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {types.map((t, idx) => {
                const { icon: Icon, title, desc } = t;
                return (
                  <div
                    key={title}
                    className="group bg-white rounded-3xl p-8 border border-outline-variant/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 120}ms` }}
                  >
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="h-7 w-7" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-2xl font-black text-on-surface mb-3">{title}</h3>
                    <p className="text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ Véhicules disponibles ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{tM.vehicles?.eyebrow || 'Notre flotte'}</p>
                <h2 className="text-4xl md:text-5xl font-black text-on-surface">{tM.vehicles?.title || 'Véhicules disponibles'}</h2>
                <p className="mt-4 text-lg text-on-surface-variant max-w-2xl">
                  {labels.vehiclesIntro}
                </p>
              </div>
              <div className="w-full lg:w-96 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-on-surface-variant" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={labels.vehicleSearch}
                  className="w-full pl-12 pr-4 py-3 border border-outline-variant/60 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredVehicles.map((vehicle, idx) => (
                <div
                  key={vehicle.title}
                  className="group bg-white rounded-3xl overflow-hidden border border-outline-variant/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-fade-in-up flex flex-col"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-cyan-300 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#07111f] shadow">
                      {vehicle.badge}
                    </span>
                    <span className="absolute top-4 right-4 rounded-full bg-emerald-400/95 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow">
                      {vehicle.availability}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl md:text-2xl font-black text-white leading-tight drop-shadow-lg">{vehicle.title}</h3>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-white/90">
                        <MapPin className="h-4 w-4" /> {vehicle.location}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{vehicle.details}</p>
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="rounded-2xl bg-surface-container-low p-3 border border-outline-variant/30">
                        <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{labels.capacity}</p>
                        <p className="text-base font-black text-on-surface mt-1">{vehicle.capacity}</p>
                      </div>
                      <div className="rounded-2xl bg-surface-container-low p-3 border border-outline-variant/30">
                        <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{labels.crew}</p>
                        <p className="text-sm font-bold text-on-surface mt-1">{vehicle.crew}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {vehicle.features.map((f) => (
                        <span key={f} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary">
                          <CheckCircle2 className="h-3 w-3" /> {f}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto border-t border-outline-variant/30 pt-4 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">{labels.from}</p>
                        <p className="text-lg font-black text-primary">{vehicle.price}</p>
                      </div>
                      <Link
                        to="/demenagement/devis"
                        className="inline-flex items-center gap-1.5 rounded-2xl bg-gradient-to-r from-primary to-primary-container text-white px-4 py-2.5 text-sm font-bold shadow-md hover:shadow-xl hover:scale-105 transition"
                      >
                        {labels.book} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredVehicles.length === 0 && (
              <div className="rounded-3xl border border-dashed border-outline-variant/60 bg-white p-12 text-center mt-8">
                <Sparkles className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="text-lg font-bold text-on-surface mb-2">{labels.noVehicleTitle}</p>
                <p className="text-on-surface-variant">{labels.noVehicleHint}</p>
              </div>
            )}
          </div>
        </section>

        {/* ============ Engagements ============ */}
        <section className="py-20 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{tM.commitments?.eyebrow || 'Nos engagements'}</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">{tM.commitments?.title || 'Ce que nous garantissons'}</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                {labels.commitmentsIntro}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {commitments.map((c, idx) => {
                const { icon: Icon, title, desc } = c;
                return (
                  <div
                    key={title}
                    className="bg-white rounded-3xl p-6 border border-outline-variant/40 hover:shadow-xl hover:border-primary/40 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-lg font-black text-on-surface mb-2">{title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ Process ============ */}
        <section className="py-20 px-6 bg-surface-container-low">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-primary mb-3">{tM.process?.eyebrow || 'Méthode'}</p>
              <h2 className="text-4xl md:text-5xl font-black text-on-surface">{tM.process?.title || "Du contact à l'installation"}</h2>
              <p className="mt-4 text-lg text-on-surface-variant max-w-2xl mx-auto">
                {labels.processIntro}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, idx) => {
                const { icon: Icon, title, desc } = step;
                return (
                  <div
                    key={title}
                    className="relative bg-white rounded-3xl p-6 border border-outline-variant/40 hover:shadow-xl transition-all animate-fade-in-up"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-container text-white shadow mb-4">
                      <Icon className="h-6 w-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="text-lg font-black text-on-surface mb-2">{title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-container to-primary text-white">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-5">{mp.finalCta.title}</h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">{mp.finalCta.desc}</p>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
              <Link
                to="/demenagement/devis"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-primary px-10 py-4 font-bold shadow-xl hover:scale-105 transition"
              >
                {mp.finalCta.quote} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact?topic=info&service=demenagement"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white text-white px-10 py-4 font-bold hover:bg-white hover:text-primary transition"
              >
                <Phone className="h-4 w-4" /> {mp.finalCta.call}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
