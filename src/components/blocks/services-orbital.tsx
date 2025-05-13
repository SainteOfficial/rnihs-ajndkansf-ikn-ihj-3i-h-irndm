import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageSquare, Mic, Database, BarChart, Calendar, Globe, Shield, Zap, ChevronRight, X, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
  relatedIds: number[];
  status: "primary" | "secondary" | "accent";
}

interface ServicesOrbitalProps {
  className?: string;
}

export default function ServicesOrbital({ className }: ServicesOrbitalProps) {
  const { t } = useTranslation();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const serviceItems: ServiceItem[] = [
    {
      id: 1,
      title: "Chatbots",
      description: "Intelligente Textassistenten für Ihre Website und Social-Media-Kanäle",
      icon: MessageSquare,
      color: "#0078f2",
      features: [
        "Anpassbare Persönlichkeit",
        "24/7 Verfügbarkeit",
        "Mehrsprachige Unterstützung",
        "Nahtlose Integration in Ihre Website"
      ],
      relatedIds: [3, 5, 7],
      status: "primary"
    },
    {
      id: 2,
      title: "Voicebots",
      description: "Natürlich klingende Sprachassistenten für Telefonie und Sprachanwendungen",
      icon: Mic,
      color: "#14b8a6",
      features: [
        "Natürlich klingende Stimmen",
        "Spracherkennung",
        "Integration in Telefonanlagen",
        "Mehrsprachige Unterstützung"
      ],
      relatedIds: [3, 5, 7],
      status: "secondary"
    },
    {
      id: 3,
      title: "CRM-Integration",
      description: "Nahtlose Anbindung an Ihr bestehendes CRM-System",
      icon: Database,
      color: "#f97316",
      features: [
        "Bidirektionale Synchronisation",
        "Automatisierte Kundendatenpflege",
        "Integrierte Analysen",
        "Benutzerfreundliche Schnittstellen"
      ],
      relatedIds: [1, 2, 6],
      status: "accent"
    },
    {
      id: 4,
      title: "Datenanalyse",
      description: "Detaillierte Einblicke in Kundeninteraktionen und -bedürfnisse",
      icon: BarChart,
      color: "#0078f2",
      features: [
        "Kundenverhaltensmuster",
        "Interaktionsanalysen",
        "Umsatzprognosen",
        "Dashboards und Berichte"
      ],
      relatedIds: [3, 6, 7],
      status: "primary"
    },
    {
      id: 5,
      title: "Terminvereinbarung",
      description: "Automatisierte Terminbuchung und -verwaltung",
      icon: Calendar,
      color: "#14b8a6",
      features: [
        "Kalenderintegration",
        "Automatische Erinnerungen",
        "Stornierungsverwaltung",
        "Ressourcenplanung"
      ],
      relatedIds: [1, 2, 6],
      status: "secondary"
    },
    {
      id: 6,
      title: "Mehrsprachigkeit",
      description: "Unterstützung für über 20 Sprachen für internationale Kommunikation",
      icon: Globe,
      color: "#f97316",
      features: [
        "Automatische Spracherkennung",
        "Kulturelle Anpassungen",
        "Unterstützung für idiomatische Ausdrücke",
        "Verschiedene Dialekte und Akzente"
      ],
      relatedIds: [1, 2, 3, 4],
      status: "accent"
    },
    {
      id: 7,
      title: "Sicherheit & Compliance",
      description: "DSGVO-konforme Lösungen mit höchsten Sicherheitsstandards",
      icon: Shield,
      color: "#0078f2",
      features: [
        "Ende-zu-Ende-Verschlüsselung",
        "DSGVO-Konformität",
        "Regelmäßige Sicherheitsaudits",
        "Granulare Zugriffskontrollen"
      ],
      relatedIds: [1, 2, 3],
      status: "primary"
    },
    {
      id: 8,
      title: "Schnelle Implementierung",
      description: "Setzen Sie KI-Helpbot in wenigen Tagen ein, nicht Wochen oder Monaten",
      icon: Zap,
      color: "#14b8a6",
      features: [
        "Schnelle Einrichtung",
        "Vorgefertigte Templates",
        "Benutzerfreundliche Verwaltungsoberfläche",
        "Umfassende Dokumentation"
      ],
      relatedIds: [1, 2, 5],
      status: "secondary"
    }
  ];

  useEffect(() => {
    // Set isVisible after a timeout to allow for proper initialization
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && isVisible) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.2) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, isVisible]);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = serviceItems.findIndex((item) => item.id === nodeId);
    const totalNodes = serviceItems.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 180; // Orbit radius
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.6,
      Math.min(1, 0.6 + 0.4 * ((1 + Math.sin(radian)) / 2))
    );

    // Scale based on position in orbit (larger when in front, smaller when in back)
    const scale = 0.9 + 0.2 * ((1 + Math.sin(radian)) / 2);

    return { x, y, angle, zIndex, opacity, scale };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = serviceItems.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusColor = (status: ServiceItem["status"]): string => {
    switch (status) {
      case "primary":
        return "bg-primary-500 text-white border-white";
      case "secondary":
        return "bg-secondary-500 text-white border-white";
      case "accent":
        return "bg-accent-500 text-white border-white";
      default:
        return "bg-primary-500 text-white border-white";
    }
  };

  return (
    <div className={cn("py-10 md:py-20 w-full bg-gray-100 dark:bg-dark-300", className)}>
      <div className="text-center mb-12">
        <h2 className="gradient-text text-3xl md:text-4xl font-semibold mb-4">
          {t('services.title')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {t('services.subtitle')}
        </p>
      </div>

      <div
        className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden"
        ref={containerRef}
        onClick={handleContainerClick}
      >
        <div
          className="absolute w-full md:max-w-4xl h-full flex items-center justify-center transition-all duration-1000"
          ref={orbitRef}
        >
          {/* Center Node - KI-Helpbot */}
          <motion.div
            className="absolute z-20 w-24 h-24 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: isVisible ? 1 : 0, 
              opacity: isVisible ? 1 : 0,
              boxShadow: isVisible ? "0 0 20px rgba(30, 150, 251, 0.5)" : "none"
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="absolute w-28 h-28 rounded-full border border-white/20 animate-ping opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
            <motion.div 
              className="absolute w-34 h-34 rounded-full border border-white/10 animate-ping opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
            />
            
            <Bot className="text-white w-12 h-12" />
          </motion.div>

          {/* Orbital Ring */}
          <motion.div 
            className="absolute w-[380px] h-[380px] rounded-full border border-white/10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isVisible ? 0.5 : 0, scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 1, delay: 0.2 }}
          />

          {/* Service Nodes */}
          {serviceItems.map((item, index) => {
            const position = calculateNodePosition(index, serviceItems.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;
            const statusColor = getStatusColor(item.status);

            return (
              <motion.div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: activeNodeId && !isExpanded && !isRelated ? 0.4 : position.opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? (activeNodeId && !isExpanded && !isRelated ? 0.4 : position.opacity) : 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Background Pulse Effect */}
                <motion.div
                  className={`absolute rounded-full ${
                    isPulsing ? "animate-pulse" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: "60px",
                    height: "60px",
                    left: "-15px",
                    top: "-15px",
                  }}
                />

                {/* Service Icon */}
                <motion.div
                  className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? statusColor
                      : isRelated
                      ? `bg-${item.status}-400 text-white`
                      : "bg-white/90 dark:bg-dark-200 text-gray-700 dark:text-gray-200"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-white shadow-lg shadow-primary-500/30"
                      : isRelated
                      ? "border-white/80 animate-pulse"
                      : "border-gray-200 dark:border-dark-100"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : "hover:scale-110"}
                `}
                  whileHover={{ 
                    scale: isExpanded ? 1.25 : 1.1,
                    boxShadow: `0 0 10px ${item.color}50`
                  }}
                >
                  <Icon size={18} />
                </motion.div>

                {/* Service Title */}
                <motion.div
                  className={`
                  absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  transition-all duration-300
                  ${isExpanded ? "text-primary-500 dark:text-primary-400 scale-110" : "text-gray-700 dark:text-gray-300"}
                `}
                >
                  {item.title}
                </motion.div>

                {/* Expanded Service Card */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-16 left-1/2 -translate-x-1/2 z-30 w-64"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Card className="bg-white dark:bg-dark-200 border border-gray-200 dark:border-gray-700 shadow-xl overflow-visible">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-300 dark:bg-gray-600"></div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white dark:bg-dark-100 border border-gray-300 dark:border-gray-600 text-gray-500 shadow-md hover:text-primary-500 z-10"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleItem(item.id);
                          }}
                        >
                          <X size={12} />
                        </Button>
                        
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-center">
                            <Badge
                              className={`px-2 py-0.5 text-xs ${
                                item.status === "primary"
                                  ? "bg-primary-500"
                                  : item.status === "secondary"
                                  ? "bg-secondary-500"
                                  : "bg-accent-500"
                              }`}
                            >
                              {item.status === "primary"
                                ? "Premium"
                                : item.status === "secondary"
                                ? "Standard"
                                : "Erweiterung"}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg mt-2 text-gray-800 dark:text-white">
                            {item.title}
                          </CardTitle>
                        </CardHeader>
                        
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            {item.description}
                          </p>

                          <div className="space-y-2">
                            {item.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <ChevronRight size={14} className="text-primary-500 mt-1 flex-shrink-0" />
                                <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {item.relatedIds.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                              <div className="flex items-center mb-2 gap-1">
                                <Info size={12} className="text-gray-500 dark:text-gray-400" />
                                <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                  Verbundene Dienste
                                </h4>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {item.relatedIds.map((relatedId) => {
                                  const relatedItem = serviceItems.find(
                                    (i) => i.id === relatedId
                                  );
                                  if (!relatedItem) return null;
                                  const RelatedIcon = relatedItem.icon;
                                  return (
                                    <Button
                                      key={relatedId}
                                      variant="outline"
                                      size="sm"
                                      className="h-7 px-2 py-0 text-xs bg-gray-50 dark:bg-dark-100 border-gray-200 dark:border-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900/10 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleItem(relatedId);
                                      }}
                                    >
                                      <RelatedIcon size={12} className="mr-1" />
                                      {relatedItem.title}
                                    </Button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Instruction Text */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500 dark:text-gray-400">
          Klicken Sie auf einen Service für mehr Details
        </div>
      </div>
    </div>
  );
}

// Helper for classnames
function cn(...inputs: (string | undefined)[]) {
  return inputs.filter(Boolean).join(' ');
}