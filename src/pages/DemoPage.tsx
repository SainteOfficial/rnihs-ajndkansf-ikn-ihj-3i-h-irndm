import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ChatInterface from '../components/chat/ChatInterface';
import SectionWithMockup from '../components/blocks/section-with-mockup';
import { Bot, Check, ChevronDown, Code, Copy, ExternalLink, Globe, Headset, HelpCircle, MessageSquare, Mic, PauseCircle, PlayCircle, RotateCcw, Shield, Volume2, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import SEO from '../components/SEO';

function DemoPage() {
  const { t } = useTranslation();
  
  // SEO schema data for demo page
  const demoSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "KI-Helpbot Demo",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Erleben Sie die KI-Helpbot Demo mit interaktivem Chatbot und Voicebot. Testen Sie unsere KI-gestützten Kommunikationslösungen für Ihr Unternehmen.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "105"
    },
    "featureList": "24/7 Verfügbarkeit, Mehrsprachigkeit, CRM-Integration, DSGVO-Konformität, Personalisierung"
  };
  
  const [activeTab, setActiveTab] = useState<string>('chat');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const faqRefs = useRef<Record<number, HTMLButtonElement | null>>({});
  
  // Function to toggle FAQ item
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  // Function to toggle video play/pause
  const toggleVideo = () => {
    if (!videoRef.current) return;
    
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    
    setIsVideoPlaying(!isVideoPlaying);
  };
  
  // Track video play state
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (!videoElement) return;
    
    const handlePlay = () => setIsVideoPlaying(true);
    const handlePause = () => setIsVideoPlaying(false);
    const handleEnded = () => setIsVideoPlaying(false);
    
    videoElement.addEventListener('play', handlePlay);
    videoElement.addEventListener('pause', handlePause);
    videoElement.addEventListener('ended', handleEnded);
    
    return () => {
      videoElement.removeEventListener('play', handlePlay);
      videoElement.removeEventListener('pause', handlePause);
      videoElement.removeEventListener('ended', handleEnded);
    };
  }, []);

  // FAQ data
  const faqItems = [
    {
      question: "Wie funktioniert der KI-Helpbot?",
      answer: "Unser KI-Helpbot nutzt fortschrittliche Large Language Models (LLMs) und Natural Language Processing (NLP), um Kundenfragen zu verstehen und zu beantworten. Er kann auf Ihre Wissensdatenbank zugreifen und lernt kontinuierlich aus den Interaktionen, um immer besser zu werden."
    },
    {
      question: "Kann der Bot in mein bestehendes CRM integriert werden?",
      answer: "Ja, der KI-Helpbot kann nahtlos in alle gängigen CRM-Systeme wie Salesforce, HubSpot, Microsoft Dynamics und viele andere integriert werden. Die Integration erfolgt über unsere API und kann in der Regel innerhalb weniger Tage eingerichtet werden."
    },
    {
      question: "In welchen Sprachen ist der Bot verfügbar?",
      answer: "Unser Bot unterstützt derzeit über 20 Sprachen, darunter Deutsch, Englisch, Französisch, Spanisch, Italienisch, Niederländisch, Polnisch, Tschechisch, Russisch, Türkisch, Arabisch, Chinesisch, Japanisch und viele weitere. Bei Bedarf können zusätzliche Sprachen implementiert werden."
    },
    {
      question: "Wie lange dauert die Implementierung?",
      answer: "Die durchschnittliche Implementierungszeit beträgt 2-4 Wochen, abhängig von der Komplexität Ihrer Anforderungen und der Menge der zu integrierenden Daten. Für einfache Anwendungsfälle bieten wir auch eine Express-Implementierung innerhalb von 3-5 Tagen an."
    },
    {
      question: "Ist der Bot DSGVO-konform?",
      answer: "Ja, unsere Lösung ist vollständig DSGVO-konform. Alle Daten werden auf Servern in der EU verarbeitet, und wir bieten umfassende Dokumentation zur Einhaltung der Datenschutzbestimmungen. Auf Wunsch können wir auch einen Auftragsverarbeitungsvertrag (AVV) bereitstellen."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="KI-Helpbot Demo - Testen Sie unsere KI-Lösungen"
        description="Erleben Sie die Leistungsfähigkeit unserer KI-Assistenten in Aktion. Testen Sie unseren intelligenten Chatbot mit Sprachausgabe, der Ihre Kundenkommunikation revolutionieren kann. Mehrsprachig, intuitiv und 24/7 verfügbar."
        keywords="KI-Helpbot Demo, Chatbot testen, Voicebot Demo, KI-Assistent Test, kostenlose KI-Demo, Chatbot Beispiel, intelligenter Assistent, Kundenkommunikation Demo, KI-Test, interaktiver Chatbot, Sprachausgabe, DSGVO-konforme KI"
        schemaData={demoSchema}
      />

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-b from-gray-100 to-white dark:from-dark-300 dark:to-dark-200 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary-400/10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-secondary-400/10 blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 md:mb-10"
          >
            <Badge className="mb-4 px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 border-none text-sm">
              Interaktive Demo
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Erleben Sie KI in Aktion</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Testen Sie unsere intelligenten Assistenten und entdecken Sie, wie sie 
              Ihre Kundenkommunikation revolutionieren können.
            </p>
          </motion.div>

          {/* Added feature highlight badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-dark-200 shadow-sm border border-gray-200 dark:border-gray-800">
              <MessageSquare size={14} className="mr-1 text-primary-500" />
              Text-Chat
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-dark-200 shadow-sm border border-gray-200 dark:border-gray-800">
              <Mic size={14} className="mr-1 text-secondary-500" />
              Sprachausgabe
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-dark-200 shadow-sm border border-gray-200 dark:border-gray-800">
              <Globe size={14} className="mr-1 text-accent-500" />
              Mehrsprachig
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-dark-200 shadow-sm border border-gray-200 dark:border-gray-800">
              <Zap size={14} className="mr-1 text-amber-500" />
              Schnelle Antworten
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-dark-200 shadow-sm border border-gray-200 dark:border-gray-800">
              <Shield size={14} className="mr-1 text-green-500" />
              DSGVO-konform
            </span>
          </motion.div>

          {/* Tab Navigation - Added for multiple demo types */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white dark:bg-dark-200 rounded-full p-1 shadow-md">
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === 'chat' 
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100'
                }`}
              >
                <MessageSquare size={16} />
                <span>Text-Chat</span>
              </button>
              
              <button
                onClick={() => setActiveTab('voice')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === 'voice' 
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100'
                }`}
              >
                <Mic size={16} />
                <span>Voice</span>
              </button>
              
              <button
                onClick={() => setActiveTab('demo-video')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  activeTab === 'demo-video' 
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-100'
                }`}
              >
                <PlayCircle size={16} />
                <span>Video-Tour</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'chat' && (
              <motion.div
                key="chat-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <ChatInterface maxRequests={5} enableVoice={true} />
              </motion.div>
            )}
            
            {activeTab === 'voice' && (
              <motion.div
                key="voice-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto flex flex-col items-center"
              >
                <div className="mb-8 text-center">
                  <div className="bg-white dark:bg-dark-200 rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
                    <div className="flex items-center justify-center mb-4">
                      <Volume2 size={24} className="text-primary-500" />
                      <h3 className="text-xl font-semibold ml-2">Voice-Bot Demo</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Diese Demo zeigt die Sprachausgabe-Funktion unseres KI-Assistenten. 
                      Drücken Sie auf "Play", um eine Beispielantwort zu hören.
                    </p>

                    <div className="bg-gray-100 dark:bg-dark-100 rounded-lg p-4 mb-4 text-gray-700 dark:text-gray-300 relative">
                      <p className="italic">
                        "Herzlich willkommen! Ich bin der KI-Helpbot Voicebot. Ich kann Ihnen bei Fragen zu unseren Produkten und Dienstleistungen helfen, Termine vereinbaren oder Statusupdates zu Ihren Bestellungen geben. Mit meiner natürlichen Sprachverarbeitung kann ich Sie in mehreren Sprachen unterstützen und stehe Ihnen rund um die Uhr zur Verfügung."
                      </p>
                      <div className="absolute -left-3 top-4 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center text-white">
                        <Bot size={14} />
                      </div>
                    </div>

                    <button
                      onClick={toggleVideo}
                      className="flex items-center gap-2 mx-auto px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {isVideoPlaying ? (
                        <>
                          <PauseCircle size={20} />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <PlayCircle size={20} />
                          <span>Abspielen</span>
                        </>
                      )}
                    </button>
                    
                    {/* Hidden audio element */}
                    <audio ref={videoRef} className="hidden">
                      <source src="https://assets.mixkit.co/sfx/preview/mixkit-male-voice-chanting-hello-2.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    
                    <div className="mt-6 flex justify-center gap-4">
                      <div className="flex items-center gap-2">
                        <Mic size={16} className="text-primary-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Professionelle Stimmen</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe size={16} className="text-primary-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">20+ Sprachen</span>
                      </div>
                    </div>
                  </div>
                </div>
                  
                <div className="text-center mt-4">
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    Im Produktiveinsatz kann unser Voicebot in Telefonanlagen und IVR-Systeme integriert werden.
                  </p>
                  
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm hover:underline"
                  >
                    <span>Kontaktieren Sie uns für eine personalisierte Demo</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            )}
            
            {activeTab === 'demo-video' && (
              <motion.div
                key="demo-video-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <div className="rounded-xl overflow-hidden shadow-xl bg-gray-800 aspect-video">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="text-center text-white">
                      <PlayCircle size={50} className="mx-auto mb-4 text-primary-500 animate-pulse" />
                      <p className="text-lg font-semibold">Produktdemo-Video</p>
                      <p className="text-sm text-gray-400 max-w-md mx-auto mt-2">
                        In der vollständigen Version finden Sie hier eine umfassende Video-Tour durch unsere KI-Lösungen.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Möchten Sie eine vollständige Produkt-Demo mit einem unserer Experten?
                  </p>
                  <Link 
                    to="/kontakt" 
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary-600 text-white rounded-lg shadow-md hover:bg-primary-700 transition-colors"
                  >
                    <Headset size={18} />
                    <span>Persönliche Demo anfragen</span>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <button 
              onClick={() => {
                const element = document.getElementById('demo-features');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <span className="mr-2">Mehr entdecken</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Demo Notes - Enhanced to be more visually appealing */}
      <section id="demo-features" className="py-16 bg-white dark:bg-dark-200">
        <div className="container-custom max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">Funktionen unserer KI-Assistenten</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Entdecken Sie, was unsere KI-Lösungen leisten können und wie sie Ihnen in der Praxis helfen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <Card className="relative h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="rounded-full bg-primary-100 dark:bg-primary-900/20 p-2.5 text-primary-600 dark:text-primary-400">
                      <MessageSquare size={20} />
                    </div>
                    <CardTitle>Intelligente Konversation</CardTitle>
                  </div>
                  <CardDescription>
                    Natürliche Gesprächsführung mit kontextueller Erinnerung
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Versteht komplexe Anfragen und Kontext</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Personalisierte Antworten basierend auf Kundendaten</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Lernt kontinuierlich aus Interaktionen</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <Card className="relative h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="rounded-full bg-secondary-100 dark:bg-secondary-900/20 p-2.5 text-secondary-600 dark:text-secondary-400">
                      <Globe size={20} />
                    </div>
                    <CardTitle>Mehrsprachige Unterstützung</CardTitle>
                  </div>
                  <CardDescription>
                    Kommunikation mit internationalen Kunden in ihrer Sprache
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={16} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Unterstützung für über 20 Sprachen</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Automatische Spracherkennung</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-secondary-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Kulturell angepasste Kommunikation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <Card className="relative h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="rounded-full bg-accent-100 dark:bg-accent-900/20 p-2.5 text-accent-600 dark:text-accent-400">
                      <Code size={20} />
                    </div>
                    <CardTitle>Nahtlose Integration</CardTitle>
                  </div>
                  <CardDescription>
                    Verbindung mit Ihren bestehenden Systemen und Prozessen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={16} className="text-accent-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Anbindung an alle gängigen CRM-Systeme</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-accent-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">API-Schnittstellen für individuelle Integrationen</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-accent-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Einfache Einbindung in Website und Social Media</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Demo information card - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-r from-gray-50 to-white dark:from-dark-300 dark:to-dark-200 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-full bg-primary-100 dark:bg-primary-900/20 p-3 text-primary-600 dark:text-primary-400">
                    <Bot size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold">Demo-Informationen</h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Diese interaktive Demo zeigt einen Ausschnitt der Möglichkeiten unserer KI-Assistenten. Sie können Fragen zu unseren Produkten und Dienstleistungen stellen und die Antworten auch gesprochen anhören.
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary-100 dark:bg-primary-900/20 p-1 mt-0.5 text-primary-600 dark:text-primary-400">
                      <Check size={12} />
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      Dies ist eine eingeschränkte Demoversion unseres KI-Assistenten.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary-100 dark:bg-primary-900/20 p-1 mt-0.5 text-primary-600 dark:text-primary-400">
                      <Check size={12} />
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      Die Anzahl der täglichen Anfragen ist auf 5 begrenzt.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary-100 dark:bg-primary-900/20 p-1 mt-0.5 text-primary-600 dark:text-primary-400">
                      <Check size={12} />
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      Die Sprachausgabe kann durch Klicken auf das Mikrofon-Symbol aktiviert werden.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="rounded-full bg-primary-100 dark:bg-primary-900/20 p-1 mt-0.5 text-primary-600 dark:text-primary-400">
                      <Check size={12} />
                    </div>
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                      Klicken Sie auf den 3D-Ball, um die letzte Antwort erneut anzuhören (wenn Sprachausgabe aktiviert ist).
                    </span>
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline">
                    Für eine vollständige Demo oder individuelle Beratung kontaktieren Sie uns
                    <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="bg-white dark:bg-dark-200 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <div className="text-primary-500">
                      <RotateCcw size={16} />
                    </div>
                    Tägliches Limit
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Verfügbare Anfragen:</span>
                    <span className="font-bold text-primary-600 dark:text-primary-400">5 pro Tag</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-100 rounded-full mt-2">
                    <div className="h-full bg-primary-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-dark-200 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <div className="text-secondary-500">
                      <Bot size={16} />
                    </div>
                    Funktionen
                  </h4>
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Textchat</span>
                      <Badge variant="secondary" className="px-2 py-0.5 text-xs">Aktiviert</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Sprachausgabe</span>
                      <Badge variant="secondary" className="px-2 py-0.5 text-xs">Aktiviert</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">CRM-Integration</span>
                      <Badge variant="outline" className="px-2 py-0.5 text-xs text-gray-500 dark:text-gray-400">Demo</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-dark-200 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <div className="text-accent-500">
                      <Copy size={16} />
                    </div>
                    Beispielfragen
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <p className="cursor-pointer hover:text-primary-600 dark:hover:text-primary-400">Was ist KI-Helpbot?</p>
                    <p className="cursor-pointer hover:text-primary-600 dark:hover:text-primary-400">Wie kann ich einen Chatbot einrichten?</p>
                    <p className="cursor-pointer hover:text-primary-600 dark:hover:text-primary-400">Welche Sprachen werden unterstützt?</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionWithMockup
        title={
          <>
            Intelligent anpassbare<br />
            KI-Assistenten für Ihr<br />
            Unternehmen
          </>
        }
        description={
          <>
            Unsere KI-Assistenten werden auf Ihr Unternehmen angepasst.<br />
            Sie lernen Ihre Produkte, Dienstleistungen und Prozesse<br />
            kennen und verstehen, wie Sie mit Ihren Kunden<br />
            kommunizieren möchten. So können sie Ihren Kundendienst<br />
            optimal unterstützen und Ihre Marke perfekt repräsentieren.
          </>
        }
        primaryImageSrc="https://images.pexels.com/photos/7567439/pexels-photo-7567439.jpeg"
        secondaryImageSrc="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
      />

      {/* New FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-300">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Häufig gestellte Fragen</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Antworten auf die häufigsten Fragen zu unseren KI-Lösungen
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="bg-white dark:bg-dark-200 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <button
                  ref={el => faqRefs.current[index] = el}
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 px-6 text-left flex justify-between items-center"
                  aria-expanded={activeFaq === index}
                >
                  <span className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <HelpCircle size={16} className="text-primary-500" />
                    {item.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-500 transition-transform duration-200 ${activeFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Animated circles */}
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl"
            animate={{
              y: [0, 50, 0],
              opacity: [0.05, 0.08, 0.05],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl"
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.08, 0.05],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              delay: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Bereit für den nächsten Schritt?
            </motion.h2>
            
            <motion.p 
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Kontaktieren Sie uns für eine individuelle Beratung und erfahren Sie, wie unsere maßgeschneiderten KI-Lösungen Ihr Unternehmen voranbringen können.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                to="/kontakt" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg"
              >
                <Headset size={20} />
                Beratungsgespräch vereinbaren
              </Link>
              
              <Link 
                to="/leistungen" 
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/80 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300 text-lg"
              >
                Alle Leistungen entdecken
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex justify-center items-center gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm flex items-center gap-2">
                <Shield size={14} />
                <span>DSGVO-konform</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm flex items-center gap-2">
                <Zap size={14} />
                <span>Schnelle Implementierung</span>
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm flex items-center gap-2">
                <Globe size={14} />
                <span>Mehrsprachig</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Arrow right component
function ArrowRight(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default DemoPage;