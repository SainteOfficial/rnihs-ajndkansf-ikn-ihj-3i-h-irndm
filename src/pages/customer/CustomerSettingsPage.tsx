import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, ChevronDown, MessageSquare, HelpCircle, Save, User, Mail, Lock, Languages, Sun, Moon, Shield, Bell as BellIcon, UserPlus, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

function CustomerSettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  
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
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
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
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Kontoeinstellungen</h2>
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
          
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'profile'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              Profil
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'account'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('account')}
            >
              Konto
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'security'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('security')}
            >
              Sicherheit
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'notifications'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('notifications')}
            >
              Benachrichtigungen
            </button>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Persönliche Informationen</h3>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 overflow-hidden">
                          <User size={32} />
                        </div>
                        <button className="absolute -right-1 -bottom-1 p-1.5 bg-primary-500 text-white rounded-full shadow-md hover:bg-primary-600 transition-colors">
                          <Camera size={14} />
                        </button>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Profilbild</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">JPEG oder PNG, max. 2 MB</p>
                        <div className="flex gap-3">
                          <button className="text-xs px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-md hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                            Hochladen
                          </button>
                          <button className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-dark-50 transition-colors">
                            Entfernen
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Vorname
                        </label>
                        <input
                          type="text"
                          value="Max"
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Nachname
                        </label>
                        <input
                          type="text"
                          value="Mustermann"
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        E-Mail-Adresse
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          value="kunde@example.com"
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 pr-10"
                          disabled
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <Lock size={14} className="text-gray-400" />
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Kontaktieren Sie den Support, um Ihre E-Mail-Adresse zu ändern.</p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        value="+49 123 456789"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Firma
                      </label>
                      <input
                        type="text"
                        value="Beispiel GmbH"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Zeitzone
                      </label>
                      <select className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="Europe/Berlin">(GMT+01:00) Berlin, Deutschland</option>
                        <option value="Europe/London">(GMT+00:00) London, Großbritannien</option>
                        <option value="America/New_York">(GMT-05:00) New York, USA</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                      <Save size={16} />
                      <span>Änderungen speichern</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Language and Theme */}
              <div>
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sprache</h3>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Anzeigesprache
                    </label>
                    <div className="space-y-2">
                      <button className="w-full flex items-center justify-between p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/30 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-dark-300 text-xs">DE</span>
                          <span>Deutsch</span>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                        </div>
                      </button>
                      
                      <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-400 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full flex items-center justify-center bg-white dark:bg-dark-200 text-xs">EN</span>
                          <span>Englisch</span>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Erscheinungsbild</h3>
                  
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Theme
                    </label>
                    <div className="space-y-2">
                      <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-dark-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-400 transition-colors">
                        <div className="flex items-center gap-3">
                          <Sun size={16} className="text-amber-500" />
                          <span>Hell</span>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                      </button>
                      
                      <button className="w-full flex items-center justify-between p-3 rounded-lg bg-dark-300 border border-dark-200 text-white hover:bg-dark-400 transition-colors">
                        <div className="flex items-center gap-3">
                          <Moon size={16} className="text-blue-400" />
                          <span>Dunkel</span>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-primary-500 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                        </div>
                      </button>
                      
                      <button className="w-full flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-gray-50 to-dark-300 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:opacity-90 transition-opacity">
                        <div className="flex items-center gap-3">
                          <div className="flex">
                            <Sun size={16} className="text-amber-500" />
                            <Moon size={16} className="text-blue-400 -ml-1" />
                          </div>
                          <span>Systemeinstellung</span>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Account Tab */}
          {activeTab === 'account' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Kontodetails</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Benutzername
                      </label>
                      <input
                        type="text"
                        value="maxmustermann"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        E-Mail-Adresse
                      </label>
                      <input
                        type="email"
                        value="kunde@example.com"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        disabled
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name der Organisation
                      </label>
                      <input
                        type="text"
                        value="Beispiel GmbH"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                      <Save size={16} />
                      <span>Änderungen speichern</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <UserPlus size={20} className="text-primary-500" />
                    <span>Teammitglieder</span>
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                          <th className="pb-3 font-medium">Name</th>
                          <th className="pb-3 font-medium">E-Mail</th>
                          <th className="pb-3 font-medium">Rolle</th>
                          <th className="pb-3 font-medium text-right">Aktion</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        <tr className="text-gray-700 dark:text-gray-300">
                          <td className="py-3 pr-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                                <User size={14} />
                              </div>
                              <span className="font-medium">Max Mustermann</span>
                            </div>
                          </td>
                          <td className="py-3 pr-4">kunde@example.com</td>
                          <td className="py-3 pr-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                              Admin
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            <button className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                              <Edit size={16} />
                            </button>
                          </td>
                        </tr>
                        <tr className="text-gray-700 dark:text-gray-300">
                          <td className="py-3 pr-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center text-secondary-600 dark:text-secondary-400">
                                <User size={14} />
                              </div>
                              <span className="font-medium">Anna Schmidt</span>
                            </div>
                          </td>
                          <td className="py-3 pr-4">anna.schmidt@example.com</td>
                          <td className="py-3 pr-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300">
                              Editor
                            </span>
                          </td>
                          <td className="py-3 text-right">
                            <div className="flex justify-end gap-2">
                              <button className="text-gray-500 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400">
                                <Edit size={16} />
                              </button>
                              <button className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                      <UserPlus size={16} />
                      <span>Teammitglied hinzufügen</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Konto-Status</h3>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Verifiziert</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Ihr Konto ist vollständig verifiziert</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Mitglied seit</span>
                      <span className="text-gray-900 dark:text-white">01.01.2025</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Abonnement</span>
                      <span className="text-gray-900 dark:text-white">Pro Plan</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-gray-500 dark:text-gray-400">Letzter Login</span>
                      <span className="text-gray-900 dark:text-white">Heute, 09:15</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500 dark:text-gray-400">2FA-Status</span>
                      <span className="text-amber-600 dark:text-amber-400">Deaktiviert</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl shadow-sm p-6 border border-red-100 dark:border-red-800/30">
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 flex items-center gap-2 mb-3">
                    <AlertTriangle size={20} className="text-red-500 dark:text-red-400" />
                    Gefahrenzone
                  </h3>
                  
                  <p className="text-sm text-red-700/80 dark:text-red-300/80 mb-4">
                    Wenn Sie Ihr Konto löschen, werden alle Ihre Daten und Einstellungen unwiderruflich gelöscht. Diese Aktion kann nicht rückgängig gemacht werden.
                  </p>
                  
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors text-sm">
                    <Trash2 size={16} />
                    <span>Konto löschen</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Passwort ändern</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Aktuelles Passwort
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Neues Passwort
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Passwort bestätigen
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                      <Save size={16} />
                      <span>Passwort aktualisieren</span>
                    </button>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Zwei-Faktor-Authentifizierung (2FA)</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Erhöhen Sie die Sicherheit Ihres Kontos</p>
                    </div>
                    <div className="relative inline-block w-10 align-middle select-none">
                      <input type="checkbox" id="toggle-2fa" className="sr-only" />
                      <label htmlFor="toggle-2fa" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                        <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-0 bg-white shadow-md"></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-dark-300 rounded-lg mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield size={18} className="text-primary-500" />
                      <h4 className="font-medium text-gray-900 dark:text-white">Schützen Sie Ihr Konto</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mit der Zwei-Faktor-Authentifizierung müssen Sie bei jeder Anmeldung einen zusätzlichen Code eingeben, der an Ihr Mobiltelefon gesendet wird oder von einer Authentifizierungs-App generiert wird.
                    </p>
                  </div>
                  
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors">
                    <span>2FA einrichten</span>
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sitzungen</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-300">
                      <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                        <Monitor size={16} />
                      </div>
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium text-gray-900 dark:text-white text-sm">Windows PC</p>
                          <span className="ml-2 px-1.5 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs rounded-full">Aktiv</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Chrome • Berlin, Deutschland</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Angemeldet: Heute, 09:15</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-300">
                      <div className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400">
                        <Smartphone size={16} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">iPhone</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Safari • Berlin, Deutschland</p>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Angemeldet: Gestern, 18:30</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 mt-4 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors text-sm">
                    <LogOut size={16} />
                    <span>Alle anderen Sitzungen abmelden</span>
                  </button>
                </div>
                
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Sicherheitstipps</h3>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Verwenden Sie ein starkes, einzigartiges Passwort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Aktivieren Sie die Zwei-Faktor-Authentifizierung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Teilen Sie Ihre Zugangsdaten niemals mit anderen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Melden Sie sich aus öffentlichen Geräten immer ab</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Benachrichtigungseinstellungen</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                        <BellIcon size={16} className="text-primary-500" />
                        <span>E-Mail-Benachrichtigungen</span>
                      </h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label for="email-chatbot-updates" className="text-sm text-gray-700 dark:text-gray-300">
                            Chatbot-Updates und Verbesserungen
                          </label>
                          <div className="relative inline-block w-10 align-middle select-none">
                            <input type="checkbox" id="email-chatbot-updates" className="sr-only" defaultChecked />
                            <label htmlFor="email-chatbot-updates" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                              <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-4 bg-white shadow-md"></span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <label for="email-security" className="text-sm text-gray-700 dark:text-gray-300">
                            Sicherheitsbenachrichtigungen
                          </label>
                          <div className="relative inline-block w-10 align-middle select-none">
                            <input type="checkbox" id="email-security" className="sr-only" defaultChecked />
                            <label htmlFor="email-security" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                              <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-4 bg-white shadow-md"></span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <label for="email-billing" className="text-sm text-gray-700 dark:text-gray-300">
                            Rechnungen und Zahlungen
                          </label>
                          <div className="relative inline-block w-10 align-middle select-none">
                            <input type="checkbox" id="email-billing" className="sr-only" defaultChecked />
                            <label htmlFor="email-billing" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                              <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-4 bg-white shadow-md"></span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <label for="email-marketing" className="text-sm text-gray-700 dark:text-gray-300">
                            Marketing und Angebote
                          </label>
                          <div className="relative inline-block w-10 align-middle select-none">
                            <input type="checkbox" id="email-marketing" className="sr-only" />
                            <label htmlFor="email-marketing" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                              <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-0 bg-white shadow-md"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                        <BotIcon size={16} className="text-primary-500" />
                        <span>Chatbot-Benachrichtigungen</span>
                      </h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label for="chatbot-performance" className="text-sm text-gray-700 dark:text-gray-300">
                            Performance-Berichte (wöchentlich)
                          </label>
                          <div className="relative inline-block w-10 align-middle select-none">
                            <input type="checkbox" id="chatbot-performance" className="sr-only" defaultChecked />
                            <label htmlFor="chatbot-performance" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                              <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-4 bg-white shadow-md"></span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <label for="chatbot-alerts" className="text-sm text-gray-700 dark:text-gray-300">
                            Kritische Warnhinweise
                          </label>
                          <div className="relative inline-block w-10 align-middle select-none">
                            <input type="checkbox" id="chatbot-alerts" className="sr-only" defaultChecked />
                            <label htmlFor="chatbot-alerts" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                              <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-4 bg-white shadow-md"></span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <label for="chatbot-usage" className="text-sm text-gray-700 dark:text-gray-300">
                            Nutzungsbenachrichtigungen
                          </label>
                          <div className="relative inline-block w-10 align-middle select-none">
                            <input type="checkbox" id="chatbot-usage" className="sr-only" />
                            <label htmlFor="chatbot-usage" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                              <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-0 bg-white shadow-md"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                      <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2 mb-3">
                        <Bell size={16} className="text-primary-500" />
                        <span>Push-Benachrichtigungen</span>
                      </h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <label for="push-support" className="text-sm text-gray-700 dark:text-gray-300">
                            Support-Antworten
                          </label>
                          <div className="relative inline-block w-10 align-middle select-none">
                            <input type="checkbox" id="push-support" className="sr-only" defaultChecked />
                            <label htmlFor="push-support" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                              <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-4 bg-white shadow-md"></span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <label for="push-account" className="text-sm text-gray-700 dark:text-gray-300">
                            Kontoaktivitäten
                          </label>
                          <div className="relative inline-block w-10 align-middle select-none">
                            <input type="checkbox" id="push-account" className="sr-only" defaultChecked />
                            <label htmlFor="push-account" className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300 dark:bg-gray-600 transition-colors">
                              <span className="block h-6 w-6 rounded-full transform transition-transform duration-200 ease-in-out translate-x-4 bg-white shadow-md"></span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                      <Save size={16} />
                      <span>Einstellungen speichern</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-primary-50 dark:bg-primary-900/10 rounded-xl shadow-sm p-6 border border-primary-100 dark:border-primary-800/30 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BellIcon size={20} className="text-primary-500" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Warum Benachrichtigungen?</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Benachrichtigungen helfen Ihnen, über wichtige Ereignisse auf dem Laufenden zu bleiben:
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Wichtige Sicherheitshinweise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Chatbot-Leistungsberichte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-primary-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Rechnungs- und Zahlungsbenachrichtigungen</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Häufig gestellte Fragen</h3>
                  
                  <div className="space-y-4">
                    <details className="group">
                      <summary className="flex justify-between items-center text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                        Wo kann ich meine E-Mail-Benachrichtigungen sehen?
                        <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform text-gray-400" />
                      </summary>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                        Alle Benachrichtigungen werden an die E-Mail-Adresse gesendet, die mit Ihrem Konto verknüpft ist. Überprüfen Sie auch Ihren Spam-Ordner.
                      </p>
                    </details>
                    
                    <details className="group">
                      <summary className="flex justify-between items-center text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                        Kann ich die Häufigkeit der Benachrichtigungen ändern?
                        <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform text-gray-400" />
                      </summary>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                        Ja, für einige Benachrichtigungstypen können Sie die Häufigkeit anpassen. Klicken Sie auf die Bearbeitungsoptionen neben der jeweiligen Benachrichtigung.
                      </p>
                    </details>
                    
                    <details className="group">
                      <summary className="flex justify-between items-center text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                        Wie aktiviere ich Push-Benachrichtigungen?
                        <ChevronRight size={16} className="transform group-open:rotate-90 transition-transform text-gray-400" />
                      </summary>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                        Erlauben Sie dem Browser, Benachrichtigungen von KI-Helpbot zu senden, wenn Sie dazu aufgefordert werden. Sie können dies auch in den Einstellungen Ihres Browsers ändern.
                      </p>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Under development notice */}
          <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 p-4 rounded-lg border border-primary-100 dark:border-primary-900/30">
            <div className="flex items-start gap-2">
              <InfoIcon className="mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium">Entwicklungshinweis</h3>
                <p className="text-sm mt-1">
                  Dieser Kundenbereich ist eine Demo-Version und befindet sich noch in der Entwicklung. 
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

// Additional icon components
function Edit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function Trash2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
    </svg>
  );
}

function Monitor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function Smartphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  );
}

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function AlertTriangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export default CustomerSettingsPage;