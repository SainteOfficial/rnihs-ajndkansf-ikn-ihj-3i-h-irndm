import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare, Globe, Clock, ChevronRight, ExternalLink, CheckCircle, AlertTriangle, CheckCircle2, Bot } from 'lucide-react';
import { Button } from '../components/ui/button';
import SEO from '../components/SEO';

function ContactPage() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);
  
  // SEO schema data for contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "KI-Helpbot Kontakt - Sprechen Sie mit uns über Ihre KI-Lösung",
    "description": "Kontaktieren Sie KI-Helpbot für eine Beratung zu Ihren individuellen KI-Kommunikationsbedürfnissen. Unsere Experten helfen Ihnen mit maßgeschneiderten Chatbot- und Voicebot-Lösungen.",
    "mainEntity": {
      "@type": "Organization",
      "name": "KI-Helpbot GmbH",
      "telephone": "+49 123 456 7890",
      "email": "info@ki-helpbot.de",
      "url": "https://www.ki-helpbot.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Musterstraße 123",
        "addressLocality": "Berlin",
        "postalCode": "10115",
        "addressCountry": "DE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+49 123 456 7890",
        "contactType": "customer service",
        "availableLanguage": ["German", "English"]
      }
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error for this field when user types
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Name ist erforderlich';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Ungültige E-Mail-Adresse';
    }
    
    // Validate subject
    if (!formData.subject) {
      errors.subject = 'Betreff ist erforderlich';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Nachricht ist erforderlich';
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Nachricht muss mindestens 20 Zeichen enthalten';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Scroll to form
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24">
      <SEO 
        title="Kontakt - Beratung zu KI-Chatbots und Voicebots"
        description="Kontaktieren Sie KI-Helpbot für eine persönliche Beratung zu maßgeschneiderten KI-Chatbots und Voicebots. Unsere Experten helfen Ihnen, die perfekte Kommunikationslösung für Ihr Unternehmen zu finden."
        keywords="KI-Helpbot Kontakt, KI-Beratung, Chatbot Implementierung, Voicebot Beratung, KI-Kommunikationslösungen, Kundenkommunikation optimieren, Kundenservice verbessern, KI-Experten, Berlin KI-Unternehmen"
        schemaData={contactSchema}
      />

      {/* Hero section - Enhanced */}
      <section className="relative bg-gradient-to-b from-gray-100 to-white dark:from-dark-300 dark:to-dark-200 py-16 md:py-24 overflow-hidden">
        {/* Animated background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary-400/10 blur-2xl"
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
            className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-secondary-400/10 blur-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{
              duration: 10,
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
            <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>

          {/* Added contact cards for quick access */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="rounded-full bg-primary-100 dark:bg-primary-900/20 p-3 w-14 h-14 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 mx-auto">
                <Phone size={24} />
              </div>
              <h3 className="font-semibold text-xl text-center mb-2">Telefonisch</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                Sprechen Sie direkt mit einem unserer Experten
              </p>
              <div className="text-center">
                <a 
                  href="tel:+491234567890" 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-50 dark:bg-primary-900/10 text-primary-700 dark:text-primary-400 font-medium hover:bg-primary-100 dark:hover:bg-primary-900/20 transition-colors"
                >
                  +49 123 456 7890
                </a>
              </div>
              <div className="text-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                Mo-Fr: 9:00 - 17:00 Uhr
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="rounded-full bg-secondary-100 dark:bg-secondary-900/20 p-3 w-14 h-14 flex items-center justify-center text-secondary-600 dark:text-secondary-400 mb-4 mx-auto">
                <Mail size={24} />
              </div>
              <h3 className="font-semibold text-xl text-center mb-2">E-Mail</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                Senden Sie uns eine Nachricht
              </p>
              <div className="text-center">
                <a 
                  href="mailto:info@ki-helpbot.de" 
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-secondary-50 dark:bg-secondary-900/10 text-secondary-700 dark:text-secondary-400 font-medium hover:bg-secondary-100 dark:hover:bg-secondary-900/20 transition-colors"
                >
                  info@ki-helpbot.de
                </a>
              </div>
              <div className="text-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                Antwort innerhalb von 24h
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-md p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="rounded-full bg-accent-100 dark:bg-accent-900/20 p-3 w-14 h-14 flex items-center justify-center text-accent-600 dark:text-accent-400 mb-4 mx-auto">
                <Calendar size={24} />
              </div>
              <h3 className="font-semibold text-xl text-center mb-2">Termin buchen</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
                Vereinbaren Sie einen Beratungstermin
              </p>
              <div className="text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent-50 dark:bg-accent-900/10 text-accent-700 dark:text-accent-400 font-medium hover:bg-accent-100 dark:hover:bg-accent-900/20 transition-colors"
                >
                  Kalender öffnen
                </a>
              </div>
              <div className="text-center mt-3 text-sm text-gray-500 dark:text-gray-400">
                Online oder telefonisch
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form - Enhanced with validation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              ref={formRef}
              className="relative"
            >
              <div className="card shadow-lg">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Send size={20} className="text-primary-500" />
                  Schreiben Sie uns
                </h2>
                
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 p-6 rounded-lg mb-6 text-center"
                  >
                    <CheckCircle2 size={50} className="mx-auto mb-4 text-green-500" />
                    <h3 className="text-xl font-semibold mb-2">Nachricht gesendet!</h3>
                    <p>{t('contact.form.success')}</p>
                    <Button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-4 bg-green-600 hover:bg-green-700"
                    >
                      Neue Nachricht senden
                    </Button>
                  </motion.div>
                ) : formStatus === 'error' ? (
                  <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-4 rounded-lg mb-6">
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={20} className="text-red-500" />
                      <p className="font-medium">{t('contact.form.error')}</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {t('contact.form.name')}*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-lg border ${formErrors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-100 text-gray-900 dark:text-white`}
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-sm text-red-500">
                            {formErrors.name}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {t('contact.form.email')}*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-lg border ${formErrors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-100 text-gray-900 dark:text-white`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-sm text-red-500">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {t('contact.form.phone')}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-100 text-gray-900 dark:text-white"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          {t('contact.form.company')}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-100 text-gray-900 dark:text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Betreff*
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2.5 rounded-lg border ${formErrors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-100 text-gray-900 dark:text-white`}
                      >
                        <option value="">Bitte auswählen</option>
                        <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
                        <option value="Produktberatung">Produktberatung</option>
                        <option value="Preisanfrage">Preisanfrage</option>
                        <option value="Demo-Anfrage">Demo-Anfrage</option>
                        <option value="Technischer Support">Technischer Support</option>
                        <option value="Karriere">Karriere</option>
                      </select>
                      {formErrors.subject && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.subject}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        {t('contact.form.message')}*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-2.5 rounded-lg border ${formErrors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-700'} focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white dark:bg-dark-100 text-gray-900 dark:text-white resize-none`}
                      />
                      {formErrors.message && (
                        <p className="mt-1 text-sm text-red-500">
                          {formErrors.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        required
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        Ich habe die <a href="/datenschutz" className="text-primary-600 dark:text-primary-400 hover:underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.
                      </label>
                    </div>
                    
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full h-12 flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            {t('contact.form.submit')}
                          </>
                        )}
                      </Button>
                      <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400">
                        Wir werden Ihre Daten niemals an Dritte weitergeben. Mit * markierte Felder sind Pflichtfelder.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Contact Info - Enhanced with more details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="card shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Kontaktdaten</h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary-50 dark:bg-primary-900/30 p-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Hauptsitz</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-1">
                        Musterstraße 123<br />
                        10115 Berlin<br />
                        Deutschland
                      </p>
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
                      >
                        Auf Google Maps anzeigen
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary-50 dark:bg-primary-900/30 p-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Telefon</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Allgemeine Anfragen</p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <a href="tel:+491234567890" className="hover:text-primary-600 dark:hover:text-primary-400">
                              +49 123 456 7890
                            </a>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Technischer Support</p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <a href="tel:+491234567891" className="hover:text-primary-600 dark:hover:text-primary-400">
                              +49 123 456 7891
                            </a>
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                          <Clock size={14} />
                          <span>Mo-Fr: 9:00 - 17:00 Uhr</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary-50 dark:bg-primary-900/30 p-3 text-primary-600 dark:text-primary-400 flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">E-Mail</h3>
                      <div className="space-y-2">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Allgemeine Anfragen</p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <a href="mailto:info@ki-helpbot.de" className="hover:text-primary-600 dark:hover:text-primary-400">
                              info@ki-helpbot.de
                            </a>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Support</p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <a href="mailto:support@ki-helpbot.de" className="hover:text-primary-600 dark:hover:text-primary-400">
                              support@ki-helpbot.de
                            </a>
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Karriere</p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <a href="mailto:karriere@ki-helpbot.de" className="hover:text-primary-600 dark:hover:text-primary-400">
                              karriere@ki-helpbot.de
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="card shadow-lg overflow-hidden">
                <h2 className="text-2xl font-semibold mb-2">Standort</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Besuchen Sie uns im Herzen Berlins</p>
                
                <div className="relative rounded-lg overflow-hidden h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6890225938985!2d13.382380876934081!3d52.531028072058206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e7f8a6a01b%3A0x2946c1d7f53f04e3!2sInvalidenstra%C3%9Fe%2C%20Berlin!5e0!3m2!1sen!2sde!4v1683878554559!5m2!1sen!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KI-Helpbot Office Location"
                  ></iframe>
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
                  
                  <div className="absolute bottom-4 left-4 bg-white dark:bg-dark-200 shadow-md rounded-lg p-3 max-w-xs">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={16} className="text-primary-600" />
                      <h3 className="font-medium text-sm">KI-Helpbot GmbH</h3>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Musterstraße 123, 10115 Berlin
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Weitere Kontaktmöglichkeiten</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors"
                  >
                    <div className="rounded-full bg-primary-50 dark:bg-primary-900/30 p-2 text-primary-600 dark:text-primary-400">
                      <MessageSquare size={20} />
                    </div>
                    <span className="font-medium">{t('contact.whatsapp')}</span>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors"
                  >
                    <div className="rounded-full bg-primary-50 dark:bg-primary-900/30 p-2 text-primary-600 dark:text-primary-400">
                      <Calendar size={20} />
                    </div>
                    <span className="font-medium">{t('contact.calendly')}</span>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors"
                  >
                    <div className="rounded-full bg-primary-50 dark:bg-primary-900/30 p-2 text-primary-600 dark:text-primary-400">
                      <Globe size={20} />
                    </div>
                    <span className="font-medium">Online-Demo</span>
                  </a>
                  
                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors"
                  >
                    <div className="rounded-full bg-primary-50 dark:bg-primary-900/30 p-2 text-primary-600 dark:text-primary-400">
                      <Bot size={20} />
                    </div>
                    <span className="font-medium">Chatbot testen</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white dark:bg-dark-200">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Antworten auf die wichtigsten Fragen zu unserem Kontaktprozess
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-dark-300 rounded-lg p-6"
            >
              <h3 className="font-semibold text-lg mb-3">Wie schnell erhalte ich eine Antwort?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden zu beantworten. Bei dringenden Anfragen empfehlen wir Ihnen, uns telefonisch zu kontaktieren.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-dark-300 rounded-lg p-6"
            >
              <h3 className="font-semibold text-lg mb-3">Kann ich eine persönliche Demo erhalten?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ja, wir bieten persönliche Produktdemonstrationen an. Sie können einen Termin über unser Kalendersystem buchen oder direkt über das Kontaktformular anfragen.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 dark:bg-dark-300 rounded-lg p-6"
            >
              <h3 className="font-semibold text-lg mb-3">Wie läuft der Beratungsprozess ab?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nach Ihrer Kontaktaufnahme vereinbaren wir ein erstes Gespräch, um Ihre Anforderungen zu verstehen. Anschließend erarbeiten wir ein individuelles Angebot und präsentieren Ihnen eine maßgeschneiderte Lösung.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 dark:bg-dark-300 rounded-lg p-6"
            >
              <h3 className="font-semibold text-lg mb-3">Erhalte ich Unterstützung bei der Implementierung?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutt. Unser Team begleitet Sie während des gesamten Implementierungsprozesses und steht auch danach für Support und Optimierung zur Verfügung.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA section */}
      <section className="relative bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-700 text-white py-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Bereit für den nächsten Schritt?</h2>
              <p className="text-lg opacity-90 mb-0">
                Kontaktieren Sie uns noch heute und entdecken Sie, wie KI-Helpbot Ihre Kundenkommunikation revolutionieren kann.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/demo" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Bot size={20} />
                  Demo starten
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="tel:+491234567890" 
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <Phone size={20} />
                  Jetzt anrufen
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-sm">Schnelle Reaktionszeit</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-sm">Persönliche Beratung</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle size={16} className="text-green-400" />
              <span className="text-sm">Maßgeschneiderte Lösungen</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;