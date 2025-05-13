import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, Search, ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function AdminDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [resetRequestSuccess, setResetRequestSuccess] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  
  const handleLogout = () => {
    // In a real app, clear auth tokens/cookies
    navigate('/');
  };
  
  // Funktion zum Zurücksetzen der Demo-Anfragen
  const handleResetDemoRequests = () => {
    setIsResetting(true);
    
    // Zurücksetzen des Anfragenzählers in localStorage
    try {
      localStorage.removeItem('ki-helpbot-requests');
      localStorage.removeItem('ki-helpbot-requests-date');
      
      // Erfolg anzeigen
      setResetRequestSuccess(true);
      
      // Erfolgsbenachrichtigung nach 3 Sekunden ausblenden
      setTimeout(() => {
        setResetRequestSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Fehler beim Zurücksetzen der Demo-Anfragen:', error);
    } finally {
      setIsResetting(false);
    }
  };
  
  // Statistics data
  const stats = [
    { title: 'Aktive Nutzer', value: '423', change: '+12%', color: 'primary' },
    { title: 'Offene Tickets', value: '17', change: '-5%', color: 'secondary' },
    { title: 'Neue Anfragen', value: '86', change: '+32%', color: 'accent' },
    { title: 'Chatbot-Interaktionen', value: '2.347', change: '+18%', color: 'primary' },
  ];
  
  // Sample recent activity data
  const recentActivity = [
    { user: 'Max Müller', action: 'hat sich angemeldet', time: 'Vor 5 Minuten', icon: <Users size={16} className="text-primary-500" /> },
    { user: 'Support-Bot', action: 'hat 42 Anfragen bearbeitet', time: 'Vor 15 Minuten', icon: <Bot size={16} className="text-secondary-500" /> },
    { user: 'Sarah Schmidt', action: 'hat einen neuen Kunden hinzugefügt', time: 'Vor 1 Stunde', icon: <Users size={16} className="text-accent-500" /> },
    { user: 'Thomas Weber', action: 'hat die Chatbot-Einstellungen geändert', time: 'Vor 3 Stunden', icon: <Settings size={16} className="text-primary-500" /> },
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
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
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
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
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
                    placeholder="Suchen..."
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Willkommen im Admin-Portal von KI-Helpbot</p>
          </header>
          
          {/* Demo Reset Button */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Demo-Verwaltung</h2>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Setzen Sie die Demo-Anfragen zurück, um Benutzern wieder Zugriff auf die Demo zu ermöglichen.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Dieser Vorgang löscht den Anfragenzähler für alle Benutzer.
                  </p>
                </div>
                <button
                  onClick={handleResetDemoRequests}
                  disabled={isResetting}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isResetting 
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' 
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {isResetting ? 'Wird zurückgesetzt...' : 'Demo-Anfragen zurücksetzen'}
                </button>
              </div>
              
              {/* Erfolgsbenachrichtigung */}
              {resetRequestSuccess && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-green-700 dark:text-green-300"
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p>Demo-Anfragen wurden erfolgreich zurückgesetzt!</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          {/* Stats cards */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {stats.map((stat, index) => {
              const colorClass = stat.color === 'primary' 
                ? 'text-primary-600 dark:text-primary-400' 
                : stat.color === 'secondary'
                  ? 'text-secondary-600 dark:text-secondary-400'
                  : 'text-accent-600 dark:text-accent-400';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
                >
                  <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                  <div className="flex justify-between items-end">
                    <p className={`text-3xl font-bold ${colorClass}`}>{stat.value}</p>
                    <div className="text-sm text-green-600 dark:text-green-400 flex items-center">
                      {stat.change.startsWith('+') ? (
                        <span>↑ {stat.change}</span>
                      ) : (
                        <span>↓ {stat.change}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Content area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent activity */}
            <motion.div 
              className="lg:col-span-2 bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-semibold mb-4">Neueste Aktivitäten</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0">
                    <div className="mt-1.5 w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center">
                      {activity.icon}
                    </div>
                    <div>
                      <p className="text-gray-700 dark:text-gray-300">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Quick access */}
            <motion.div 
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4">Schnellzugriff</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-gray-50 dark:bg-dark-100 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors">
                  <Users size={24} className="mx-auto mb-2 text-primary-500" />
                  <span className="text-sm font-medium">Benutzer verwalten</span>
                </button>
                <button className="p-4 bg-gray-50 dark:bg-dark-100 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors">
                  <MessageSquare size={24} className="mx-auto mb-2 text-secondary-500" />
                  <span className="text-sm font-medium">Chatbot-Konfiguration</span>
                </button>
                <button className="p-4 bg-gray-50 dark:bg-dark-100 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors">
                  <BarChart size={24} className="mx-auto mb-2 text-accent-500" />
                  <span className="text-sm font-medium">Berichte ansehen</span>
                </button>
                <button className="p-4 bg-gray-50 dark:bg-dark-100 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-dark-300 transition-colors">
                  <Settings size={24} className="mx-auto mb-2 text-gray-500" />
                  <span className="text-sm font-medium">Einstellungen</span>
                </button>
              </div>
            </motion.div>
          </div>
          
          {/* Under development notice */}
          <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 p-4 rounded-lg border border-primary-100 dark:border-primary-900/30">
            <div className="flex items-start gap-2">
              <InfoIcon className="mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Entwicklungshinweis</h3>
                <p className="text-sm mt-1">
                  Dieser Admin-Bereich ist eine Demo-Version und befindet sich noch in der Entwicklung. 
                  Alle angezeigten Daten sind Beispieldaten.
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

export default AdminDashboardPage;