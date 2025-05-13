import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

function SitemapPage() {
  const { t } = useTranslation();

  // SEO schema data for sitemap page
  const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sitemap | KI-Helpbot",
    "description": "Eine Übersicht aller wichtigen Seiten von KI-Helpbot",
    "url": "https://www.ki-helpbot.de/sitemap",
  };

  const siteStructure = [
    {
      category: "Hauptnavigation",
      links: [
        { name: "Startseite", path: "/" },
        { name: "Leistungen", path: "/leistungen" },
        { name: "Branchenlösungen", path: "/branchenloesungen" },
        { name: "Demo", path: "/demo" },
        { name: "Über uns", path: "/ueber-uns" }
      ]
    },
    {
      category: "Leistungen",
      links: [
        { name: "Chatbots", path: "/leistungen#chatbots" },
        { name: "Voicebots", path: "/leistungen#voicebots" },
        { name: "CRM-Integration", path: "/leistungen#crm" },
        { name: "Datenanalyse", path: "/leistungen#analyse" },
      ]
    },
    {
      category: "Branchenlösungen",
      links: [
        { name: "Autohaus", path: "/branchenloesungen#autohaus" },
        { name: "E-Commerce", path: "/branchenloesungen#ecommerce" },
        { name: "Handwerk", path: "/branchenloesungen#handwerk" },
        { name: "Kundenservice", path: "/branchenloesungen#service" },
      ]
    },
    {
      category: "Über uns",
      links: [
        { name: "Team", path: "/ueber-uns#team" },
        { name: "Mission", path: "/ueber-uns#mission" },
        { name: "Vision", path: "/ueber-uns#vision" },
      ]
    },
    {
      category: "Rechtliches",
      links: [
        { name: "AGB", path: "/agb" },
        { name: "Impressum", path: "/impressum" },
        { name: "Datenschutz", path: "/datenschutz" },
      ]
    },
    {
      category: "Zugänge",
      links: [
        { name: "Admin-Login", path: "/admin/login" },
        { name: "Kunden-Login", path: "/customer/login" },
      ]
    }
  ];

  return (
    <div className="py-16 px-4">
      <SEO 
        title="Sitemap | KI-Helpbot" 
        description="Eine Übersicht aller wichtigen Seiten von KI-Helpbot"
        keywords="sitemap, ki-helpbot, übersicht, navigation"
        schemaData={sitemapSchema}
      />

      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Sitemap</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">{section.category}</h2>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.path} 
                      className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SitemapPage; 