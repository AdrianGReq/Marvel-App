import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CharacterList from '@/pages/CharacterList';
import CharacterDetail from '@/pages/CharacterDetail';
import SplashScreen from '@/components/SplashScreen';
import './App.scss';

// Configuración para eliminar las advertencias de React Router v7
const routerOptions = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

// componente Wrapper para gestion de cambios de location
const AppContent = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);
  const [previousPath, setPreviousPath] = useState('');
  const [isEntering, setIsEntering] = useState(true);

  // gestion de cambios de location
  useEffect(() => {
    if (location.pathname === '/' && previousPath !== '/' && previousPath !== '') {
      // solo ShowSplash al navegar fuera
      setShowSplash(true);
      setIsEntering(true);
    }
    
    setPreviousPath(location.pathname);
  }, [location.pathname, previousPath]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    
    // Aplicar clase para animacion
    setIsEntering(true);
    
    // fade in despues de un delay
    setTimeout(() => {
      setIsEntering(false);
    }, 50);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      <div className={`app-container ${isEntering ? 'app-container--entering' : ''}`}>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/favorites" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router {...routerOptions}>
      <AppContent />
    </Router>
  );
}

export default App;
