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
                  parent.style.display = 'none';
                  parent.style.opacity = '0';
                  parent.style.visibility = 'hidden';
                  parent.style.pointerEvents = 'none';
                }
              });
            }
          } catch (e) {
            // Cross-origin iframe access will fail, which is expected
          }
        });
      } catch (e) {
        // If this fails for any reason, continue with other methods
      }
    };
    
    // Run on initial mount
    removeWatermarks();
    
    // Then periodically check
    const intervalId = setInterval(removeWatermarks, 500);
    
    return () => clearInterval(intervalId);
  }, []);

  // Handler für erfolgreichen Load
  const handleLoad = () => {
    console.log('Spline scene loaded successfully');
    setIsLoading(false);
  };

  // Handler für Fehler
  const handleError = (e: any) => {
    console.error('Error loading Spline scene:', e);
    setLoadingError(true);
    setIsLoading(false);
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

  return (
    <div className="relative w-full h-full" ref={containerRef}>
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
      
      {/* Corner covers to hide the watermark better */}
      <div className="absolute bottom-0 right-0 w-36 h-14 bg-black z-10 pointer-events-none"></div>
      <div 
        className="absolute bottom-0 right-0 w-48 h-24 pointer-events-none z-20"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0) 100%)',
        }}
      ></div>
      
      {/* Multi-layered approach to combat various watermark placement techniques */}
      <div className="absolute bottom-5 right-5 w-36 h-10 bg-black/90 z-[1000] pointer-events-none"></div>
    </div>
  );
} 