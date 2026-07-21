import { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BRAND_NAME } from '../constants/branding';
import { ADMIN_URL } from '../config';

export const AdminDashboardPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.href = ADMIN_URL;
    }
  }, []);

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
    ['Services TAOMAN GROUP INVESTMENTS', 'Lavage, déménagement, entretien bureaux et demandes terrain.'],
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

      <main className="flex-grow pt-[132px]">
        <section className="relative overflow-hidden bg-[#06101d] px-6 py-16 text-white">
          <div className="absolute -left-20 top-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-cyan-200">{BRAND_NAME}</p>
            <h1 className="text-5xl font-black tracking-[-0.05em] md:text-7xl">Dashboard admin externe</h1>
            <p className="mt-6 text-xl text-white/75">
              Le gestionnaire de contenu est accessible via l’interface d’administration dédiée. Vous allez être redirigé automatiquement.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
