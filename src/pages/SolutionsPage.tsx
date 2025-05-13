import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, ShoppingCart, Hammer, Headset, Check, ArrowRight, Users, Building, LineChart } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

function SolutionsPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>("all");

  // SEO schema data for industry solutions page
  const solutionsSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Welche Branchenlösungen bietet KI-Helpbot für Autohäuser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KI-Helpbot bietet für Autohäuser intelligente Chatbots zur automatisierten Terminbuchung, Fahrzeugkonfiguration, Statusverfolgung für Serviceaufträge und Planung von Probefahrten. Diese Lösungen helfen dabei, die Kundenzufriedenheit zu steigern und administrative Aufgaben zu reduzieren."
        }
      },
      {
        "@type": "Question",
        "name": "Wie unterstützt KI-Helpbot E-Commerce-Unternehmen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für E-Commerce-Unternehmen bietet KI-Helpbot Lösungen für personalisierte Produktempfehlungen, Bestellstatusverfolgung, Vereinfachung von Rückgabe- und Umtauschprozessen sowie personalisierte Angebote und Rabatte. Dies führt zu höheren Konversionsraten und weniger Retouren."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Vorteile bietet KI-Helpbot für Handwerksbetriebe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Handwerksbetriebe profitieren von KI-Helpbot durch effiziente Terminplanung für Vor-Ort-Termine, automatisierte Angebotserstellung, Statusupdates zu laufenden Projekten und Priorisierung von Notfallanfragen. Dies reduziert den administrativen Aufwand um bis zu 45%."
        }
      },
      {
        "@type": "Question",
        "name": "Wie optimiert KI-Helpbot den Kundenservice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KI-Helpbot optimiert den Kundenservice durch 24/7 Kundensupport ohne Wartezeiten, intelligente Ticket-Kategorisierung und -Priorisierung, automatisierte Beantwortung häufiger Fragen und nahtlose Übergabe an menschliche Mitarbeiter bei komplexen Anfragen, was zu einer First-Contact-Resolution-Rate von 92% führt."
        }
      }
    ]
  };

  const industries = [
    {
      id: "automotive",
      icon: <Car size={32} />,
      title: t('solutions.automotive.title'),
      description: t('solutions.automotive.description'),
      image: 'https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg',
      benefits: [
        'Automatisierte Terminbuchung für Service und Beratung',
        'Fahrzeugkonfiguration und Preisanfragen',
        'Statusverfolgung für Serviceaufträge',
        'Probefahrten planen'
      ],
      features: [
        {
          title: "Digitaler Fahrzeugberater",
          description: "Ein intelligenter Assistent, der Kunden bei der Fahrzeugauswahl und Konfiguration hilft."
        },
        {
          title: "Service-Terminplaner",
          description: "Automatische Terminvereinbarung für Wartungs- und Reparaturarbeiten mit Integration in Ihre Werkstattplanung."
        },
        {
          title: "Statusverfolgung",
          description: "Kunden können jederzeit den aktuellen Status ihrer Fahrzeuge in der Werkstatt überprüfen."
        }
      ],
      stats: [
        { value: "40%", label: "mehr Terminanfragen" },
        { value: "65%", label: "weniger Verwaltungsaufwand" },
        { value: "28%", label: "höhere Kundenzufriedenheit" }
      ],
      testimonial: {
        quote: "Seit wir den KI-Helpbot einsetzen, haben wir 40% mehr Terminanfragen und unsere Mitarbeiter sparen wertvolle Zeit bei Routineanfragen.",
        author: "Max Mustermann",
        company: "Autohaus Mustermann GmbH",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      category: "service"
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart size={32} />,
      title: t('solutions.ecommerce.title'),
      description: t('solutions.ecommerce.description'),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      benefits: [
        'Produktempfehlungen basierend auf Kundenpräferenzen',
        'Bestellstatusverfolgung und Updates',
        'Rückgabe- und Umtauschprozesse vereinfachen',
        'Personalisierte Angebote und Rabatte'
      ],
      features: [
        {
          title: "Produktberater",
          description: "Maßgeschneiderte Produktempfehlungen basierend auf Kundenpräferenzen und -verhalten."
        },
        {
          title: "Bestellverfolgung",
          description: "Echtzeit-Updates zum Status von Bestellungen und Versand."
        },
        {
          title: "Retouren-Assistent",
          description: "Vereinfachung des Rückgabeprozesses und Minimierung von Retouren durch bessere Beratung."
        }
      ],
      stats: [
        { value: "22%", label: "höhere Konversionsrate" },
        { value: "30%", label: "weniger Retouren" },
        { value: "18%", label: "größere Warenkörbe" }
      ],
      testimonial: {
        quote: "Der Chatbot beantwortet Fragen zu Bestellstatus und Retouren rund um die Uhr und hat unsere Kundenzufriedenheit deutlich verbessert.",
        author: "Laura Schmidt",
        company: "Online-Shop ModeWelt",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
      },
      category: "retail"
    },
    {
      id: "craft",
      icon: <Hammer size={32} />,
      title: t('solutions.craft.title'),
      description: t('solutions.craft.description'),
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
      benefits: [
        'Effiziente Terminplanung für Vor-Ort-Termine',
        'Automatisierte Angebotserstellung',
        'Statusinformationen zu laufenden Projekten',
        'Notfallanfragen priorisieren'
      ],
      features: [
        {
          title: "Auftragsmanagement",
          description: "Vollständige Verwaltung von Kundenaufträgen, von der Anfrage bis zum Abschluss."
        },
        {
          title: "Verfügbarkeitsplanung",
          description: "Optimierte Planung von Mitarbeiterressourcen und Materialien."
        },
        {
          title: "Angebotserstellung",
          description: "Automatische Erstellung von Angeboten basierend auf Kundenanforderungen."
        }
      ],
      stats: [
        { value: "45%", label: "weniger administrative Zeit" },
        { value: "85%", label: "schnellere Reaktionszeit" },
        { value: "15%", label: "mehr Neukunden" }
      ],
      testimonial: {
        quote: "Dank des KI-Assistenten können wir Termine effizienter planen und haben weniger administrative Aufgaben. Eine echte Arbeitserleichterung!",
        author: "Thomas Weber",
        company: "Elektro Weber",
        avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },
      category: "service"
    },
    {
      id: "customerService",
      icon: <Headset size={32} />,
      title: t('solutions.customerService.title'),
      description: t('solutions.customerService.description'),
      image: 'https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg',
      benefits: [
        '24/7 Kundensupport ohne Wartezeiten',
        'Intelligente Ticket-Kategorisierung und -Priorisierung',
        'Automatisierte Beantwortung häufig gestellter Fragen',
        'Nahtlose Übergabe an menschliche Mitarbeiter bei komplexen Anfragen'
      ],
      features: [
        {
          title: "24/7 Verfügbarkeit",
          description: "Ständige Erreichbarkeit für Kunden, auch außerhalb der Geschäftszeiten."
        },
        {
          title: "Mehrsprachiger Support",
          description: "Unterstützung in mehr als 20 Sprachen für internationale Kundenbetreuung."
        },
        {
          title: "Ticket-Priorisierung",
          description: "Automatische Kategorisierung und Priorisierung von Support-Anfragen."
        }
      ],
      stats: [
        { value: "24/7", label: "Verfügbarkeit" },
        { value: "92%", label: "First-Contact-Resolution" },
        { value: "4.8/5", label: "Kundenbewertung" }
      ],
      testimonial: {
        quote: "Mit dem KI-Helpbot konnten wir unsere Supportkosten um 40% senken und gleichzeitig die Kundenzufriedenheit verbessern. Eine Win-Win-Situation.",
        author: "Dr. Julia Fischer",
        company: "TechHelp Services GmbH",
        avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
      },
      category: "support"
    },
    {
      id: "healthcare",
      icon: <Building size={32} />,
      title: "Gesundheitswesen",
      description: "Optimieren Sie Patientenkommunikation und Terminplanung in medizinischen Einrichtungen",
      image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg',
      benefits: [
        'Automatisierte Terminvergabe und -erinnerungen',
        'Patientenaufklärung und Vorbereitung auf Behandlungen',
        'Nachsorge-Management und Follow-up-Kommunikation',
        'Häufig gestellte medizinische Fragen beantworten'
      ],
      features: [
        {
          title: "Patienten-Terminplanung",
          description: "Effiziente Verwaltung von Terminen mit automatischen Erinnerungen."
        },
        {
          title: "Medizinische Vorinformation",
          description: "Automatisierte Bereitstellung von Informationen vor Behandlungen."
        },
        {
          title: "Nachsorge-Kommunikation",
          description: "Strukturierte Nachbetreuung von Patienten nach Behandlungen."
        }
      ],
      stats: [
        { value: "38%", label: "weniger Terminausfälle" },
        { value: "42%", label: "Entlastung der Rezeption" },
        { value: "89%", label: "Patientenzufriedenheit" }
      ],
      testimonial: {
        quote: "Der KI-Assistent hat unsere Praxisorganisation revolutioniert. Patienten schätzen die einfache Terminvereinbarung und wir können uns mehr auf die Behandlung konzentrieren.",
        author: "Dr. Martina Schulz",
        company: "Medizinisches Zentrum Mitte",
        avatar: "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg"
      },
      category: "healthcare"
    },
    {
      id: "finance",
      icon: <LineChart size={32} />,
      title: "Finanzwesen",
      description: "Unterstützen Sie Kunden bei Finanzentscheidungen und Transaktionen rund um die Uhr",
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      benefits: [
        'Produktberatung für Finanzdienstleistungen',
        'Automatisierte Beantwortung von Kontofragen',
        'Unterstützung bei Kreditanträgen',
        'Sichere Durchführung einfacher Transaktionen'
      ],
      features: [
        {
          title: "Finanzberater-Bot",
          description: "Intelligente Beratung zu Finanzprodukten basierend auf Kundenbedürfnissen."
        },
        {
          title: "Kontoübersicht",
          description: "Einfacher Zugriff auf Kontoinformationen und Transaktionshistorie."
        },
        {
          title: "Kreditantragsprozess",
          description: "Führung durch den Antragsprozess mit Echtzeitprüfung der Dokumente."
        }
      ],
      stats: [
        { value: "52%", label: "schnellere Kreditanträge" },
        { value: "24/7", label: "Kontoinformationen" },
        { value: "35%", label: "mehr Produktabschlüsse" }
      ],
      testimonial: {
        quote: "Unser KI-Assistent hat die Art und Weise, wie wir mit unseren Kunden kommunizieren, grundlegend verändert. Die Kunden schätzen die sofortige Verfügbarkeit und die präzisen Informationen.",
        author: "Andreas Becker",
        company: "FinanzPlus AG",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
      },
      category: "finance"
    }
  ];

  const filteredIndustries = activeTab === "all" ? 
    industries : 
    industries.filter(industry => industry.category === activeTab);

  return (
    <div className="min-h-screen pt-24">
      <SEO 
        title="Branchenlösungen & KI-Integration für verschiedene Branchen"
        description="Maßgeschneiderte KI-Lösungen für verschiedene Branchen: Automobilindustrie, E-Commerce, Handwerk, Kundenservice und mehr. Entdecken Sie, wie unsere intelligenten Chatbots und Voicebots Ihr Unternehmen optimieren können."
        keywords="KI-Branchenlösungen, Chatbot für Autohaus, E-Commerce KI, Handwerk Digitalisierung, Kundenservice Automation, KI-Helpbot Integration, Branchenspezifische KI, Chatbot Automobilindustrie, Online-Shop Chatbot, Terminplanung KI, automatisierte Kundenkommunikation"
        schemaData={solutionsSchema}
      />

      {/* Hero section */}
      <section className="bg-gradient-to-b from-gray-100 to-white dark:from-dark-300 dark:to-dark-200 py-12 md:py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="gradient-text text-3xl md:text-4xl font-semibold mb-3">{t('solutions.title')}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('solutions.subtitle')}
            </p>
          </motion.div>

          {/* Industry Category Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white dark:bg-dark-200 rounded-full p-1 shadow-md">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "all" 
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100"
                }`}
              >
                Alle
              </button>
              <button
                onClick={() => setActiveTab("service")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "service" 
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100"
                }`}
              >
                Dienstleistung
              </button>
              <button
                onClick={() => setActiveTab("retail")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "retail" 
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100"
                }`}
              >
                Einzelhandel
              </button>
              <button
                onClick={() => setActiveTab("support")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "support" 
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100"
                }`}
              >
                Support
              </button>
              <button
                onClick={() => setActiveTab("healthcare")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "healthcare" 
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100"
                }`}
              >
                Gesundheit
              </button>
              <button
                onClick={() => setActiveTab("finance")}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === "finance" 
                    ? "bg-primary-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100"
                }`}
              >
                Finanzen
              </button>
            </div>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIndustries.map((industry, index) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={`KI-Helpbot Branchenlösung für ${industry.title}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="bg-white rounded-full p-1.5">
                        {industry.icon}
                      </div>
                      <h3 className="text-white text-lg font-semibold">{industry.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {industry.description}
                  </p>
                  
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Top Features:</h4>
                  <ul className="mb-4">
                    {industry.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check size={14} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
                      </li>
                    ))}
                    <li className="text-primary-500 text-sm font-medium mt-1 flex items-center">
                      <ArrowRight size={14} className="mr-1" />
                      <span>Mehr anzeigen</span>
                    </li>
                  </ul>
                  
                  <Link 
                    to={`/branchenloesungen#${industry.id}`} 
                    className="block w-full py-2 px-4 bg-primary-600 text-white font-medium text-center rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Details anzeigen
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed industry sections */}
      {industries.map((industry, index) => (
        <section 
          key={index}
          id={industry.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-white dark:bg-dark-200' : 'bg-gray-100 dark:bg-dark-300'}`}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/30 p-3 text-primary-600 dark:text-primary-400 mb-4">
                  {industry.icon}
                </div>
                <h2 className="text-3xl font-semibold mb-4">{industry.title}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{industry.description}</p>
                
                <h3 className="text-xl font-medium mb-4">Vorteile für {industry.title}:</h3>
                <ul className="space-y-3 mb-8">
                  {industry.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check size={20} className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                      <span className="ml-3 text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Feature cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {industry.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-gray-700 p-4 rounded-lg"
                    >
                      <h4 className="font-medium mb-2 text-primary-600 dark:text-primary-400">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Testimonial if available */}
                {industry.testimonial && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-gray-700 p-4 rounded-lg mb-8"
                  >
                    <p className="text-gray-600 dark:text-gray-400 italic mb-3">"{industry.testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img 
                        src={industry.testimonial.avatar} 
                        alt={industry.testimonial.author} 
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="font-medium text-sm">{industry.testimonial.author}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{industry.testimonial.company}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/demo" className="btn btn-primary">
                    Demo starten
                  </Link>
                  <Link to="/kontakt" className="btn btn-outline">
                    Beratung anfragen
                  </Link>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={industry.image} 
                    alt={`KI-Helpbot für ${industry.title}`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                {/* Stats cards */}
                {industry.stats && (
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {industry.stats.map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="bg-white dark:bg-dark-200 rounded-xl p-4 text-center shadow border border-gray-200 dark:border-gray-800"
                      >
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Maßgeschneiderte Lösungen für Ihre Branche
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Unsere KI-Assistenten können an die spezifischen Anforderungen Ihrer Branche angepasst werden.
              Kontaktieren Sie uns für eine individuelle Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="btn bg-white text-primary-600 hover:bg-gray-100">
                Demo starten
              </Link>
              <Link to="/kontakt" className="btn bg-transparent border-2 border-white hover:bg-white/10">
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;