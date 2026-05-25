import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { InvestmentPage } from './pages/InvestmentPage';
import { JobsPage } from './pages/JobsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginregisterPage';
import { RegisterPage } from './pages/RegisterPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { LavageAutoDevisPage } from './pages/LavageAutoDevisPage';
import { DemenagementDevisPage } from './pages/DemenagementDevisPage';
import { DemenagementPersonnelsPage } from './pages/DemenagementPersonnelsPage';
import { EntretienBureauxPage } from './pages/EntretienBureauxPage';
import { PasswordResetPage } from './pages/PasswordResetPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { TaoEconomicInvestmentPage } from './pages/TaoEconomicInvestmentPage';
import { SectorsListPage } from './pages/SectorsListPage';
import { SectorDetailPage } from './pages/SectorDetailPage';
import { InvestmentSimulatorPage } from './pages/InvestmentSimulatorPage';
import { SubmitProjectPage } from './pages/SubmitProjectPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { ThemeProvider } from './context/ThemeContext';
import { SiteContentProvider } from './context/SiteContentContext';
import { HelmetProvider } from 'react-helmet-async';
import { SeoHead } from './components/SeoHead';
import { FaqPage } from './pages/FaqPage';
import { ScrollToTop } from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <SiteContentProvider>
          <SeoHead />
          <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ScrollToTop />
        <Routes>
          {/* Pages Principales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
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
          </Router>
        </SiteContentProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;