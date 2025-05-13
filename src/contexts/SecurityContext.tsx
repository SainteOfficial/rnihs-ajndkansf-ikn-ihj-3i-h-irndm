import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { obfuscateApiKey, validateApiKeyFormat, getSecureApiKey } from '../utils/securityUtils';

interface SecurityContextType {
  isProtected: boolean;
  csrfToken: string | null;
  addSecurityHeaders: (headers: Record<string, string>) => Record<string, string>;
  sanitizeInput: (input: string) => string;
  validateUrl: (url: string) => boolean;
  getApiKey: (service: 'openrouter' | 'elevenlabs') => string;
}

const SecurityContext = createContext<SecurityContextType | undefined>(undefined);

// Liste erlaubter Domains für Links
const ALLOWED_DOMAINS = [
  'ki-helpbot.de',
  'www.ki-helpbot.de',
  'openrouter.ai',
  'elevenlabs.io',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'www.gstatic.com',
  'gstatic.com',
  'unpkg.com',
  'images.pexels.com',
  'assets.mixkit.co',
  'prod.spline.design',
  'spline.design'
];

export const SecurityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isProtected, setIsProtected] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  
  useEffect(() => {
    // CSRF Token Generierung
    const generateCsrfToken = () => {
      const array = new Uint8Array(16);
      window.crypto.getRandomValues(array);
      const token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
      setCsrfToken(token);
      
      // CSRF Meta-Tag erstellen/aktualisieren
      let metaTag = document.querySelector('meta[name="csrf-token"]');
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', 'csrf-token');
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', token);
    };
    
    // Vereinfachte Prüfung auf potenzielle clickjacking Versuche
    const checkFraming = () => {
      try {
        if (window.self !== window.top) {
          console.warn('Security Alert: This site should not be embedded in frames.');
        }
      } catch (e) {
        // Fehler hier abfangen aber keine Umleitung erzwingen
        console.warn('Security: Unable to check if site is in a frame');
      }
    };
    
    // Sanitize localStorage (gegen XSS in gespeicherten Daten)
    const sanitizeStorage = () => {
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key) {
            const value = localStorage.getItem(key);
            if (value && (value.includes('<script') || value.includes('javascript:') || value.includes('on'+'error=') || value.includes('on'+'load='))) {
              console.warn(`Potentially malicious data found in localStorage: ${key}`);
              localStorage.removeItem(key);
            }
          }
        }
      } catch (error) {
        console.error('Error sanitizing localStorage:', error);
      }
    };
    
    // Ausführung der Sicherheitsmaßnahmen
    generateCsrfToken();
    checkFraming();
    sanitizeStorage();
    
    // Erweiterte CSP-Überprüfung - prüft, ob die CSP korrekt geladen wurde
    const checkCSP = () => {
      const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!cspMeta) {
        console.warn('Security Warning: No CSP meta tag found');
        return;
      }
      
      const cspContent = cspMeta.getAttribute('content');
      if (!cspContent) {
        console.warn('Security Warning: Empty CSP content');
        return;
      }
      
      // Prüfung auf wichtige CSP-Direktiven
      if (!cspContent.includes('default-src')) {
        console.warn('Security Warning: CSP missing default-src directive');
      }
      
      if (cspContent.includes('unsafe-eval') || cspContent.includes('unsafe-inline')) {
        console.warn('Security Notice: CSP includes unsafe-eval or unsafe-inline directives');
      }
    };
    
    checkCSP();
    
    // Initialisiere Timer für periodische Token-Rotation
    const tokenRotationInterval = setInterval(generateCsrfToken, 30 * 60 * 1000); // 30 Minuten
    
    // Event-Listener für Storage-Änderungen
    const handleStorageChange = () => {
      sanitizeStorage();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    setIsProtected(true);
    
    return () => {
      clearInterval(tokenRotationInterval);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  // Funktion zum Sanitizen von Benutzereingaben
  const sanitizeInput = (input: string): string => {
    if (!input) return '';
    
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/onerror=/gi, '')
      .replace(/onload=/gi, '')
      .replace(/on\w+=/gi, '')
      .trim();
  };
  
  // Funktion zum Validieren von URLs
  const validateUrl = (url: string): boolean => {
    try {
      const urlObj = new URL(url);
      return ALLOWED_DOMAINS.some(domain => urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`));
    } catch (e) {
      return false;
    }
  };
  
  // Funktion zum Hinzufügen von Sicherheitsheadern zu API-Anfragen
  const addSecurityHeaders = (headers: Record<string, string>): Record<string, string> => {
    return {
      ...headers,
      'X-CSRF-Token': csrfToken || '',
      'X-Requested-With': 'XMLHttpRequest',
    };
  };

  // Sichere Funktion zum Abrufen von API-Schlüsseln
  const getApiKey = (service: 'openrouter' | 'elevenlabs'): string => {
    let key = '';
    
    switch (service) {
      case 'openrouter':
        key = getSecureApiKey('VITE_OPENROUTER_API_KEY');
        if (!validateApiKeyFormat(key, 'openrouter')) {
          console.error('Invalid OpenRouter API key format');
          return '';
        }
        break;
      case 'elevenlabs':
        key = getSecureApiKey('VITE_ELEVENLABS_API_KEY');
        if (!validateApiKeyFormat(key, 'elevenlabs')) {
          console.error('Invalid ElevenLabs API key format');
          return '';
        }
        break;
      default:
        console.error('Unknown API service requested');
        return '';
    }
    
    return key;
  };
  
  const value = {
    isProtected,
    csrfToken,
    addSecurityHeaders,
    sanitizeInput,
    validateUrl,
    getApiKey
  };
  
  return (
    <SecurityContext.Provider value={value}>
      {children}
    </SecurityContext.Provider>
  );
};

export const useSecurity = (): SecurityContextType => {
  const context = useContext(SecurityContext);
  if (context === undefined) {
    throw new Error('useSecurity must be used within a SecurityProvider');
  }
  return context;
};

export default SecurityContext; 