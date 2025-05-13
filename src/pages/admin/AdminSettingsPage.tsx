import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, ChevronDown, MessageSquare, HelpCircle, Save, Globe, Moon, Sun, Shield, Database, Server, Mail, Phone, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

function AdminSettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');
  
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
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
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
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Systemeinstellungen</h2>
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Einstellungen</h1>
            <p className="text-gray-500 dark:text-gray-400">Konfigurieren Sie die Systemeinstellungen</p>
          </header>
          
          {/* Settings Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                <nav className="space-y-1 p-3">
                  <button 
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg transition-colors ${
                      activeTab === 'general'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100'
                    }`}
                    onClick={() => setActiveTab('general')}
                  >
                    <Settings size={18} />
                    <span>Allgemein</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg transition-colors ${
                      activeTab === 'appearance'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100'
                    }`}
                    onClick={() => setActiveTab('appearance')}
                  >
                    <Sun size={18} />
                    <span>Erscheinungsbild</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg transition-colors ${
                      activeTab === 'localization'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100'
                    }`}
                    onClick={() => setActiveTab('localization')}
                  >
                    <Globe size={18} />
                    <span>Lokalisierung</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg transition-colors ${
                      activeTab === 'security'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100'
                    }`}
                    onClick={() => setActiveTab('security')}
                  >
                    <Shield size={18} />
                    <span>Sicherheit</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg transition-colors ${
                      activeTab === 'integrations'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100'
                    }`}
                    onClick={() => setActiveTab('integrations')}
                  >
                    <Database size={18} />
                    <span>Integrationen</span>
                  </button>
                  <button 
                    className={`w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg transition-colors ${
                      activeTab === 'system'
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-100'
                    }`}
                    onClick={() => setActiveTab('system')}
                  >
                    <Server size={18} />
                    <span>System</span>
                  </button>
                </nav>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
                {/* General Settings */}
                {activeTab === 'general' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6">Allgemeine Einstellungen</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Name des Unternehmens
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="KI-Helpbot"
                          defaultValue="KI-Helpbot"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Kontakt-E-Mail
                          </label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-dark-300 text-gray-500 dark:text-gray-400">
                              <Mail size={16} />
                            </span>
                            <input
                              type="email"
                              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-r-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                              placeholder="info@ki-helpbot.de"
                              defaultValue="info@ki-helpbot.de"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Telefonnummer
                          </label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-dark-300 text-gray-500 dark:text-gray-400">
                              <Phone size={16} />
                            </span>
                            <input
                              type="tel"
                              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-r-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                              placeholder="+49 123 456 789"
                              defaultValue="+49 123 456 789"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Standard-Sprache
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                          <option value="de">Deutsch</option>
                          <option value="en">Englisch</option>
                          <option value="fr">Französisch</option>
                          <option value="es">Spanisch</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Zeitzone
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                          <option value="Europe/Berlin">(GMT+01:00) Berlin</option>
                          <option value="Europe/London">(GMT+00:00) London</option>
                          <option value="America/New_York">(GMT-05:00) New York</option>
                          <option value="Asia/Tokyo">(GMT+09:00) Tokyo</option>
                        </select>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                          <Save size={16} />
                          <span>Änderungen speichern</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Appearance Settings */}
                {activeTab === 'appearance' && (
                  <div>
                    <h2 className="text-xl font-semibold mb-6">Erscheinungsbild</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Theme
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-white p-4 border border-gray-300 dark:border-primary-500 rounded-lg flex flex-col items-center space-y-2 cursor-pointer">
                            <Sun size={24} className="text-gray-700" />
                            <span className="text-sm font-medium text-gray-700">Hell</span>
                          </div>
                          <div className="bg-gray-900 p-4 border border-gray-800 rounded-lg flex flex-col items-center space-y-2 cursor-pointer">
                            <Moon size={24} className="text-gray-200" />
                            <span className="text-sm font-medium text-gray-200">Dunkel</span>
                          </div>
                          <div className="bg-gradient-to-r from-white to-gray-900 p-4 border border-gray-300 rounded-lg flex flex-col items-center space-y-2 cursor-pointer">
                            <div className="flex">
                              <Sun size={24} className="text-gray-700" />
                              <Moon size={24} className="text-gray-200" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">System</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Primärfarbe
                        </label>
                        <div className="grid grid-cols-6 gap-4">
                          <div className="h-8 bg-blue-500 rounded-lg cursor-pointer ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-dark-200"></div>
                          <div className="h-8 bg-indigo-500 rounded-lg cursor-pointer"></div>
                          <div className="h-8 bg-purple-500 rounded-lg cursor-pointer"></div>
                          <div className="h-8 bg-pink-500 rounded-lg cursor-pointer"></div>
                          <div className="h-8 bg-red-500 rounded-lg cursor-pointer"></div>
                          <div className="h-8 bg-orange-500 rounded-lg cursor-pointer"></div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Schriftarten
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                          <option value="inter">Inter (Standard)</option>
                          <option value="roboto">Roboto</option>
                          <option value="opensans">Open Sans</option>
                          <option value="poppins">Poppins</option>
                        </select>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                          <Save size={16} />
                          <span>Änderungen speichern</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Other tabs would have similar structures */}
                {(activeTab === 'localization' || activeTab === 'security' || activeTab === 'integrations' || activeTab === 'system') && (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-dark-300 rounded-full flex items-center justify-center mb-4">
                      {activeTab === 'localization' && <Globe size={32} className="text-gray-500 dark:text-gray-400" />}
                      {activeTab === 'security' && <Shield size={32} className="text-gray-500 dark:text-gray-400" />}
                      {activeTab === 'integrations' && <Database size={32} className="text-gray-500 dark:text-gray-400" />}
                      {activeTab === 'system' && <Server size={32} className="text-gray-500 dark:text-gray-400" />}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">
                      {activeTab === 'localization' && 'Lokalisierungseinstellungen'}
                      {activeTab === 'security' && 'Sicherheitseinstellungen'}
                      {activeTab === 'integrations' && 'Integrationen'}
                      {activeTab === 'system' && 'Systemeinstellungen'}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
                      Diese Einstellungen werden in der vollständigen Version verfügbar sein.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Under development notice */}
          <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 p-4 rounded-lg border border-primary-100 dark:border-primary-900/30">
            <div className="flex items-start gap-2">
              <InfoIcon className="mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Entwicklungshinweis</h3>
                <p className="text-sm mt-1">
                  Dieser Admin-Bereich ist eine Demo-Version und befindet sich noch in der Entwicklung. 
                  Alle angezeigten Daten sind Beispieldaten und Änderungen werden nicht gespeichert.
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

export default AdminSettingsPage;