import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  schemaData?: Record<string, any>;
  noindex?: boolean;
}

export default function SEO({
  title,
  description,
  keywords,
  image,
  schemaData,
  noindex = false
}: SEOProps) {
  const location = useLocation();
  const currentUrl = `https://www.ki-helpbot.de${location.pathname}`;
  
  // Default values
  const defaultTitle = "KI-Helpbot | KI-gestützte Kommunikationslösungen";
  const defaultDescription = "KI-Helpbot bietet intelligente Chatbots und Voicebots für Unternehmen jeder Größe. Optimieren Sie Ihre Kundenkommunikation mit unseren KI-gestützten Lösungen. 24/7 verfügbar, mehrsprachig und DSGVO-konform.";
  const defaultKeywords = "KI, Künstliche Intelligenz, AI, Chatbot, Voicebot, Kundenkommunikation, Kundenservice, CRM-Integration, Mehrsprachig, DSGVO-konform, Chat-Assistent, Voice-Assistent, Automatisierung, Kundensupport, Conversational AI, NLP, Natural Language Processing, Machine Learning";
  const defaultImage = "https://www.ki-helpbot.de/og-image.jpg";

  // Use provided values or defaults
  const seoTitle = title ? `${title} | KI-Helpbot` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;
  
  // Convert schemaData to string
  const schemaDataString = schemaData ? JSON.stringify(schemaData) : null;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Robots control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* OpenGraph / Facebook */}
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Schema.org structured data */}
      {schemaDataString && (
        <script type="application/ld+json">{schemaDataString}</script>
      )}
    </Helmet>
  );
}