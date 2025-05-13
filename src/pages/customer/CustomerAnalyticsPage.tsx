import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, MessageSquare, HelpCircle, PieChart, Calendar, Filter, Download, ArrowUp, ArrowDown, TrendingUp, Zap, Activity, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

function CustomerAnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState('month');
  
  const handleLogout = () => {
    navigate('/');
  };
  
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
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <MessageSquare size={18} />
                  <span>Meine Chatbots</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/customer/analytics" 
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
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
            
            <div className="flex-1 px-4 flex justify-between lg:ml-6">
              <div className="flex items-center">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Analysen</h2>
              </div>
              
              <div className="flex items-center space-x-3">
                <select 
                  className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-sm"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                >
                  <option value="week">Letzte Woche</option>
                  <option value="month">Letzter Monat</option>
                  <option value="quarter">Letztes Quartal</option>
                  <option value="year">Letztes Jahr</option>
                </select>
                
                <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-50 dark:hover:bg-dark-300 transition-colors">
                  <Calendar size={14} />
                  <span>Benutzerdefiniert</span>
                </button>
                
                <button className="inline-flex items-center gap-1.5 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-50 dark:hover:bg-dark-300 transition-colors">
                  <Filter size={14} />
                </button>
                
                <button className="inline-flex items-center gap-1.5 p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-sm hover:bg-gray-50 dark:hover:bg-dark-300 transition-colors">
                  <Download size={14} />
                </button>
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
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-medium text-gray-500 dark:text-gray-400 text-sm">Konversationen</div>
                <div className="rounded-full p-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <MessageSquare size={16} />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">547</div>
                <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                  <ArrowUp size={14} className="mr-0.5" />
                  <span>32%</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">vs. vorheriger Zeitraum</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-medium text-gray-500 dark:text-gray-400 text-sm">Erfolgsrate</div>
                <div className="rounded-full p-1.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                  <TrendingUp size={16} />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">87%</div>
                <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                  <ArrowUp size={14} className="mr-0.5" />
                  <span>5%</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">vs. vorheriger Zeitraum</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-medium text-gray-500 dark:text-gray-400 text-sm">Durchsch. Antwortzeit</div>
                <div className="rounded-full p-1.5 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400">
                  <Zap size={16} />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">0.8s</div>
                <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                  <ArrowDown size={14} className="mr-0.5" />
                  <span>12%</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">schneller als zuvor</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="font-medium text-gray-500 dark:text-gray-400 text-sm">Eskalationen</div>
                <div className="rounded-full p-1.5 bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                  <Share2 size={16} />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <div className="text-3xl font-bold text-gray-900 dark:text-white">13%</div>
                <div className="flex items-center text-green-600 dark:text-green-400 text-sm">
                  <ArrowDown size={14} className="mr-0.5" />
                  <span>6%</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">weniger als zuvor</div>
            </motion.div>
          </div>
          
          {/* Main chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800 mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Konversationstrends</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Übersicht der Chatbot-Interaktionen</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Website-Assistent</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-secondary-500"></div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Support-Bot</span>
                </div>
              </div>
            </div>
            
            <div className="h-64">
              {/* Placeholder for chart - in a real app, you would use a charting library */}
              <div className="w-full h-full bg-gray-50 dark:bg-dark-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity size={40} className="mx-auto mb-2 text-gray-400 dark:text-gray-500" />
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Diagramm wird geladen...
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Conversion metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <TrendingUp size={18} className="text-primary-500" />
                  <span>Konversionsmetriken</span>
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Fragen beantwortet</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">92%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-100 rounded-full overflow-hidden">
                    <div className="h-full bg-primary-500 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Formularabschlüsse</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">78%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-100 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary-500 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Terminvereinbarungen</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">64%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-100 rounded-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full" style={{ width: '64%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700 dark:text-gray-300">Weiterempfehlungsrate</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">85%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Conversation topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <MessageSquare size={18} className="text-primary-500" />
                  <span>Top-Themen</span>
                </h3>
              </div>
              
              <div className="relative h-48 flex items-center justify-center">
                <PieChart size={32} className="text-gray-400 dark:text-gray-500" />
                <p className="text-gray-500 dark:text-gray-400 text-sm absolute mt-16">
                  Kreisdiagramm wird geladen...
                </p>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Produktfragen (35%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Bestellstatus (25%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Terminanfragen (20%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Support (15%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-500"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Sonstiges (5%)</span>
                </div>
              </div>
            </motion.div>
            
            {/* Traffic sources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Activity size={18} className="text-primary-500" />
                  <span>Verkehrsquellen</span>
                </h3>
              </div>
              
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-400 text-xs border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-3 font-medium">Quelle</th>
                    <th className="pb-3 font-medium text-right">Sessions</th>
                    <th className="pb-3 font-medium text-right">Trend</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { source: 'Website Direkt', sessions: 325, trend: 'up' },
                    { source: 'Mobile App', sessions: 145, trend: 'down' },
                    { source: 'WhatsApp', sessions: 98, trend: 'up' },
                    { source: 'Facebook', sessions: 64, trend: 'up' },
                    { source: 'Instagram', sessions: 43, trend: 'down' },
                  ].map((item, idx) => (
                    <tr key={idx} className="text-sm text-gray-700 dark:text-gray-300">
                      <td className="py-3">{item.source}</td>
                      <td className="py-3 text-right">{item.sessions}</td>
                      <td className="py-3 text-right">
                        <span className={`inline-flex p-1 rounded-full ${
                          item.trend === 'up' 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-red-600 dark:text-red-400'
                        }`}>
                          {item.trend === 'up' ? (
                            <ArrowUp size={14} />
                          ) : (
                            <ArrowDown size={14} />
                          )}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
          
          {/* Under development notice */}
          <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 p-4 rounded-lg border border-primary-100 dark:border-primary-900/30">
            <div className="flex items-start gap-2">
              <InfoIcon className="mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Entwicklungshinweis</h3>
                <p className="text-sm mt-1">
                  Diese Analyse-Seite ist eine Demo-Version und befindet sich noch in der Entwicklung. 
                  In der vollständigen Version werden hier detaillierte Diagramme und Analysen Ihrer Chatbot-Interaktionen angezeigt.
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

export default CustomerAnalyticsPage;