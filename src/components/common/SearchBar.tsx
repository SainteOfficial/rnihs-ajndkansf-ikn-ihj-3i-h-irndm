import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';

interface SearchResult {
  title: string;
  path: string;
  description: string;
  section?: string;
}

// Create a simple event system for search
export const searchEvents = {
  open: () => {
    const event = new CustomEvent('openGlobalSearch');
    document.dispatchEvent(event);
  },
  close: () => {
    const event = new CustomEvent('closeGlobalSearch');
    document.dispatchEvent(event);
  }
};

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Listen for global search events
  useEffect(() => {
    const handleOpenGlobalSearch = () => {
      setIsOpen(true);
    };

    const handleCloseGlobalSearch = () => {
      setIsOpen(false);
    };

    document.addEventListener('openGlobalSearch', handleOpenGlobalSearch);
    document.addEventListener('closeGlobalSearch', handleCloseGlobalSearch);

    return () => {
      document.removeEventListener('openGlobalSearch', handleOpenGlobalSearch);
      document.removeEventListener('closeGlobalSearch', handleCloseGlobalSearch);
    };
  }, []);

  // Simulated search data - in a real app, this might come from an API or indexing service
  const searchableContent: SearchResult[] = [
    { title: 'Startseite', path: '/', description: 'Hauptseite von KI-Helpbot' },
    { title: 'Chatbots', path: '/leistungen#chatbots', description: 'Intelligente Chatbot-Lösungen', section: 'Leistungen' },
    { title: 'Voicebots', path: '/leistungen#voicebots', description: 'Sprachgesteuerte Bot-Systeme', section: 'Leistungen' },
    { title: 'CRM-Integration', path: '/leistungen#crm', description: 'Nahtlose Integration in bestehende CRM-Systeme', section: 'Leistungen' },
    { title: 'Datenanalyse', path: '/leistungen#analyse', description: 'KI-gestützte Analyse von Kundendaten', section: 'Leistungen' },
    { title: 'Autohaus', path: '/branchenloesungen#autohaus', description: 'Lösungen für die Automobilbranche', section: 'Branchenlösungen' },
    { title: 'E-Commerce', path: '/branchenloesungen#ecommerce', description: 'Lösungen für Online-Händler', section: 'Branchenlösungen' },
    { title: 'Handwerk', path: '/branchenloesungen#handwerk', description: 'Lösungen für Handwerksbetriebe', section: 'Branchenlösungen' },
    { title: 'Kundenservice', path: '/branchenloesungen#service', description: 'Lösungen für verbesserten Kundenservice', section: 'Branchenlösungen' },
    { title: 'Demo', path: '/demo', description: 'Testen Sie unsere KI-Lösungen' },
    { title: 'Über uns', path: '/ueber-uns', description: 'Erfahren Sie mehr über KI-Helpbot' },
    { title: 'Team', path: '/ueber-uns#team', description: 'Unser Team bei KI-Helpbot', section: 'Über uns' },
    { title: 'Mission', path: '/ueber-uns#mission', description: 'Unsere Mission bei KI-Helpbot', section: 'Über uns' },
    { title: 'Vision', path: '/ueber-uns#vision', description: 'Unsere Vision bei KI-Helpbot', section: 'Über uns' },
    { title: 'Kontakt', path: '/kontakt', description: 'Kontaktieren Sie unser Team' },
    { title: 'Kundenmeinungen', path: '/kundenmeinungen', description: 'Erfahrungsberichte unserer Kunden' },
    { title: 'AGB', path: '/agb', description: 'Allgemeine Geschäftsbedingungen', section: 'Rechtliches' },
    { title: 'Impressum', path: '/impressum', description: 'Impressum von KI-Helpbot', section: 'Rechtliches' },
    { title: 'Datenschutz', path: '/datenschutz', description: 'Datenschutzerklärung von KI-Helpbot', section: 'Rechtliches' },
    { title: 'Sitemap', path: '/sitemap', description: 'Übersicht aller Seiten' },
  ];

  useEffect(() => {
    // Handle clicks outside of the search component
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Focus input when search is opened
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    // Filter results based on search term
    if (searchTerm.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  }, [searchTerm]);

  const handleOpenSearch = () => {
    setIsOpen(true);
  };

  const handleCloseSearch = () => {
    setIsOpen(false);
    setSearchTerm('');
    setResults([]);
  };

  const handleResultClick = (path: string) => {
    navigate(path);
    handleCloseSearch();
  };

  return (
    <div className="relative z-30" ref={searchRef}>
      {/* Search button */}
      <button
        className="flex items-center justify-center w-9 h-9 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        onClick={handleOpenSearch}
        aria-label="Suche öffnen"
      >
        <Search size={18} />
      </button>

      {/* Search modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4 z-50">
          <div className="w-full max-w-2xl bg-white dark:bg-dark-200 rounded-lg shadow-xl overflow-hidden">
            {/* Search input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                ref={inputRef}
                type="text"
                className="block w-full pl-10 pr-10 py-3.5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-dark-200 border-b border-gray-200 dark:border-dark-100 focus:outline-none"
                placeholder="Wonach suchen Sie?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Suchfeld"
              />
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={handleCloseSearch}
                aria-label="Suche schließen"
              >
                <X size={18} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
              </button>
            </div>

            {/* Search results */}
            <div className="max-h-[70vh] overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-4">
                  {/* Group results by section */}
                  {(() => {
                    const groupedResults: Record<string, SearchResult[]> = {};
                    
                    // Add default 'Allgemein' group
                    groupedResults['Allgemein'] = [];
                    
                    // Group results
                    results.forEach(result => {
                      if (result.section) {
                        if (!groupedResults[result.section]) {
                          groupedResults[result.section] = [];
                        }
                        groupedResults[result.section].push(result);
                      } else {
                        groupedResults['Allgemein'].push(result);
                      }
                    });
                    
                    // Render grouped results
                    return Object.entries(groupedResults).map(([section, sectionResults]) => {
                      if (sectionResults.length === 0) return null;
                      
                      return (
                        <div key={section} className="mb-6 last:mb-0">
                          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">{section}</h3>
                          <ul className="space-y-2">
                            {sectionResults.map((result, index) => (
                              <li key={index}>
                                <button
                                  className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-100 transition-colors"
                                  onClick={() => handleResultClick(result.path)}
                                >
                                  <div className="font-medium text-gray-900 dark:text-white mb-1">{result.title}</div>
                                  <div className="text-sm text-gray-500 dark:text-gray-400">{result.description}</div>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    });
                  })()}
                </div>
              ) : searchTerm.trim() !== '' ? (
                <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                  <p>Keine Ergebnisse für "{searchTerm}" gefunden.</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 