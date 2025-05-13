import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Bot, MessageSquare, Mic, BarChart, Calendar, Globe, Database, Car, ShoppingCart, Hammer, Headset } from 'lucide-react';
import InteractiveBall from '../components/3d/InteractiveBall';
import { FeaturesBusiness } from '../components/blocks/features-8';
import ServicesShowcase from '../components/blocks/services-showcase';
import SEO from '../components/SEO';

function HomePage() {
  const { t } = useTranslation();
  const featuresRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    businessRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // SEO schema data for homepage
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KI-Helpbot | KI-gestützte Chatbots & Voicebots für Kundenkommunikation",
    "description": "KI-Helpbot bietet intelligente Chatbots und Voicebots für Unternehmen jeder Größe. Optimieren Sie Ihre Kundenkommunikation mit KI-Lösungen.",
    "url": "https://www.ki-helpbot.de/",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "KI-Helpbot",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "105"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="KI-gestützte Chatbots & Voicebots für Kundenkommunikation" 
        description="KI-Helpbot bietet intelligente Chatbots und Voicebots für Unternehmen jeder Größe. Unsere KI-Lösungen revolutionieren Ihre Kundenkommunikation mit 24/7 Service, Mehrsprachigkeit und DSGVO-Konformität."
        keywords="KI-Chatbot, Voicebot, Künstliche Intelligenz, Kundenkommunikation, automatisierter Support, 24/7 Kundendienst, mehrsprachige Chatbots, KI-Kommunikationslösungen, DSGVO-konform"
        schemaData={homePageSchema}
      />

      {/* Hero section */}
      <section className="relative pt-20 md:pt-24 pb-10 bg-gradient-to-b from-gray-100 to-white dark:from-dark-300 dark:to-dark-200 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="absolute top-32 left-32 w-64 h-64 rounded-full bg-primary-400/15 blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5] 
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-32 right-32 w-60 h-60 rounded-full bg-secondary-400/15 blur-3xl"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.65, 0.5] 
            }}
            transition={{
              duration: 10,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="container-custom mx-auto px-4 relative z-10 flex flex-col items-center">
          {/* Hero Content */}
          <div className="text-center mb-6">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="gradient-text">{t('hero.title')}</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>
          </div>
          
          {/* 3D Ball - Centered */}
          <motion.div 
            className="mb-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 rounded-full bg-primary-400/20 filter blur-xl"></div>
            <InteractiveBall isSpeaking={false} size={220} />
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Link 
                to="/demo" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-full text-base shadow-md hover:shadow-primary-500/30 transition-all duration-300"
              >
                <Bot size={18} className="animate-pulse" />
                {t('hero.ctaButton')}
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <button 
                onClick={scrollToFeatures} 
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-medium rounded-full text-base hover:bg-primary-500/10 transition-colors duration-300"
              >
                {t('hero.secondaryButton')}
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Feature Highlights */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <FeatureHighlight 
              icon={<MessageSquare size={20} className="text-primary-500" />}
              title="Chatbots"
              delay={0.1}
            />
            <FeatureHighlight 
              icon={<Mic size={20} className="text-secondary-500" />}
              title="Voicebots"
              delay={0.2}
            />
            <FeatureHighlight 
              icon={<Database size={20} className="text-accent-500" />}
              title="CRM-Integration"
              delay={0.3}
            />
            <FeatureHighlight 
              icon={<BarChart size={20} className="text-primary-400" />}
              title="Datenanalyse"
              delay={0.4}
            />
          </motion.div>
        </div>
      </section>
      
      {/* ROI/Business Benefits Section */}
      <div ref={businessRef}>
        <FeaturesBusiness />
      </div>
      
      {/* Features section */}
      <section ref={featuresRef} className="py-16 md:py-24 bg-white dark:bg-dark-200 overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">{t('services.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </motion.div>
          
          <ServicesShowcase />
          
          <div className="mt-12 flex justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/leistungen" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-full text-base shadow-md hover:shadow-lg transition-all duration-300"
              >
                <span>Alle Leistungen entdecken</span>
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Industries section */}
      <section className="section py-16 md:py-24 bg-gray-100 dark:bg-dark-300">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-3">{t('solutions.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('solutions.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <IndustryCard 
              icon={<Car size={24} />}
              title={t('solutions.automotive.title')} 
              description={t('solutions.automotive.description')}
              imageUrl="https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg"
              color="primary"
            />
            
            <IndustryCard
              icon={<ShoppingCart size={24} />} 
              title={t('solutions.ecommerce.title')}
              description={t('solutions.ecommerce.description')}
              imageUrl="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
              color="secondary"
            />
            
            <IndustryCard
              icon={<Hammer size={24} />}
              title={t('solutions.craft.title')}
              description={t('solutions.craft.description')}
              imageUrl="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
              color="accent"
            />
            
            <IndustryCard
              icon={<Headset size={24} />}
              title={t('solutions.customerService.title')}
              description={t('solutions.customerService.description')}
              imageUrl="https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg"
              color="primary"
            />
          </div>
          
          <div className="flex justify-center mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/branchenloesungen" 
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-full text-base shadow-md hover:shadow-lg transition-all duration-300"
              >
                Alle Branchenlösungen entdecken
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA section - Improved */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute h-full w-full">
            {/* Diagonal lines pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="diagonalLines" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="10" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonalLines)" />
            </svg>

            {/* Animated circles */}
            <motion.div 
              className="absolute top-10 left-10 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl"
              animate={{
                y: [0, 50, 0],
                opacity: [0.05, 0.08, 0.05],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-20 h-48 w-48 rounded-full bg-secondary-400 opacity-10 blur-3xl"
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.15, 0.1],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 10,
                delay: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute top-40 right-1/3 h-32 w-32 rounded-full bg-white opacity-5 blur-3xl"
              animate={{
                x: [0, 40, 0],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 12,
                delay: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
        
        <div className="container-custom relative z-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content with 3D Ball */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.span 
                className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Bot size={16} className="mr-2" />
                KI-Technologie der nächsten Generation
              </motion.span>
              
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Revolutionieren Sie <br className="hidden md:block" />
                Ihre Kundenkommunikation
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl opacity-90 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Unsere KI-Lösungen transformieren die Art und Weise, wie Sie mit Ihren Kunden interagieren – intelligent, 
                persönlich und rund um die Uhr.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/demo" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                  >
                    <Bot size={18} />
                    Demo starten
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/80 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300 text-base"
                  >
                    Kontakt aufnehmen
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Satisfied customers */}
              <motion.div 
                className="mt-10 flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i} 
                      src={`https://images.pexels.com/photos/${220453 + i * 100000}/pexels-photo-${220453 + i * 100000}.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1`} 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                      alt={`Zufriedener KI-Helpbot Kunde ${i}`} 
                    />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-500 flex items-center justify-center text-white text-xs font-medium">
                    +50
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium">Zufriedene Kunden</div>
                  <div className="text-xs opacity-80">⭐⭐⭐⭐⭐ 4.9/5 Bewertung</div>
                </div>
              </motion.div>
            </div>
            
            {/* Right Content - Card with stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">KI-Vorteile auf einen Blick</h3>
                <div className="flex items-center rounded-full bg-white/20 px-3 py-1">
                  <span className="animate-pulse inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span className="text-xs">Live-Daten</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {/* ROI */}
                <motion.div 
                  className="bg-white/20 rounded-lg p-4 border border-white/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-xs text-white/70 mb-1">ROI im ersten Jahr</div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">300</span>
                    <span className="text-xl font-bold">%</span>
                  </div>
                  <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: '85%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </motion.div>
                
                {/* Customer Satisfaction */}
                <motion.div 
                  className="bg-white/20 rounded-lg p-4 border border-white/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-xs text-white/70 mb-1">Kundenzufriedenheit</div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">+35</span>
                    <span className="text-xl font-bold">%</span>
                  </div>
                  <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary-400 to-primary-500 rounded-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: '70%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
                
                {/* Cost Reduction */}
                <motion.div 
                  className="bg-white/20 rounded-lg p-4 border border-white/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-xs text-white/70 mb-1">Kostenersparnis</div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">-40</span>
                    <span className="text-xl font-bold">%</span>
                  </div>
                  <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-accent-400 to-accent-500 rounded-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                </motion.div>
                
                {/* Response Time */}
                <motion.div 
                  className="bg-white/20 rounded-lg p-4 border border-white/10"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-xs text-white/70 mb-1">Reaktionszeit</div>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-bold">0.2</span>
                    <span className="text-xl font-bold">s</span>
                  </div>
                  <div className="w-full h-1 bg-white/20 rounded-full mt-2">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full" 
                      initial={{ width: 0 }}
                      whileInView={{ width: '95%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2.5 bg-white/5 rounded-full px-4 py-2 text-sm border border-white/10">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span> Live
                  </span>
                  <span className="text-white/50">|</span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full inline-block"></span> 24/7
                  </span>
                  <span className="text-white/50">|</span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary-400 rounded-full inline-block"></span> DSGVO
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Customer testimonials */}
          <motion.div 
            className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {[
              {
                quote: "Der Chatbot hat unsere Kundenbetreuung revolutioniert. Die Anfragen werden sofort beantwortet, unsere Mitarbeiter sind entlastet.",
                author: "Max Mustermann",
                company: "Autohaus Mustermann"
              },
              {
                quote: "Mit dem KI-Helpbot konnten wir unsere Supportkosten um 40% senken und gleichzeitig die Kundenzufriedenheit steigern.",
                author: "Laura Schmidt",
                company: "Online-Shop ModeWelt"
              },
              {
                quote: "Die natürliche Sprachqualität des Voicebots hat uns beeindruckt. Unsere Kunden merken oft nicht, dass sie mit einer KI sprechen.",
                author: "Thomas Weber",
                company: "Elektro Weber"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <div className="mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-300">★</span>
                  ))}
                </div>
                <p className="text-sm italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{testimonial.author}</p>
                    <p className="text-xs opacity-70">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

interface FeatureHighlightProps {
  icon: React.ReactNode;
  title: string;
  delay?: number;
}

function FeatureHighlight({ icon, title, delay = 0 }: FeatureHighlightProps) {
  return (
    <motion.div 
      className="bg-white/90 dark:bg-dark-200/80 backdrop-blur-md rounded-lg shadow-md border border-gray-100/50 dark:border-gray-700/30 py-2 px-3 flex items-center gap-2"
      whileHover={{ 
        y: -3, 
        boxShadow: '0 10px 15px -5px rgba(0,0,0,0.1)',
        scale: 1.02 
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: delay + 0.7, 
        duration: 0.5,
        type: "spring", 
        stiffness: 300 
      }}
    >
      <div className="rounded-full bg-gray-100/70 dark:bg-dark-100/50 p-2 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{title}</span>
    </motion.div>
  );
}

interface IndustryCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  color: 'primary' | 'secondary' | 'accent';
}

function IndustryCard({ title, description, imageUrl, icon, color }: IndustryCardProps) {
  const colorClasses = {
    primary: {
      bg: "bg-primary-500",
      bgHover: "group-hover:bg-primary-600",
      border: "border-primary-400",
      text: "text-primary-600 dark:text-primary-400",
      shadow: "group-hover:shadow-primary-500/20"
    },
    secondary: {
      bg: "bg-secondary-500",
      bgHover: "group-hover:bg-secondary-600",
      border: "border-secondary-400",
      text: "text-secondary-600 dark:text-secondary-400",
      shadow: "group-hover:shadow-secondary-500/20"
    },
    accent: {
      bg: "bg-accent-500",
      bgHover: "group-hover:bg-accent-600",
      border: "border-accent-400",
      text: "text-accent-600 dark:text-accent-400", 
      shadow: "group-hover:shadow-accent-500/20"
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white dark:bg-dark-200 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-dark-200 to-transparent z-10"></div>
      
      <div className="h-32 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`KI-Helpbot Branchenlösung für ${title}`} 
          className="w-full h-full object-cover transition-all duration-500 filter brightness-90 group-hover:brightness-100 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className={`absolute inset-x-0 h-1 top-0 ${colorClasses[color].bg} transform origin-left transition-all duration-300 group-hover:h-1.5`}></div>
      </div>
      
      {/* Content area */}
      <div className="p-4 relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className={`rounded-full p-2 ${colorClasses[color].text} bg-gray-100 dark:bg-dark-100`}>
            {icon}
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {description}
        </p>
        
        <Link 
          to={`/branchenloesungen#${title.toLowerCase().replace(/\s+/g, '-')}`} 
          className={`flex items-center text-sm font-medium ${colorClasses[color].text} group-hover:underline mt-auto`}
        >
          <span>Mehr erfahren</span>
          <ChevronDown size={16} className="ml-1 transform rotate-270" />
        </Link>
      </div>
    </motion.div>
  );
}

export default HomePage;