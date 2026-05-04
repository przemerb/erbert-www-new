import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({
  title = 'Endokrynolog Grzegorz Erbert',
  description = 'Grzegorz Erbert – Endokrynolog w Kluczborku. Specjalizuję się w diagnozowaniu i leczeniu schorzeń hormonalnych, oferując indywidualne podejście do każdego pacjenta.',
  canonical = 'https://erbert.pl',
  ogImage = 'https://erbert.pl/assets/images/profile_picture.jpg',
}: SEOProps) {
  const fullTitle = title.includes('Grzegorz Erbert') ? title : `${title} | Grzegorz Erbert`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="Endokrynolog Grzegorz Erbert" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
