import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Bot, MessageSquare, Mic, BarChart, Calendar, Globe, Database, Shield, Zap, Check, ArrowRight, Users, CheckCircle } from 'lucide-react';
import ServicesOrbital from '../components/blocks/services-orbital';
import DatabaseWithRestApi from '../components/blocks/database-with-rest-api';
import { Features10 } from '../components/blocks/features-10';
import ServicesShowcase from '../components/blocks/services-showcase';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';

function ServicesPage() {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, 50]);

  // SEO schema data for services page
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "KI-Helpbot Leistungen und Services",
    "description": "Übersicht aller KI-gestützten Kommunikationslösungen von KI-Helpbot wie Chatbots, Voicebots, CRM-Integration und Datenanalyse.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "KI-Chatbots",
          "description": "Intelligente Textassistenten für Ihre Website und Social-Media-Kanäle. Unsere Chatbots bieten 24/7 Kundensupport und beantworten Anfragen in Echtzeit.",
          "provider": {
            "@type": "Organization",
            "name": "KI-Helpbot GmbH",
            "url": "https://www.ki-helpbot.de"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Voicebots",
          "description": "Natürlich klingende Sprachassistenten für Telefonie und Sprachanwendungen mit hoher Spracherkennung und natürlichem Sprachfluss.",
          "provider": {
            "@type": "Organization",
            "name": "KI-Helpbot GmbH",
            "url": "https://www.ki-helpbot.de"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "CRM-Integration",
          "description": "Nahtlose Anbindung an Ihr bestehendes CRM-System mit automatischer Datensynchronisation und erweiterter Kundenanalyse.",
          "provider": {
            "@type": "Organization",
            "name": "KI-Helpbot GmbH",
            "url": "https://www.ki-helpbot.de"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Datenanalyse",
          "description": "Detaillierte Einblicke in Kundeninteraktionen und -bedürfnisse durch fortschrittliche KI-Analyse der gesammelten Kommunikationsdaten.",
          "provider": {
            "@type": "Organization",
            "name": "KI-Helpbot GmbH",
            "url": "https://www.ki-helpbot.de"
          }
        }
      }
    ]
  };

  const services = [
    {
      id: "chatbots",
      icon: MessageSquare,
      title: t('services.chatbots.title'),
      description: t('services.chatbots.description'),
      features: [
        "Anpassbare Persönlichkeit für Ihre Marke",
        "24/7 Verfügbarkeit ohne Wartezeiten",
        "Mehrsprachige Unterstützung für internationale Kunden",
        "Nahtlose Integration in Ihre Website"
      ],
      color: "primary"
    },
    {
      id: "voicebots",
      icon: Mic,
      title: t('services.voicebots.title'),
      description: t('services.voicebots.description'),
      features: [
        "Natürlich klingende Stimmen in über 20 Sprachen",
        "Fortschrittliche Spracherkennung mit hoher Genauigkeit",
        "Integration in bestehende Telefonanlagen",
        "Kontextsensitive Konversationsführung"
      ],
      color: "secondary"
    },
    {
      id: "crm",
      icon: Database,
      title: t('services.crmIntegration.title'),
      description: t('services.crmIntegration.description'),
      features: [
        "Bidirektionale Synchronisation mit Ihrem CRM",
        "Automatische Kundendatenaktualisierung",
        "Integrierte Analysen und Reporting",
        "Kompatibel mit allen führenden CRM-Systemen"
      ],
      color: "accent"
    },
    {
      id: "analyse",
      icon: BarChart,
      title: t('services.dataAnalysis.title'),
      description: t('services.dataAnalysis.description'),
      features: [
        "Umfassende Dashboards und Berichte",
        "Identifikation von Kundentrends und -mustern",
        "Sentimentanalyse für Kundenfeedback",
        "Leistungs-KPIs und Optimierungsvorschläge"
      ],
      color: "primary"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Zeitersparnis",
      description: "Automatisieren Sie Routineanfragen und sparen Sie bis zu 60% Arbeitszeit im Kundenservice.",
      stats: "40h / Woche",
      color: "primary"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Kostenreduktion",
      description: "Senken Sie Ihre Personalkosten durch effiziente Automatisierung von Standardprozessen.",
      stats: "30-50%",
      color: "secondary"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Kundenzufriedenheit",
      description: "Steigern Sie die Kundenzufriedenheit durch schnelle und konsistente Antworten.",
      stats: "+35%",
      color: "accent"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Skalierbarkeit",
      description: "Bewältigen Sie Spitzenzeiten und wachsendes Anfragevolumen ohne zusätzliches Personal.",
      stats: "Unbegrenzt",
      color: "primary"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <SEO 
        title="KI-gestützte Leistungen & Services"
        description="Entdecken Sie unsere intelligenten KI-Lösungen: Chatbots, Voicebots, CRM-Integration und Datenanalyse. Unsere maßgeschneiderten KI-gestützten Kommunikationslösungen revolutionieren Ihren Kundenservice."
        keywords="KI-Chatbots, Voicebots, CRM-Integration, Datenanalyse, künstliche Intelligenz, Kundenkommunikation, KI-Assistenten, KI-Kundensupport, NLP, Spracherkennung, Automatisierung, Mehrsprachigkeit, DSGVO-konform"
        schemaData={servicesSchema}
      />

      {/* Hero Section - Improved */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white dark:from-dark-300 dark:to-dark-200 py-16 md:py-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-primary-400/10 blur-3xl"></div>
          <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-secondary-400/10 blur-3xl"></div>
          
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/30 px-4 py-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 mb-6">
                <Bot size={16} className="mr-2" />
                KI-gestützte Kommunikationslösungen
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Unsere innovativen</span><br />
                <span className="text-gray-900 dark:text-white">KI-Leistungen</span>
              </h1>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
                Maßgeschneiderte KI-Lösungen, die Ihre Kundenkommunikation revolutionieren und Ihr Unternehmen auf die nächste Stufe heben.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/demo" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-full text-base shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                >
                  <Bot size={18} />
                  Demo starten
                </Link>
                
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-medium rounded-full text-base hover:bg-primary-500/10 transition-colors duration-300"
                >
                  Beratungsgespräch vereinbaren
                </Link>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">DSGVO-konform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Made in Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-primary-500" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Schnelle Integration</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary-400/20 filter blur-xl"></div>
                <img 
                  src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" 
                  alt="KI-gestützte Chatbot Lösung für Kundenkommunikation"
                  className="w-full h-auto rounded-2xl shadow-2xl z-10 relative"
                />
                
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-200 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <img 
                          key={i}
                          src={`https://images.pexels.com/photos/${220453 + i * 100000}/pexels-photo-${220453 + i * 100000}.jpeg`} 
                          alt={`Zufriedener Kunde von KI-Helpbot ${i}`}
                          className="w-8 h-8 rounded-full border-2 border-white dark:border-dark-200 object-cover"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-900 dark:text-white">
                        1000+ zufriedene Kunden
                      </div>
                      <div className="flex text-yellow-400 text-xs">
                        ★★★★★ <span className="text-gray-500 dark:text-gray-400 ml-1">4.9/5</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Primäre Leistungen</h2>
              <div className="h-px w-12 bg-gray-300 dark:bg-gray-700"></div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              ref={targetRef}
            >
              {services.map((service, index) => {
                const color = service.color as "primary" | "secondary" | "accent";
                const colorVariants = {
                  primary: {
                    bg: "bg-primary-50 dark:bg-primary-900/30",
                    text: "text-primary-600 dark:text-primary-400",
                    border: "border-primary-100 dark:border-primary-800/30",
                  },
                  secondary: {
                    bg: "bg-secondary-50 dark:bg-secondary-900/30",
                    text: "text-secondary-600 dark:text-secondary-400",
                    border: "border-secondary-100 dark:border-secondary-800/30",
                  },
                  accent: {
                    bg: "bg-accent-50 dark:bg-accent-900/30",
                    text: "text-accent-600 dark:text-accent-400",
                    border: "border-accent-100 dark:border-accent-800/30",
                  }
                };
                
                const Icon = service.icon;
                
                return (
                  <motion.div 
                    key={index}
                    id={service.id}
                    className="bg-white dark:bg-dark-200 rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg p-6 relative overflow-hidden group"
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className={`rounded-full ${colorVariants[color].bg} p-3 w-12 h-12 flex items-center justify-center ${colorVariants[color].text} mb-5`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight size={16} className={`${colorVariants[color].text} mt-1 flex-shrink-0`} />
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white dark:from-dark-200 to-transparent group-hover:translate-y-0 translate-y-8 transition-transform duration-300">
                      <Link 
                        to={`/leistungen#${service.id}`} 
                        className={`${colorVariants[color].text} flex items-center text-sm font-medium hover:underline`}
                      >
                        <span>Details anzeigen</span>
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Showcase Section */}
      <section className="bg-white dark:bg-dark-200 py-16 md:py-24 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">
              Maßgeschneiderte KI-Lösungen
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Entdecken Sie unsere hochmodernen technologischen Funktionen
            </p>
          </motion.div>

          <ServicesShowcase />
        </div>
      </section>
      
      {/* Interactive Services Orbital */}
      <ServicesOrbital />
      
      {/* CRM Integration Section - Enhanced */}
      <section className="bg-white dark:bg-dark-200 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="default" className="mb-4">Nahtlose Integration</Badge>
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">
              CRM-Integration
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Verbinden Sie unsere KI-Lösungen nahtlos mit Ihrem bestehenden CRM-System für optimale Effizienz
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <h3 className="text-2xl font-semibold mb-4">Einfache API-Integration</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5">
                Unsere RESTful API ermöglicht eine schnelle und reibungslose Integration mit Ihrem CRM-System. 
                Dadurch haben Ihre KI-Assistenten Zugriff auf Kundendaten, Bestellhistorie und andere wichtige Informationen.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <motion.div 
                  className="bg-white dark:bg-dark-100 border border-gray-100 dark:border-gray-800 rounded-lg p-4 shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                    <div className="text-primary-500">
                      <Database size={18} />
                    </div>
                    Bidirektionaler Datenaustausch
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Alle Kundeninteraktionen werden in Echtzeit mit Ihrem CRM synchronisiert
                  </p>
                </motion.div>
                
                <motion.div 
                  className="bg-white dark:bg-dark-100 border border-gray-100 dark:border-gray-800 rounded-lg p-4 shadow-sm"
                  whileHover={{ y: -5, boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                    <div className="text-primary-500">
                      <Shield size={18} />
                    </div>
                    Sichere Datenübertragung
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Verschlüsselte Verbindungen und umfassende Sicherheitsmaßnahmen
                  </p>
                </motion.div>
              </div>
              
              <h4 className="font-semibold text-lg mb-2">Unterstützte CRM-Systeme:</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                {["Salesforce", "SAP", "Microsoft Dynamics", "HubSpot", "Zoho CRM", "und mehr..."].map((crm, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <Check size={16} className="text-primary-500" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{crm}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/demo" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <span>Integration testen</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <DatabaseWithRestApi 
                badgeTexts={{
                  first: "GET",
                  second: "POST",
                  third: "PUT",
                  fourth: "DELETE"
                }}
                buttonTexts={{
                  first: "KI-Helpbot",
                  second: "CRM-System"
                }}
                lightColor="#0078f2"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <Features10 />
      
      {/* Benefits Section - Redesigned */}
      <section className="bg-white dark:bg-dark-200 py-16 md:py-24 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">Vorteile unserer KI-Lösungen</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Wie unsere Technologie Ihr Unternehmen voranbringt
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-dark-300 p-8 rounded-2xl relative overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              <motion.div 
                className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary-100/50 dark:bg-primary-900/20 z-0 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <div className="rounded-full bg-primary-50 dark:bg-primary-900/30 p-3 w-14 h-14 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-5">
                  <Bot size={30} />
                </div>
                
                <h3 className="text-2xl font-semibold mb-5">Warum KI-Helpbot wählen?</h3>
                
                <div className="space-y-4 mb-8">
                  {[
                    "State-of-the-Art KI-Modelle",
                    "Maßgeschneiderte Lösungen für Ihre Branche",
                    "Schnelle Implementierung, sofortige Ergebnisse",
                    "Kontinuierliche Optimierung und Lernen"
                  ].map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary-500 p-1 text-white flex-shrink-0">
                        <Check size={12} />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{point}</span>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-dark-200">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Erfolgsrate</div>
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">92%</div>
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-dark-100 rounded-full mt-2">
                      <div className="h-full bg-primary-500 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-white dark:bg-dark-200">
                    <div className="text-xs text-gray-500 dark:text-gray-400">Kundenzufriedenheit</div>
                    <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">4.8/5</div>
                    <div className="w-full h-1.5 bg-gray-100 dark:bg-dark-100 rounded-full mt-2">
                      <div className="h-full bg-secondary-500 rounded-full" style={{ width: "96%" }}></div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/demo" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <span>Demo starten</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="bg-white dark:bg-dark-200 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`rounded-lg ${benefit.color === 'primary' ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' : benefit.color === 'secondary' ? 'bg-secondary-50 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400' : 'bg-accent-50 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400'} p-2.5`}>
                      {benefit.icon}
                    </div>
                    <div className={`text-lg font-bold ${benefit.color === 'primary' ? 'text-primary-600 dark:text-primary-400' : benefit.color === 'secondary' ? 'text-secondary-600 dark:text-secondary-400' : 'text-accent-600 dark:text-accent-400'}`}>
                      {benefit.stats}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Animated particles */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Bereit, Ihre Kundenkommunikation zu revolutionieren?
              </motion.h2>
              
              <motion.p 
                className="text-xl text-white/90 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Unsere KI-Lösungen sind darauf ausgelegt, Ihnen Zeit und Ressourcen zu sparen, während sie gleichzeitig die Kundenzufriedenheit erhöhen. Starten Sie noch heute.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to="/demo" 
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-600 font-medium rounded-full shadow-xl hover:bg-gray-50 transition-colors duration-300 text-base"
                >
                  <Bot size={18} />
                  Demo starten
                </Link>
                
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300 text-base"
                >
                  Kontakt aufnehmen
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              className="lg:col-span-2 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/20 rounded-full p-3 text-white">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Erfolgsgeschichten</h3>
                    <p className="text-white/80 text-sm">Was unsere Kunden berichten</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      quote: "Der KI-Helpbot hat unsere Kundenkommunikation transformiert. Wir sparen monatlich Tausende Euro.", 
                      author: "Thomas M.", 
                      company: "Autohaus Müller GmbH"
                    },
                    { 
                      quote: "Die Implementierung war überraschend schnell und einfach. Unsere Kunden lieben den 24/7-Service.", 
                      author: "Sarah K.", 
                      company: "ModeMeister Online Shop"
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + (idx * 0.1) }}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                    >
                      <p className="text-white/90 text-sm italic mb-3">"{item.quote}"</p>
                      <div className="flex justify-between items-center">
                        <div className="text-white/70 text-xs">
                          {item.author}, {item.company}
                        </div>
                        <div className="text-yellow-400 text-xs">★★★★★</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Missing icon components to add (used in Benefits section)
function Clock(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
}

function DollarSign(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
}

function TrendingUp(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
}

export default ServicesPage;