import { useNavigate, useLocation } from 'react-router-dom';
import useCharactersStore from '@/store/useCharactersStore';
import './styles.scss';

const BackToHomeButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearSearchResults } = useCharactersStore();
  
  // No mostrar el botón en la página principal
  if (location.pathname === '/' && !location.search) {
    return null;
  }
  
  const handleClick = () => {
    // Limpiar los resultados de busqueda si existen
    clearSearchResults();
    // Navegar a la página principal
    navigate('/');
  };
  
  return (
    <div className="back-to-home">
      <button 
        className="back-to-home__button"
        onClick={handleClick}
        aria-label="Volver a la vista general"
      >
        <svg className="back-to-home__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.636L15.778 7.05L10.828 12Z" fill="currentColor"/>
        </svg>
        Vista general
      </button>
    </div>
  );
};

export default BackToHomeButton; 