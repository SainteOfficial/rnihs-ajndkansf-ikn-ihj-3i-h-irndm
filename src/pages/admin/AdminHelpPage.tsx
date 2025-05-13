import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, Search, ChevronDown, MessageSquare, HelpCircle, Book, FileText, ExternalLink, Mail, Phone, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '../../components/ui/badge';

function AdminHelpPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };
  
  // Sample FAQs
  const faqs = [
    {
      question: 'Wie erstelle ich einen neuen Chatbot?',
      answer: 'Um einen neuen Chatbot zu erstellen, gehen Sie zur Chatbots-Sektion und klicken Sie auf "Neuer Chatbot". Folgen Sie dann den Anweisungen des Assistenten, um Ihren Chatbot zu konfigurieren.',
      category: 'chatbots'
    },
    {
      question: 'Wie füge ich neue Benutzer hinzu?',
      answer: 'Neue Benutzer können unter "Benutzer" > "Benutzer hinzufügen" angelegt werden. Füllen Sie das Formular aus und weisen Sie die entsprechenden Rollen zu.',
      category: 'users'
    },
    {
      question: 'Wie kann ich die Sprachen eines Chatbots ändern?',
      answer: 'Gehen Sie zur Chatbot-Detailansicht und klicken Sie auf "Bearbeiten". Unter dem Tab "Lokalisierung" können Sie die verfügbaren Sprachen aktivieren oder deaktivieren.',
      category: 'chatbots'
    },
    {
      question: 'Was bedeuten die verschiedenen Benutzerrollen?',
      answer: 'Administrator: Vollzugriff auf alle Funktionen. Support: Kann Tickets bearbeiten und Kundenchats verwalten. Kunde: Kann eigene Chatbots verwalten und auf das Kundenportal zugreifen.',
      category: 'users'
    },
    {
      question: 'Wie kann ich die Datenschutzeinstellungen anpassen?',
      answer: 'Unter "Einstellungen" > "Sicherheit" finden Sie alle Optionen zur Konfiguration der Datenschutz- und Sicherheitseinstellungen des Systems.',
      category: 'security'
    },
  ];
  
  // Sample tutorial videos
  const tutorials = [
    {
      title: 'Erste Schritte im Admin-Portal',
      duration: '5:32',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      category: 'getting-started'
    },
    {
      title: 'Fortgeschrittene Chatbot-Konfiguration',
      duration: '8:15',
      thumbnail: 'https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg',
      category: 'chatbots'
    },
    {
      title: 'Benutzerverwaltung & Rollen',
      duration: '4:47',
      thumbnail: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      category: 'users'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-300 flex">
      {/* Sidebar - Desktop */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-dark-200 shadow-md transition-transform duration-300 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Bot size={24} className="text-primary-600 dark:text-primary-400" />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Admin Portal</span>
          </div>
        </div>
        <nav className="p-4 space-y-1">
          <div className="mb-6">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2 ml-3">Hauptmenü</p>
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/admin/dashboard" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <BarChart size={18} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/users" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <Users size={18} />
                  <span>Benutzer</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/chatbots" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <MessageSquare size={18} />
                  <span>Chatbots</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/admin/settings" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <Settings size={18} />
                  <span>Einstellungen</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2 ml-3">Support</p>
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/admin/help" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                >
                  <HelpCircle size={18} />
                  <span>Hilfe</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors w-full"
            >
              <LogOut size={18} />
              <span>Abmelden</span>
            </button>
          </div>
        </nav>
      </aside>
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Main content */}
      <div className="flex-1 flex flex-col lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white dark:bg-dark-200 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between h-16 px-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-100"
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            
            <div className="flex-1 px-4 flex justify-start lg:ml-6">
              <div className="max-w-lg w-full flex">
                <div className="relative flex-1 hidden md:flex">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search size={16} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-dark-100 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="In der Hilfe suchen..."
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-1 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-100 relative">
                <Bell size={20} />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="relative">
                <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-medium">A</div>
                  <span className="hidden md:inline-block">Admin</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 p-6">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hilfe & Dokumentation</h1>
            <p className="text-gray-500 dark:text-gray-400">Erfahren Sie mehr über die Nutzung des Admin-Portals</p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Book size={18} className="text-primary-500" />
                <span>Dokumentation</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Greifen Sie auf unsere umfassende Dokumentation zu.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <ExternalLink size={14} className="text-primary-500" />
                  <a href="#" className="text-primary-600 dark:text-primary-400 text-sm hover:underline">
                    Vollständige Dokumentation
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink size={14} className="text-primary-500" />
                  <a href="#" className="text-primary-600 dark:text-primary-400 text-sm hover:underline">
                    API-Referenz
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink size={14} className="text-primary-500" />
                  <a href="#" className="text-primary-600 dark:text-primary-400 text-sm hover:underline">
                    Benutzerhandbuch
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink size={14} className="text-primary-500" />
                  <a href="#" className="text-primary-600 dark:text-primary-400 text-sm hover:underline">
                    Chatbot-Konfiguration
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink size={14} className="text-primary-500" />
                  <a href="#" className="text-primary-600 dark:text-primary-400 text-sm hover:underline">
                    Best Practices
                  </a>
                </li>
              </ul>
            </motion.div>
            
            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageSquare size={18} className="text-primary-500" />
                <span>Support</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Kontaktieren Sie unseren Support für weitere Hilfe.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-100 rounded-lg">
                  <Mail size={20} className="text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">E-Mail Support</p>
                    <a href="mailto:support@ki-helpbot.de" className="text-xs text-primary-600 dark:text-primary-400 hover:underline">
                      support@ki-helpbot.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-100 rounded-lg">
                  <Phone size={20} className="text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Telefon Support</p>
                    <a href="tel:+491234567890" className="text-xs text-primary-600 dark:text-primary-400 hover:underline">
                      +49 123 456 7890
                    </a>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      Mo-Fr: 9:00 - 17:00 Uhr
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-100 rounded-lg">
                  <MessageSquare size={20} className="text-primary-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Live-Chat</p>
                    <button className="text-xs text-primary-600 dark:text-primary-400 hover:underline">
                      Chat starten
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Knowledge Base */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText size={18} className="text-primary-500" />
                <span>Wissensdatenbank</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Beliebte Artikel aus unserer Wissensdatenbank.
              </p>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="block p-3 bg-gray-50 dark:bg-dark-100 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Erste Schritte mit dem Admin-Portal</p>
                      <Badge variant="secondary" className="ml-2 text-xs">Neu</Badge>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Lernen Sie die grundlegenden Funktionen des Admin-Portals kennen.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-3 bg-gray-50 dark:bg-dark-100 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Chatbot-Training optimieren</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Tipps zur Verbesserung der Antwortqualität Ihrer Chatbots.
                    </p>
                  </a>
                </li>
                <li>
                  <a href="#" className="block p-3 bg-gray-50 dark:bg-dark-100 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Berechtigungen & Benutzerrollen</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Verstehen und konfigurieren Sie Benutzerberechtigungen.
                    </p>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Tutorials/Videos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Video size={20} className="text-primary-500" />
                <span>Video-Tutorials</span>
              </h2>
              <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
                Alle anzeigen
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                          <Video size={18} className="text-primary-500 ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {tutorial.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <Badge 
                        variant={tutorial.category === 'chatbots' ? 'default' : tutorial.category === 'getting-started' ? 'secondary' : 'outline'}
                        className="mb-2 text-xs"
                      >
                        {tutorial.category === 'chatbots' && 'Chatbots'}
                        {tutorial.category === 'getting-started' && 'Einführung'}
                        {tutorial.category === 'users' && 'Benutzer'}
                      </Badge>
                    </div>
                    <h3 className="font-medium mb-2">{tutorial.title}</h3>
                    <button className="text-sm text-primary-600 dark:text-primary-400 hover:underline">
                      Video ansehen
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
          >
            <h2 className="text-xl font-semibold mb-6">Häufig gestellte Fragen</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details 
                  key={index} 
                  className="group bg-gray-50 dark:bg-dark-300 rounded-lg"
                >
                  <summary className="flex justify-between items-center cursor-pointer p-4 font-medium">
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={faq.category === 'chatbots' ? 'default' : faq.category === 'users' ? 'secondary' : 'outline'}
                        className="hidden sm:inline-flex"
                      >
                        {faq.category}
                      </Badge>
                      <span>{faq.question}</span>
                    </div>
                    <ChevronDown size={16} className="transform group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 pt-0 text-gray-600 dark:text-gray-400 text-sm">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </motion.div>
          
          {/* Under development notice */}
          <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 p-4 rounded-lg border border-primary-100 dark:border-primary-900/30">
            <div className="flex items-start gap-2">
              <InfoIcon className="mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Entwicklungshinweis</h3>
                <p className="text-sm mt-1">
                  Dieser Admin-Bereich ist eine Demo-Version und befindet sich noch in der Entwicklung. 
                  Alle angezeigten Inhalte sind Beispieldaten.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Info icon component
function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export default AdminHelpPage;