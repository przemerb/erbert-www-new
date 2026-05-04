import { Helmet } from 'react-helmet-async';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Grzegorz Erbert – Endokrynolog",
    "image": "https://erbert.pl/assets/images/profile_picture.jpg",
    "url": "https://erbert.pl",
    "telephone": "+48 576 672 014",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Waryńskiego 4/4",
      "addressLocality": "Kluczbork",
      "postalCode": "46-200",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.975562",
      "longitude": "18.210697"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "medicalSpecialty": [
      {
        "@type": "MedicalSpecialty",
        "name": "Endokrynologia"
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Choroby wewnętrzne"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "10"
    },
    "sameAs": [
      "https://www.znanylekarz.pl/grzegorz-erbert/endokrynolog-internista/kluczbork"
    ]
  };

  return (
    <Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Helmet>
  );
}
