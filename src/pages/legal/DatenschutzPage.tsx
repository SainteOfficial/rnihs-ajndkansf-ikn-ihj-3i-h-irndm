import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

function DatenschutzPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

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
              <span className="text-gray-700 dark:text-gray-300">Datenschutzerklärung</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <Shield size={24} />
              </div>
              <h1 className="text-3xl font-bold">Datenschutzerklärung</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Stand: 1. Juni 2025
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
            className="mb-8"
          >
            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800/20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary-500 text-white p-1 mt-0.5">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-primary-700 dark:text-primary-300">DSGVO-Konform</h2>
                  <p className="text-primary-700/80 dark:text-primary-300/80">
                    Unsere Datenschutzerklärung entspricht den Anforderungen der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <button
                onClick={() => toggleSection('overview')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">1. Überblick</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'overview' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'overview' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    KI-Helpbot ("ich" oder "mir") nimmt den Schutz Ihrer personenbezogenen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, wie ich mit Ihren personenbezogenen Daten umgehe und welche Rechte Sie haben.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Als verantwortliche Person im Sinne der DSGVO ergreife ich alle erforderlichen technischen und organisatorischen Maßnahmen, um Ihre personenbezogenen Daten zu schützen.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleSection('data-collection')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">2. Datenerhebung und -verwendung</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'data-collection' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'data-collection' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <h4 className="font-semibold mb-3">2.1 Arten der erhobenen Daten</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ich erhebe verschiedene Arten von personenbezogenen Daten, darunter:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Kontaktdaten (z.B. Name, E-Mail-Adresse, Telefonnummer, Firmenname)</li>
                    <li>Nutzungsdaten (z.B. IP-Adresse, Browsertyp, Zugriffszeiten)</li>
                    <li>Vertragsdaten (z.B. beauftragte Dienstleistungen, Vertragslaufzeit)</li>
                    <li>Kommunikationsdaten (z.B. Inhalte von E-Mails, Supportanfragen)</li>
                    <li>Zahlungsdaten (z.B. Bankverbindung, Zahlungshistorie)</li>
                  </ul>
                  
                  <h4 className="font-semibold mb-3">2.2 Zwecke der Datenverarbeitung</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ich verarbeite Ihre personenbezogenen Daten für folgende Zwecke:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                    <li>Bereitstellung meiner Dienste und Erfüllung vertraglicher Verpflichtungen</li>
                    <li>Kundenbetreuung und technischer Support</li>
                    <li>Verbesserung und Weiterentwicklung meiner Dienste</li>
                    <li>Senden von Informationen und Angeboten zu meinen Produkten (mit Ihrer Einwilligung)</li>
                    <li>Erfüllung gesetzlicher Verpflichtungen</li>
                  </ul>
                </div>
              )}
              
              <button
                onClick={() => toggleSection('legal-basis')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">3. Rechtsgrundlagen</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'legal-basis' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'legal-basis' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage folgender Rechtsgrundlagen:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                    <li>Art. 6 Abs. 1 lit. a DSGVO: Ihre Einwilligung</li>
                    <li>Art. 6 Abs. 1 lit. b DSGVO: Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen</li>
                    <li>Art. 6 Abs. 1 lit. c DSGVO: Erfüllung rechtlicher Verpflichtungen</li>
                    <li>Art. 6 Abs. 1 lit. f DSGVO: Berechtigte Interessen meines Unternehmens</li>
                  </ul>
                </div>
              )}

              {/* Continue with other sections */}
              <button
                onClick={() => toggleSection('cookies')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">4. Cookies und ähnliche Technologien</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'cookies' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'cookies' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ich verwende Cookies und ähnliche Technologien, um die Nutzung meiner Website zu erleichtern, Inhalte zu personalisieren und die Zugriffsstatistik zu analysieren.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Es werden sowohl temporäre Session-Cookies, die nach dem Schließen des Browsers gelöscht werden, als auch permanente Cookies verwendet, die auf Ihrem Endgerät gespeichert bleiben, bis sie gelöscht werden oder ihre Gültigkeit abläuft.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Sie können Ihren Browser so konfigurieren, dass er Sie über das Setzen von Cookies informiert und diese nur im Einzelfall erlaubt, die Annahme von Cookies für bestimmte Fälle oder generell ausschließt sowie das automatische Löschen der Cookies beim Schließen des Browsers aktiviert.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleSection('data-recipients')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">5. Datenweitergabe</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'data-recipients' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'data-recipients' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ihre personenbezogenen Daten werden grundsätzlich nicht an Dritte weitergegeben, es sei denn, dies ist zur Erfüllung meiner vertraglichen Pflichten oder zur Wahrung meiner berechtigten Interessen erforderlich oder ich bin gesetzlich dazu verpflichtet.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ich setze für bestimmte technische Prozesse Dienstleister ein, die als Auftragsverarbeiter gemäß Art. 28 DSGVO tätig sind. Mit diesen Dienstleistern wurden entsprechende Auftragsverarbeitungsverträge abgeschlossen.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Eine Datenübermittlung in Drittländer (außerhalb der EU/EWR) findet nur statt, sofern dies zur Vertragserfüllung erforderlich ist, gesetzlich vorgeschrieben ist oder Sie mir Ihre Einwilligung erteilt haben. In solchen Fällen stelle ich durch geeignete Garantien sicher, dass ein angemessenes Datenschutzniveau gewährleistet ist.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleSection('data-security')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">6. Datensicherheit</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'data-security' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'data-security' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ich treffe umfangreiche technische und organisatorische Sicherheitsmaßnahmen, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Meine Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert. Die Übertragung personenbezogener Daten zwischen Ihrem Browser und meinem Server erfolgt grundsätzlich verschlüsselt (SSL/TLS).
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleSection('data-rights')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">7. Betroffenenrechte</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'data-rights' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'data-rights' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Sie haben folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                    <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                    <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300">
                    Zur Ausübung dieser Rechte sowie bei Fragen zum Thema Datenschutz können Sie sich jederzeit an mich wenden. Die Kontaktdaten finden Sie im Impressum. Sie haben zudem das Recht, Beschwerde bei einer Datenschutzaufsichtsbehörde einzulegen.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleSection('data-retention')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">8. Speicherdauer</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'data-retention' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'data-retention' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ich speichere Ihre personenbezogenen Daten nur so lange, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist oder sofern dies gesetzlich vorgeschrieben ist.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Vertragsdaten werden bis zum Ablauf der gesetzlichen Aufbewahrungsfristen (in der Regel 6 bzw. 10 Jahre nach Vertragsende) aufbewahrt.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nach Ablauf dieser Fristen werden die Daten gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder -anbahnung erforderlich sind und/oder meinerseits kein berechtigtes Interesse an der Weiterspeicherung besteht.
                  </p>
                </div>
              )}
              
              <button
                onClick={() => toggleSection('ai-specifics')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">9. Besondere Hinweise zur KI-Nutzung</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'ai-specifics' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'ai-specifics' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Für den Betrieb meiner KI-gestützten Chat- und Voicebot-Lösungen werden die Eingaben und Konversationsdaten der Nutzer verarbeitet, um die Anfragen zu beantworten und die Qualität meiner Dienste zu verbessern.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Meine KI-Modelle werden auf Servern innerhalb der Europäischen Union betrieben und entsprechen den hohen Standards der DSGVO.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Bei der Implementierung meiner Lösungen beim Kunden werden detaillierte Hinweise zur Datenverarbeitung bereitgestellt und entsprechende Auftragsverarbeitungsverträge abgeschlossen.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Der Umfang der Datenerfassung und -analyse kann je nach den spezifischen Anforderungen und der vereinbarten Konfiguration variieren.
                  </p>
                </div>
              )}

              <button
                onClick={() => toggleSection('changes')}
                className="w-full flex justify-between items-center bg-gray-50 dark:bg-dark-300 hover:bg-gray-100 dark:hover:bg-dark-400 p-4 rounded-lg transition-colors text-left"
              >
                <h3 className="text-lg font-semibold">10. Änderungen der Datenschutzerklärung</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-gray-500 transition-transform duration-200 ${expandedSection === 'changes' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedSection === 'changes' && (
                <div className="bg-white dark:bg-dark-200 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mt-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen meiner Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung. Ich empfehle Ihnen, diese Datenschutzerklärung regelmäßig zu lesen, um über den Schutz der von mir erfassten personenbezogenen Daten informiert zu bleiben.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 p-6 bg-gray-50 dark:bg-dark-100 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="rounded-full bg-primary-100 dark:bg-primary-900/30 p-1 mt-0.5 text-primary-600 dark:text-primary-400">
                <AlertCircle size={16} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Haben Sie Fragen zum Datenschutz?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Bei Datenschutzfragen stehe ich Ihnen gerne zur Verfügung:
                </p>
                <p className="mt-2">
                  <a href="mailto:datenschutz@ki-helpbot.de" className="text-primary-600 dark:text-primary-400 hover:underline">datenschutz@ki-helpbot.de</a>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-6">
              <Link 
                to="/impressum"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors"
              >
                Zum Impressum
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

export default DatenschutzPage;