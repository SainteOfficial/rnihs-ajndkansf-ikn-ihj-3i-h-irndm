import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, Search, ChevronDown, MessageSquare, HelpCircle, Edit, Plus, MoreVertical, ExternalLink, Zap, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function CustomerChatbotsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };

  // Sample chatbots data
  const chatbots = [
    { 
      id: 1, 
      name: 'Website-Assistent', 
      type: 'Chat',
      status: 'Aktiv',
      created: '2025-05-15',
      lastUpdated: '2025-06-01',
      conversations: 347,
      successRate: 92,
      languages: ['Deutsch', 'Englisch']
    },
    { 
      id: 2, 
      name: 'Support-Bot', 
      type: 'Chat',
      status: 'Aktiv',
      created: '2025-05-28',
      lastUpdated: '2025-05-30',
      conversations: 200,
      successRate: 83,
      languages: ['Deutsch']
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
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Kundenportal</span>
          </div>
        </div>
        <nav className="p-4 space-y-1">
          <div className="mb-6">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2 ml-3">Hauptmenü</p>
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/customer/dashboard" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <BarChart size={18} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/customer/chatbots" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                >
                  <MessageSquare size={18} />
                  <span>Meine Chatbots</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/customer/analytics" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <BarChart size={18} />
                  <span>Analysen</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/customer/tickets" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <HelpCircle size={18} />
                  <span>Support-Tickets</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="mb-6">
            <p className="text-xs uppercase text-gray-500 dark:text-gray-400 mb-2 ml-3">Verwaltung</p>
            <ul className="space-y-1">
              <li>
                <Link 
                  to="/customer/billing" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <Users size={18} />
                  <span>Rechnungen</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/customer/settings" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <Settings size={18} />
                  <span>Einstellungen</span>
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
                    placeholder="Chatbots durchsuchen..."
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
                  <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-medium">K</div>
                  <span className="hidden md:inline-block">Kunde</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 p-6">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Meine Chatbots</h1>
            <p className="text-gray-500 dark:text-gray-400">Verwalten Sie Ihre KI-Assistenten</p>
          </header>
          
          {/* Chatbots grid */}
          <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800 mb-8">
            <div className="flex flex-wrap justify-between gap-4 mb-6">
              <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm transition-colors">
                <Plus size={16} />
                <span>Neuer Chatbot</span>
              </button>
              
              <div className="flex flex-wrap items-center gap-3">
                <select className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-sm">
                  <option value="all">Alle Typen</option>
                  <option value="chat">Nur Chat</option>
                  <option value="voice">Nur Voice</option>
                  <option value="both">Chat & Voice</option>
                </select>
                
                <select className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-sm">
                  <option value="all">Alle Status</option>
                  <option value="active">Aktiv</option>
                  <option value="maintenance">Wartung</option>
                  <option value="development">Entwicklung</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {chatbots.map((bot) => (
                <div 
                  key={bot.id}
                  className="bg-gray-50 dark:bg-dark-300 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <Bot size={20} className="text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium">{bot.name}</h3>
                            <p className="text-sm opacity-90">ID: BOT-{bot.id}</p>
                          </div>
                        </div>
                        <div className="flex">
                          <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full shadow-sm ${
                            bot.status === 'Aktiv' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-amber-100 text-amber-800'
                          }`}>
                            {bot.status}
                          </span>
                          <button className="ml-2 text-white/80 hover:text-white">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Typ</p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{bot.type}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Erstellt am</p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{bot.created}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Konversationen</p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{bot.conversations}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Erfolgsrate</p>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{bot.successRate}%</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sprachen</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {bot.languages.map((lang, i) => (
                          <span key={i} className="inline-flex items-center px-2 py-0.5 bg-gray-100 dark:bg-dark-100 rounded-md text-xs text-gray-700 dark:text-gray-300">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                        <Edit size={14} />
                        <span>Bearbeiten</span>
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 text-xs hover:bg-secondary-100 dark:hover:bg-secondary-900/30 transition-colors">
                        <BarChart size={14} />
                        <span>Statistiken</span>
                      </button>
                      <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-xs hover:bg-gray-200 dark:hover:bg-dark-50 transition-colors">
                        <ExternalLink size={14} />
                        <span>Öffnen</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add New Chatbot Card */}
              <div className="bg-white dark:bg-dark-300 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center p-8 min-h-[230px]">
                <div className="rounded-full w-16 h-16 bg-gray-100 dark:bg-dark-200 flex items-center justify-center mb-4">
                  <PlusCircle size={30} className="text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Neuen Chatbot erstellen</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm text-center mb-4">
                  Erstellen Sie einen neuen KI-Assistenten für Ihre Website oder App
                </p>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm transition-colors">
                  <Zap size={16} />
                  <span>Jetzt starten</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Under development notice */}
          <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 p-4 rounded-lg border border-primary-100 dark:border-primary-900/30">
            <div className="flex items-start gap-2">
              <InfoIcon className="mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Entwicklungshinweis</h3>
                <p className="text-sm mt-1">
                  Dieser Kundenbereich ist eine Demo-Version und befindet sich noch in der Entwicklung. 
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

export default CustomerChatbotsPage;