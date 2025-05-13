import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

function TestimonialsPage() {
  const { t } = useTranslation();
  
  // SEO schema data for testimonials page
  const testimonialsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "KI-Helpbot Kundenbewertungen & Erfolgsgeschichten",
    "description": "Erfahren Sie, was unsere Kunden über unsere KI-gestützten Kommunikationslösungen sagen und welche Erfolge sie mit KI-Helpbot erzielt haben.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Max Mustermann"
            },
            "itemReviewed": {
              "@type": "Product",
              "name": "KI-Helpbot Chatbot"
            },
            "reviewBody": "Seit wir den KI-Helpbot einsetzen, haben wir 40% mehr Terminanfragen und unsere Mitarbeiter sparen wertvolle Zeit bei Routineanfragen."
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Laura Schmidt"
            },
            "itemReviewed": {
              "@type": "Product",
              "name": "KI-Helpbot Chatbot"
            },
            "reviewBody": "Der Chatbot beantwortet Fragen zu Bestellstatus und Retouren rund um die Uhr und hat unsere Kundenzufriedenheit deutlich verbessert."
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Thomas Weber"
            },
            "itemReviewed": {
              "@type": "Product",
              "name": "KI-Helpbot Assistent"
            },
            "reviewBody": "Dank des KI-Assistenten können wir Termine effizienter planen und haben weniger administrative Aufgaben. Eine echte Arbeitserleichterung!"
          }
        }
      ]
    }
  };

  const testimonials = [
    {
      id: 1,
      name: t('testimonials.testimonial1.name'),
      company: t('testimonials.testimonial1.company'),
      text: t('testimonials.testimonial1.text'),
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      rating: 5
    },
    {
      id: 2,
      name: t('testimonials.testimonial2.name'),
      company: t('testimonials.testimonial2.company'),
      text: t('testimonials.testimonial2.text'),
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5
    },
    {
      id: 3,
      name: t('testimonials.testimonial3.name'),
      company: t('testimonials.testimonial3.company'),
      text: t('testimonials.testimonial3.text'),
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      rating: 4
    },
    {
      id: 4,
      name: 'Anna Müller',
      company: 'Mode Boutique Eleganz',
      text: 'Der KI-Assistent hat unsere Online-Präsenz komplett verändert. Unsere Kunden bekommen jetzt rund um die Uhr Stilberatung und Größenempfehlungen.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5
    },
    {
      id: 5,
      name: 'Dr. Michael Fischer',
      company: 'Zahnarztpraxis Fischer',
      text: 'Die automatisierte Terminvergabe durch den KI-Helpbot hat die Arbeitsbelastung unserer Rezeption um 60% reduziert. Die Patienten schätzen die Flexibilität und schnelle Reaktionszeit.',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
      rating: 5
    },
    {
      id: 6,
      name: 'Sarah Klein',
      company: 'Hotel Seestern',
      text: 'Der Voicebot beantwortet Anfragen zu Buchungen, Zimmerausstattung und lokalen Attraktionen in perfektem Deutsch und Englisch. Unsere internationale Kundschaft ist begeistert!',
      image: 'https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg',
      rating: 4
    }
  ];

  const caseStudies = [
    {
      company: 'Autohaus Mustermann GmbH',
      title: 'Wie ein Autohaus seine Terminanfragen um 40% steigerte',
      image: 'https://images.pexels.com/photos/3807131/pexels-photo-3807131.jpeg',
      description: 'Das Autohaus Mustermann implementierte den KI-Helpbot für Terminvereinbarungen und Fahrzeuganfragen. Nach drei Monaten konnte eine Steigerung der Terminbuchungen um 40% und eine Reduzierung der Bearbeitungszeit von Kundenanfragen um 65% verzeichnet werden.'
    },
    {
      company: 'Online-Shop ModeWelt',
      title: 'Rücksendequote um 30% reduziert durch intelligente Beratung',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
      description: 'Der E-Commerce-Shop ModeWelt setzte auf den KI-Helpbot für Produktberatung und Größenempfehlungen. Die KI analysierte Kundenpräferenzen und Körpermaße, um passende Produkte vorzuschlagen. Das Ergebnis: 30% weniger Retouren und ein Anstieg der Kundenzufriedenheit um 25%.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <SEO 
        title="Kundenbewertungen & Erfolgsgeschichten"
        description="Erfahren Sie, was unsere Kunden über KI-Helpbot sagen. Erfolgsgeschichten und Bewertungen aus verschiedenen Branchen zeigen, wie unsere KI-gestützten Chatbots und Voicebots Unternehmen helfen, ihre Kommunikation zu revolutionieren."
        keywords="KI-Helpbot Bewertungen, Kundenerfahrungen, Chatbot Erfolgsgeschichten, KI-Lösungen Testimonials, Kundenfeedback, Erfolgsberichte, Case Studies KI, Kundeninteraktionen, Kommunikationslösungen Referenzen"
        schemaData={testimonialsSchema}
      />

      <section className="bg-gradient-to-b from-gray-100 to-white dark:from-dark-300 dark:to-dark-200 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="gradient-text mb-4">{t('testimonials.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card h-full shadow-lg"
              >
                <div className="absolute -top-4 -right-4 bg-white dark:bg-dark-100 p-2 rounded-full shadow-md">
                  <Quote size={24} className="text-primary-500" />
                </div>
                
                <div className="flex mb-4 items-center">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} - Kunde von KI-Helpbot`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.company}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill={i < testimonial.rating ? '#eab308' : 'none'}
                          stroke={i < testimonial.rating ? '#eab308' : '#9ca3af'}
                          className="mr-0.5"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-dark-200 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Erfolgsgeschichten unserer Kunden
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card overflow-hidden shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={`KI-Helpbot Erfolgsgeschichte: ${caseStudy.company}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {caseStudy.company}
                  </p>
                  <h3 className="text-xl font-semibold mb-4">{caseStudy.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {caseStudy.description}
                  </p>
                  <a href="#" className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                    Vollständige Case Study lesen →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit, der nächste Erfolgsfall zu werden?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
              Entdecken Sie, wie unsere KI-Lösungen auch Ihr Unternehmen transformieren können.
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

export default TestimonialsPage;