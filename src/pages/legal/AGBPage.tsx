import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, FileText } from 'lucide-react';

function AGBPage() {
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
              <span className="text-gray-700 dark:text-gray-300">Allgemeine Geschäftsbedingungen</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                <FileText size={24} />
              </div>
              <h1 className="text-3xl font-bold">Allgemeine Geschäftsbedingungen</h1>
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
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300"
          >
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für sämtliche Verträge zwischen KI-Helpbot, Inhaber: Max Mustermann (nachfolgend "Anbieter") und dessen Kunden (nachfolgend "Kunde") über die Nutzung der KI-gestützten Kommunikationslösungen des Anbieters.
            </p>
            <p>
              Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nur dann und insoweit Vertragsbestandteil, als der Anbieter ihrer Geltung ausdrücklich zugestimmt hat.
            </p>
            
            <h2>2. Vertragsgegenstand</h2>
            <p>
              Der Anbieter bietet KI-gestützte Kommunikationslösungen an, insbesondere Chatbots und Voicebots für die Kundenkommunikation von Unternehmen (nachfolgend "Dienste").
            </p>
            <p>
              Der konkrete Umfang der Dienste ergibt sich aus der jeweiligen Leistungsbeschreibung, die Bestandteil des Vertrages wird.
            </p>
            
            <h2>3. Vertragsschluss</h2>
            <p>
              Die Darstellung der Dienste auf der Website stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe eines Angebots dar.
            </p>
            <p>
              Durch Absenden einer Bestellung oder Auftragserteilung gibt der Kunde ein verbindliches Angebot zum Erwerb der Dienste ab. Der Anbieter kann dieses Angebot innerhalb von 14 Tagen durch Zusendung einer Auftragsbestätigung annehmen.
            </p>
            
            <h2>4. Nutzungsrechte</h2>
            <p>
              Der Anbieter räumt dem Kunden für die Dauer des Vertrages das nicht ausschließliche, nicht übertragbare und nicht unterlizenzierbare Recht ein, die Dienste im vertraglich vereinbarten Umfang zu nutzen.
            </p>
            <p>
              Der Kunde ist nicht berechtigt, die Dienste über den vertraglich vereinbarten Umfang hinaus zu nutzen, zu vervielfältigen, zu bearbeiten oder Dritten zugänglich zu machen.
            </p>
            
            <h2>5. Pflichten des Kunden</h2>
            <p>
              Der Kunde ist verpflichtet, die für die Nutzung der Dienste erforderlichen technischen Voraussetzungen auf eigene Kosten zu schaffen.
            </p>
            <p>
              Der Kunde ist für die Inhalte, die er im Rahmen der Nutzung der Dienste bereitstellt, verantwortlich und stellt sicher, dass diese nicht gegen geltendes Recht oder Rechte Dritter verstoßen.
            </p>
            <p>
              Der Kunde ist verpflichtet, Zugangsdaten geheim zu halten und vor dem Zugriff durch unbefugte Dritte zu schützen. Bei Verdacht auf missbräuchliche Nutzung ist der Anbieter unverzüglich zu informieren.
            </p>
            
            <h2>6. Vergütung und Zahlungsbedingungen</h2>
            <p>
              Die Höhe der Vergütung ergibt sich aus der jeweiligen Vereinbarung zwischen dem Anbieter und dem Kunden.
            </p>
            <p>
              Soweit nicht anders vereinbart, sind Rechnungen innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. Der Kunde gerät mit Ablauf der Zahlungsfrist in Verzug, ohne dass es einer gesonderten Mahnung bedarf.
            </p>
            <p>
              Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in gesetzlicher Höhe zu verlangen. Die Geltendmachung eines weitergehenden Verzugsschadens bleibt vorbehalten.
            </p>
            
            <h2>7. Laufzeit und Kündigung</h2>
            <p>
              Soweit nicht anders vereinbart, wird der Vertrag auf unbestimmte Zeit geschlossen und kann von beiden Parteien mit einer Frist von drei Monaten zum Monatsende gekündigt werden.
            </p>
            <p>
              Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
            <p>
              Die Kündigung bedarf der Textform.
            </p>
            
            <h2>8. Gewährleistung und Haftung</h2>
            <p>
              Der Anbieter gewährleistet die Funktionsfähigkeit der Dienste im vertraglich vereinbarten Umfang. Mängel sind vom Kunden unverzüglich zu rügen.
            </p>
            <p>
              Der Anbieter haftet unbeschränkt bei Vorsatz oder grober Fahrlässigkeit, für die Verletzung von Leben, Leib oder Gesundheit, nach den Vorschriften des Produkthaftungsgesetzes sowie im Umfang einer vom Anbieter übernommenen Garantie.
            </p>
            <p>
              Bei leicht fahrlässiger Verletzung einer Pflicht, die wesentlich für die Erreichung des Vertragszwecks ist (Kardinalpflicht), ist die Haftung des Anbieters der Höhe nach begrenzt auf den Schaden, der nach der Art des fraglichen Geschäfts vorhersehbar und typisch ist.
            </p>
            <p>
              Eine weitergehende Haftung des Anbieters besteht nicht.
            </p>
            <p>
              Die vorstehenden Haftungsbeschränkungen gelten auch für die persönliche Haftung der Mitarbeiter, Vertreter und Erfüllungsgehilfen des Anbieters.
            </p>
            
            <h2>9. Datenschutz</h2>
            <p>
              Der Anbieter verarbeitet personenbezogene Daten des Kunden und seiner Endkunden im Einklang mit den geltenden datenschutzrechtlichen Bestimmungen, insbesondere der DSGVO und dem BDSG.
            </p>
            <p>
              Nähere Informationen zur Datenverarbeitung können der <Link to="/datenschutz" className="text-primary-600 dark:text-primary-400 hover:underline">Datenschutzerklärung</Link> entnommen werden.
            </p>
            <p>
              Soweit der Anbieter personenbezogene Daten im Auftrag des Kunden verarbeitet, schließen die Parteien einen gesonderten Vertrag zur Auftragsverarbeitung.
            </p>
            
            <h2>10. Änderung der AGB</h2>
            <p>
              Der Anbieter ist berechtigt, diese AGB zu ändern, soweit die Änderung für den Kunden zumutbar ist.
            </p>
            <p>
              Der Anbieter wird den Kunden über Änderungen der AGB in Textform informieren. Die Änderungen gelten als genehmigt, wenn der Kunde nicht innerhalb von vier Wochen nach Zugang der Änderungsmitteilung widerspricht.
            </p>
            
            <h2>11. Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p>
              Erfüllungsort ist der Sitz des Anbieters. Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist der Sitz des Anbieters, sofern der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen ist.
            </p>
            <p>
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt eine wirksame Bestimmung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung möglichst nahe kommt.
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
              Kontakt bei Fragen zu unseren AGB
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Bei Fragen zu unseren Allgemeinen Geschäftsbedingungen können Sie mich gerne kontaktieren:
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <a 
                href="mailto:info@ki-helpbot.de" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
              >
                info@ki-helpbot.de
              </a>
              <Link 
                to="/kontakt" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-200 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-dark-100 transition-colors"
              >
                Kontaktformular
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AGBPage;