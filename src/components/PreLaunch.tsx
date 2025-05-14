import { useState, FormEvent, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Meteors } from './ui/meteors';
import { InteractiveRobotSpline } from './ui/interactive-3d-robot';
import { cn } from '../lib/utils';

interface PreLaunchProps {
  onAuthenticate: (isAuthenticated: boolean) => void;
  password: string;
}

export default function PreLaunch({ onAuthenticate, password }: PreLaunchProps) {
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showNewsletter, setShowNewsletter] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isIOSDevice, setIsIOSDevice] = useState(false);
  const audioContextRef = useRef(null);
  
  // Robot 3D model URL
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (inputPassword === password) {
      // Set authenticated in local storage
      localStorage.setItem('siteAccessAuth', 'true');
      // Call the callback to update authentication state
      onAuthenticate(true);
    } else {
      setError('Invalid password. Please try again.');
      setInputPassword('');
    }
  };

  // Handle newsletter submission
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send this to your API
    console.log('Newsletter signup:', email);
    setSubscribed(true);
    setTimeout(() => {
      setShowNewsletter(false);
      setEmail('');
    }, 3000);
  };

  // Handle Spline load event
  const handleSplineLoad = () => {
    console.log('Spline scene loaded in PreLaunch component');
    setSplineLoaded(true);
  };

  // Detect iOS device
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIOSDevice(isIOS);
    
    // Setup audio context for iOS
    if (isIOS) {
      try {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
          audioContextRef.current = new AudioContext();
        }
      } catch (e) {
        console.error("Failed to initialize AudioContext", e);
      }
    }
  }, []);
  
  // Function to unlock audio on iOS
  const unlockAudioForIOS = () => {
    if (isIOSDevice && audioContextRef.current) {
      try {
        // Create silent oscillator to unlock audio
        const oscillator = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();
        gainNode.gain.value = 0.01; // Very low volume
        oscillator.connect(gainNode);
        gainNode.connect(audioContextRef.current.destination);
        oscillator.start(0);
        oscillator.stop(0.1); // Short duration
      } catch (e) {
        console.error("Error unlocking audio:", e);
      }
    }
  };
  
  // Handle robot click
  const handleRobotClick = () => {
    unlockAudioForIOS();
    setShowForm(true);
  };

  // Enhanced watermark removal for better mobile experience
  useEffect(() => {
    // Detect mobile device
    const isMobileDevice = window.innerWidth < 768 || 
                          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    const createProfessionalMobileExperience = () => {
      try {
        // Find the robot container
        const robotContainer = document.querySelector('.spline-canvas')?.parentElement;
        if (robotContainer) {
          // Remove any existing mobile overlays
          const existingOverlays = robotContainer.querySelectorAll('.mobile-professional-overlay');
          existingOverlays.forEach(overlay => overlay.remove());
          
          // Create a professional footer for mobile
          if (isMobileDevice) {
            // Create footer gradient bar
            const footerBar = document.createElement('div');
            footerBar.className = 'mobile-professional-overlay';
            footerBar.style.position = 'absolute';
            footerBar.style.left = '0';
            footerBar.style.right = '0';
            footerBar.style.bottom = '0';
            footerBar.style.height = '40px';
            footerBar.style.background = 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0) 100%)';
            footerBar.style.zIndex = '99999';
            footerBar.style.pointerEvents = 'none';
            
            // Add logo to footer
            const logo = document.createElement('div');
            logo.style.position = 'absolute';
            logo.style.left = '50%';
            logo.style.bottom = '10px';
            logo.style.transform = 'translateX(-50%)';
            logo.style.fontFamily = 'sans-serif';
            logo.style.fontSize = '14px';
            logo.style.fontWeight = '600';
            logo.style.color = 'rgba(255,255,255,0.7)';
            logo.textContent = 'KI-HELPBOT';
            footerBar.appendChild(logo);
            
            robotContainer.appendChild(footerBar);
          }
        }
      } catch (e) {
        console.error('Error creating professional mobile experience:', e);
      }
    };
    
    // Run with delay to ensure everything is loaded
    const initialTimeout = setTimeout(createProfessionalMobileExperience, 2000);
    const intervalId = setInterval(createProfessionalMobileExperience, 5000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(intervalId);
    };
  }, []);

  // This effect runs after render to locate and hide any Spline watermarks
  useEffect(() => {
    // Create a repeating function to handle the watermark
    const hideWatermark = () => {
      // Find any potential watermark elements with various selectors
      const possibleWatermarks = [
        // Direct link selector - nur Links zu Spline suchen
        document.querySelectorAll('a[href*="spline.design"]'),
        // Bottom right positioned elements - nur kleine Elemente in der unteren rechten Ecke
        document.querySelectorAll('div[style*="position: absolute"][style*="bottom: 0"][style*="right: 0"][style*="height"]'),
        // Kleine Elemente die "Made with" enthalten
        document.querySelectorAll('div:not(.spline-fallback) div[style*="position: absolute"]')
      ];
      
      // Process all found elements
      possibleWatermarks.forEach(elements => {
        elements.forEach(element => {
          // WICHTIG: Hauptcontainer niemals verstecken
          if (element.classList.contains('fixed') && element.classList.contains('inset-0')) {
            console.log("Ignoring main container", element);
            return;
          }
          
          // Check if element is too large (likely not a watermark)
          const rect = element.getBoundingClientRect();
          if (rect.width > 150 && rect.height > 150) {
            console.log("Ignoring large element", element);
            return;
          }
          
          // Check if it looks like a watermark
          const isWatermark = 
            (element.textContent?.toLowerCase()?.includes('spline') || 
             element.textContent?.toLowerCase()?.includes('made with') ||
             element.getAttribute('href')?.includes('spline.design') ||
             // Nur kleine Elemente in der Ecke
             (element.style?.position === 'absolute' && 
              element.style?.bottom === '0px' && 
              element.style?.right === '0px' &&
              element.clientWidth < 150 &&
              element.clientHeight < 50));
          
          if (isWatermark) {
            console.log("Found Spline watermark", element);
            // Hide the element itself
            element.style.display = 'none';
            element.style.opacity = '0';
            element.style.visibility = 'hidden';
            element.style.pointerEvents = 'none';
            
            // Hide parent only if it's not a major container
            const parent = element.parentElement;
            if (parent && !parent.classList.contains('fixed') && !parent.classList.contains('inset-0')) {
              const parentRect = parent.getBoundingClientRect();
              if (parentRect.width < 200 && parentRect.height < 200) {
                parent.style.display = 'none';
                parent.style.opacity = '0';
                parent.style.visibility = 'hidden';
                parent.style.pointerEvents = 'none';
              }
            }
          }
        });
      });
      
      // ENTFERNT: Kein Verstecken von Canvas-Geschwistern mehr, das war zu aggressiv
    };

    // Run immediately after mount
    setTimeout(hideWatermark, 500); // Kurze Verzögerung, damit die Seite zuerst richtig geladen wird
    
    // Create an interval that runs less frequently to catch watermarks
    const intervalId = setInterval(hideWatermark, 2000); // Längeres Intervall, weniger aggressiv
    
    return () => clearInterval(intervalId);
  }, []);

  // This effect adds a CSP workaround
  useEffect(() => {
    // Create a script element for Spline loader
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/runtime@0.9.481/build/spline.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {/* Main container - everything centered */}
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {/* Extreme depth effect with layered backgrounds */}
        {/* First set of layers - outermost backgrounds */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          {/* Super faint stars in background */}
          <div className="absolute inset-0">
            {/* Random star dots - increased brightness */}
            {Array.from({ length: 300 }).map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  width: `${Math.random() > 0.9 ? 3 : Math.random() > 0.7 ? 2 : 1}px`,
                  height: `${Math.random() > 0.9 ? 3 : Math.random() > 0.7 ? 2 : 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `pulse ${2 + Math.random() * 4}s infinite ${Math.random() * 2}s ease-in-out`,
                  opacity: Math.random() * 0.5 + 0.25,
                  boxShadow: `0 0 ${Math.random() * 5 + 2}px rgba(255, 255, 255, 0.7)`
                }}
              />
            ))}
          </div>
          
          {/* Far background meteors - increased visibility */}
          <div className="absolute inset-0 overflow-hidden opacity-90">
            <Meteors number={30} />
          </div>
        </div>

        {/* Digital circuit lines for AI/tech theme - NEW */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => {
            const startY = Math.random() * 100;
            const length = 10 + Math.random() * 50;
            const thickness = Math.random() > 0.8 ? 2 : 1;
            const glow = Math.random() > 0.7;
            
            return (
              <div 
                key={i}
                className={`absolute h-[${thickness}px] bg-cyan-400`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${startY}%`,
                  width: `${length}px`,
                  height: `${thickness}px`,
                  opacity: 0.1 + Math.random() * 0.2,
                  boxShadow: glow ? '0 0 8px #0ea5e9' : 'none',
                  transform: `rotate(${Math.random() > 0.5 ? 90 : 0}deg)`,
                }}
              />
            );
          })}
        </div>

        {/* Second layer - deep space gradients */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Ultra-smooth radial gradient - made less opaque to see meteors better */}
          <div 
            className="absolute"
            style={{
              background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.9) 60%)',
              width: '300vmax',
              height: '300vmax',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.8
            }}
          ></div>
          
          {/* Secondary smoother gradient - made less opaque */}
          <div 
            className="absolute"
            style={{
              background: 'radial-gradient(circle at center, rgba(0,0,0,0) 5%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,1) 80%)',
              width: '200vmax',
              height: '200vmax',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              opacity: 0.9,
              mixBlendMode: 'multiply'
            }}
          ></div>
        </div>
        
        {/* Third layer - inner space effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Enhanced futuristic glow */}
          <div 
            className="absolute"
            style={{
              background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.08) 0%, rgba(168, 85, 247, 0.05) 25%, rgba(0,0,0,0) 50%)',
              width: '150vmax',
              height: '150vmax',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          ></div>
          
          {/* Closer meteors for parallax depth effect - increased opacity */}
          <div className="absolute inset-0 opacity-90 overflow-hidden">
            <Meteors number={15} />
          </div>
        </div>
        
        {/* Animated light beams - NEW */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <div 
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent"
              style={{
                height: '100%',
                width: '100px',
                left: '50%',
                top: '0',
                transform: `translateX(-50%) rotate(${10 + i * 15}deg)`,
                transformOrigin: 'center bottom',
                animation: `rotateLightBeam ${20 + i * 5}s linear infinite`,
                opacity: 0.4
              }}
            />
          ))}
        </div>
        
        {/* Logo - UPDATED with responsive positioning */}
        <motion.div 
          className="absolute top-4 sm:top-6 left-4 sm:left-6 z-40 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 mr-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="#0078f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
              <line x1="8" y1="16" x2="8" y2="16" />
              <line x1="16" y1="16" x2="16" y2="16" />
            </svg>
          </div>
          <div className="text-white font-semibold tracking-wider text-sm sm:text-lg">
            KI-HELPBOT<span className="text-cyan-400">.DE</span>
          </div>
        </motion.div>

        {/* Pre-launch text/indicator - UPDATED with responsive positioning */}
        <motion.div 
          className="absolute top-4 sm:top-6 right-4 sm:right-6 z-40 flex items-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="bg-cyan-500/10 backdrop-blur-sm py-1 sm:py-1.5 px-2 sm:px-3 rounded-full border border-cyan-500/20 flex items-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400 mr-1.5 sm:mr-2 animate-pulse"></div>
            <span className="text-cyan-400 text-xs sm:text-sm font-medium tracking-wide">Vorschau</span>
          </div>
        </motion.div>
        
        {/* Deep space hole - slightly reduced opacity to make meteors more visible */}
        <div 
          className="absolute pointer-events-none mobile-reduce-fade"
          style={{
            background: 'radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.8) 60%)',
            width: '130vmax',
            height: '130vmax',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'multiply',
            boxShadow: 'inset 0 0 100px 50px black'
          }}
        ></div>
        
        {/* Coming Soon Banner - UPDATED with responsive sizing and margins */}
        <motion.div
          className="absolute top-16 sm:top-20 md:top-24 w-full px-4 z-40 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="bg-black/30 backdrop-blur-md py-3 sm:py-4 px-4 sm:px-6 inline-block rounded-xl sm:rounded-2xl border border-cyan-500/10">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Wir sind in Kürze für Sie da</span>
            </h1>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-lg" lang="de">
              Unsere neue Plattform befindet sich in der Endphase der Entwicklung und wird in Kürze für Sie bereit sein.
            </p>
          </div>
        </motion.div>
        
        {/* The robot container - UPDATED with better responsive sizing */}
        <div 
          className="relative z-10 flex items-center justify-center mt-10 sm:mt-14 mb-10 sm:mb-12 sm:my-0" 
          style={{
            width: '1000px',
            height: '1000px',
            maxWidth: '75vmin',
            maxHeight: '75vmin',
            position: 'relative',
            margin: '0 auto'
          }}
          ref={containerRef}
          onClick={handleRobotClick}
        >
          {/* Rotating light ring around robot */}
          <motion.div 
            className="absolute w-[90%] h-[90%] rounded-full border-2 border-cyan-500/5 pointer-events-none"
            style={{ 
              boxShadow: '0 0 30px rgba(6, 182, 212, 0.15)'
            }}
            animate={{
              rotate: 360
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Ultra-smooth inner glow effect */}
          <div 
            className="absolute rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(0,0,0,0) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.9) 100%)',
              width: '120%',
              height: '120%',
              position: 'absolute',
              left: '-10%',
              top: '-10%',
              mixBlendMode: 'multiply',
              zIndex: 10
            }}
          ></div>
          
          {/* Enhanced inner halo around robot */}
          <div 
            className="absolute rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.08) 0%, rgba(0,0,0,0) 60%)',
              width: '90%',
              height: '90%',
              position: 'absolute',
              left: '5%',
              top: '5%',
              zIndex: 5
            }}
          ></div>
          
          {/* The robot component itself with ultra-smooth edges */}
          <div className="w-full h-full relative">
            <InteractiveRobotSpline 
              scene={ROBOT_SCENE_URL} 
              className="w-full h-full spline-canvas"
            />
            
            {/* Fade out edges to create perfect transition */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none mobile-reduce-fade"
              style={{
                boxShadow: 'inset 0 0 150px 80px rgba(0,0,0,0.5)', // Reduced opacity for mobile
                zIndex: 20
              }}
            ></div>
          </div>
          
          {/* Watermark cover layers - ENHANCED for better coverage but responsive for mobile */}
          <div 
            className="absolute bottom-0 right-0 w-25% h-25% md:w-30% md:h-30% pointer-events-none z-[1000] hidden md:block"
            style={{
              background: 'radial-gradient(circle at bottom right, rgba(0,0,0,1) 30%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)',
              mixBlendMode: 'normal'
            }}
          ></div>
          
          {/* Additional corner covering - for precise watermark covering on desktop only */}
          <div 
            className="absolute bottom-0 right-0 w-15% h-12% md:w-15% md:h-15% bg-black pointer-events-none z-[999] hidden md:block"
            style={{
              borderTopLeftRadius: '20%' 
            }}
          ></div>
          
          {/* Multiple absolute positioned elements to cover watermark - precise targeting for desktop */}
          <div className="absolute bottom-0 right-0 w-[100px] h-[30px] bg-black z-[1001] pointer-events-none hidden md:block"></div>
          <div className="absolute bottom-1 right-1 w-[80px] h-[25px] bg-black z-[1001] pointer-events-none hidden md:block"></div>
        </div>
        
        {/* Additional fadeout layer - reduced opacity to make meteors more visible */}
        <div 
          className="absolute pointer-events-none z-20 mobile-reduce-fade"
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.7) 100%)',
            width: '150vmax',
            height: '150vmax',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            mixBlendMode: 'multiply',
            opacity: 0.5
          }}
        ></div>

        {/* Add more prominent meteors for vivid foreground effects */}
        <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
          <Meteors number={8} />
        </div>

        {/* Password form - IMPROVED mobile padding */}
        <AnimatePresence>
          {showForm && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowForm(false);
                }
              }}
            >
              <motion.div 
                className="w-full max-w-md p-3 sm:p-6"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-black/70 backdrop-blur-xl p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-cyan-800/30 shadow-xl shadow-cyan-900/10">
                  <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Zugangs-Verifizierung</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 sm:mb-6">
                      <label className="block text-gray-400 text-sm font-medium mb-2">Passwort</label>
                      <input
                        type="password"
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}
                        placeholder="Zugangspasswort eingeben"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-cyan-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    </div>
                    
                    {error && (
                      <div className="mb-4 sm:mb-6 text-red-400 text-sm bg-red-900/20 border border-red-900/30 rounded-lg p-3">
                        {error}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <button 
                        type="button" 
                        onClick={() => setShowForm(false)}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        Abbrechen
                      </button>
                      
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 font-medium text-sm sm:text-base"
                      >
                        Bestätigen
                      </button>
                    </div>
                  </form>
                  
                  <div className="mt-4 sm:mt-6 text-xs text-gray-500 text-center">
                    Zugang nur für autorisierte Benutzer
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Newsletter form - IMPROVED mobile padding */}
        <AnimatePresence>
          {showNewsletter && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setShowNewsletter(false);
                }
              }}
            >
              <motion.div 
                className="w-full max-w-md p-3 sm:p-6"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-black/70 backdrop-blur-xl p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-cyan-800/30 shadow-xl shadow-cyan-900/10">
                  {!subscribed ? (
                    <>
                      <h2 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Bleiben Sie informiert</h2>
                      <p className="text-gray-400 mb-4 sm:mb-6 text-sm">Erhalten Sie Zugang und exklusive Updates.</p>
                      
                      <form onSubmit={handleNewsletterSubmit}>
                        <div className="mb-4 sm:mb-6">
                          <label className="block text-gray-400 text-sm font-medium mb-2">E-Mail Adresse</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ihre@email.de"
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-black/50 border border-cyan-700/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
                            required
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <button 
                            type="button" 
                            onClick={() => setShowNewsletter(false)}
                            className="text-gray-400 hover:text-white text-sm transition-colors"
                          >
                            Abbrechen
                          </button>
                          
                          <button
                            type="submit"
                            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 font-medium text-sm sm:text-base"
                          >
                            Anmelden
                          </button>
                        </div>
                      </form>
                      
                      <div className="mt-4 sm:mt-6 text-xs text-gray-500 text-center">
                        Wir respektieren Ihre Privatsphäre und versenden nur relevante Updates.
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-4 sm:py-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Vielen Dank!</h3>
                      <p className="text-gray-400 text-sm">Sie erhalten in Kürze eine Bestätigungs-E-Mail.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Enhanced hint text when form is not shown - IMPROVED responsive positioning */}
        {!showForm && !showNewsletter && (
          <motion.div 
            className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center z-30 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="text-gray-400 text-sm sm:text-base mb-1 sm:mb-2">Klicken Sie den Roboter an, um fortzufahren</div>
            <div className="text-gray-600 text-xs sm:text-sm">© KI-HELPBOT.DE | Exklusiver Vorabzugang</div>
          </motion.div>
        )}
        
        {/* Add CSS animation for light beams */}
        <style>{`
          @keyframes rotateLightBeam {
            from { transform: translateX(-50%) rotate(0deg); }
            to { transform: translateX(-50%) rotate(360deg); }
          }
          
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
          }

          /* Prevent text selection for better UX */
          .selectable-none {
            user-select: none;
            -webkit-user-select: none;
          }
          
          /* Watermark removal helper rules */
          [href*="spline.design"],
          a[target="_blank"]:has(> img[alt*="Made with Spline"]),
          div:has(> a[href*="spline.design"]) {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            height: 0 !important;
            width: 0 !important;
            position: absolute !important;
            bottom: 0 !important;
            right: 0 !important;
            pointer-events: none !important;
          }
          
          /* Hide bottom right div that is likely a watermark */
          div[style*="position: absolute"][style*="bottom: 0"][style*="right: 0"]:not(.spline-fallback) {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }

          /* Responsive handling for very small screens */
          @media (max-height: 500px) {
            .banner-text {
              display: none;
            }
          }
          
          /* Mobile specific adjustments for watermark prevention */
          @media (max-width: 640px) {
            /* Adjust 3D model on mobile for better visibility */
            .spline-canvas {
              transform: scale(0.85) translateY(-5%);
            }
            
            /* Reduce opacity of fade effects on mobile */
            .mobile-reduce-fade {
              opacity: 0.4 !important;
            }
          }
        `}</style>

        {/* iOS-specific audio notification if needed */}
        {isIOSDevice && (
          <div className="fixed top-2 left-0 right-0 text-center z-50 mx-auto">
            <div className="inline-block bg-primary-600/80 backdrop-blur-sm text-white text-sm py-1 px-3 rounded-full">
              Tippen Sie, um Audio zu aktivieren
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 