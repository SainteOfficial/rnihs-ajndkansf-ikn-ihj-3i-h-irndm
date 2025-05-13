import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Users, BarChart, Settings, LogOut, Menu, X, Bell, Search, ChevronDown, MessageSquare, HelpCircle, Edit, Trash2, UserPlus, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

function AdminUsersPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    navigate('/');
  };
  
  // Sample users data
  const users = [
    { id: 1, name: 'Max Mustermann', email: 'max.mustermann@example.com', role: 'Admin', status: 'Aktiv', lastLogin: '2025-06-02 14:30' },
    { id: 2, name: 'Laura Schmidt', email: 'laura.schmidt@example.com', role: 'Kunde', status: 'Aktiv', lastLogin: '2025-06-01 09:15' },
    { id: 3, name: 'Thomas Weber', email: 'thomas.weber@example.com', role: 'Support', status: 'Aktiv', lastLogin: '2025-06-01 12:45' },
    { id: 4, name: 'Anna Müller', email: 'anna.mueller@example.com', role: 'Kunde', status: 'Inaktiv', lastLogin: '2025-05-20 16:20' },
    { id: 5, name: 'Michael Fischer', email: 'michael.fischer@example.com', role: 'Kunde', status: 'Aktiv', lastLogin: '2025-06-02 10:05' }
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
                  className="flex items-center gap-3 px-3 py-2.5 text-gray-700 dark:text-gray-200 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
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
                    placeholder="Benutzer suchen..."
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
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Benutzerverwaltung</h1>
            <p className="text-gray-500 dark:text-gray-400">Verwalten Sie alle Benutzer des Systems</p>
          </header>
          
          <div className="bg-white dark:bg-dark-200 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-800">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg text-sm transition-colors">
                  <UserPlus size={16} />
                  <span>Benutzer hinzufügen</span>
                </button>
                
                <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Anzeigen:</span>
                <select className="bg-white dark:bg-dark-100 border border-gray-300 dark:border-gray-700 rounded-md text-sm px-3 py-1.5">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 dark:text-gray-400 text-sm border-b border-gray-200 dark:border-gray-700">
                    <th className="pb-3 px-4 font-medium">Name</th>
                    <th className="pb-3 px-4 font-medium">E-Mail</th>
                    <th className="pb-3 px-4 font-medium">Rolle</th>
                    <th className="pb-3 px-4 font-medium">Status</th>
                    <th className="pb-3 px-4 font-medium">Letzter Login</th>
                    <th className="pb-3 px-4 font-medium">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {users.map((user) => (
                    <tr 
                      key={user.id} 
                      className="text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-dark-100 flex items-center justify-center text-gray-700 dark:text-gray-300 font-medium">
                            {user.name.charAt(0)}
                          </div>
                          <span className="font-medium">{user.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">{user.email}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.role === 'Admin' 
                            ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300'
                            : user.role === 'Support'
                              ? 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300'
                              : 'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === 'Aktiv' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">{user.lastLogin}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 rounded-md text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-100">
                            <Edit size={16} />
                          </button>
                          <button className="p-1.5 rounded-md text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-dark-100">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Zeige 1 bis 5 von 5 Einträgen
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled>
                  Zurück
                </button>
                <button className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium">
                  1
                </button>
                <button className="px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled>
                  Weiter
                </button>
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

export default AdminUsersPage;