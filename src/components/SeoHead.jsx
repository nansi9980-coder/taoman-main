import { Helmet } from 'react-helmet-async';
import { useSiteContent } from '../context/SiteContentContext';

const DEFAULT_TITLE = 'TAOMAN Groupe Investissement';
const DEFAULT_DESC =
  'Investissement structuré, services terrain et accompagnement client au Togo.';

export function SeoHead() {
  const { section } = useSiteContent();
  const seo = section('seo');

  const title = seo.metaTitle || DEFAULT_TITLE;
  const description = seo.metaDescription || DEFAULT_DESC;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
