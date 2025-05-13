'use client';

import { Suspense, lazy, useEffect, useRef } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      <Suspense
        fallback={
          <div className={`w-full h-full flex items-center justify-center bg-gray-900 text-white ${className}`}>
            <svg className="animate-spin h-5 w-5 text-white mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
            </svg>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className} 
        />
      </Suspense>
      
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