import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
