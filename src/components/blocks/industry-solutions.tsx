import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, ShoppingCart, Hammer, Headset, Check, Search, Users, Zap, Clock, Globe } from 'lucide-react';

interface Industry {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  color: 'primary' | 'secondary' | 'accent';
  features: string[];
  benefits: {
    icon: React.ElementType;
    title: string;
    value: string;
  }[];
}

export default function IndustrySolutions() {
  const { t } = useTranslation();
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Set default active industry
    if (industries.length > 0 && !activeIndustry) {
      setActiveIndustry(industries[0].id);
    }
  }, []);

  const handleIndustryClick = (industryId: string) => {
    if (isAnimating || industryId === activeIndustry) return;
    setIsAnimating(true);
    setActiveIndustry(industryId);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const industries: Industry[] = [
    {
      id: 'automotive',
      icon: Car,
      title: t('solutions.automotive.title'),
      description: t('solutions.automotive.description'),
      image: 'https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg',
      color: 'primary',
      features: [
        'Automatisierte Terminbuchung für Service und Beratung',
        'Fahrzeugkonfiguration und Preisanfragen',
        'Statusverfolgung für Serviceaufträge',
        'Probefahrten planen'
      ],
      benefits: [
        { icon: Clock, title: 'Zeiteinsparung', value: '35%' },
        { icon: Users, title: 'Kundenzufriedenheit', value: '+28%' },
        { icon: Zap, title: 'Effizienz', value: '+40%' }
      ]
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: t('solutions.ecommerce.title'),
      description: t('solutions.ecommerce.description'),
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      color: 'secondary',
      features: [
        'Produktempfehlungen basierend auf Kundenpräferenzen',
        'Bestellstatusverfolgung und Updates',
        'Rückgabe- und Umtauschprozesse vereinfachen',
        'Personalisierte Angebote und Rabatte'
      ],
      benefits: [
        { icon: Globe, title: 'Mehrsprachigkeit', value: '15+' },
        { icon: Search, title: 'Konversionsrate', value: '+22%' },
        { icon: Zap, title: 'Retourenquote', value: '-30%' }
      ]
    },
    {
      id: 'craft',
      icon: Hammer,
      title: t('solutions.craft.title'),
      description: t('solutions.craft.description'),
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
      color: 'accent',
      features: [
        'Effiziente Terminplanung für Vor-Ort-Termine',
        'Automatisierte Angebotserstellung',
        'Statusinformationen zu laufenden Projekten',
        'Notfallanfragen priorisieren'
      ],
      benefits: [
        { icon: Clock, title: 'Admin-Zeit', value: '-45%' },
        { icon: Zap, title: 'Reaktionszeit', value: '85% schneller' },
        { icon: Users, title: 'Neukundenrate', value: '+15%' }
      ]
    },
    {
      id: 'customerService',
      icon: Headset,
      title: t('solutions.customerService.title'),
      description: t('solutions.customerService.description'),
      image: 'https://images.pexels.com/photos/7709087/pexels-photo-7709087.jpeg',
      color: 'primary',
      features: [
        '24/7 Kundensupport ohne Wartezeiten',
        'Intelligente Ticket-Kategorisierung und -Priorisierung',
        'Automatisierte Beantwortung häufig gestellter Fragen',
        'Nahtlose Übergabe an menschliche Mitarbeiter bei komplexen Anfragen'
      ],
      benefits: [
        { icon: Clock, title: 'Verfügbarkeit', value: '24/7' },
        { icon: Zap, title: 'First-Contact', value: '92%' },
        { icon: Users, title: 'Kundenbewertung', value: '4.8/5' }
      ]
    }
  ];
  
  const activeData = industries.find((ind) => ind.id === activeIndustry);

  const colorVariants = {
    primary: {
      bgLight: 'bg-primary-50',
      bgDark: 'dark:bg-primary-900/20',
      text: 'text-primary-600 dark:text-primary-400',
      border: 'border-primary-200 dark:border-primary-800',
      button: 'bg-primary-600 hover:bg-primary-700'
    },
    secondary: {
      bgLight: 'bg-secondary-50',
      bgDark: 'dark:bg-secondary-900/20',
      text: 'text-secondary-600 dark:text-secondary-400',
      border: 'border-secondary-200 dark:border-secondary-800',
      button: 'bg-secondary-600 hover:bg-secondary-700'
    },
    accent: {
      bgLight: 'bg-accent-50',
      bgDark: 'dark:bg-accent-900/20',
      text: 'text-accent-600 dark:text-accent-400',
      border: 'border-accent-200 dark:border-accent-800',
      button: 'bg-accent-600 hover:bg-accent-700'
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-dark-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-3">{t('solutions.title')}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </motion.div>

        {/* Industry Tabs */}
        <div className="flex justify-center mb-5 md:mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => {
              const isActive = industry.id === activeIndustry;
              const Icon = industry.icon;
              
              return (
                <motion.button
                  key={industry.id}
                  onClick={() => handleIndustryClick(industry.id)}
                  className={`rounded-full px-3 sm:px-4 py-1.5 text-sm font-medium flex items-center gap-2 transition-all ${
                    isActive 
                      ? `${colorVariants[industry.color].bgLight} ${colorVariants[industry.color].bgDark} ${colorVariants[industry.color].text} shadow-sm` 
                      : 'bg-white dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-dark-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon size={18} className={isActive ? '' : 'opacity-70'} />
                  <span className="hidden sm:inline">{industry.title}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Active Industry Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Image Section */}
                <div className="lg:col-span-5 relative overflow-hidden rounded-xl">
                  <div className={`absolute inset-x-0 h-1.5 top-0 ${colorVariants[activeData.color].text.replace('text', 'bg')} z-10`}></div>
                  <div className="relative group">
                    <motion.img 
                      src={activeData.image} 
                      alt={activeData.title} 
                      className="w-full object-cover rounded-xl shadow-lg h-60 sm:h-72 lg:h-80"
                      layoutId={`industry-image-${activeData.id}`}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-medium">{activeData.title}</span>
                    </div>
                  </div>
                  
                  {/* Benefits Cards */}
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {activeData.benefits.map((benefit, idx) => {
                      const BenefitIcon = benefit.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                          className="bg-white dark:bg-dark-200 rounded-lg p-3 shadow-sm border border-gray-100 dark:border-gray-800"
                        >
                          <div className="flex flex-col items-center text-center">
                            <div className={`mb-1.5 ${colorVariants[activeData.color].text}`}>
                              <BenefitIcon size={18} />
                            </div>
                            <div className={`text-lg font-bold ${colorVariants[activeData.color].text}`}>
                              {benefit.value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {benefit.title}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:col-span-7">
                  <div className="bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg ${colorVariants[activeData.color].bgLight} ${colorVariants[activeData.color].bgDark}`}>
                        <activeData.icon size={24} className={colorVariants[activeData.color].text} />
                      </div>
                      <h3 className="text-xl font-semibold">{activeData.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {activeData.description}
                    </p>
                    
                    <h4 className="text-lg font-medium mb-3">Vorteile für {activeData.title}:</h4>
                    <ul className="space-y-2 mb-6">
                      {activeData.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                        >
                          <Check size={18} className={`mt-0.5 flex-shrink-0 ${colorVariants[activeData.color].text}`} />
                          <span className="ml-2 text-gray-600 dark:text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex gap-3">
                      <Link 
                        to={`/branchenloesungen#${activeData.id}`} 
                        className={`px-4 py-2 rounded-lg text-white font-medium text-sm ${colorVariants[activeData.color].button} transition-colors duration-300`}
                      >
                        Mehr über {activeData.title}
                      </Link>
                      
                      <Link 
                        to="/demo" 
                        className="px-4 py-2 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 font-medium text-sm hover:bg-gray-50 dark:hover:bg-dark-200 transition-colors duration-300"
                      >
                        Demo starten
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
  );
}