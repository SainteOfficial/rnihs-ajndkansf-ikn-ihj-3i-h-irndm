import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Map, ArrowLeft } from 'lucide-react';

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-500">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">{t('notFound.title')}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">{t('notFound.description')}</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link to="/" className="btn btn-primary inline-flex items-center gap-2">
          <Home size={20} />
          {t('notFound.button')}
        </Link>
          
          <Link to="/sitemap" className="btn btn-secondary inline-flex items-center gap-2">
            <Map size={20} />
            Zur Sitemap
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-outline inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Zurück
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;