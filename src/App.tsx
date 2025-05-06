import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OnlineInternship from './pages/OnlineInternship';
import HybridInternship from './pages/HybridInternship';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppChat from './components/WhatsAppChat';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WhatsAppChat />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/online" element={<OnlineInternship />} />
        <Route path="/hybrid" element={<HybridInternship />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;