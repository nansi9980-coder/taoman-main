import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SiteContentProvider } from './context/SiteContentContext';
import { LanguageProvider } from './context/LanguageContext';
import { HelmetProvider } from 'react-helmet-async';
import { SeoHead } from './components/SeoHead';
import { ScrollToTop } from './components/ScrollToTop';
import { SplashScreen } from './components/SplashScreen';
import { HomePage } from './pages/HomePage';
import './App.css';

// Code-splitting : pages secondaires chargées à la demande
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const InvestmentPage = lazy(() => import('./pages/InvestmentPage').then((m) => ({ default: m.InvestmentPage })));
const JobsPage = lazy(() => import('./pages/JobsPage').then((m) => ({ default: m.JobsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const LoginPage = lazy(() => import('./pages/LoginregisterPage').then((m) => ({ default: m.LoginPage })));
const RegisterPage = lazy(() => import('./pages/RegisterPage').then((m) => ({ default: m.RegisterPage })));
const LegalPage = lazy(() => import('./pages/LegalPage').then((m) => ({ default: m.LegalPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const LavageAutoDevisPage = lazy(() => import('./pages/LavageAutoDevisPage').then((m) => ({ default: m.LavageAutoDevisPage })));
const DemenagementDevisPage = lazy(() => import('./pages/DemenagementDevisPage').then((m) => ({ default: m.DemenagementDevisPage })));
const DemenagementPersonnelsPage = lazy(() => import('./pages/DemenagementPersonnelsPage').then((m) => ({ default: m.DemenagementPersonnelsPage })));
const EntretienBureauxPage = lazy(() => import('./pages/EntretienBureauxPage').then((m) => ({ default: m.EntretienBureauxPage })));
const PasswordResetPage = lazy(() => import('./pages/PasswordResetPage').then((m) => ({ default: m.PasswordResetPage })));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage').then((m) => ({ default: m.TermsConditionsPage })));
const TaoEconomicInvestmentPage = lazy(() => import('./pages/TaoEconomicInvestmentPage').then((m) => ({ default: m.TaoEconomicInvestmentPage })));
const SectorsListPage = lazy(() => import('./pages/SectorsListPage').then((m) => ({ default: m.SectorsListPage })));
const SectorDetailPage = lazy(() => import('./pages/SectorDetailPage').then((m) => ({ default: m.SectorDetailPage })));
const InvestmentSimulatorPage = lazy(() => import('./pages/InvestmentSimulatorPage').then((m) => ({ default: m.InvestmentSimulatorPage })));
const SubmitProjectPage = lazy(() => import('./pages/SubmitProjectPage').then((m) => ({ default: m.SubmitProjectPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage })));
const DashboardPage = lazy(() => import('./pages/DashboardPage').then((m) => ({ default: m.DashboardPage })));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage').then((m) => ({ default: m.AdminDashboardPage })));
const FaqPage = lazy(() => import('./pages/FaqPage').then((m) => ({ default: m.FaqPage })));

function RouteFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-surface" role="status" aria-live="polite" aria-busy="true">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" aria-hidden="true" />
        <p className="text-sm font-semibold text-on-surface-variant">Chargement…</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
      <HelmetProvider>
        <SiteContentProvider>
          <SplashScreen minDuration={1800} />
          <SeoHead />
          <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-2xl focus:shadow-2xl focus:font-bold"
            >
              Aller au contenu principal
            </a>
            <ScrollToTop />
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                {/* Pages Principales */}
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route
                  path="/services/marketing-international"
                  element={<SectorDetailPage slugOverride="marketing-international" pageContext="services" />}
                />
                <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
                <Route path="/investissement" element={<InvestmentPage />} />
                <Route path="/investissement/tgi" element={<TaoEconomicInvestmentPage />} />
                <Route path="/investissement/tie" element={<Navigate to="/investissement/tgi" replace />} />
                <Route path="/secteurs" element={<SectorsListPage />} />
                <Route path="/secteurs/:slug" element={<SectorDetailPage />} />
                <Route path="/projets" element={<Navigate to="/secteurs" replace />} />
                <Route path="/investissement/simulateur" element={<InvestmentSimulatorPage />} />
                <Route path="/investissement/soumettre" element={<SubmitProjectPage />} />
                <Route path="/secteurs/energie-mines" element={<Navigate to="/secteurs" replace />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/admin" element={<AdminDashboardPage />} />
                <Route path="/jobs" element={<JobsPage />} />

                {/* Pages Secondaires */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/lavage-auto/devis" element={<LavageAutoDevisPage />} />
                <Route path="/demenagement/devis" element={<DemenagementDevisPage />} />
                <Route path="/entretien/bureaux" element={<EntretienBureauxPage />} />
                <Route path="/entretien/climatisation" element={<Navigate to="/services" replace />} />
                <Route path="/demenagement/personnels" element={<DemenagementPersonnelsPage />} />

                {/* Authentification */}
                <Route path="/connexion" element={<LoginPage />} />
                <Route path="/inscription" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/password/reset" element={<PasswordResetPage />} />

                {/* Légal */}
                <Route path="/mentions-legales" element={<LegalPage />} />
                <Route path="/confidentialite" element={<PrivacyPage />} />
                <Route path="/termes-conditions" element={<TermsConditionsPage />} />
              </Routes>
            </Suspense>
          </Router>
        </SiteContentProvider>
      </HelmetProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
