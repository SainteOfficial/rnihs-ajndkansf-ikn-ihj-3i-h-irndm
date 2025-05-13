import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, Search, ChevronDown, MessageSquare, HelpCircle, Download, CreditCard, FileText, Check, Plus, Calendar, Tag, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '../../components/ui/badge';

function CustomerBillingPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('invoices');
  
  const handleLogout = () => {
    navigate('/');
  };
  
  // Sample invoices data
  const invoices = [
    {
      id: 'INV-2025-0012',
      date: '2025-06-01',
      amount: '€79.99',
      status: 'Bezahlt',
      items: 'KI-Helpbot Pro Plan - Juni 2025',
      downloadUrl: '#'
    },
    {
      id: 'INV-2025-0011',
      date: '2025-05-01',
      amount: '€79.99',
      status: 'Bezahlt',
      items: 'KI-Helpbot Pro Plan - Mai 2025',
      downloadUrl: '#'
    },
    {
      id: 'INV-2025-0010',
      date: '2025-04-01',
      amount: '€79.99',
      status: 'Bezahlt',
      items: 'KI-Helpbot Pro Plan - April 2025',
      downloadUrl: '#'
    }
  ];
  
  // Sample subscription data
  const subscription = {
    plan: 'Pro Plan',
    status: 'Aktiv',
    nextBilling: '2025-07-01',
    amount: '€79.99',
    billingCycle: 'Monatlich',
    paymentMethod: 'Visa •••• 4242',
    features: [
      'Unbegrenzte Konversationen',
      'Mehrsprachige Unterstützung (10 Sprachen)',
      'CRM-Integration',
      '24/7 Support',
      'Benutzerdefiniertes Branding'
    ]
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
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
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
            
            <div className="flex-1 px-4 flex justify-between lg:ml-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Rechnungen & Abonnements</h2>
              
              <div className="relative">
                <div className="max-w-lg w-full flex">
                  <div className="relative hidden md:flex">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-dark-100 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Rechnung suchen..."
                    />
                  </div>
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
          
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'invoices'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('invoices')}
            >
              Rechnungen
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'subscription'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('subscription')}
            >
              Abonnement
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'payment'
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('payment')}
            >
              Zahlungsmethoden
            </button>
          </div>
        </header>
        
        {/* Page content */}
        <main className="flex-1 p-6">
          {/* Invoices Tab */}
          {activeTab === 'invoices' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Rechnungen</h3>
                
                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-white dark:bg-dark-100 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-200">
                    <Calendar size={14} />
                    <span>Filtern</span>
                  </button>
                  <button className="p-1.5 rounded-md bg-white dark:bg-dark-100 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-200">
                    <Download size={14} />
                  </button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-800">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-300">
                        <th className="py-3 px-4 font-medium">Rechnung</th>
                        <th className="py-3 px-4 font-medium">Datum</th>
                        <th className="py-3 px-4 font-medium">Beschreibung</th>
                        <th className="py-3 px-4 font-medium">Betrag</th>
                        <th className="py-3 px-4 font-medium">Status</th>
                        <th className="py-3 px-4 font-medium text-right">Aktion</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {invoices.map((invoice) => (
                        <tr key={invoice.id} className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100">
                          <td className="py-4 px-4 font-medium">{invoice.id}</td>
                          <td className="py-4 px-4">{invoice.date}</td>
                          <td className="py-4 px-4">{invoice.items}</td>
                          <td className="py-4 px-4">{invoice.amount}</td>
                          <td className="py-4 px-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              invoice.status === 'Bezahlt' 
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                            }`}>
                              {invoice.status === 'Bezahlt' && <Check size={12} className="mr-1" />}
                              {invoice.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <a 
                              href={invoice.downloadUrl} 
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                            >
                              <Download size={14} />
                              <span>PDF</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {/* Subscription Tab */}
          {activeTab === 'subscription' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ihr Abonnement</h3>
                
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-primary-700 dark:text-primary-300 text-sm font-medium border border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors">
                  <Plus size={16} />
                  <span>Plan upgraden</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Current Plan */}
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <Badge variant="default">Aktueller Plan</Badge>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">{subscription.plan}</h3>
                      </div>
                      
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        subscription.status === 'Aktiv' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
                      }`}>
                        {subscription.status === 'Aktiv' && <Check size={12} className="mr-1" />}
                        {subscription.status}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-6 bg-primary-50 dark:bg-primary-900/10 p-4 rounded-lg">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Nächste Abrechnung</p>
                        <p className="text-gray-900 dark:text-white font-medium">{subscription.nextBilling}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Betrag</p>
                        <p className="text-gray-900 dark:text-white font-medium">{subscription.amount}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Abrechnungszyklus</p>
                        <p className="text-gray-900 dark:text-white font-medium">{subscription.billingCycle}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Im Plan enthalten:</h4>
                      <ul className="space-y-2">
                        {subscription.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
                            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 flex flex-wrap gap-3">
                      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-primary-600 hover:bg-primary-700 text-sm font-medium transition-colors">
                        <span>Plan upgraden</span>
                        <ChevronRight size={16} />
                      </button>
                      <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-100 text-sm font-medium transition-colors">
                        <span>Abonnement kündigen</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Payment Method */}
                <div>
                  <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Zahlungsmethode</h3>
                    
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-dark-300 mb-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-white dark:bg-dark-200 rounded-md shadow-sm">
                          <CreditCard size={20} className="text-primary-500" />
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-white font-medium">{subscription.paymentMethod}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Läuft ab 12/27</p>
                          <button className="text-xs text-primary-600 dark:text-primary-400 hover:underline mt-2">
                            Bearbeiten
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-dark-100 text-sm font-medium justify-center">
                      <CreditCard size={16} />
                      <span>Neue Zahlungsmethode</span>
                    </button>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Weitere Optionen</h4>
                      <ul className="space-y-3">
                        <li>
                          <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1">
                            <ArrowUpRight size={14} />
                            <span>Rechnungsadresse aktualisieren</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1">
                            <ArrowUpRight size={14} />
                            <span>E-Mail-Benachrichtigungen verwalten</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1">
                            <ArrowUpRight size={14} />
                            <span>Steuerformulare herunterladen</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Payment Methods Tab */}
          {activeTab === 'payment' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Zahlungsmethoden</h3>
                  
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm transition-colors">
                    <Plus size={16} />
                    <span>Zahlungsmethode hinzufügen</span>
                  </button>
                </div>
                
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-gray-50 dark:bg-dark-300 rounded-md">
                        <CreditCard size={24} className="text-primary-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Visa •••• 4242</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Läuft ab 12/27</p>
                          </div>
                          <Badge variant="default">Standard</Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-3 mt-4">
                          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-xs hover:bg-gray-200 dark:hover:bg-dark-50 transition-colors">
                            <Edit size={14} className="text-gray-500" />
                            <span>Bearbeiten</span>
                          </button>
                          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-dark-100 text-red-600 dark:text-red-400 text-xs hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                            <Trash2 size={14} className="text-red-500" />
                            <span>Entfernen</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Rechnungsadresse</h3>
                  
                  <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Firma
                        </label>
                        <input
                          type="text"
                          value="Beispiel GmbH"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Vorname
                          </label>
                          <input
                            type="text"
                            value="Max"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Nachname
                          </label>
                          <input
                            type="text"
                            value="Mustermann"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Adresse
                        </label>
                        <input
                          type="text"
                          value="Musterstraße 123"
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            PLZ
                          </label>
                          <input
                            type="text"
                            value="12345"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Stadt
                          </label>
                          <input
                            type="text"
                            value="Berlin"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Land
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-dark-100 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                          <option>Deutschland</option>
                          <option>Österreich</option>
                          <option>Schweiz</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6">
                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm transition-colors">
                        <Save size={16} />
                        <span>Änderungen speichern</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Vergleichen Sie unsere Pläne</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-300">
                      <Tag size={18} className="text-primary-500" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Starter Plan</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">€29.99/Monat</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-primary-500 dark:border-primary-400 bg-primary-50 dark:bg-primary-900/10">
                      <Tag size={18} className="text-primary-500" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Pro Plan</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">€79.99/Monat</p>
                      </div>
                      <Badge variant="default" className="ml-auto">Aktuell</Badge>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-300">
                      <Tag size={18} className="text-primary-500" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Enterprise Plan</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Individuelles Angebot</p>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm transition-colors">
                    <span>Plan wechseln</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
                
                <div className="mt-6 bg-gray-50 dark:bg-dark-100 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white flex items-center gap-2 mb-2">
                    <HelpCircle size={16} className="text-primary-500" />
                    <span>Haben Sie Fragen?</span>
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Unser Support-Team hilft Ihnen gerne bei Fragen zu Ihrem Abonnement oder Ihren Rechnungen.
                  </p>
                  <a href="#" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1">
                    <MessageSquare size={14} />
                    <span>Support kontaktieren</span>
                  </a>
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

// Extra component icons
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

function Save(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

export default CustomerBillingPage;