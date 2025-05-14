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

  // Handler für erfolgreichen Load
  const handleLoad = () => {
    console.log('Spline scene loaded successfully');
    setIsLoading(false);
    setIsLoaded(true);
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
    </div>
  );
} 