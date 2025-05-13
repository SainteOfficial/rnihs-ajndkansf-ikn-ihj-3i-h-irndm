import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { I18nProvider } from './contexts/I18nContext';
import ScrollToTop from './components/common/ScrollToTop';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* Add ScrollToTop component here */}
        <I18nProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </I18nProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);