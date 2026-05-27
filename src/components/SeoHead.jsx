import { Helmet } from 'react-helmet-async';
import { useSiteContent } from '../context/SiteContentContext';
import { useLanguage } from '../context/LanguageContext';
import { BRAND_NAME, BRAND_LEGAL, BRAND_TAGLINE } from '../constants/branding';

const DEFAULT_TITLE = BRAND_NAME;
const SITE_URL = 'https://taoman-main.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

/**
 * Mapping code langue UI ↔ tags HTML lang et og:locale.
 */
const LANG_HTML_MAP = {
  FR: 'fr',
  EN: 'en',
  ES: 'es',
  PT: 'pt',
  DE: 'de',
  AR: 'ar',
  ZH: 'zh',
};

const OG_LOCALE_MAP = {
  FR: 'fr_FR',
  EN: 'en_US',
  ES: 'es_ES',
  PT: 'pt_PT',
  DE: 'de_DE',
  AR: 'ar_SA',
  ZH: 'zh_CN',
};

const SCHEMA_LANG_MAP = {
  FR: 'fr-FR',
  EN: 'en-US',
  ES: 'es-ES',
  PT: 'pt-PT',
  DE: 'de-DE',
  AR: 'ar-SA',
  ZH: 'zh-CN',
};

const FALLBACK_TAGLINE = {
  FR: BRAND_TAGLINE.fr,
  EN: BRAND_TAGLINE.en || BRAND_TAGLINE.fr,
  ES: BRAND_TAGLINE.es || BRAND_TAGLINE.fr,
  PT: BRAND_TAGLINE.pt || BRAND_TAGLINE.fr,
  DE: BRAND_TAGLINE.de || BRAND_TAGLINE.fr,
  AR: BRAND_TAGLINE.ar || BRAND_TAGLINE.fr,
  ZH: BRAND_TAGLINE.zh || BRAND_TAGLINE.fr,
};

const FALLBACK_SUBTITLE = {
  FR: 'Investir avec nous au Togo',
  EN: 'Invest with us in Togo',
  ES: 'Invierta con nosotros en Togo',
  PT: 'Investir connosco no Togo',
  DE: 'Mit uns in Togo investieren',
  AR: 'استثمر معنا في توغو',
  ZH: '与我们一起在多哥投资',
};

const FALLBACK_KEYWORDS = {
  FR: 'TAOMAN, Togo, investissement, services, déménagement, lavage auto, mécanique, transport, logistique, agro business, BTP, numérique',
  EN: 'TAOMAN, Togo, investment, services, moving, car wash, mechanics, transport, logistics, agribusiness, construction, digital',
  ES: 'TAOMAN, Togo, inversión, servicios, mudanza, lavado auto, mecánica, transporte, logística, agronegocio, construcción, digital',
  PT: 'TAOMAN, Togo, investimento, serviços, mudanças, lavagem auto, mecânica, transporte, logística, agronegócio, construção, digital',
  DE: 'TAOMAN, Togo, Investition, Dienstleistungen, Umzug, Autowäsche, Mechanik, Transport, Logistik, Agrobusiness, Bau, Digital',
  AR: 'تاومان، توغو، استثمار، خدمات، نقل، غسيل سيارات، ميكانيكا، نقل، لوجستيات، أعمال زراعية، بناء، رقمي',
  ZH: 'TAOMAN, 多哥, 投资, 服务, 搬家, 洗车, 机械, 运输, 物流, 农业, 建筑, 数字',
};

const buildOrganizationLd = (taglineForLang) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  legalName: BRAND_LEGAL,
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  description: taglineForLang,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lomé',
    addressCountry: 'TG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    areaServed: ['TG', 'BJ', 'GH', 'BF', 'CI', 'NE'],
    availableLanguage: ['French', 'English', 'Spanish', 'Portuguese', 'German', 'Arabic', 'Chinese'],
  },
  sameAs: [],
});

const buildWebsiteLd = (schemaLang) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  url: SITE_URL,
  inLanguage: schemaLang,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export function SeoHead({
  title,
  description,
  path = '',
  image,
  type = 'website',
  jsonLd,
  noindex = false,
  keywords,
}) {
  const { section } = useSiteContent();
  const seo = section('seo') || {};
  const { language } = useLanguage();

  const htmlLang = LANG_HTML_MAP[language] || 'fr';
  const ogLocale = OG_LOCALE_MAP[language] || 'fr_FR';
  const schemaLang = SCHEMA_LANG_MAP[language] || 'fr-FR';
  const taglineForLang = FALLBACK_TAGLINE[language] || BRAND_TAGLINE.fr;
  const subtitleForLang = FALLBACK_SUBTITLE[language] || FALLBACK_SUBTITLE.FR;
  const keywordsForLang = FALLBACK_KEYWORDS[language] || FALLBACK_KEYWORDS.FR;

  const resolvedTitle = title
    ? `${title} — ${BRAND_NAME}`
    : seo.metaTitle || `${DEFAULT_TITLE} — ${subtitleForLang}`;
  const resolvedDescription = description || seo.metaDescription || taglineForLang;
  const resolvedImage = image || seo.metaImage || DEFAULT_IMAGE;
  const canonicalUrl = `${SITE_URL}${path}`;
  const finalKeywords = keywords || keywordsForLang;

  return (
    <Helmet>
      <html lang={htmlLang} dir={language === 'AR' ? 'rtl' : 'ltr'} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={BRAND_LEGAL} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="googlebot" content={noindex ? 'noindex' : 'index, follow, max-image-preview:large'} />
      <meta name="theme-color" content="#003d9b" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={resolvedImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={ogLocale} />
      {Object.entries(OG_LOCALE_MAP)
        .filter(([code]) => code !== language)
        .map(([code, locale]) => (
          <meta key={code} property="og:locale:alternate" content={locale} />
        ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={resolvedImage} />

      {/* Performance / preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      {/* JSON-LD Organization (always) */}
      <script type="application/ld+json">
        {JSON.stringify(buildOrganizationLd(taglineForLang))}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(buildWebsiteLd(schemaLang))}
      </script>
      {/* JSON-LD Page-specific */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

/**
 * Génère un JSON-LD BreadcrumbList valide pour un fil d'Ariane.
 * @param {Array<{name: string, path: string}>} items
 */
export function buildBreadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * Génère un JSON-LD Service pour une prestation.
 */
export function buildServiceLd({ name, description, areaServed = 'Togo', image }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: SITE_URL,
    },
    areaServed,
    image: image || DEFAULT_IMAGE,
  };
}

/**
 * Génère un JSON-LD FAQPage à partir d'une liste de questions/réponses.
 */
export function buildFaqLd(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.a,
      },
    })),
  };
}
