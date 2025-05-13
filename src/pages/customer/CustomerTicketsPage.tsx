import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, Search, ChevronDown, MessageSquare, HelpCircle, Plus, Filter, Clock, CheckCircle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '../../components/ui/badge';

function CustomerTicketsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  
  const handleLogout = () => {
    navigate('/');
  };
  
  // Sample tickets data
  const tickets = [
    {
      id: 'TICKET-1001',
      subject: 'Chatbot-Integration in Wordpress',
      status: 'Offen',
      priority: 'Hoch',
      created: '2025-06-02 10:15',
      lastUpdate: '2025-06-02 14:30',
      assignedTo: 'Support-Team',
      description: 'Ich benötige Hilfe bei der Integration des Chatbots in meine Wordpress-Website.',
      category: 'Integration'
    },
    {
      id: 'TICKET-1000',
      subject: 'Frage zu Mehrsprachigkeit-Funktion',
      status: 'Bearbeitung',
      priority: 'Mittel',
      created: '2025-06-01 15:22',
      lastUpdate: '2025-06-02 09:10',
      assignedTo: 'Thomas Weber',
      description: 'Wie kann ich meinen Chatbot auf zusätzliche Sprachen erweitern?',
      category: 'Funktionalität'
    },
    {
      id: 'TICKET-998',
      subject: 'Probleme mit der Datenbankverbindung',
      status: 'Gelöst',
      priority: 'Kritisch',
      created: '2025-05-28 09:45',
      lastUpdate: '2025-05-30 16:20',
      assignedTo: 'Maria Schmidt',
      description: 'Die Verbindung zwischen dem Chatbot und unserer CRM-Datenbank funktioniert nicht.',
      category: 'Technisch'
    },
    {
      id: 'TICKET-995',
      subject: 'Aktualisierung der Antworttexte',
      status: 'Geschlossen',
      priority: 'Niedrig',
      created: '2025-05-25 11:30',
      lastUpdate: '2025-05-26 14:15',
      assignedTo: 'Support-Team',
      description: 'Wie kann ich die vordefinierten Antworten in meinem Chatbot aktualisieren?',
      category: 'Inhalt'
    }
  ];

  const filteredTickets = activeTab === 'all' 
    ? tickets 
    : tickets.filter(ticket => {
        if (activeTab === 'open') return ticket.status === 'Offen' || ticket.status === 'Bearbeitung';
        if (activeTab === 'solved') return ticket.status === 'Gelöst';
        if (activeTab === 'closed') return ticket.status === 'Geschlossen';
        return true;
      });

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
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
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
                    placeholder="Tickets durchsuchen..."
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Support-Tickets</h1>
            <p className="text-gray-500 dark:text-gray-400">Verwalten Sie Ihre Support-Anfragen</p>
          </header>
          
          {/* Tickets section */}
          <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm transition-colors">
                  <Plus size={16} />
                  <span>Neues Ticket</span>
                </button>
              </div>
              
              <div className="flex flex-wrap items-center gap-3">
                <button 
                  onClick={() => setActiveTab('all')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm transition-colors ${
                    activeTab === 'all'
                      ? 'border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
                  }`}
                >
                  <span>Alle</span>
                </button>
                <button 
                  onClick={() => setActiveTab('open')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm transition-colors ${
                    activeTab === 'open'
                      ? 'border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
                  }`}
                >
                  <span>Offen</span>
                </button>
                <button 
                  onClick={() => setActiveTab('solved')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm transition-colors ${
                    activeTab === 'solved'
                      ? 'border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
                  }`}
                >
                  <span>Gelöst</span>
                </button>
                <button 
                  onClick={() => setActiveTab('closed')}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm transition-colors ${
                    activeTab === 'closed'
                      ? 'border-primary-300 dark:border-primary-700 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100'
                  }`}
                >
                  <span>Geschlossen</span>
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-3 px-4 font-medium">Ticket-ID</th>
                    <th className="pb-3 px-4 font-medium">Betreff</th>
                    <th className="pb-3 px-4 font-medium">Status</th>
                    <th className="pb-3 px-4 font-medium">Priorität</th>
                    <th className="pb-3 px-4 font-medium">Erstellt</th>
                    <th className="pb-3 px-4 font-medium">Letzte Aktualisierung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredTickets.map((ticket) => (
                    <tr 
                      key={ticket.id} 
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100 cursor-pointer"
                      onClick={() => {/* Handle click to view ticket details */}}
                    >
                      <td className="py-4 px-4 text-primary-600 dark:text-primary-400 font-medium">{ticket.id}</td>
                      <td className="py-4 px-4">
                        <div className="flex flex-col">
                          <span className="font-medium">{ticket.subject}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{ticket.category}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          ticket.status === 'Offen' 
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                            : ticket.status === 'Bearbeitung'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                              : ticket.status === 'Gelöst'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
                        }`}>
                          {ticket.status === 'Offen' && <AlertCircle size={12} className="mr-1" />}
                          {ticket.status === 'Bearbeitung' && <Clock size={12} className="mr-1" />}
                          {ticket.status === 'Gelöst' && <CheckCircle size={12} className="mr-1" />}
                          {ticket.status === 'Geschlossen' && <CheckCircle2 size={12} className="mr-1" />}
                          {ticket.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          ticket.priority === 'Hoch' 
                            ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                            : ticket.priority === 'Mittel'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
                              : ticket.priority === 'Kritisch'
                                ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
                        }`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm">{ticket.created}</td>
                      <td className="py-4 px-4 text-sm">{ticket.lastUpdate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredTickets.length === 0 && (
              <div className="py-8 text-center">
                <div className="inline-block p-3 rounded-full bg-gray-100 dark:bg-dark-100 mb-3">
                  <CheckCircle2 size={24} className="text-gray-500 dark:text-gray-400" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">Keine Tickets gefunden</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  Es gibt keine Tickets mit dem ausgewählten Status
                </p>
              </div>
            )}
          </div>
          
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

export default CustomerTicketsPage;