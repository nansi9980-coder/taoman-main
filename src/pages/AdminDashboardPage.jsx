import { Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SiteContentEditor } from '../components/admin/SiteContentEditor';
import { BRAND_NAME } from '../constants/branding';

export const AdminDashboardPage = () => {
  const isAuthenticated = Boolean(localStorage.getItem('token') && localStorage.getItem('user'));

  if (!isAuthenticated) {
    return <Navigate to="/connexion" replace />;
  }

  const stats = [
    { label: 'Demandes de devis', value: '128', detail: '24 nouvelles cette semaine' },
    { label: 'Utilisateurs actifs', value: '2 450', detail: '+12% ce mois' },
    { label: 'Investissements suivis', value: '846 M FCFA', detail: 'Capital engagé' },
    { label: 'Tickets ouverts', value: '17', detail: 'Temps moyen 2h 15min' },
  ];

  const adminModules = [
    ['Gestion des devis', 'Créer, modifier, valider, envoyer et suivre les devis par service.'],
    ['Demandes clients', 'Centraliser les formulaires, contacts, besoins et statuts de traitement.'],
    ['Utilisateurs & rôles', 'Administrateurs, agents, investisseurs, clients et permissions.'],
    ['KYC investisseurs', 'Pièces, validation identité, conformité et historique des décisions.'],
    ['Investissements', 'Projets, montants, ROI, intérêts, échéances et affectation du capital.'],
    ['Réalisations & médias', 'Carrousels, images HD, vidéos, galeries et fiches projets.'],
    ['Finance & wallet', 'Versements, retraits, commissions, rapprochements et exports.'],
    ['Documents', 'Contrats, reçus, rapports PDF, attestations et archivage sécurisé.'],
    ['Reporting', 'Chiffres clés, performance, ventes, conversions et rapports mensuels.'],
    ['Notifications', 'Emails, SMS, WhatsApp, rappels automatiques et alertes internes.'],
    ['Services Taoman Group Investissement', 'Lavage, déménagement, entretien bureaux et demandes terrain.'],
    ['Sécurité & audit', 'Logs, sessions, actions sensibles, sauvegardes et contrôle d’accès.'],
  ];

  const quotes = [
    { client: 'Kossi Mensah', service: 'Lavage auto', amount: '35 000 FCFA', status: 'Nouveau' },
    { client: 'Ama Koffi', service: 'Déménagement', amount: '280 000 FCFA', status: 'À valider' },
    { client: 'TGI Holding', service: 'Entretien bureaux', amount: '650 000 FCFA', status: 'Envoyé' },
    { client: 'Marc Lawson', service: 'Investissement TGI', amount: '420 000 FCFA', status: 'Accepté' },
  ];

  const workflows = [
    'Réception automatique de la demande',
    'Qualification par service et priorité',
    'Calcul du montant et génération du devis',
    'Validation administrateur',
    'Envoi client par email ou WhatsApp',
    'Suivi paiement, intervention et satisfaction',
  ];

  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Header activeLink="admin" />

      <main className="flex-grow pt-24">
        <section className="relative overflow-hidden bg-[#06101d] px-6 py-16 text-white">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-200">{BRAND_NAME}</p>
              <h1 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">Administration</h1>
              <p className="mt-6 max-w-2xl text-xl text-white/75">
                URL dédiée : <span className="font-black text-cyan-200">/admin</span>. Un centre de contrôle pour piloter les devis, clients, services, investissements, médias, documents et rapports.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#nouveau-devis" className="rounded-2xl bg-cyan-300 px-6 py-4 font-black text-[#06101d] shadow-xl transition hover:-translate-y-1">
                  Nouveau devis
                </a>
                <a href="#fonctionnalites-admin" className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/20">
                  Voir les fonctionnalités
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-6 text-on-surface">
                <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.25em] text-primary">Vue globale</p>
                    <h2 className="text-3xl font-black">Tableau de bord admin</h2>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-700">Système opérationnel</span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-outline-variant/40 bg-surface-container-low p-5">
                      <p className="text-sm text-on-surface-variant">{stat.label}</p>
                      <p className="mt-2 text-3xl font-black text-on-surface">{stat.value}</p>
                      <p className="text-sm font-bold text-primary">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="nouveau-devis" className="px-6 py-20">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">Nouveau devis</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Création rapide</h2>
              <p className="mt-4 text-on-surface-variant">
                Le module admin doit permettre de créer un devis en choisissant le service, le client, la priorité, les frais, les remises et la date d’intervention.
              </p>

              <div className="mt-8 grid gap-4">
                {['Client ou entreprise', 'Service demandé', 'Montant estimé', 'Date souhaitée'].map((field) => (
                  <div key={field} className="rounded-2xl border border-outline-variant/40 bg-surface-container-low p-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-on-surface-variant">{field}</p>
                    <p className="mt-2 font-bold text-on-surface">Champ administrable</p>
                  </div>
                ))}
              </div>

              <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-primary to-primary-container px-6 py-4 font-black text-white shadow-lg transition hover:-translate-y-1">
                Générer le devis
              </button>
            </div>

            <div className="rounded-[2rem] bg-[#07111f] p-8 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-cyan-200">Workflow</p>
              <h2 className="mt-3 text-4xl font-black">Cycle de traitement</h2>
              <div className="mt-8 space-y-4">
                {workflows.map((step, idx) => (
                  <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300 font-black text-[#07111f]">{idx + 1}</span>
                    <p className="font-bold text-white">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-6 py-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">Suivi devis</p>
                <h2 className="mt-3 text-4xl font-black text-on-surface">Pipeline commercial</h2>
              </div>
              <button className="rounded-2xl border border-outline-variant bg-white px-6 py-4 font-black text-on-surface shadow-sm">
                Exporter CSV / PDF
              </button>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-[#07111f] text-white">
                    <tr>
                      <th className="px-6 py-4">Client</th>
                      <th>Service</th>
                      <th>Montant</th>
                      <th>Statut</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotes.map((quote) => (
                      <tr key={`${quote.client}-${quote.service}`} className="border-b border-outline-variant/40">
                        <td className="px-6 py-5 font-black text-on-surface">{quote.client}</td>
                        <td className="font-semibold text-on-surface-variant">{quote.service}</td>
                        <td className="font-black text-primary">{quote.amount}</td>
                        <td>
                          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-black text-primary">{quote.status}</span>
                        </td>
                        <td>
                          <button className="rounded-xl border border-outline-variant px-4 py-2 text-sm font-black text-on-surface">Ouvrir</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <SiteContentEditor />

        <section id="fonctionnalites-admin" className="px-6 py-20">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-10 text-center">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">Fonctionnalités dashboard</p>
              <h2 className="mt-3 text-4xl font-black text-on-surface">Administration complète du site</h2>
              <p className="mx-auto mt-4 max-w-3xl text-on-surface-variant">
                Liste claire des modules à intégrer pour administrer correctement {BRAND_NAME} et toutes les activités du groupe.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {adminModules.map(([title, desc], idx) => (
                <div key={title} className="rounded-3xl border border-outline-variant/40 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 font-black text-primary">{idx + 1}</span>
                  <h3 className="text-2xl font-black text-on-surface">{title}</h3>
                  <p className="mt-3 text-on-surface-variant">{desc}</p>
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
