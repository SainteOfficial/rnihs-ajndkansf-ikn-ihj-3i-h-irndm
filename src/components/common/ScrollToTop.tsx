import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // For the demo page specifically, we need a small delay to ensure
    // it overrides any other scroll behaviors that might happen on component mount
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Using 'instant' instead of 'smooth' for immediate jump to top
      });
    }, pathname.includes('/demo') ? 50 : 0); // Add a small delay for the demo page

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;