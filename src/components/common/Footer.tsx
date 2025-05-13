import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Bot, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Linkedin, Lock, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Footer() {
  const { t } = useTranslation();
  const [showAdminTooltip, setShowAdminTooltip] = useState(false);
  const [showCustomerTooltip, setShowCustomerTooltip] = useState(false);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Bot size={32} className="text-primary-500" />
              <span className="text-2xl font-display font-bold">KI-Helpbot</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Intelligente KI-Lösungen für die moderne Kundenkommunikation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-500 transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-gray-400 hover:text-primary-500 transition-colors">
                  {t('navigation.services')}
                </Link>
              </li>
              <li>
                <Link to="/branchenloesungen" className="text-gray-400 hover:text-primary-500 transition-colors">
                  {t('navigation.solutions')}
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-400 hover:text-primary-500 transition-colors">
                  {t('navigation.demo')}
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-gray-400 hover:text-primary-500 transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Musterstraße 123<br />10115 Berlin<br />Deutschland</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <a href="tel:+491234567890" className="text-gray-400 hover:text-primary-500 transition-colors">
                  +49 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <a href="mailto:info@ki-helpbot.de" className="text-gray-400 hover:text-primary-500 transition-colors">
                  info@ki-helpbot.de
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Abonnieren Sie unseren Newsletter für die neuesten Updates und Angebote.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary-500"
                required
              />
              <button type="submit" className="btn btn-primary">
                Abonnieren
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            {t('footer.company')}
            <span 
              className="relative inline-block"
              onMouseEnter={() => setShowAdminTooltip(true)}
              onMouseLeave={() => setShowAdminTooltip(false)}
            >
              <Link 
                to="/admin/login" 
                className="ml-1 text-gray-500 hover:text-gray-400 opacity-50" 
                aria-label="Admin-Bereich"
              >
                .
              </Link>
              
              <AnimatePresence>
                {showAdminTooltip && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-gray-800 rounded-md shadow-lg py-1.5 px-2.5 text-xs text-white z-50"
                  >
                    <div className="flex items-center gap-1 justify-center">
                      <Lock size={12} />
                      <span>Admin-Login</span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-gray-800"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
            <span 
              className="relative inline-block"
              onMouseEnter={() => setShowCustomerTooltip(true)}
              onMouseLeave={() => setShowCustomerTooltip(false)}
            >
              <Link 
                to="/customer/login" 
                className="ml-1 text-gray-500 hover:text-gray-400 opacity-50" 
                aria-label="Kunden-Bereich"
              >
                ..
              </Link>
              
              <AnimatePresence>
                {showCustomerTooltip && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-32 bg-gray-800 rounded-md shadow-lg py-1.5 px-2.5 text-xs text-white z-50"
                  >
                    <div className="flex items-center gap-1 justify-center">
                      <Bot size={12} />
                      <span>Kunden-Login</span>
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2.5 h-2.5 bg-gray-800"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/datenschutz" className="text-gray-500 hover:text-primary-500 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/impressum" className="text-gray-500 hover:text-primary-500 transition-colors">
              {t('footer.imprint')}
            </Link>
            <Link to="/agb" className="text-gray-500 hover:text-primary-500 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;