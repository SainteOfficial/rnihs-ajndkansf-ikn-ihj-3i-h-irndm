import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Building, Mail, Phone, Globe, Users, FileText } from 'lucide-react';

function ImpressumPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="bg-gradient-to-b from-gray-100 to-white dark:from-dark-300 dark:to-dark-200 py-12">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <Link to="/" className="hover:text-primary-600 dark:hover:text-primary-400">Startseite</Link>
              <ChevronRight size={16} className="mx-2" />
              <span className="text-gray-700 dark:text-gray-300">Impressum</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <Building size={24} />
              </div>
              <h1 className="text-3xl font-bold">Impressum</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Angaben gemäß § 5 TMG
            </p>
          </motion.div>
        </div>
      </div>
      
      <div className="py-12 bg-white dark:bg-dark-200">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300"
          >
            <h2>Angaben zum Betreiber</h2>
            <p>
              KI-Helpbot<br />
              Inhaber: Max Mustermann<br />
              Deutschland
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm italic">
              (Gemäß § 5 TMG ist die Angabe einer ladungsfähigen Anschrift für Einzelunternehmen erforderlich. 
              Die vollständige Anschrift wurde hier aus Datenschutzgründen für die öffentliche Webseite entfernt, 
              wird aber im Bedarfsfall den zuständigen Behörden mitgeteilt.)
            </p>
            
            <h2>Kontakt</h2>
            <p>
              Telefon: +49 (0) 123 456789<br />
              E-Mail: info@ki-helpbot.de<br />
              Website: www.ki-helpbot.de
            </p>
            
            <h2>Verantwortlich für den Inhalt</h2>
            <p>
              Max Mustermann<br />
              E-Mail: info@ki-helpbot.de
            </p>
            
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
            
            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">https://ec.europa.eu/consumers/odr/</a>
            </p>
            <p>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            
            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
            
            <h2>Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
            
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 p-6 bg-gray-50 dark:bg-dark-100 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary-500">
                <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Hinweis
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Dies ist ein Muster für ein Impressum. Die angegebenen Kontaktdaten sind Beispieldaten.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link 
                to="/datenschutz"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
              >
                Zur Datenschutzerklärung
              </Link>
              <Link 
                to="/agb" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors"
              >
                Zu den AGB
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ImpressumPage;