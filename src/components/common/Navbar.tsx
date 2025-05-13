import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Languages, 
  ChevronDown, 
  MessageSquare, 
  Mic, 
  Database, 
  BarChart,
  Car, 
  ShoppingCart, 
  Hammer, 
  Headset,
  Users,
  Lightbulb,
  Target,
  Mail
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useI18n } from '../../contexts/I18nContext';
import SearchBar from './SearchBar';

function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const langDropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideDropdowns = Object.values(dropdownRefs.current).every(ref => 
        ref && !ref.contains(event.target as Node)
      );
      
      if (isOutsideDropdowns) {
        setActiveDropdown(null);
      }
      
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdowns when clicking a link or navigating
  useEffect(() => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navigationLinks = [
    { 
      name: t('navigation.home'), 
      path: '/',
      icon: null
    },
    { 
      name: t('navigation.services'), 
      path: '/leistungen',
      icon: null,
      dropdown: [
        { name: 'Chatbots', path: '/leistungen#chatbots', icon: <MessageSquare size={16} className="text-primary-500" /> },
        { name: 'Voicebots', path: '/leistungen#voicebots', icon: <Mic size={16} className="text-secondary-500" /> },
        { name: 'CRM-Integration', path: '/leistungen#crm', icon: <Database size={16} className="text-accent-500" /> },
        { name: 'Datenanalyse', path: '/leistungen#analyse', icon: <BarChart size={16} className="text-primary-500" /> }
      ]
    },
    { 
      name: t('navigation.solutions'), 
      path: '/branchenloesungen',
      icon: null,
      dropdown: [
        { name: 'Autohaus', path: '/branchenloesungen#autohaus', icon: <Car size={16} className="text-primary-500" /> },
        { name: 'E-Commerce', path: '/branchenloesungen#ecommerce', icon: <ShoppingCart size={16} className="text-secondary-500" /> },
        { name: 'Handwerk', path: '/branchenloesungen#handwerk', icon: <Hammer size={16} className="text-accent-500" /> },
        { name: 'Kundenservice', path: '/branchenloesungen#service', icon: <Headset size={16} className="text-primary-500" /> }
      ]
    },
    { 
      name: t('navigation.demo'), 
      path: '/demo',
      icon: null
    },
    { 
      name: t('navigation.about'), 
      path: '/ueber-uns',
      icon: null,
      dropdown: [
        { name: 'Team', path: '/ueber-uns#team', icon: <Users size={16} className="text-primary-500" /> },
        { name: 'Mission', path: '/ueber-uns#mission', icon: <Lightbulb size={16} className="text-secondary-500" /> },
        { name: 'Vision', path: '/ueber-uns#vision', icon: <Target size={16} className="text-accent-500" /> }
      ]
    }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-dark-200/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-3'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-1.5 group" 
          onClick={closeMenu}
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white"
          >
            <Bot size={18} />
          </motion.div>
          <span className="text-lg font-display font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            KI-Helpbot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center">
            {navigationLinks.map((link, index) => (
              <div 
                key={link.path} 
                className="relative" 
                ref={el => {
                  if (link.dropdown) {
                    dropdownRefs.current[link.name] = el;
                  }
                }}
              >
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1 px-3 py-2 ${
                        location.pathname === link.path || activeDropdown === link.name
                          ? 'text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                      aria-expanded={activeDropdown === link.name}
                    >
                      {link.name}
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: 'easeOut' }}
                          className="absolute left-1/2 -translate-x-1/2 mt-1 w-56 rounded-lg bg-white dark:bg-dark-100 shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden z-50"
                          style={{ 
                            transformOrigin: 'top center' 
                          }}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-white dark:bg-dark-100 rotate-45 -mt-1.25 border-t border-l border-gray-100 dark:border-gray-800"></div>
                          
                          <div className="relative bg-white dark:bg-dark-100 py-1.5 z-10">
                            {link.dropdown.map((item, idx) => (
                              <Link
                                key={idx}
                                to={item.path}
                                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                              >
                                {item.icon && (
                                  <span className="w-4 h-4 flex items-center justify-center">
                                    {item.icon}
                                  </span>
                                )}
                                <span>{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 ${
                      location.pathname === link.path
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
        </div>

          {/* Theme Toggle */}
          <div className="ml-2">
          <button
            onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          </div>

          {/* Search */}
          <div className="ml-2">
            <SearchBar />
          </div>
          
          {/* Language Select */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={toggleLanguageMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
              aria-label="Change language"
            >
              <Languages size={18} className="text-gray-600 dark:text-gray-400" />
            </button>

            <AnimatePresence>
              {isLanguageMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute right-0 mt-1 w-40 rounded-lg shadow-lg bg-white dark:bg-dark-100 border border-gray-100 dark:border-gray-800 overflow-hidden"
                  style={{ transformOrigin: 'top right' }}
                >
                  <div className="absolute top-0 right-4 w-2.5 h-2.5 bg-white dark:bg-dark-100 rotate-45 -mt-1.25 border-t border-l border-gray-100 dark:border-gray-800"></div>
                  
                  <div className="relative py-1 z-10">
                    <button
                      onClick={() => {
                        changeLanguage('de');
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`flex items-center w-full gap-2 text-left px-4 py-2 text-sm ${
                        language === 'de'
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
                      }`}
                    >
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 dark:bg-dark-200 text-xs font-medium">DE</span>
                      {t('language.de')}
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('en');
                        setIsLanguageMenuOpen(false);
                      }}
                      className={`flex items-center w-full gap-2 text-left px-4 py-2 text-sm ${
                        language === 'en'
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
                      }`}
                    >
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 dark:bg-dark-200 text-xs font-medium">EN</span>
                      {t('language.en')}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/kontakt" 
            className="ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-medium rounded-full shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Mail size={14} className="animate-pulse" />
            Kontaktieren Sie uns
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
            aria-label={t('theme.toggle')}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-gray-400" />
            ) : (
              <Moon size={18} className="text-gray-600" />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-1.5 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-dark-200/95 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800"
          >
            <div className="container-custom py-3 space-y-0.5 max-h-[70vh] overflow-y-auto">
              {navigationLinks.map((link) => (
                <div key={link.path}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(link.name)}
                        className={`flex justify-between items-center w-full py-2 px-3 rounded-md text-sm font-medium ${
                          location.pathname === link.path || activeDropdown === link.name
                            ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
                        }`}
                      >
                        {link.name}
                        <ChevronDown 
                          size={14} 
                          className={`transition-transform duration-300 ${
                            activeDropdown === link.name ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="ml-4 mt-0.5 space-y-0.5 border-l-2 border-gray-200 dark:border-gray-700">
                              {link.dropdown.map((item, idx) => (
                                <Link
                                  key={idx}
                                  to={item.path}
                                  className="flex items-center gap-2 py-1.5 pl-3 pr-3 border-l-2 -ml-[2px] border-transparent hover:border-primary-500 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                                  onClick={closeMenu}
                                >
                                  {item.icon && (
                                    <span className="w-4 h-4 flex items-center justify-center">
                                      {item.icon}
                                    </span>
                                  )}
                                  <span>{item.name}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`flex items-center gap-2 py-2 px-3 rounded-md text-sm font-medium ${
                        location.pathname === link.path
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
                      }`}
                      onClick={closeMenu}
                    >
                      {link.icon && link.icon}
                      <span>{link.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => {
                    changeLanguage(language === 'de' ? 'en' : 'de');
                  }}
                  className="flex items-center gap-2 py-2 px-3 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100 w-full"
                >
                  <Languages size={16} />
                  {language === 'de' ? t('language.en') : t('language.de')}
                </button>
                <Link 
                  to="/kontakt"
                  className="block w-full text-center mt-3 py-2 px-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-md"
                  onClick={closeMenu}
                >
                  <span className="flex items-center justify-center gap-1.5">
                    <Mail size={16} />
                    Kontaktieren Sie uns
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;