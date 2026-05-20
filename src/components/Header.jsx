import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useTheme } from '../context/ThemeContext';
import { useSiteContent } from '../context/SiteContentContext';
import { mediaUrl } from '../config';

export const Header = ({ activeLink = 'accueil' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState(() => localStorage.getItem('taoman-language') || 'FR');
  const { colorMode, setColorMode } = useTheme();
  const { section } = useSiteContent();
  const branding = section('branding');
  const logoSrc = branding?.logoUrl ? mediaUrl(branding.logoUrl) : logo;

  const languageOptions = [
    { code: 'FR', label: 'Français', lang: 'fr' },
    { code: 'EN', label: 'English', lang: 'en' },
    { code: 'ES', label: 'Español', lang: 'es' },
    { code: 'PT', label: 'Português', lang: 'pt' },
    { code: 'DE', label: 'Deutsch', lang: 'de' },
    { code: 'AR', label: 'العربية', lang: 'ar' },
    { code: 'ZH', label: '中文', lang: 'zh' },
  ];

  const dictionary = {
    FR: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Nos projets',
      invest: 'Investir avec nous',
      services: 'Services',
      opportunities: 'Opportunités',
      contact: 'Contact',
      faq: 'FAQ',
      features: 'Fonctionnalités',
      quickAccess: 'Accès rapide aux espaces',
      profile: 'Profil de TAOMAN',
      profileDesc: "Mission, vision et valeurs de l'entreprise",
      governance: 'Gouvernance',
      governanceDesc: 'Organisation, équipe dirigeante et responsabilité',
      institutionalContact: 'Contact institutionnel',
      institutionalContactDesc: 'Coordonnées et demande de partenariat',
      tie: 'TAOMAN TIE',
      tieDesc: 'Programme d’investissement économique',
      fieldWork: 'Réalisations terrain',
      fieldWorkDesc: 'Galerie, progression et preuves projet',
      operationalServices: 'Services opérationnels',
      operationalServicesDesc: 'Lavage, déménagement, entretien et maintenance',
      whyInvest: 'Pourquoi investir ?',
      whyInvestDesc: 'Secteurs, risques, parcours et reporting',
      simulator: 'Simulateur professionnel',
      simulatorDesc: 'Projection 10 mois, inflation et fiscalité',
      dashboard: 'Dashboard investisseur',
      loginInvestor: 'Connexion investisseur',
      dashboardDesc: 'Portefeuille, wallet, documents et notifications',
      quote: 'Demander un devis',
      quoteDesc: 'Contact rapide pour un besoin précis',
      carWash: 'Lavage auto & moto',
      carWashDesc: 'Prestation centre ou domicile',
      officeCare: 'Entretien bureaux',
      officeCareDesc: 'Contrats professionnels et contrôle qualité',
      ac: 'Climatisation',
      acDesc: 'Installation, diagnostic et maintenance',
      login: 'Connexion',
      register: "S'inscrire",
      logout: 'Déconnexion',
      light: 'Mode clair',
      dark: 'Mode sombre',
    },
    EN: {
      home: 'Home', about: 'About', projects: 'Projects', invest: 'Invest with us', services: 'Services', opportunities: 'Opportunities', contact: 'Contact', features: 'Features', quickAccess: 'Quick access to', profile: 'TAOMAN profile', profileDesc: 'Mission, vision and company values', governance: 'Governance', governanceDesc: 'Organization, leadership and responsibility', institutionalContact: 'Institutional contact', institutionalContactDesc: 'Partnership and contact details', tie: 'TAOMAN TIE', tieDesc: 'Economic investment program', fieldWork: 'Field achievements', fieldWorkDesc: 'Gallery, progress and project proof', operationalServices: 'Operational services', operationalServicesDesc: 'Car wash, moving, cleaning and maintenance', whyInvest: 'Why invest?', whyInvestDesc: 'Sectors, risks, journey and reporting', simulator: 'Professional simulator', simulatorDesc: '10-month projection, inflation and taxes', dashboard: 'Investor dashboard', loginInvestor: 'Investor login', dashboardDesc: 'Portfolio, wallet, documents and alerts', quote: 'Request a quote', quoteDesc: 'Fast contact for a clear need', carWash: 'Car & motorcycle wash', carWashDesc: 'Center or home service', officeCare: 'Office cleaning', officeCareDesc: 'Professional contracts and quality control', ac: 'Air conditioning', acDesc: 'Installation, diagnosis and maintenance', login: 'Login', register: 'Sign up', logout: 'Logout', light: 'Light mode', dark: 'Dark mode',
    },
    ES: {
      home: 'Inicio', about: 'Acerca de', projects: 'Proyectos', invest: 'Invertir con nosotros', services: 'Servicios', opportunities: 'Oportunidades', contact: 'Contacto', features: 'Funciones', quickAccess: 'Acceso rápido a', profile: 'Perfil TAOMAN', profileDesc: 'Misión, visión y valores', governance: 'Gobernanza', governanceDesc: 'Organización, equipo y responsabilidad', institutionalContact: 'Contacto institucional', institutionalContactDesc: 'Alianzas y datos de contacto', tie: 'TAOMAN TIE', tieDesc: 'Programa de inversión económica', fieldWork: 'Realizaciones', fieldWorkDesc: 'Galería, progreso y pruebas', operationalServices: 'Servicios operativos', operationalServicesDesc: 'Lavado, mudanza, limpieza y mantenimiento', whyInvest: '¿Por qué invertir?', whyInvestDesc: 'Sectores, riesgos, recorrido e informes', simulator: 'Simulador profesional', simulatorDesc: 'Proyección 10 meses, inflación e impuestos', dashboard: 'Panel inversor', loginInvestor: 'Acceso inversor', dashboardDesc: 'Cartera, wallet, documentos y alertas', quote: 'Solicitar cotización', quoteDesc: 'Contacto rápido para una necesidad clara', carWash: 'Lavado auto & moto', carWashDesc: 'Servicio en centro o domicilio', officeCare: 'Limpieza oficinas', officeCareDesc: 'Contratos y control de calidad', ac: 'Climatización', acDesc: 'Instalación, diagnóstico y mantenimiento', login: 'Conexión', register: 'Registrarse', logout: 'Cerrar sesión', light: 'Modo claro', dark: 'Modo oscuro',
    },
    PT: {
      home: 'Início', about: 'Sobre', projects: 'Projetos', invest: 'Investir conosco', services: 'Serviços', opportunities: 'Oportunidades', contact: 'Contato', features: 'Funcionalidades', quickAccess: 'Acesso rápido a', profile: 'Perfil TAOMAN', profileDesc: 'Missão, visão e valores', governance: 'Governança', governanceDesc: 'Organização, liderança e responsabilidade', institutionalContact: 'Contato institucional', institutionalContactDesc: 'Parcerias e contatos', tie: 'TAOMAN TIE', tieDesc: 'Programa de investimento econômico', fieldWork: 'Realizações em campo', fieldWorkDesc: 'Galeria, progresso e provas', operationalServices: 'Serviços operacionais', operationalServicesDesc: 'Lavagem, mudança, limpeza e manutenção', whyInvest: 'Por que investir?', whyInvestDesc: 'Setores, riscos, jornada e relatórios', simulator: 'Simulador profissional', simulatorDesc: 'Projeção 10 meses, inflação e impostos', dashboard: 'Dashboard investidor', loginInvestor: 'Login investidor', dashboardDesc: 'Carteira, wallet, documentos e alertas', quote: 'Pedir orçamento', quoteDesc: 'Contato rápido para uma necessidade clara', carWash: 'Lavagem auto & moto', carWashDesc: 'Serviço no centro ou domicílio', officeCare: 'Limpeza de escritórios', officeCareDesc: 'Contratos e controle de qualidade', ac: 'Ar condicionado', acDesc: 'Instalação, diagnóstico e manutenção', login: 'Entrar', register: 'Registrar', logout: 'Sair', light: 'Modo claro', dark: 'Modo escuro',
    },
    DE: {
      home: 'Start', about: 'Über uns', projects: 'Projekte', invest: 'Investieren', services: 'Services', opportunities: 'Chancen', contact: 'Kontakt', features: 'Funktionen', quickAccess: 'Schnellzugriff auf', profile: 'TAOMAN Profil', profileDesc: 'Mission, Vision und Werte', governance: 'Governance', governanceDesc: 'Organisation, Team und Verantwortung', institutionalContact: 'Institutioneller Kontakt', institutionalContactDesc: 'Partnerschaften und Kontakt', tie: 'TAOMAN TIE', tieDesc: 'Wirtschaftliches Investitionsprogramm', fieldWork: 'Umgesetzte Projekte', fieldWorkDesc: 'Galerie, Fortschritt und Nachweise', operationalServices: 'Operative Services', operationalServicesDesc: 'Autowäsche, Umzug, Reinigung und Wartung', whyInvest: 'Warum investieren?', whyInvestDesc: 'Sektoren, Risiken, Ablauf und Reporting', simulator: 'Profi-Simulator', simulatorDesc: '10-Monats-Projektion, Inflation und Steuern', dashboard: 'Investor-Dashboard', loginInvestor: 'Investor Login', dashboardDesc: 'Portfolio, Wallet, Dokumente und Hinweise', quote: 'Angebot anfordern', quoteDesc: 'Schneller Kontakt für konkrete Bedürfnisse', carWash: 'Auto- & Motorradwäsche', carWashDesc: 'Service vor Ort oder zu Hause', officeCare: 'Büroreinigung', officeCareDesc: 'Verträge und Qualitätskontrolle', ac: 'Klimaanlage', acDesc: 'Installation, Diagnose und Wartung', login: 'Login', register: 'Registrieren', logout: 'Logout', light: 'Hellmodus', dark: 'Dunkelmodus',
    },
    AR: {
      home: 'الرئيسية', about: 'من نحن', projects: 'مشاريعنا', invest: 'استثمر معنا', services: 'الخدمات', opportunities: 'فرص', contact: 'اتصال', features: 'الوظائف', quickAccess: 'وصول سريع إلى', profile: 'ملف TAOMAN', profileDesc: 'المهمة والرؤية والقيم', governance: 'الحوكمة', governanceDesc: 'التنظيم والفريق والمسؤولية', institutionalContact: 'اتصال مؤسسي', institutionalContactDesc: 'الشراكات وبيانات الاتصال', tie: 'TAOMAN TIE', tieDesc: 'برنامج استثمار اقتصادي', fieldWork: 'إنجازات ميدانية', fieldWorkDesc: 'معرض وتقدم وإثباتات', operationalServices: 'خدمات تشغيلية', operationalServicesDesc: 'غسيل، نقل، تنظيف وصيانة', whyInvest: 'لماذا الاستثمار؟', whyInvestDesc: 'قطاعات ومخاطر وتقارير', simulator: 'محاكي احترافي', simulatorDesc: 'توقع 10 أشهر، تضخم وضرائب', dashboard: 'لوحة المستثمر', loginInvestor: 'دخول المستثمر', dashboardDesc: 'محفظة ووثائق وتنبيهات', quote: 'طلب عرض سعر', quoteDesc: 'تواصل سريع لحاجة واضحة', carWash: 'غسيل سيارات ودراجات', carWashDesc: 'خدمة بالمركز أو المنزل', officeCare: 'تنظيف المكاتب', officeCareDesc: 'عقود ومراقبة جودة', ac: 'تكييف', acDesc: 'تركيب وتشخيص وصيانة', login: 'دخول', register: 'تسجيل', logout: 'خروج', light: 'الوضع الفاتح', dark: 'الوضع الداكن',
    },
    ZH: {
      home: '首页', about: '关于', projects: '项目', invest: '与我们投资', services: '服务', opportunities: '机会', contact: '联系', features: '功能', quickAccess: '快速访问', profile: 'TAOMAN 简介', profileDesc: '使命、愿景和价值观', governance: '治理', governanceDesc: '组织、团队和责任', institutionalContact: '机构联系', institutionalContactDesc: '合作与联系方式', tie: 'TAOMAN TIE', tieDesc: '经济投资计划', fieldWork: '现场成果', fieldWorkDesc: '图库、进度和证明', operationalServices: '运营服务', operationalServicesDesc: '洗车、搬迁、清洁和维护', whyInvest: '为什么投资？', whyInvestDesc: '行业、风险、流程和报告', simulator: '专业模拟器', simulatorDesc: '10个月预测、通胀和税务', dashboard: '投资者仪表盘', loginInvestor: '投资者登录', dashboardDesc: '组合、钱包、文件和通知', quote: '申请报价', quoteDesc: '快速联系明确需求', carWash: '汽车与摩托清洗', carWashDesc: '门店或上门服务', officeCare: '办公室清洁', officeCareDesc: '合同和质量控制', ac: '空调', acDesc: '安装、诊断和维护', login: '登录', register: '注册', logout: '退出', light: '浅色模式', dark: '深色模式',
    },
  };

  const t = dictionary[language] || dictionary.FR;
  const navigationItems = [
    { name: t.home, href: '/', key: 'accueil' },
    {
      name: t.about,
      href: '/about',
      key: 'about',
      children: [
        { name: t.profile, desc: t.profileDesc, href: '/about' },
        { name: t.governance, desc: t.governanceDesc, href: '/about' },
        { name: t.institutionalContact, desc: t.institutionalContactDesc, href: '/contact' },
      ],
    },
    {
      name: t.projects,
      href: '/investissement',
      key: 'investissement',
      children: [
        { name: t.tie, desc: t.tieDesc, href: '/investissement/tie' },
        { name: t.fieldWork, desc: t.fieldWorkDesc, href: '/#realisations' },
        { name: t.operationalServices, desc: t.operationalServicesDesc, href: '/services' },
      ],
    },
    {
      name: t.invest,
      href: '/investissement',
      key: 'investissement',
      children: [
        { name: t.whyInvest, desc: t.whyInvestDesc, href: '/investissement' },
        { name: t.simulator, desc: t.simulatorDesc, href: '/investissement/simulateur' },
        { name: user ? t.dashboard : t.loginInvestor, desc: t.dashboardDesc, href: user ? '/dashboard' : '/connexion' },
      ],
    },
    {
      name: t.services,
      href: '/services',
      key: 'services',
      children: [
        { name: t.quote, desc: t.quoteDesc, href: '/contact' },
        { name: t.carWash, desc: t.carWashDesc, href: '/lavage-auto/devis' },
        { name: t.officeCare, desc: t.officeCareDesc, href: '/entretien/bureaux' },
        { name: t.ac, desc: t.acDesc, href: '/entretien/climatisation' },
      ],
    },
    { name: t.contact, href: '/contact', key: 'contact' },
  ];

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error("Erreur parsing user data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('taoman-language', language);
    const selectedLanguage = languageOptions.find((item) => item.code === language);
    if (selectedLanguage) {
      document.documentElement.lang = selectedLanguage.lang;
      document.documentElement.dir = selectedLanguage.code === 'AR' ? 'rtl' : 'ltr';
    }
  }, [language]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-surface shadow-lg backdrop-blur-md bg-opacity-95' 
        : 'bg-transparent'
    }`}>
      <div className="mx-auto flex h-20 max-w-[1680px] min-w-0 items-center gap-2 px-3 sm:px-5 xl:px-8">
        {/* Logo — ne rétrécit pas */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2 sm:gap-3 transition-transform duration-300 hover:scale-[1.02] max-w-[42%] sm:max-w-none"
        >
          <img
            src={logoSrc}
            alt="TAOMAN Groupe Investissement"
            className="h-11 w-auto sm:h-12 object-contain drop-shadow-md"
          />
          <div className="hidden md:block leading-tight min-w-0">
            <p className="text-sm xl:text-base font-black tracking-[0.15em] xl:tracking-[0.2em] text-primary truncate">TAOMAN</p>
            <p className="text-xs xl:text-sm font-bold text-on-surface-variant truncate hidden xl:block">Groupe Investissement</p>
          </div>
        </Link>

        {/* Navigation Desktop — zone scrollable si trop de liens */}
        <nav
          className="nav-scroll-x hidden lg:flex flex-1 min-w-0 items-center gap-0.5 mx-1 xl:mx-3 py-1"
          aria-label="Navigation principale"
        >
          {navigationItems.map((link) => (
            <div key={`${link.key}-${link.name}`} className="group relative shrink-0">
              <Link
                to={link.href}
                className={`relative flex items-center gap-1 rounded-full px-2.5 py-2.5 text-[13px] font-bold leading-tight transition-colors duration-300 xl:px-3 xl:text-[14px] whitespace-nowrap ${
                  activeLink === link.key
                    ? 'bg-primary/10 text-primary'
                    : 'text-on-surface hover:bg-surface-container-low hover:text-primary'
                }`}
              >
                {link.name}
                {link.children && <span className="text-xs">⌄</span>}
              </Link>

              {link.children && (
                <div className="invisible absolute left-0 top-full z-50 mt-4 w-[420px] translate-y-2 rounded-[1.75rem] border border-outline-variant/40 bg-surface p-4 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-3 rounded-2xl bg-primary/10 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.25em] text-primary">{t.features}</p>
                    <p className="mt-1 text-sm font-semibold text-on-surface">{t.quickAccess} {link.name.toLowerCase()}</p>
                  </div>
                  <div className="grid gap-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="rounded-2xl p-4 transition hover:bg-surface-container-low"
                      >
                        <p className="font-bold text-on-surface">{child.name}</p>
                        <p className="mt-1 text-sm text-on-surface-variant">{child.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Boutons droite — ne poussent pas le menu hors écran */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 xl:gap-3">
          <div className="group relative hidden md:block">
            <button
              type="button"
              className="rounded-xl border border-outline-variant bg-surface px-2.5 py-2 text-sm font-bold text-on-surface shadow-sm hover:border-primary hover:text-primary xl:px-3 xl:py-2.5"
              aria-label="Choisir la langue"
            >
              🌐 {language}
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-3 w-44 translate-y-2 rounded-2xl border border-outline-variant/40 bg-surface p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {languageOptions.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-bold ${language === item.code ? 'bg-primary text-white' : 'text-on-surface hover:bg-surface-container-low'}`}
                >
                  {item.code} - {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
            className="hidden h-10 w-10 xl:h-11 xl:w-11 items-center justify-center rounded-xl border border-outline-variant bg-surface text-lg shadow-sm hover:border-primary md:flex"
            aria-label={colorMode === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
          >
            {colorMode === 'dark' ? '☀' : '☾'}
          </button>

          {user ? (
            <div className="hidden xl:flex items-center gap-2">
              <div className="flex cursor-pointer items-center gap-2 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-white">
                  {user.firstName ? user.firstName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                </div>
                <span className="text-base font-bold text-on-surface">{user.firstName || 'Client'}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-base font-bold text-error hover:underline"
              >
                Déconnexion
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/connexion"
                className="hidden rounded-xl border-2 border-primary px-3 py-2 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white md:inline-block xl:px-5 xl:py-2.5 xl:text-base"
              >
                {t.login}
              </Link>
              <Link
                to="/inscription"
                className="hidden rounded-xl bg-gradient-to-r from-primary to-primary-container px-3 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-90 md:inline-block xl:px-5 xl:py-2.5 xl:text-base"
              >
                {t.register}
              </Link>
            </>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            className="lg:hidden p-2 text-on-surface hover:text-primary transition-colors"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant shadow-xl animate-fade-down">
          <nav className="flex flex-col gap-0 p-6">
            {navigationItems.map((link) => (
              <div key={`${link.key}-${link.name}`} className="border-b border-outline-variant/40 py-2 last:border-b-0">
                <Link
                  to={link.href}
                  className="block py-3 px-4 font-bold text-on-surface hover:text-primary hover:bg-surface-container rounded-lg transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="ml-4 grid gap-1 pb-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        to={child.href}
                        className="rounded-lg px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="rounded-xl border border-outline-variant bg-surface px-3 py-2 text-sm font-bold text-on-surface"
                aria-label="Choisir la langue"
              >
                {languageOptions.map((item) => (
                  <option key={item.code} value={item.code}>{item.code} - {item.label}</option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
                className="rounded-xl border border-outline-variant bg-surface px-3 py-2 text-sm font-bold text-on-surface"
              >
                {colorMode === 'dark' ? t.light : t.dark}
              </button>
            </div>
            <div className="border-t border-outline-variant mt-4 pt-4 space-y-2">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                      {user.firstName ? user.firstName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-bold text-on-surface">{user.firstName || 'Client'}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full py-2.5 text-center text-error font-bold border-2 border-error rounded-lg hover:bg-error hover:text-white transition-all"
                  >
                    {t.logout}
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/connexion"
                    className="block w-full py-2.5 text-center text-primary font-bold border-2 border-primary rounded-lg transition-all duration-300 hover:bg-primary hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.login}
                  </Link>
                  <Link
                    to="/inscription"
                    className="block w-full py-2.5 text-center bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-all"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.register}
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};