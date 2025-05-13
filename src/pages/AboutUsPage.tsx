import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Bot, Lightbulb, Target, Users, Award, Sparkles, Clock, Globe, Shield, ChevronRight, ExternalLink, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function AboutUsPage() {
  const { t } = useTranslation();
  
  // SEO schema data for about page
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Über KI-Helpbot - Unser Unternehmen & Team",
    "description": "Erfahren Sie mehr über KI-Helpbot, unser Team, unsere Geschichte und unsere Mission, Kundenkommunikation durch KI zu revolutionieren.",
    "mainEntity": {
      "@type": "Organization",
      "name": "KI-Helpbot GmbH",
      "description": "KI-Helpbot entwickelt intelligente KI-Lösungen für die Kundenkommunikation, darunter Chatbots und Voicebots, die 24/7 verfügbar und DSGVO-konform sind.",
      "foundingDate": "2022",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Berlin",
          "addressRegion": "Berlin",
          "addressCountry": "DE"
        }
      },
      "numberOfEmployees": "35+",
      "award": "German Innovation Award 2024, Tech Startup of the Year, DSGVO Excellence Award"
    }
  };

  const teamMembers = [
    {
      name: "Dr. Michael Weber",
      role: "CEO & Gründer",
      bio: "KI-Experte mit über 15 Jahren Erfahrung im Bereich natürliche Sprachverarbeitung und maschinelles Lernen.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Julia Schmidt",
      role: "CTO",
      bio: "Erfahrene Softwareentwicklerin mit Fokus auf KI und Machine Learning. Leitete zuvor Entwicklungsteams bei führenden Technologieunternehmen.",
      image: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Thomas Müller",
      role: "Head of AI Research",
      bio: "Promovierter Computerlinguist mit zahlreichen Publikationen im Bereich KI und Natural Language Processing.",
      image: "https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Fischer",
      role: "VP of Customer Success",
      bio: "Expertin für Kundenbeziehungen mit umfangreicher Erfahrung in der Implementierung von KI-Lösungen für Unternehmen verschiedener Größen.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];
  
  const timeline = [
    {
      year: "2021",
      title: "Die Idee entsteht",
      description: "Unsere Gründer erkannten das Potenzial von KI für die Kundenkommunikation und begannen mit der Entwicklung erster Prototypen."
    },
    {
      year: "2022",
      title: "Gründung von KI-Helpbot",
      description: "Nach intensiver Forschungs- und Entwicklungsarbeit wurde KI-Helpbot offiziell als Unternehmen gegründet."
    },
    {
      year: "2023",
      title: "Erste Kunden & Finanzierung",
      description: "Gewinnung der ersten Pilotkunden und erfolgreiche Seed-Finanzierungsrunde über 2 Millionen Euro."
    },
    {
      year: "2024",
      title: "Internationalisierung",
      description: "Expansion in den europäischen Markt und Erweiterung des Sprachportfolios auf 20+ Sprachen."
    },
    {
      year: "2025",
      title: "Heute",
      description: "KI-Helpbot ist ein führender Anbieter von KI-gestützten Kommunikationslösungen mit Kunden in ganz Europa."
    }
  ];

  const awards = [
    {
      name: "German Innovation Award 2024",
      category: "KI & Digitalisierung",
      description: "Ausgezeichnet für besonders innovative Lösungen im Bereich Künstliche Intelligenz und Kundenkommunikation.",
      icon: <Award size={32} />
    },
    {
      name: "Tech Startup of the Year",
      category: "Deutscher Startup Preis",
      description: "Als eines der vielversprechendsten Technologie-Startups in Deutschland ausgezeichnet.",
      icon: <Sparkles size={32} />
    },
    {
      name: "DSGVO Excellence Award",
      category: "Datenschutz & Sicherheit",
      description: "Für vorbildlichen Umgang mit Kundendaten und die Entwicklung DSGVO-konformer KI-Lösungen.",
      icon: <Shield size={32} />
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <SEO 
        title="Über KI-Helpbot - Unser Unternehmen & Team"
        description="Lernen Sie KI-Helpbot kennen - ein innovatives Berliner Unternehmen, das intelligente KI-Lösungen für die Kundenkommunikation entwickelt. Entdecken Sie unsere Mission, Vision, Werte und das Team hinter unseren erfolgreichen Produkten."
        keywords="KI-Helpbot, Über uns, Unternehmenswerte, KI-Startup, Kundenkommunikation, KI-Entwicklung, Berlin Startup, KI-Experten, Chatbot-Entwicklung, Künstliche Intelligenz Unternehmen, DSGVO-konforme KI"
        schemaData={aboutSchema}
      />

      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-b from-gray-100 to-white dark:from-dark-300 dark:to-dark-200 py-16 md:py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute top-20 -right-20 w-80 h-80 rounded-full bg-primary-400/10 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-secondary-400/10 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{
              duration: 10,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('about.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card h-full relative group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white dark:to-dark-100 opacity-40 group-hover:animate-shine" />
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-primary-50 dark:bg-primary-900/30 p-4 w-16 h-16 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Lightbulb size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">{t('about.mission.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {t('about.mission.description')}
              </p>
              
              <div className="mt-6 flex items-center justify-center">
                <div className="w-16 h-1 bg-primary-500 opacity-30"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card h-full relative group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white dark:to-dark-100 opacity-40 group-hover:animate-shine" />
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-secondary-50 dark:bg-secondary-900/30 p-4 w-16 h-16 flex items-center justify-center text-secondary-600 dark:text-secondary-400">
                  <Target size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">{t('about.vision.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {t('about.vision.description')}
              </p>
              
              <div className="mt-6 flex items-center justify-center">
                <div className="w-16 h-1 bg-secondary-500 opacity-30"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card h-full relative group"
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white dark:to-dark-100 opacity-40 group-hover:animate-shine" />
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-accent-50 dark:bg-accent-900/30 p-4 w-16 h-16 flex items-center justify-center text-accent-600 dark:text-accent-400">
                  <Users size={32} />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-4">{t('about.team.title')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {t('about.team.description')}
              </p>
              
              <div className="mt-6 flex items-center justify-center">
                <div className="w-16 h-1 bg-accent-500 opacity-30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="py-16 bg-white dark:bg-dark-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">
                KI-Helpbot auf einen Blick
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Wir sind ein innovatives Technologieunternehmen, das sich auf die Entwicklung intelligenter KI-gestützter Kommunikationslösungen spezialisiert hat. Unsere Mission ist es, Unternehmen jeder Größe dabei zu unterstützen, ihre Kundenkommunikation zu optimieren und zu automatisieren.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Gegründet 2022</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Frisches Unternehmen mit innovativen Ideen</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-50 dark:bg-secondary-900/20 flex items-center justify-center flex-shrink-0">
                    <Users size={24} className="text-secondary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">35+ Mitarbeiter</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Team aus KI-Experten, Entwicklern und Branchenspezialisten</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-50 dark:bg-accent-900/20 flex items-center justify-center flex-shrink-0">
                    <Globe size={24} className="text-accent-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Standort Berlin</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Im Herzen des europäischen Tech-Hubs</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
                    <Shield size={24} className="text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">100% DSGVO-konform</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Entwickelt mit höchsten Datenschutzstandards</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/kontakt" 
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                Mit uns in Kontakt treten
                <ChevronRight size={18} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
                    alt="Das KI-Helpbot Team bei der Arbeit" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">Unser Team</h3>
                      <p className="text-white/90">KI-Experten, Entwickler und Kommunikationsspezialisten</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white dark:bg-dark-100 rounded-xl shadow-lg p-4 flex items-center justify-center z-20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100+</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">zufriedene Kunden</div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg flex items-center justify-center z-20 text-white">
                  <div className="text-center">
                    <Bot size={32} />
                    <div className="text-xs mt-1 font-medium">KI-Helpbot</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - New */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 dark:opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">Unsere Geschichte</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Wie KI-Helpbot entstanden ist und wo wir heute stehen
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 z-0"></div>
            
            {/* Timeline entries */}
            <div className="relative z-10">
              {timeline.map((event, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 flex md:justify-end order-1">
                    <div className={`bg-white dark:bg-dark-200 rounded-xl shadow-md p-6 border-t-4 ${
                      index % 3 === 0 
                        ? 'border-primary-500'
                        : index % 3 === 1
                          ? 'border-secondary-500' 
                          : 'border-accent-500'
                    } w-full md:max-w-sm`}>
                      <div className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-2 ${
                        index % 3 === 0 
                          ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/20 dark:text-primary-300' 
                          : index % 3 === 1
                            ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/20 dark:text-secondary-300' 
                            : 'bg-accent-100 text-accent-800 dark:bg-accent-900/20 dark:text-accent-300'
                      }`}>
                        {event.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 relative flex justify-center md:justify-start order-0 md:order-2">
                    <div className="absolute left-0 md:left-0 top-6 w-6 h-6 rounded-full bg-white dark:bg-dark-100 border-4 border-primary-500 z-20 md:-ml-3"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - New */}
      <section className="py-16 md:py-24 bg-white dark:bg-dark-200" id="team">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">Das Team hinter KI-Helpbot</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ein engagiertes Team aus KI-Experten, Entwicklern und Branchenspezialisten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-300 rounded-xl overflow-hidden shadow-md group"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={`KI-Helpbot Teammitglied ${member.name}`} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-10 pb-4 px-4">
                    <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-2">
                    <a 
                      href={member.social.linkedin} 
                      className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 transition-colors"
                      aria-label={`LinkedIn von ${member.name}`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.064-.926-2.064-2.065 0-1.138.92-2.063 2.064-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                    </a>
                    <a 
                      href={member.social.twitter} 
                      className="p-2 rounded-full bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/20 dark:hover:text-primary-400 transition-colors"
                      aria-label={`Twitter von ${member.name}`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team with link to careers */}
          <div className="mt-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-gray-50 to-white dark:from-dark-300 dark:to-dark-200 p-6 rounded-xl border border-gray-200 dark:border-gray-800 inline-block"
            >
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Möchten Sie Teil unseres Teams werden? Wir sind immer auf der Suche nach talentierten Menschen!
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
              >
                Aktuelle Stellenangebote ansehen
                <ExternalLink size={16} className="ml-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture & Values Section - Enhanced */}
      <section className="bg-gray-100 dark:bg-dark-300 py-16 md:py-24" id="mission">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">Unsere Werte</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Die Prinzipien, die unser Handeln leiten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card h-full relative group"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white dark:bg-dark-200 p-6 rounded-xl h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-primary-100 dark:bg-primary-900/20 p-2.5 text-primary-600 dark:text-primary-400">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Innovation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Wir streben danach, kontinuierlich neue Lösungen zu entwickeln und unsere Technologie zu verbessern.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card h-full relative group"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white dark:bg-dark-200 p-6 rounded-xl h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-secondary-100 dark:bg-secondary-900/20 p-2.5 text-secondary-600 dark:text-secondary-400">
                    <Users size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Kundenfokus</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Der Erfolg unserer Kunden steht im Mittelpunkt unseres Handelns. Wir hören zu und passen uns an.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card h-full relative group"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white dark:bg-dark-200 p-6 rounded-xl h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-accent-100 dark:bg-accent-900/20 p-2.5 text-accent-600 dark:text-accent-400">
                    <Award size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Qualität</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Wir setzen höchste Standards für unsere Produkte und Dienstleistungen, um exzellente Ergebnisse zu liefern.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card h-full relative group"
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white dark:bg-dark-200 p-6 rounded-xl h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-primary-100 dark:bg-primary-900/20 p-2.5 text-primary-600 dark:text-primary-400">
                    <Shield size={20} />
                  </div>
                  <h3 className="text-xl font-semibold">Verantwortung</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Wir handeln ethisch und transparent, mit Respekt für Datenschutz und Privatsphäre.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section - New */}
      <section className="bg-white dark:bg-dark-200 py-16 md:py-24" id="vision">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">Auszeichnungen</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Wir sind stolz auf die Anerkennung unserer Arbeit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-dark-300 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary-600 dark:text-primary-400">
                    {award.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{award.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{award.category}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 py-16 md:py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <motion.div 
            className="absolute -top-20 right-20 w-96 h-96 rounded-full bg-white/5 blur-2xl"
            animate={{
              y: [0, 30, 0],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute -bottom-20 left-20 w-96 h-96 rounded-full bg-white/5 blur-2xl"
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit, Teil unserer Geschichte zu werden?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
              Entdecken Sie, wie unsere KI-Lösungen Ihre Kundenkommunikation revolutionieren können.
              Wir freuen uns darauf, mit Ihnen zusammenzuarbeiten.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/demo" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Bot size={20} />
                  <span>Demo starten</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <span>Kontakt aufnehmen</span>
                </Link>
              </motion.div>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-sm">DSGVO-konform</span>
              </div>
              <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-sm">Made in Germany</span>
              </div>
              <div className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <CheckCircle size={16} className="text-green-400" />
                <span className="text-sm">Mehrsprachiger Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;