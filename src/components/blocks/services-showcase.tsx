import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mic, Database, BarChart, Calendar, Globe, Bot, Shield, Zap, ChevronRight, Check, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  color: string;
  title: string;
  description: string;
  features: string[];
  active: boolean;
  onSelect: () => void;
  bgPattern?: string;
  animate?: boolean;
  index: number;
}

const ServiceCard = ({ 
  icon, 
  color, 
  title, 
  description, 
  features, 
  active, 
  onSelect, 
  bgPattern, 
  animate = true,
  index
}: ServiceCardProps) => {
  const colorClasses = {
    primary: {
      light: "bg-primary-50",
      dark: "dark:bg-primary-900/20",
      border: "border-primary-100 dark:border-primary-800/20",
      text: "text-primary-600 dark:text-primary-400",
      shadow: "shadow-primary-500/20",
      gradient: "from-primary-500 to-primary-600"
    },
    secondary: {
      light: "bg-secondary-50",
      dark: "dark:bg-secondary-900/20",
      border: "border-secondary-100 dark:border-secondary-800/20",
      text: "text-secondary-600 dark:text-secondary-400",
      shadow: "shadow-secondary-500/20",
      gradient: "from-secondary-500 to-secondary-600"
    },
    accent: {
      light: "bg-accent-50",
      dark: "dark:bg-accent-900/20",
      border: "border-accent-100 dark:border-accent-800/20",
      text: "text-accent-600 dark:text-accent-400",
      shadow: "shadow-accent-500/20",
      gradient: "from-accent-500 to-accent-600"
    }
  };
  
  const classes = colorClasses[color as keyof typeof colorClasses];
  
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border group ${
        active 
          ? `${classes.light} ${classes.dark} ${classes.shadow} shadow-lg` 
          : "bg-white dark:bg-dark-200 hover:bg-gray-50 dark:hover:bg-dark-100/50 shadow-md"
      } transition-all duration-300 h-full cursor-pointer`}
      onClick={onSelect}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' 
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: 0.1 * index,
          duration: 0.5 
        }
      }}
      layout={animate}
    >
      {bgPattern && (
        <div 
          className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] dark:opacity-[0.04] dark:group-hover:opacity-[0.08] pointer-events-none transition-opacity"
          style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className={`rounded-full ${classes.light} ${classes.dark} p-3 w-12 h-12 flex items-center justify-center ${classes.text} transition-transform group-hover:scale-110`}>
            {icon}
          </div>
          <h3 className="text-lg font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          {description}
        </p>
        
        {!active && (
          <div className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            <span>Details anzeigen</span>
            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
        
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
            >
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3 text-sm flex items-center gap-1.5">
                <Check size={14} className={classes.text} />
                <span>Highlights</span>
              </h4>
              <ul className="space-y-2.5">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight size={14} className={`${classes.text} mt-1 flex-shrink-0`} />
                    <span className="ml-1.5 text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.div 
                className="mt-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  to="/leistungen" 
                  className={`inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r ${classes.gradient} text-white text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <span>Mehr erfahren</span>
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Decoration */}
      {active && (
        <>
          <div className="absolute top-0 right-0 h-16 w-16">
            <div className="absolute rotate-45 bg-white/10 w-16 h-16 -right-8 -top-8"></div>
          </div>
          <div className="absolute bottom-0 left-0 h-16 w-16">
            <div className="absolute rotate-45 bg-white/10 w-16 h-16 -left-8 -bottom-8"></div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default function ServicesShowcase() {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState<number | null>(null);
  const [animate, setAnimate] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate through services
  useEffect(() => {
    const rotateServices = () => {
      if (activeService === null) {
        setActiveService(0);
      } else {
        setActiveService((prev) => 
          prev === null ? 0 : (prev + 1) % services.length
        );
      }
    };
    
    timerRef.current = setInterval(rotateServices, 5000);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeService]);
  
  const handleServiceSelect = (index: number) => {
    // Clear auto-rotation when user interacts
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    if (activeService === index) {
      setActiveService(null);
    } else {
      setActiveService(index);
    }
  };

  const services = [
    {
      icon: <MessageSquare size={24} />,
      title: t('services.chatbots.title'),
      color: "primary",
      description: t('services.chatbots.description'),
      features: [
        "Anpassbare Persönlichkeit für Ihre Marke",
        "24/7 Verfügbarkeit ohne Wartezeiten",
        "Mehrsprachige Unterstützung für internationale Kunden",
        "Nahtlose Integration in Ihre Website"
      ],
      bgPattern: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Mic size={24} />,
      title: t('services.voicebots.title'),
      color: "secondary",
      description: t('services.voicebots.description'),
      features: [
        "Natürlich klingende Stimmen in über 20 Sprachen",
        "Fortschrittliche Spracherkennung mit hoher Genauigkeit",
        "Integration in bestehende Telefonanlagen",
        "Kontextsensitive Konversationsführung"
      ],
      bgPattern: "https://images.pexels.com/photos/7567439/pexels-photo-7567439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Database size={24} />,
      title: t('services.crmIntegration.title'),
      color: "accent",
      description: t('services.crmIntegration.description'),
      features: [
        "Bidirektionale Synchronisation mit Ihrem CRM",
        "Automatische Kundendatenaktualisierung",
        "Integrierte Analysen und Reporting",
        "Kompatibel mit allen führenden CRM-Systemen"
      ]
    },
    {
      icon: <Calendar size={24} />,
      title: t('services.appointments.title'),
      color: "primary",
      description: t('services.appointments.description'),
      features: [
        "Intelligente Terminvorschläge basierend auf Verfügbarkeit",
        "Automatische Erinnerungen und Bestätigungen",
        "Integration mit Kalendersystemen",
        "Effiziente Ressourcenplanung"
      ]
    },
    {
      icon: <Globe size={24} />,
      title: t('services.multilingual.title'),
      color: "secondary",
      description: t('services.multilingual.description'),
      features: [
        "Unterstützung für über 20 Sprachen",
        "Automatische Spracherkennung",
        "Kulturell angepasste Antworten",
        "Konsistente Tonalität über alle Sprachen"
      ]
    },
    {
      icon: <BarChart size={24} />,
      title: t('services.dataAnalysis.title'),
      color: "accent",
      description: t('services.dataAnalysis.description'),
      features: [
        "Umfassende Dashboards und Berichte",
        "Identifikation von Kundentrends und -mustern",
        "Sentimentanalyse für Kundenfeedback",
        "Leistungs-KPIs und Optimierungsvorschläge"
      ]
    }
  ];
  
  // Divide services into main highlights and others
  const mainServices = services.slice(0, 3);
  const otherServices = services.slice(3);

  return (
    <div>
      {/* Services Header */}
      <motion.div
        className="mb-10 bg-white dark:bg-dark-200 rounded-xl p-5 shadow-md border border-gray-100 dark:border-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary-50 dark:bg-primary-900/20 p-3 text-primary-600 dark:text-primary-400">
              <Bot size={24} />
            </div>
            <h3 className="text-xl font-semibold">KI-gestützte Services</h3>
          </div>
          <div className="flex gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1 bg-gray-100 dark:bg-dark-100 px-3 py-1 rounded-full">
              <Check size={14} className="text-primary-600" /> DSGVO-konform
            </span>
            <span className="flex items-center gap-1 bg-gray-100 dark:bg-dark-100 px-3 py-1 rounded-full">
              <Check size={14} className="text-primary-600" /> Mehrsprachig
            </span>
            <span className="flex items-center gap-1 bg-gray-100 dark:bg-dark-100 px-3 py-1 rounded-full">
              <Check size={14} className="text-primary-600" /> 24/7 Verfügbar
            </span>
          </div>
        </div>
      </motion.div>
      
      {/* Main Services - Spotlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {mainServices.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            color={service.color}
            title={service.title}
            description={service.description}
            features={service.features}
            active={activeService === index}
            onSelect={() => handleServiceSelect(index)}
            bgPattern={service.bgPattern}
            animate={animate}
            index={index}
          />
        ))}
      </div>
      
      {/* Feature Showcase */}
      <motion.div
        className="mb-6 p-6 bg-gradient-to-r from-gray-50 to-white dark:from-dark-100 dark:to-dark-200 rounded-xl border border-gray-200 dark:border-gray-800 shadow-md overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <radialGradient id="dots" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#0078f2" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0078f2" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
            
            {/* Grid pattern */}
            {Array.from({ length: 10 }).map((_, i) => (
              <line 
                key={`h-${i}`}
                x1="0" 
                y1={i * 10} 
                x2="100" 
                y2={i * 10} 
                stroke="#0078f2" 
                strokeWidth="0.1" 
              />
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <line 
                key={`v-${i}`}
                x1={i * 10} 
                y1="0" 
                x2={i * 10} 
                y2="100" 
                stroke="#0078f2" 
                strokeWidth="0.1" 
              />
            ))}
          </svg>
        </div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full bg-white dark:bg-dark-300 p-3 text-primary-600 dark:text-primary-400 shadow-md">
                  <Shield size={24} />
                </div>
                <h3 className="text-lg font-semibold">Intelligent & Sicher</h3>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Unsere KI-Lösungen sind nicht nur intelligent, sondern auch absolut sicher und DSGVO-konform. Ihre Daten bleiben geschützt, während unsere Technologie Ihre Kundenkommunikation optimiert.
              </p>
              
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                <div className="h-2 w-2 rounded-full bg-secondary-500"></div>
                <div className="h-2 w-2 rounded-full bg-accent-500"></div>
              </div>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: <Bot size={20} />, title: "KI-Technologie", value: "State-of-the-Art" },
                { icon: <Shield size={20} />, title: "Datenschutz", value: "DSGVO-konform" },
                { icon: <Zap size={20} />, title: "Einrichtung", value: "< 48 Stunden" },
                { icon: <Globe size={20} />, title: "Sprachen", value: "20+" },
                { icon: <Database size={20} />, title: "CRM-Systeme", value: "Alle gängigen" },
                { icon: <BarChart size={20} />, title: "Erfolgsrate", value: "92%" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  className="bg-white dark:bg-dark-200 rounded-lg p-3 shadow border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-primary-500 dark:text-primary-400">
                      {item.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{item.title}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Other Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {otherServices.map((service, index) => (
          <ServiceCard
            key={index + mainServices.length}
            icon={service.icon}
            color={service.color}
            title={service.title}
            description={service.description}
            features={service.features}
            active={activeService === index + mainServices.length}
            onSelect={() => handleServiceSelect(index + mainServices.length)}
            animate={animate}
            index={index + mainServices.length}
          />
        ))}
      </div>
    </div>
  );
}