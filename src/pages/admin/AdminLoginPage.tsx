import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, User, AlertCircle, EyeOff, Eye, Bot } from 'lucide-react';
import { Button } from '../../components/ui/button';

function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // In a real app, this would validate against a backend
    // For demo purposes, we're using a static check
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        // In real app, set authentication token/session
        navigate('/admin/dashboard');
      } else {
        setError('Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-dark-300 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-dark-200 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                <Lock size={28} className="text-white" />
              </div>
            </div>
            
            <h1 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">
              Admin-Bereich
            </h1>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
              Bitte melden Sie sich an, um fortzufahren
            </p>
            
            {error && (
              <div className="mb-6 p-3 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 rounded-lg flex items-center gap-2">
                <AlertCircle size={16} className="flex-shrink-0" />
                <span className="text-sm">{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Benutzername
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={16} className="text-gray-400" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-white dark:bg-dark-100 text-gray-900 dark:text-white block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="admin"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Passwort
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={16} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white dark:bg-dark-100 text-gray-900 dark:text-white block w-full pl-10 pr-10 py-2.5 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="••••••••"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full h-11 bg-gradient-to-r from-primary-500 to-primary-600"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Anmelden...
                    </>
                  ) : (
                    "Anmelden"
                  )}
                </Button>
              </div>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Hinweis: Für Demo-Zwecke können Sie sich mit den Anmeldedaten<br />
                <span className="font-medium">admin / admin123</span> einloggen
              </p>
            </div>
          </div>
          
          <div className="px-6 py-4 bg-gray-50 dark:bg-dark-300 text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Zurück zur Website
            </button>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Bot size={16} />
            <span>KI-Helpbot Admin System</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AdminLoginPage;