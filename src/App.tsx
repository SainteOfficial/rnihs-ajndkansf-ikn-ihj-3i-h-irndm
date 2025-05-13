import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import { Check, Info, X, Shield } from 'lucide-react';
import { enhanceSessionSecurity } from './utils/securityUtils';

// Import our custom components
import CookieConsentBanner from './components/common/CookieConsentBanner';
import PreLaunch from './components/PreLaunch';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import DemoPage from './pages/DemoPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import NotFoundPage from './pages/NotFoundPage';
import AGBPage from './pages/legal/AGBPage';
import ImpressumPage from './pages/legal/ImpressumPage';
import DatenschutzPage from './pages/legal/DatenschutzPage';
import SitemapPage from './pages/SitemapPage';

// Admin Pages
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminChatbotsPage from './pages/admin/AdminChatbotsPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';
import AdminHelpPage from './pages/admin/AdminHelpPage';

// Customer Pages
import CustomerLoginPage from './pages/customer/CustomerLoginPage';
import CustomerDashboardPage from './pages/customer/CustomerDashboardPage';
import CustomerChatbotsPage from './pages/customer/CustomerChatbotsPage';
import CustomerAnalyticsPage from './pages/customer/CustomerAnalyticsPage';
import CustomerTicketsPage from './pages/customer/CustomerTicketsPage';
import CustomerBillingPage from './pages/customer/CustomerBillingPage';
import CustomerSettingsPage from './pages/customer/CustomerSettingsPage';

// Password to access the site during development
// In a real application, this should be stored securely, not hardcoded
const SITE_PASSWORD = 'demopass123';

function App() {
  const { t } = useTranslation();
  const [cookieAccepted, setCookieAccepted] = useState<boolean | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for authentication and cookies on load
  useEffect(() => {
    // Enhance security measures
    enhanceSessionSecurity();
    
    // For testing purposes, we force clear localStorage to see the PreLaunch page
    localStorage.removeItem('siteAccessAuth');
    
    // Check authentication from localStorage
    const auth = localStorage.getItem('siteAccessAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    // Check cookie consent
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
    
    const acceptedCookie = getCookie("ki-helpbot-consent");
    if (acceptedCookie === 'true') {
      setCookieAccepted(true);
    }
  }, []);

  // Handle cookie acceptance
  const handleAccept = () => {
    setCookieAccepted(true);
    console.log("Cookies accepted");
    // Analytics can be enabled here
  };

  // Handle cookie decline
  const handleDecline = () => {
    setCookieAccepted(false);
    console.log("Cookies declined");
    // Disable any optional cookies here
  };

  // If not authenticated, show pre-launch page
  if (!isAuthenticated) {
    return <PreLaunch onAuthenticate={setIsAuthenticated} password={SITE_PASSWORD} />;
  }

  // Actual site content when authenticated
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="leistungen" element={<ServicesPage />} />
          <Route path="branchenloesungen" element={<SolutionsPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="ueber-uns" element={<AboutUsPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="kundenmeinungen" element={<TestimonialsPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
          
          {/* Legal pages */}
          <Route path="agb" element={<AGBPage />} />
          <Route path="impressum" element={<ImpressumPage />} />
          <Route path="datenschutz" element={<DatenschutzPage />} />
          
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/admin/chatbots" element={<AdminChatbotsPage />} />
        <Route path="/admin/settings" element={<AdminSettingsPage />} />
        <Route path="/admin/help" element={<AdminHelpPage />} />

        {/* Customer Routes */}
        <Route path="/customer/login" element={<CustomerLoginPage />} />
        <Route path="/customer/dashboard" element={<CustomerDashboardPage />} />
        <Route path="/customer/chatbots" element={<CustomerChatbotsPage />} />
        <Route path="/customer/analytics" element={<CustomerAnalyticsPage />} />
        <Route path="/customer/tickets" element={<CustomerTicketsPage />} />
        <Route path="/customer/billing" element={<CustomerBillingPage />} />
        <Route path="/customer/settings" element={<CustomerSettingsPage />} />
      </Routes>

      {/* Cookie consent banner */}
      <CookieConsentBanner 
        onAccept={handleAccept}
        onDecline={handleDecline}
      />
    </>
  );
}

export default App;