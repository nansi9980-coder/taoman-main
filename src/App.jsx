import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { EntretienClimatisationPage } from './pages/EntretienClimatisationPage';
import { PasswordResetPage } from './pages/PasswordResetPage';
import { TermsConditionsPage } from './pages/TermsConditionsPage';
import { TaoEconomicInvestmentPage } from './pages/TaoEconomicInvestmentPage';
import { InvestmentSimulatorPage } from './pages/InvestmentSimulatorPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { DashboardPage } from './pages/DashboardPage';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          {/* Pages Principales */}
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/investissement" element={<InvestmentPage />} />
          <Route path="/investissement/tie" element={<TaoEconomicInvestmentPage />} />
          <Route path="/investissement/simulateur" element={<InvestmentSimulatorPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/jobs" element={<JobsPage />} />

          {/* Pages Secondaires */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/lavage-auto/devis" element={<LavageAutoDevisPage />} />
          <Route path="/demenagement/devis" element={<DemenagementDevisPage />} />
          <Route path="/entretien/bureaux" element={<EntretienBureauxPage />} />
          <Route path="/entretien/climatisation" element={<EntretienClimatisationPage />} />
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
    </ThemeProvider>
  );
}

export default App;