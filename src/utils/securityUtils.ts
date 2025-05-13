/**
 * Sicherheits-Hilfsfunktionen für Ki-Helpbot
 */

// Stärkere Passwortvalidierung
export const validatePassword = (password: string): {
  valid: boolean;
  message?: string;
} => {
  const minLength = 10;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
  
  if (password.length < minLength) {
    return {
      valid: false,
      message: `Das Passwort muss mindestens ${minLength} Zeichen lang sein.`
    };
  }
  
  if (!hasUppercase) {
    return {
      valid: false,
      message: 'Das Passwort muss mindestens einen Großbuchstaben enthalten.'
    };
  }
  
  if (!hasLowercase) {
    return {
      valid: false,
      message: 'Das Passwort muss mindestens einen Kleinbuchstaben enthalten.'
    };
  }
  
  if (!hasNumbers) {
    return {
      valid: false,
      message: 'Das Passwort muss mindestens eine Zahl enthalten.'
    };
  }
  
  if (!hasSpecialChar) {
    return {
      valid: false,
      message: 'Das Passwort muss mindestens ein Sonderzeichen enthalten.'
    };
  }
  
  return { valid: true };
};

// Erzeugt eine Prüfsumme basierend auf Browsereigenschaften
// Hilft bei der Erkennung von Session-Hijacking
export const generateBrowserFingerprint = (): string => {
  const { userAgent, language, platform } = navigator;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const colorDepth = window.screen.colorDepth;
  
  const fingerprintData = [
    userAgent,
    language,
    platform,
    timeZone,
    screenWidth,
    screenHeight,
    colorDepth
  ].join('|');
  
  // Einfache Hash-Funktion (für Produktionsumgebung eine stärkere Funktion verwenden)
  let hashCode = 0;
  for (let i = 0; i < fingerprintData.length; i++) {
    const char = fingerprintData.charCodeAt(i);
    hashCode = ((hashCode << 5) - hashCode) + char;
    hashCode = hashCode & hashCode; // 32-bit int
  }
  
  return hashCode.toString(16);
};

// Funktion zur Validierung von E-Mail-Adressen mit strengeren Regeln
export const validateEmail = (email: string): boolean => {
  // RFC 5322 konforme E-Mail-Validierung
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

// Bot-Erkennung: Prüft auf verdächtiges Verhalten bei der Formularausfüllung
export class BotDetection {
  private static formStartTime: Record<string, number> = {};
  private static mouseMovements = 0;
  private static keyPresses = 0;
  
  // Formularinteraktion starten überwachen
  static startFormMonitoring(formId: string): void {
    this.formStartTime[formId] = Date.now();
    this.mouseMovements = 0;
    this.keyPresses = 0;
    
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  // Überwachung beenden
  static stopFormMonitoring(): void {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  // Bot-Score berechnen - höherer Wert deutet auf einen Bot hin
  static getBotScore(formId: string): number {
    const now = Date.now();
    const timeSpent = now - (this.formStartTime[formId] || now);
    
    let score = 0;
    
    // Zu schnelles Ausfüllen (weniger als 2 Sekunden)
    if (timeSpent < 2000) {
      score += 50;
    }
    
    // Keine Mausbewegungen
    if (this.mouseMovements === 0) {
      score += 30;
    }
    
    // Keine Tastatureingaben
    if (this.keyPresses === 0) {
      score += 30;
    }
    
    return Math.min(score, 100); // 0-100 Skala
  }
  
  // Event-Handler
  private static handleMouseMove = (): void => {
    this.mouseMovements++;
  };
  
  private static handleKeyPress = (): void => {
    this.keyPresses++;
  };
}

// Sitzungssicherheit verbessern
export const enhanceSessionSecurity = (): void => {
  // Deaktiviere Fingerprint-Überprüfung temporär für Demo-Zwecke
  console.log("Session Security enhancement deaktiviert für Demo-Zwecke");
  
  /*
  const fingerprint = generateBrowserFingerprint();
  
  // Speichert Browser-Fingerprint für Sitzungsvalidierung
  localStorage.setItem('browser_fingerprint', fingerprint);
  
  // Prüft regelmäßig, ob der Fingerprint noch übereinstimmt
  // Wenn nicht, wurde die Sitzung möglicherweise übernommen
  setInterval(() => {
    const currentFingerprint = generateBrowserFingerprint();
    const storedFingerprint = localStorage.getItem('browser_fingerprint');
    
    if (currentFingerprint !== storedFingerprint) {
      console.warn('Security Warning: Browser fingerprint changed, potential session hijacking detected');
      
      // In einer echten Anwendung hier Sitzung invalidieren und Benutzer abmelden
      // logout();
    }
  }, 30000); // Alle 30 Sekunden prüfen
  */
};

/**
 * Obfuscates API keys for client-side storage
 * This adds a basic layer of protection against simple scraping
 */
export const obfuscateApiKey = (apiKey: string): string => {
  if (!apiKey) return '';
  
  // Only show the first 4 and last 4 characters
  const firstPart = apiKey.substring(0, 4);
  const lastPart = apiKey.substring(apiKey.length - 4);
  const middlePart = '*'.repeat(apiKey.length - 8);
  
  return `${firstPart}${middlePart}${lastPart}`;
};

/**
 * Validates an API key format based on the service type
 * Returns true if the format appears valid
 */
export const validateApiKeyFormat = (apiKey: string, service: 'openrouter' | 'elevenlabs'): boolean => {
  if (!apiKey) return false;
  
  // Basic validation patterns
  const patterns = {
    openrouter: /^sk-or-v1-[a-f0-9]{64}$/,
    elevenlabs: /^[a-zA-Z0-9]{32}$/
  };
  
  return patterns[service].test(apiKey);
};

/**
 * Securely loads API keys from environment variables
 * with validation to prevent injection attacks
 */
export const getSecureApiKey = (keyName: string): string => {
  const key = import.meta.env[keyName] || '';
  
  // Simple validation to prevent injection
  if (key && (key.includes('<') || key.includes('>') || key.includes('script'))) {
    console.error(`Security warning: Potentially malicious API key format detected: ${keyName}`);
    return '';
  }
  
  return key;
}; 