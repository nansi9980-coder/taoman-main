import { Helmet } from 'react-helmet-async';
import { useSiteContent } from '../context/SiteContentContext';
import { BRAND_NAME, BRAND_LEGAL, BRAND_TAGLINE } from '../constants/branding';

const DEFAULT_TITLE = BRAND_NAME;
const DEFAULT_DESC = BRAND_TAGLINE.fr;
const SITE_URL = 'https://taoman-main.vercel.app';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND_NAME,
  legalName: BRAND_LEGAL,
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  description: BRAND_TAGLINE.fr,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lomé',
    addressCountry: 'TG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    areaServed: ['TG', 'BJ', 'GH', 'BF', 'CI', 'NE'],
    availableLanguage: ['French', 'English'],
  },
  sameAs: [],
};

const WEBSITE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BRAND_NAME,
  url: SITE_URL,
  inLanguage: 'fr-FR',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

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

  const resolvedTitle = title
    ? `${title} — ${BRAND_NAME}`
    : seo.metaTitle || `${DEFAULT_TITLE} — Investir avec nous au Togo`;
  const resolvedDescription = description || seo.metaDescription || DEFAULT_DESC;
  const resolvedImage = image || seo.metaImage || DEFAULT_IMAGE;
  const canonicalUrl = `${SITE_URL}${path}`;
  const finalKeywords =
    keywords ||
    'TAOMAN, Togo, investissement, services, déménagement, lavage auto, mécanique, transport, logistique, agro business, BTP, numérique';

  return (
    <Helmet>
      <html lang="fr" />
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
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:locale:alternate" content="en_US" />

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
        {JSON.stringify(ORGANIZATION_JSON_LD)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(WEBSITE_JSON_LD)}
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
