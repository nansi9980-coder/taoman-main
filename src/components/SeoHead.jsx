import { Helmet } from 'react-helmet-async';
import { useSiteContent } from '../context/SiteContentContext';
import { BRAND_NAME, BRAND_TAGLINE } from '../constants/branding';

const DEFAULT_TITLE = BRAND_NAME;
const DEFAULT_DESC = BRAND_TAGLINE.fr;

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
