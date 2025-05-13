import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Info, X, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface CookieConsentBannerProps {
  onAccept: () => void;
  onDecline: () => void;
}

// Helper functions to handle cookies without external libraries
const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `; expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}${expires}; path=/; SameSite=Lax`;
};

const getCookie = (name: string) => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export function CookieConsentBanner({ onAccept, onDecline }: CookieConsentBannerProps) {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<'accepted' | 'declined' | null>(null);
  const { t } = useTranslation();
  
  useEffect(() => {
    // Check if user has already made a choice
    const consentValue = getCookie('ki-helpbot-consent');
    if (!consentValue) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie('ki-helpbot-consent', 'true', 365);
    setVisible(false);
    setStatus('accepted');
    onAccept();
    
    // Hide the status message after 2 seconds
    setTimeout(() => {
      setStatus(null);
    }, 2000);
  };

  const handleDecline = () => {
    setCookie('ki-helpbot-consent', 'false', 365);
    setVisible(false);
    setStatus('declined');
    onDecline();
    
    // Hide the status message after 2 seconds
    setTimeout(() => {
      setStatus(null);
    }, 2000);
  };

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50"
            style={{ 
              background: "rgba(20, 20, 30, 0.95)",
              backdropFilter: "blur(10px)",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "space-between",
              zIndex: 9999
            }}
          >
            <div className="flex items-start gap-2" style={{ flex: 1, margin: "0 16px 0 0" }}>
              <div className="hidden sm:flex p-1.5 rounded-full bg-primary-500/20 text-primary-400">
                <Shield size={16} />
              </div>
              <div>
                <p className="text-sm text-white/90 mb-1">{t('cookieConsent.message')}</p>
                <div className="text-xs text-gray-400">
                  <span className="mr-1 text-primary-400 font-medium">DSGVO-konform.</span>
                  Mehr in der <a href="/datenschutz" className="underline text-primary-400 hover:text-primary-300">Datenschutzerklärung</a>.
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleDecline}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "50px",
                  padding: "6px 16px",
                  marginRight: "10px",
                  fontWeight: 500,
                  transition: "background 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {t('cookieConsent.decline')}
              </button>
              <button
                onClick={handleAccept}
                style={{ 
                  background: "#0078f2",
                  color: "white",
                  fontSize: "14px",
                  borderRadius: "50px",
                  padding: "6px 16px",
                  fontWeight: 500,
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 120, 242, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "scale(0.98)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
              >
                {t('cookieConsent.accept')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status Messages */}
      {/* Accepted Message */}
      <AnimatePresence>
        {status === 'accepted' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
          >
            <Check size={16} />
            <span className="text-sm font-medium">Einstellungen gespeichert</span>
            <motion.button 
              className="ml-1 p-1 rounded-full hover:bg-white/10"
              onClick={() => setStatus(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={14} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Declined Message */}
      <AnimatePresence>
        {status === 'declined' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50 bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
          >
            <Info size={16} />
            <span className="text-sm font-medium">Cookies abgelehnt</span>
            <motion.button 
              className="ml-1 p-1 rounded-full hover:bg-white/10"
              onClick={() => setStatus(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={14} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default CookieConsentBanner; 