import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, Search, ChevronDown, MessageSquare, HelpCircle, Calendar, Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

function CustomerDashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // In a real app, clear auth tokens/cookies
    navigate('/');
  };
  
  // Statistics data
  const stats = [
    { title: 'Aktive Chatbots', value: '2', change: '+1', color: 'primary' },
    { title: 'Konversationen', value: '547', change: '+32%', color: 'secondary' },
    { title: 'Erfolgsrate', value: '87%', change: '+5%', color: 'accent' },
    { title: 'Offene Tickets', value: '3', change: '-2', color: 'primary' },
  ];
  
  // Sample recent activity data
  const recentActivity = [
    { user: 'Chatbot #1', action: 'hat 42 Anfragen bearbeitet', time: 'Vor 5 Minuten', icon: <Bot size={16} className="text-primary-500" /> },
    { user: 'System', action: 'hat ein Backup erstellt', time: 'Vor 2 Stunden', icon: <Download size={16} className="text-secondary-500" /> },
    { user: 'Support', action: 'hat auf Ihr Ticket geantwortet', time: 'Vor 1 Tag', icon: <MessageSquare size={16} className="text-accent-500" /> },
    { user: 'Chatbot #2', action: 'wurde aktualisiert', time: 'Vor 2 Tagen', icon: <Bot size={16} className="text-primary-500" /> },
  ];

  const chatbots = [
    { id: 1, name: 'Website-Assistent', status: 'aktiv', conversations: 347, successRate: '92%' },
    { id: 2, name: 'Support-Bot', status: 'aktiv', conversations: 200, successRate: '83%' },
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
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                >
                  <BarChart size={18} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/customer/chatbots" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
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
                  <FileText size={18} />
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
                    placeholder="In Chats suchen..."
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400">Willkommen im Kundenportal von KI-Helpbot</p>
          </header>
          
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
                    <div className={`text-sm ${stat.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-amber-600 dark:text-amber-400'} flex items-center`}>
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
              <div className="mt-4 text-center">
                <button className="text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline">
                  Alle Aktivitäten anzeigen
                </button>
              </div>
            </motion.div>
            
            {/* Upcoming */}
            <motion.div 
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-4">Kommende Ereignisse</h2>
              <div className="space-y-4">
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border border-primary-100 dark:border-primary-800/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={18} className="text-primary-600 dark:text-primary-400" />
                    <h3 className="font-medium text-primary-800 dark:text-primary-300">Wartungsfenster</h3>
                  </div>
                  <p className="text-sm text-primary-700/80 dark:text-primary-300/80 mb-2">
                    Geplante Wartung am System - minimale Auswirkungen erwartet.
                  </p>
                  <p className="text-xs text-primary-600/70 dark:text-primary-400/70">
                    15. Juni 2025, 03:00 - 04:00 Uhr
                  </p>
                </div>
                
                <div className="bg-secondary-50 dark:bg-secondary-900/20 p-4 rounded-lg border border-secondary-100 dark:border-secondary-800/30">
                  <div className="flex items-center gap-3 mb-2">
                    <Bot size={18} className="text-secondary-600 dark:text-secondary-400" />
                    <h3 className="font-medium text-secondary-800 dark:text-secondary-300">Neues KI-Modell</h3>
                  </div>
                  <p className="text-sm text-secondary-700/80 dark:text-secondary-300/80 mb-2">
                    Upgrade auf die neueste KI-Version mit verbesserter Spracherkennung.
                  </p>
                  <p className="text-xs text-secondary-600/70 dark:text-secondary-400/70">
                    20. Juni 2025, automatisches Upgrade
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-dark-100 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Users size={18} className="text-gray-600 dark:text-gray-400" />
                    <h3 className="font-medium">Kundenwebinar</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Neue Funktionen und Best Practices für Ihren Chatbot.
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    25. Juni 2025, 14:00 - 15:00 Uhr
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Chatbots section */}
          <motion.div 
            className="mt-8 bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Meine Chatbots</h2>
              <button className="text-sm text-primary-600 dark:text-primary-400 font-medium hover:underline flex items-center gap-1">
                <span>Alle anzeigen</span>
                <ChevronDown size={16} className="transform rotate-270" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-3 pr-6 font-medium">Name</th>
                    <th className="pb-3 pr-6 font-medium">Status</th>
                    <th className="pb-3 pr-6 font-medium">Konversationen</th>
                    <th className="pb-3 pr-6 font-medium">Erfolgsrate</th>
                    <th className="pb-3 font-medium">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {chatbots.map((bot) => (
                    <tr key={bot.id} className="text-gray-700 dark:text-gray-300">
                      <td className="py-4 pr-6">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                            <Bot size={16} />
                          </div>
                          <span className="font-medium">{bot.name}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-6">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          {bot.status}
                        </span>
                      </td>
                      <td className="py-4 pr-6">{bot.conversations}</td>
                      <td className="py-4 pr-6">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary-500 rounded-full" 
                              style={{ width: bot.successRate }}
                            ></div>
                          </div>
                          <span>{bot.successRate}</span>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded-md text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-100">
                            <Settings size={16} />
                          </button>
                          <button className="p-1.5 rounded-md text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-100">
                            <BarChart size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          {/* Under development notice */}
          <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 p-4 rounded-lg border border-primary-100 dark:border-primary-900/30">
            <div className="flex items-start gap-2">
              <InfoIcon className="mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Entwicklungshinweis</h3>
                <p className="text-sm mt-1">
                  Dieser Kundenbereich ist eine Demo-Version und befindet sich noch in der Entwicklung. 
                  Alle angezeigten Daten sind Beispieldaten. In der vollständigen Version können Sie hier Ihre
                  KI-Chatbots und -Voicebots verwalten, Analysen einsehen und Support-Anfragen stellen.
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

export default CustomerDashboardPage;