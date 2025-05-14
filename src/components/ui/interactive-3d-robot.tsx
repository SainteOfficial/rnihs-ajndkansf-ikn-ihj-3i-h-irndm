'use client';

import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import ErrorBoundary from '../common/ErrorBoundary';

// Dynamisches Laden der Spline-Komponente mit erhöhtem Timeout
const Spline = lazy(() => {
  return new Promise((resolve) => {
    // Gib mehr Zeit zum Laden - besonders wichtig für langsame Verbindungen
    const importPromise = import('@splinetool/react-spline');
    const timeoutId = setTimeout(() => {
      console.log('Spline loading timeout - trying to proceed anyway');
    }, 10000); // 10 Sekunden Timeout

    importPromise.then((module) => {
      clearTimeout(timeoutId);
      resolve(module);
    });
  });
});

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadingError, setLoadingError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [isIOSDevice, setIsIOSDevice] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const splineRef = useRef(null);
  
  // Detect iOS device
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOSDevice(isIOS);
  }, []);

  // Mobile-spezifische Anpassungen
  useEffect(() => {
    // Erkennen, ob wir auf einem mobilen Gerät sind
    const isMobileDevice = window.innerWidth < 768 || 
                          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobileDevice) {
      console.log("Detected mobile device, applying professional container");
      
      // Alle unnötigen Abdeckungselemente entfernen
      const removeExistingCovers = () => {
        const covers = document.querySelectorAll('[class*="absolute bottom-"][class*="right-"]');
        covers.forEach(cover => {
          if (cover.classList.contains('mobile-watermark-cover')) return; // Eigene Elemente behalten
          cover.remove();
        });
      };
      
      // Professionellen Container um den 3D-Roboter erstellen
      const createProfessionalContainer = () => {
        try {
          // Bestehenden Container finden
          if (containerRef.current) {
            // Bestehende mobile Container entfernen, um Duplikate zu vermeiden
            const existingContainers = containerRef.current.querySelectorAll('.mobile-container-overlay');
            existingContainers.forEach(container => container.remove());
            
            // Eleganten Container erstellen
            const container = document.createElement('div');
            container.className = 'mobile-container-overlay';
            container.style.position = 'absolute';
            container.style.bottom = '0';
            container.style.left = '0';
            container.style.right = '0';
            container.style.height = '100%';
            container.style.pointerEvents = 'none';
            container.style.zIndex = '999';
            container.style.background = 'transparent';
            
            // Elegante untere Leiste hinzufügen
            const bottomBar = document.createElement('div');
            bottomBar.className = 'mobile-watermark-cover';
            bottomBar.style.position = 'absolute';
            bottomBar.style.bottom = '0';
            bottomBar.style.left = '0';
            bottomBar.style.right = '0';
            bottomBar.style.height = '40px';
            bottomBar.style.background = 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 80%, rgba(0,0,0,0) 100%)';
            bottomBar.style.backdropFilter = 'blur(3px)';
            bottomBar.style.zIndex = '1000';
            
            // Logo zur Leiste hinzufügen
            const logo = document.createElement('div');
            logo.className = 'mobile-logo';
            logo.style.position = 'absolute';
            logo.style.bottom = '8px';
            logo.style.left = '50%';
            logo.style.transform = 'translateX(-50%)';
            logo.style.color = 'rgba(255,255,255,0.7)';
            logo.style.fontSize = '14px';
            logo.style.fontWeight = '500';
            logo.style.zIndex = '1001';
            logo.style.fontFamily = 'sans-serif';
            logo.textContent = 'KI-HELPBOT';
            
            // Elemente einfügen
            container.appendChild(bottomBar);
            container.appendChild(logo);
            containerRef.current.appendChild(container);
          }
        } catch (e) {
          console.error("Error creating professional container:", e);
        }
      };
      
      // Verzögert ausführen und wiederholen
      setTimeout(removeExistingCovers, 300);
      setTimeout(createProfessionalContainer, 500);
      
      // Wiederholen um sicherzugehen, dass es nach allen DOM-Änderungen noch da ist
      const intervalId = setInterval(() => {
        removeExistingCovers();
        createProfessionalContainer();
      }, 2000);
      
      return () => {
        clearInterval(intervalId);
      };
    }
  }, []);

  useEffect(() => {
    // More aggressive watermark remover that works with iframes
    const removeWatermarks = () => {
      // Target watermarks inside shadow DOM and iframes if possible
      try {
        // Look for all iframes that might contain Spline content
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
          try {
            // Try to access iframe content if from same origin
            const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
            if (iframeDoc) {
              // Look for watermark links
              const watermarkLinks = iframeDoc.querySelectorAll('a[href*="spline.design"]');
              watermarkLinks.forEach(link => {
                const parent = link.parentElement;
                if (parent) {
                  // Größe prüfen, um wesentliche Elemente nicht zu verstecken
                  const rect = parent.getBoundingClientRect();
                  if (rect.width < 150 && rect.height < 50) {
                    parent.style.display = 'none';
                    parent.style.opacity = '0';
                    parent.style.visibility = 'hidden';
                    parent.style.pointerEvents = 'none';
                  }
                }
              });
              
              // Gezieltere Suche nach Elementen in der unteren rechten Ecke
              const allElements = iframeDoc.querySelectorAll('*');
              allElements.forEach(el => {
                if (el.tagName !== 'CANVAS' && el.tagName !== 'BODY' && el.tagName !== 'HTML') {
                  const style = window.getComputedStyle(el);
                  // Gezielter nach kleinen Elementen in der Ecke suchen
                  if (style.position === 'absolute' && 
                      style.bottom === '0px' && 
                      style.right === '0px') {
                    
                    const rect = el.getBoundingClientRect();
                    if (rect.width < 120 && rect.height < 50) {
                      // Nur kleine Elemente in der Ecke verstecken
                      el.style.display = 'none';
                      el.style.opacity = '0';
                      el.style.visibility = 'hidden';
                    }
                  }
                }
              });
              
              // Try to insert our own covering element - gezielter platzieren
              try {
                const canvasContainer = iframeDoc.querySelector('canvas')?.parentElement;
                if (canvasContainer) {
                  const coverDiv = iframeDoc.createElement('div');
                  coverDiv.style.position = 'absolute';
                  coverDiv.style.bottom = '0';
                  coverDiv.style.right = '0';
                  coverDiv.style.width = '100px';
                  coverDiv.style.height = '40px';
                  coverDiv.style.backgroundColor = 'black';
                  coverDiv.style.zIndex = '9999';
                  coverDiv.style.pointerEvents = 'none';
                  canvasContainer.appendChild(coverDiv);
                }
              } catch (e) {
                // Ignore errors with manipulating iframe content
              }
            }
          } catch (e) {
            // Cross-origin iframe access will fail, which is expected
          }
        });
      } catch (e) {
        // If this fails for any reason, continue with other methods
      }
    };
    
    // Run on initial mount with slight delay
    setTimeout(removeWatermarks, 1000);
    
    // Then periodically check, but with longer interval
    const intervalId = setInterval(removeWatermarks, 3000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Handler für erfolgreichen Load
  const handleLoad = () => {
    console.log('Spline scene loaded successfully');
    setIsLoading(false);
    setIsLoaded(true);
    
    // Direkt nach dem Laden des Modells Wasserzeichen entfernen
    setTimeout(() => {
      try {
        // Nach dem Spline-Container suchen
        const splineCanvas = containerRef.current?.querySelector('canvas');
        if (splineCanvas) {
          // Alle möglichen Wasserzeichen-Elemente durchlaufen
          const parent = splineCanvas.parentElement;
          if (parent) {
            // Alles durchsuchen, was kein Canvas ist
            Array.from(parent.children).forEach(child => {
              if (child !== splineCanvas && child.tagName !== 'CANVAS') {
                // Wenn es ein Link oder ein typisches Wasserzeichen-Element ist
                if (
                  child.tagName === 'A' || 
                  (window.getComputedStyle(child).position === 'absolute' && 
                   window.getComputedStyle(child).bottom === '0px' && 
                   window.getComputedStyle(child).right === '0px')
                ) {
                  console.log("Removing watermark element after load:", child);
                  child.style.display = 'none';
                  child.style.visibility = 'hidden';
                  child.style.opacity = '0';
                }
              }
            });
            
            // Zusätzliches Abdeckungselement zum Canvas-Parent hinzufügen
            const watermarkCover = document.createElement('div');
            watermarkCover.style.position = 'absolute';
            watermarkCover.style.bottom = '0';
            watermarkCover.style.right = '0';
            watermarkCover.style.width = '100px';
            watermarkCover.style.height = '40px';
            watermarkCover.style.background = 'black';
            watermarkCover.style.zIndex = '999999';
            parent.appendChild(watermarkCover);
          }
        }
      } catch (e) {
        console.log("Error handling watermark after load:", e);
      }
    }, 100); // Kurze Verzögerung für bessere Zuverlässigkeit
  };

  // Handler für Fehler
  const handleError = (e: any) => {
    console.error('Error loading Spline scene:', e);
    setLoadingError(true);
    setIsLoading(false);
    setShowFallback(true);
  };

  // Vereinfachter Fallback für die 3D-Komponente
  const fallbackContent = (
    <div className={`w-full h-full flex items-center justify-center bg-black/50 backdrop-blur-md rounded-xl ${className}`}>
      <div className="text-center p-8">
        <div className="w-24 h-24 rounded-full bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-primary-400"
          >
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="5" r="2" />
            <path d="M12 7v4" />
            <line x1="8" y1="16" x2="8" y2="16" />
            <line x1="16" y1="16" x2="16" y2="16" />
          </svg>
        </div>
        <h3 className="text-white/90 text-lg font-medium mb-2">KI-Assistent</h3>
        <p className="text-gray-400 text-sm">
          Klicken Sie hier, um fortzufahren
        </p>
      </div>
    </div>
  );

  // Add click handler to enable audio on iOS
  const enableAudio = () => {
    setAudioEnabled(true);
    // Create and play a silent audio context to unlock audio
    const audioContext = new (window.AudioContext || window['webkitAudioContext'])();
    const oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(0.001);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* iOS Audio Unlock Banner */}
      {isIOSDevice && !audioEnabled && (
        <div 
          onClick={enableAudio}
          className="absolute top-0 left-0 right-0 z-50 bg-primary-600/80 text-white text-center py-2 px-4 rounded-t-lg cursor-pointer"
        >
          Tippen Sie hier, um Audio zu aktivieren
        </div>
      )}
      
      <ErrorBoundary fallback={fallbackContent}>
        <Suspense
          fallback={
            <div className={`w-full h-full flex items-center justify-center bg-gray-900 text-white ${className}`}>
              <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
              </svg>
              <span className="ml-2">Lade 3D-Modell...</span>
            </div>
          }
        >
          {loadingError ? fallbackContent : (
            <Spline
              scene={scene}
              className={className}
              onLoad={handleLoad}
              onError={handleError}
            />
          )}
        </Suspense>
      </ErrorBoundary>
      
      {/* Nur minimale diskrete Abdeckung behalten */}
      <div className="hidden md:block absolute bottom-0 right-0 w-36 h-14 bg-black/90 z-10 pointer-events-none"></div>
      <div 
        className="hidden md:block absolute bottom-0 right-0 w-48 h-24 pointer-events-none z-20"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
        }}
      ></div>
    </div>
  );
} 