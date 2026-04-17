import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import { Loader } from './components/ui/loader';

// Run immediately to override browser's default scroll restoration before React even mounts
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no anchor tag in the url, force scroll to top on every route change or refresh
    if (!hash) {
      window.scrollTo(0, 0);
      
      // Secondary check to beat browser aggressive restoration
      const timer = setTimeout(() => window.scrollTo(0, 0), 50);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Loader />
      <Router>
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
