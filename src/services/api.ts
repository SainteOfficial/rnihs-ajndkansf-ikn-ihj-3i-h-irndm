import axios from 'axios';

// Constants for API service
const OPENROUTER_MODEL = import.meta.env.VITE_OPENROUTER_MODEL || 'deepseek/deepseek-chat-v3-0324:free';
const ELEVENLABS_VOICE_ID = import.meta.env.VITE_ELEVENLABS_VOICE_ID || 'UP4e4PjCL00ZZ1e5kvcW';

// Debug-Ausgabe für Umgebungsvariablen
console.log('ENV Variablen:', {
  OPENROUTER_MODEL,
  ELEVENLABS_VOICE_ID,
  OPENROUTER_API_KEY: import.meta.env.VITE_OPENROUTER_API_KEY ? (`Vorhanden (${import.meta.env.VITE_OPENROUTER_API_KEY.substring(0, 5)}...)`) : 'Nicht vorhanden',
  ELEVENLABS_API_KEY: import.meta.env.VITE_ELEVENLABS_API_KEY ? (`Vorhanden (${import.meta.env.VITE_ELEVENLABS_API_KEY.substring(0, 5)}...)`) : 'Nicht vorhanden',
  ENV_MODE: import.meta.env.MODE || 'Unbekannt',
  IS_PROD: import.meta.env.PROD ? 'Ja' : 'Nein',
  BASE_URL: import.meta.env.BASE_URL || 'Unbekannt',
});

// Sicherheits-Konfiguration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 Minute in Millisekunden
const MAX_REQUESTS_PER_WINDOW = 10; // Maximale Anzahl an Anfragen pro Zeitfenster
const requestTimestamps: number[] = [];

// Secure axios instance
export const secureAxios = axios.create();

// Sanitize user input to prevent injection attacks
function sanitizeInput(input: string): string {
  // Entferne potenziell gefährliche Zeichen und Muster
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/onerror=/gi, '')
    .replace(/onload=/gi, '')
    .trim();
}

// Simple rate limiting implementation
function checkRateLimit(): boolean {
  const now = Date.now();
  
  // Remove requests outside the time window
  const validTimestamps = requestTimestamps.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
  
  // Check if we've exceeded the limit
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }
  
  // Add current timestamp and update the array
  validTimestamps.push(now);
  requestTimestamps.length = 0;
  requestTimestamps.push(...validTimestamps);
  
  return true;
}

// Sicherer Helfer zum Abrufen von API-Keys
function getApiKey(keyName: string): string {
  try {
    const key = import.meta.env[keyName] || '';
    
    // Grundlegende Validierung
    if (!key || typeof key !== 'string' || key.trim() === '') {
      console.warn(`API-Schlüssel ${keyName} nicht gefunden oder ungültig`);
      return '';
    }
    
    // Einfache Validierung zur Vermeidung von Injection
    if (key.includes('<') || key.includes('>') || key.includes('script')) {
      console.error(`Sicherheitswarnung: Potenziell schädliches API-Key-Format erkannt: ${keyName}`);
      return '';
    }
    
    // Debug-Ausdrucke (nur in Entwicklung)
    if (import.meta.env.DEV || import.meta.env.VITE_DEV_MODE === 'true') {
      console.log(`API-Schlüssel für ${keyName} gefunden (ersten 5 Zeichen): ${key.substring(0, 5)}`);
    }
    
    return key;
  } catch (error) {
    console.error(`Fehler beim Abrufen des API-Schlüssels ${keyName}:`, error);
    return '';
  }
}

// Fallback response for when API keys are missing or errors occur
function getFallbackResponse(message: string): { text: string; voiceSettings: any } {
  const lowercaseMessage = message.toLowerCase();
  let text = "";
  let voiceSettings = {
    stability: 0.5,
    similarity_boost: 0.75,
    style: 0.0,
    use_speaker_boost: true,
    speed: 1.2
  };
  
  // Simple pattern matching for demo purposes
  if (lowercaseMessage.includes('preis') || lowercaseMessage.includes('kosten')) {
    text = "Unsere Preise sind gestaffelt nach Nutzungsumfang. Basispaket: ab 49€/Monat, Business: ab 149€/Monat, Enterprise: individuelle Preisgestaltung. Gerne erstellen wir Ihnen ein maßgeschneidertes Angebot für Ihre spezifischen Anforderungen.";
    voiceSettings.stability = 0.8; // Höhere Stabilität für faktische Informationen
    voiceSettings.style = 0.1;
    voiceSettings.speed = 1.2;
  }
  
  else if (lowercaseMessage.includes('funktionen') || lowercaseMessage.includes('features')) {
    text = "KI-Helpbot bietet fortschrittliche KI-gestützte Chatbots und Voicebots mit folgenden Funktionen: Natürliche Sprachverarbeitung, mehrsprachiger Support, Integration in bestehende CRM-Systeme, 24/7 Verfügbarkeit, Echtzeitanalysen und DSGVO-konforme Datenspeicherung. Unsere Bots lernen kontinuierlich aus jeder Interaktion.";
    voiceSettings.stability = 0.7;
    voiceSettings.style = 0.3;
    voiceSettings.speed = 1.2;
  }
  
  else if (lowercaseMessage.includes('datenschutz') || lowercaseMessage.includes('dsgvo')) {
    text = "Datenschutz hat bei uns höchste Priorität. Unsere Lösungen sind vollständig DSGVO-konform entwickelt. Wir verarbeiten Daten ausschließlich auf europäischen Servern, verwenden Verschlüsselung nach Industriestandard und bieten Ihnen volle Transparenz über alle gespeicherten Daten. Auf Wunsch stellen wir Ihnen gerne unsere detaillierte Datenschutzdokumentation zur Verfügung.";
    voiceSettings.stability = 0.9; // Sehr stabil für rechtliche Informationen
    voiceSettings.similarity_boost = 0.8;
    voiceSettings.style = 0.1;
    voiceSettings.speed = 1.2;
  }
  
  else if (lowercaseMessage.includes('hallo') || lowercaseMessage.includes('hi') || lowercaseMessage.includes('hey')) {
    text = "Hallo! Schön, dass Sie KI-Helpbot ausprobieren. Wie kann ich Ihnen heute helfen? Sie können mich gerne zu unseren Produkten, Preisen oder Integrationen befragen.";
    voiceSettings.stability = 0.4; // Weniger stabil für freundliche Begrüßung
    voiceSettings.similarity_boost = 0.7;
    voiceSettings.style = 0.4; // Mehr Stil für Begrüßung
    voiceSettings.speed = 1.2;
  }
  
  // Default response
  else {
    text = "Vielen Dank für Ihre Anfrage an KI-Helpbot. Unsere intelligenten Chatbots und Voicebots optimieren die Kundenkommunikation durch KI-gestützte Lösungen. Sie sind rund um die Uhr verfügbar, mehrsprachig und DSGVO-konform. Für weitere Informationen kontaktieren Sie uns oder vereinbaren Sie eine Demo.";
    voiceSettings.stability = 0.6;
    voiceSettings.similarity_boost = 0.7;
    voiceSettings.style = 0.2;
    voiceSettings.speed = 1.2;
  }
  
  return { text, voiceSettings };
}

// Browser's built-in speech synthesis as fallback
async function useBrowserSpeechSynthesis(text: string): Promise<Blob> {
  console.log("Verwende Browser Speech Synthesis als Fallback");
  
  return new Promise((resolve) => {
    try {
      // Erstelle einen leeren Audio-Blob, da CSP-Probleme auftreten können
      const emptyBlob = new Blob([], { type: 'audio/mp3' });
      resolve(emptyBlob);
    } catch (error) {
      console.error("Fehler bei Speech Synthesis Fallback:", error);
      // Fallback to an empty audio blob if speech synthesis fails
      const emptyBlob = new Blob([], { type: 'audio/mp3' });
      resolve(emptyBlob);
    }
  });
}

// ElevenLabs Tageslimit Funktion
function checkElevenLabsDailyLimit(): boolean {
  try {
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('elevenlabs-limit-date') || '';
    const usageCount = parseInt(localStorage.getItem('elevenlabs-usage-count') || '0', 10);
    
    // Prüfe, ob der gespeicherte Tag der heutige ist
    if (storedDate !== today) {
      // Neuer Tag, Zähler zurücksetzen
      localStorage.setItem('elevenlabs-limit-date', today);
      localStorage.setItem('elevenlabs-usage-count', '1'); // Dieser Aufruf zählt als erster
      return true; // Limitierung noch nicht erreicht
    }
    
    // Maximale Anzahl der API-Aufrufe pro IP/Tag
    const MAX_DAILY_CALLS = 10;
    
    // Wenn der Zähler das Limit überschreitet, return false
    if (usageCount >= MAX_DAILY_CALLS) {
      console.warn('ElevenLabs Tageslimit von 10 Anfragen erreicht. Verwende Fallback.');
      return false;
    }
    
    // Zähler erhöhen
    localStorage.setItem('elevenlabs-usage-count', (usageCount + 1).toString());
    console.log(`ElevenLabs API Nutzung heute: ${usageCount + 1}/${MAX_DAILY_CALLS}`);
    return true;
  } catch (error) {
    console.error('Fehler beim Prüfen des ElevenLabs Tageslimits:', error);
    return false; // Im Fehlerfall besser fallback verwenden
  }
}

// OpenRouter API service without using React hooks
export async function callOpenRouterAPI(message: string): Promise<{ text: string; voiceSettings?: any }> {
  try {
    // Sanitize input directly
    const sanitizedMessage = sanitizeInput(message);
    
    // Check rate limit
    if (!checkRateLimit()) {
      return { 
        text: "Entschuldigung, zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in einer Minute erneut.",
        voiceSettings: {
          stability: 0.7,
          similarity_boost: 0.7,
          style: 0.3,
          use_speaker_boost: true,
          speed: 1.2
        }
      };
    }
    
    // Get API key using our safer helper function
    const apiKey = getApiKey('VITE_OPENROUTER_API_KEY');
    const model = import.meta.env.VITE_OPENROUTER_MODEL || 'google/gemini-2.0-flash-exp:free';
    
    console.log("OpenRouter API Key (ersten 5 Zeichen):", apiKey ? apiKey.substring(0, 5) : 'Nicht verfügbar');
    console.log("Verwendetes Modell:", model);
    
    // Check if API key is available
    if (!apiKey) {
      console.warn('No OpenRouter API key provided. Using fallback response.');
      return getFallbackResponse(sanitizedMessage);
    }

    // Standard headers for OpenRouter
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': window.location.origin,
      'X-Title': 'KI-Helpbot Demo',
      'Content-Type': 'application/json'
    };

    console.log("Sende Anfrage an OpenRouter API...");

    const requestData = {
      model: model,
      messages: [
        { 
          role: 'system', 
          content: `Du bist ein hilfreicher KI-Assistent eines deutschen Unternehmens namens KI-Helpbot, das sich auf KI-gestützte Kommunikationslösungen spezialisiert. 
          Deine Antworten sollten informativ, freundlich und auf Deutsch sein. Du hilfst Kunden, die Interesse an Chatbots und Voicebots für ihre Unternehmen haben.
          
          WICHTIGE HINWEISE ZUR FORMATIERUNG:
          - Verwende KEINE Sternchen/Asterisken (**) zur Hervorhebung oder Formatierung.
          - Verwende einfachen Text ohne spezielle Formatierungen.
          - Verwende normale Absätze zur Strukturierung.
          - Währungsangaben wie Euro sind erlaubt.
          
          WICHTIGER ZUSATZ: Generiere für jede Antwort eine spezielle Anmerkung für das ElevenLabs-Sprachsynthesesystem. Diese Anmerkung sollte in einem speziellen Format am ENDE deiner Antwort stehen und wird vom System vor der Anzeige an den Benutzer automatisch entfernt.
          
          Das Format deiner Antwort sollte sein:
          
          (Hier kommt deine Antwort in deutscher Sprache)
          
          ---VOICE_SETTINGS_START---
          {
            "stability": (0.0-1.0 Wert basierend auf der Art der Antwort - stabil für Fakten, weniger stabil für emotionale Inhalte),
            "similarity_boost": (0.0-1.0 Wert),
            "style": (0.0-1.0 Wert für den Grad der Ausdrucksstärke),
            "use_speaker_boost": true,
            "speed": 1.2
          }
          ---VOICE_SETTINGS_END---` 
        },
        { role: 'user', content: sanitizedMessage }
      ],
      max_tokens: 800
    };

    console.log("OpenRouter Anfrage:", JSON.stringify(requestData).substring(0, 300) + "...");

    try {
      // Verwende die vollständige URL, die explizit in der CSP erlaubt ist
      const response = await axios.post(
        'https://openrouter.ai/api/v1/chat/completions',
        requestData,
        { 
          headers,
          // Setze withCredentials auf false, um CORS-Probleme zu vermeiden
          withCredentials: false
        }
      );

      console.log("OpenRouter Antwort erhalten, Status:", response.status);
      
      // Detaillierte Antwortstruktur anzeigen
      console.log("OpenRouter Antwortdaten:", JSON.stringify(response.data));

      // Überprüfe, ob die Antwort die erwartete Struktur hat
      if (!response.data || !response.data.choices || !response.data.choices[0] || !response.data.choices[0].message) {
        console.warn('Unexpected API response structure:', response.data);
        return getFallbackResponse(sanitizedMessage);
      }

      // Extract the response content
      const responseContent = response.data.choices[0].message.content;
      console.log("Antwort von OpenRouter erhalten:", responseContent.substring(0, 100) + "...");
      
      let userResponse = responseContent;
      let voiceSettings = null;
      
      // Check if response contains voice settings
      if (responseContent.includes('---VOICE_SETTINGS_START---') && responseContent.includes('---VOICE_SETTINGS_END---')) {
        // Extract the voice settings JSON
        const settingsMatch = responseContent.match(/---VOICE_SETTINGS_START---([\s\S]*?)---VOICE_SETTINGS_END---/);
        if (settingsMatch && settingsMatch[1]) {
          try {
            voiceSettings = JSON.parse(settingsMatch[1].trim());
            // Überschreibe die Geschwindigkeit immer mit 1.2 (maximal erlaubter Wert)
            voiceSettings.speed = 1.2;
            console.log("Voice Settings extrahiert und speed auf 1.2 gesetzt:", voiceSettings);
            
            // Entferne die Voice Settings aus der Antwort
            userResponse = responseContent.replace(/---VOICE_SETTINGS_START---([\s\S]*?)---VOICE_SETTINGS_END---/g, '').trim();
          } catch (error) {
            console.error('Error parsing voice settings:', error);
          }
        }
      }
      
      return { 
        text: userResponse,
        voiceSettings
      };
    } catch (apiError: any) {
      console.error('OpenRouter API error:', apiError.message);
      
      if (apiError.response) {
        console.error('OpenRouter API error status:', apiError.response.status);
        console.error('OpenRouter API error data:', apiError.response.data);
      }
      
      // Fallback auf lokale Antwort
      return getFallbackResponse(sanitizedMessage);
    }
  } catch (error) {
    console.error('Error calling OpenRouter API:', error);
    return getFallbackResponse(message);
  }
}

// Erstelle eine Fehlermeldung als Audio-Blob
function createErrorAudioBlob(errorMessage: string): Promise<Blob> {
  return useBrowserSpeechSynthesis(errorMessage);
}

// ElevenLabs API service without using React hooks
export async function callElevenLabsAPI(text: string, voiceSettings?: any): Promise<Blob> {
  try {
    // Sanitize input directly
    const sanitizedText = sanitizeInput(text);
    
    // Check rate limit
    if (!checkRateLimit()) {
      return createErrorAudioBlob("Zu viele Anfragen. Bitte warten Sie einen Moment.");
    }
    
    // Prüfe Tageslimit für ElevenLabs
    if (!checkElevenLabsDailyLimit()) {
      console.warn('ElevenLabs Tageslimit erreicht. Verwende Fallback.');
      return useBrowserSpeechSynthesis(sanitizedText);
    }
    
    // Get API key using our safer helper function
    const apiKey = getApiKey('VITE_ELEVENLABS_API_KEY');
    console.log("ElevenLabs API Key (ersten 5 Zeichen):", apiKey ? apiKey.substring(0, 5) : 'Nicht verfügbar');
    
    // Check if API key is available
    if (!apiKey) {
      console.warn('No ElevenLabs API key provided. Using browser speech synthesis.');
      return useBrowserSpeechSynthesis(sanitizedText);
    }
    
    // Verwende die fixe Voice ID
    const voiceId = ELEVENLABS_VOICE_ID;
    console.log("Sende Anfrage an ElevenLabs mit Voice ID:", voiceId);
    
    // Standard headers for ElevenLabs
    const headers = {
      'xi-api-key': apiKey,
      'Content-Type': 'application/json'
    };

    // Verwende die übergebenen Voice-Settings oder Standardwerte
    const settings = voiceSettings || {
      stability: 0.5,
      similarity_boost: 0.75,
      speed: 1.2
    };
    
    // Stelle sicher, dass speed immer 1.2 ist und innerhalb der erlaubten Grenzen liegt
    settings.speed = 1.2;

    console.log("Voice Settings für ElevenLabs (mit speed 1.2):", settings);

    // Stelle sicher, dass der Text nicht leer ist
    if (!sanitizedText || sanitizedText.trim() === '') {
      console.warn('Empty text provided to ElevenLabs API. Using fallback.');
      return useBrowserSpeechSynthesis("Leerer Text wurde an die Sprachsynthese übergeben.");
    }

    // Bereite die Anfrage mit korrektem Format vor
    const requestData = {
      text: sanitizedText,
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability: settings.stability || 0.5,
        similarity_boost: settings.similarity_boost || 0.75,
        style: settings.style || 0.0,
        use_speaker_boost: settings.use_speaker_boost !== undefined ? settings.use_speaker_boost : true,
        speed: 1.2
      }
    };

    console.log("ElevenLabs Anfrage:", JSON.stringify(requestData).substring(0, 200) + "...");

    try {
      // Spezifischere URL für ElevenLabs API verwenden, die in CSP erlaubt ist
      const response = await axios.post(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        requestData,
        {
          headers,
          responseType: 'blob',
          // Deaktiviere withCredentials für CORS
          withCredentials: false
        }
      );

      console.log("Antwort von ElevenLabs erhalten, Blob-Größe:", response.data.size);
      return response.data;
    } catch (error: any) {
      console.error('ElevenLabs API fehler:', error.response ? error.response.status : error);
      if (error.response && error.response.data) {
        try {
          // Versuche Blob als Text zu lesen, um weitere Fehlerinfos zu erhalten
          const errorText = await error.response.data.text();
          console.error('ElevenLabs API error details:', errorText);
        } catch (e) {
          console.error('Konnte API-Fehlerdetails nicht lesen');
        }
      }
      console.log('Falling back to browser speech synthesis');
      return useBrowserSpeechSynthesis(sanitizedText);
    }
  } catch (error) {
    console.error('Error calling ElevenLabs API:', error);
    console.log('Falling back to browser speech synthesis');
    return useBrowserSpeechSynthesis(text);
  }
}
