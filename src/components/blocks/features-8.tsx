import { Card, CardContent } from '../ui/card';
import { Shield, Users, Bot, LineChart, Zap, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function FeaturesBusiness() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-gray-50 py-12 dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-3">Warum KI für Ihr Unternehmen?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Verbessern Sie Effizienz, Kundenzufriedenheit und Ihr Geschäftsergebnis mit intelligenten KI-Lösungen
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Cost Savings Card */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="p-5 flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <div className="rounded-lg bg-primary-50 dark:bg-primary-900/20 p-2.5 text-primary-600 dark:text-primary-400">
                    <Shield size={24} strokeWidth={1.5} />
                  </div>
                  <motion.span 
                    className="text-2xl font-bold text-primary-600"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    40%
                  </motion.span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Kostenersparnis</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Reduzieren Sie Ihre Personalkosten im Kundenservice durch intelligente Automatisierung
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* 24/7 Availability Card */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <div className="rounded-lg bg-secondary-50 dark:bg-secondary-900/20 p-2.5 text-secondary-600 dark:text-secondary-400">
                    <Clock size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Verfügbarkeit</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Bieten Sie Ihren Kunden rund um die Uhr Support und Service ohne Wartezeiten
                </p>
              </div>
              <div className="mt-auto p-5 pt-0">
                <div className="relative h-12 w-full overflow-hidden">
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-10"
                    initial={{ opacity: 0.7 }}
                  >
                    <svg className="w-full h-full" viewBox="0 0 300 50" preserveAspectRatio="none">
                      <motion.path 
                        d="M0,25 C50,10 100,40 150,25 C200,10 250,40 300,25 L300,50 L0,50 Z"
                        fill="url(#availability-gradient)"
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      />
                    </svg>
                    <defs>
                      <linearGradient id="availability-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(20, 184, 166, 0.3)" />
                        <stop offset="50%" stopColor="rgba(14, 165, 233, 0.3)" />
                        <stop offset="100%" stopColor="rgba(20, 184, 166, 0.3)" />
                      </linearGradient>
                    </defs>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Customer Satisfaction Card */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="p-5 flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <div className="rounded-lg bg-accent-50 dark:bg-accent-900/20 p-2.5 text-accent-600 dark:text-accent-400">
                    <Users size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Kundenzufriedenheit</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Steigern Sie die Kundenerfahrung durch intelligente und personalisierte Interaktionen
                </p>
              </div>
              <div className="mt-auto p-3 pt-0 flex items-center justify-center">
                <div className="flex gap-1">
                  <motion.div 
                    className="size-7 flex items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-accent-600 dark:text-accent-400 text-xs">A+</span>
                  </motion.div>
                  <motion.div 
                    className="size-7 flex items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Bot size={14} className="text-accent-600 dark:text-accent-400" />
                  </motion.div>
                  <motion.div 
                    className="size-7 flex items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Zap size={14} className="text-accent-600 dark:text-accent-400" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scalability Card */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="p-5 flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <div className="rounded-lg bg-primary-50 dark:bg-primary-900/20 p-2.5 text-primary-600 dark:text-primary-400">
                    <LineChart size={24} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Skalierbarkeit</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Bewältigen Sie Spitzenzeiten und wachsendes Anfragevolumen ohne zusätzliches Personal
                </p>
              </div>
              <div className="mt-auto p-3 pt-0 flex justify-center">
                <div className="relative h-10 w-32">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute bottom-0 bg-primary-500 rounded-sm opacity-70"
                      style={{
                        height: `${i * 15}%`,
                        width: '15%',
                        left: `${(i-1) * 20}%`
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${i * 15}%` }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* ROI and CTA Section */}
        <div className="mt-5 bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 p-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex-1">
              <div className="flex gap-3 items-center mb-3">
                <div className="rounded-lg bg-primary-50 dark:bg-primary-900/20 p-2.5 text-primary-600 dark:text-primary-400">
                  <Bot size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold">KI-Helpbot</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                ROI von bis zu <span className="font-bold text-primary-600 dark:text-primary-400">300%</span> im ersten Jahr durch reduzierte Personalkosten und verbesserte Kundenbindung.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/demo" 
                  className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg text-sm shadow-sm hover:shadow-primary-500/25 transition-all duration-300"
                >
                  Demo starten
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center gap-2 px-5 py-2 border border-primary-500 text-primary-600 dark:text-primary-400 font-medium rounded-lg text-sm hover:bg-primary-500/10 transition-colors duration-300"
                >
                  Kontakt aufnehmen
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mt-5">
          {/* Faster Response Card */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="rounded-lg bg-primary-50 dark:bg-primary-900/20 p-2.5 text-primary-600 dark:text-primary-400">
                  <Zap size={24} strokeWidth={1.5} />
                </div>
                <div className="rounded-full px-2.5 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300">
                  Reaktionszeit
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Schnellere Antworten</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Sofortige Reaktion auf Kundenanfragen ohne Wartezeiten
              </p>

              <div className="mt-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-500 dark:text-gray-400">KI-Helpbot</span>
                  <span className="text-primary-600 dark:text-primary-400">0,2s</span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                  <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-gray-500 dark:text-gray-400">Klassischer Support</span>
                  <span className="text-gray-600 dark:text-gray-300">3,5min</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Data Analytics Card */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="rounded-lg bg-secondary-50 dark:bg-secondary-900/20 p-2.5 text-secondary-600 dark:text-secondary-400">
                  <LineChart size={24} strokeWidth={1.5} />
                </div>
                <div className="rounded-full px-2.5 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-900/30 text-secondary-800 dark:text-secondary-300">
                  Analyse
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Datengestützte Entscheidungen</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Gewinnen Sie wertvolle Erkenntnisse aus Ihren Kundeninteraktionen
              </p>

              <div className="mt-4 grid grid-cols-4 gap-1">
                {[65, 80, 45, 90].map((value, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="relative w-full h-16 flex items-end mb-1">
                      <motion.div
                        className="w-5/6 mx-auto bg-secondary-500 rounded-sm"
                        style={{ height: `${value}%` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${value}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Q{i+1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Easy Integration Card */}
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="rounded-lg bg-accent-50 dark:bg-accent-900/20 p-2.5 text-accent-600 dark:text-accent-400">
                  <Bot size={24} strokeWidth={1.5} />
                </div>
                <div className="rounded-full px-2.5 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-900/30 text-accent-800 dark:text-accent-300">
                  Integration
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Einfache Einrichtung</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Schnelle Integration in Ihre bestehenden Systeme ohne IT-Aufwand
              </p>

              <div className="mt-4 flex justify-center">
                <div className="relative w-36 h-12">
                  <motion.div
                    className="absolute left-0 top-0 w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900/20 flex items-center justify-center"
                    animate={{ x: [0, 50, 100], opacity: [1, 0.8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Bot size={16} className="text-accent-600 dark:text-accent-400" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute right-0 top-0 w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900/20 flex items-center justify-center"
                    animate={{ x: [0, -50, -100], opacity: [1, 0.8, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Bot size={16} className="text-accent-600 dark:text-accent-400" />
                  </motion.div>
                  
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900/20 flex items-center justify-center">
                    <Users size={20} className="text-accent-600 dark:text-accent-400" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}