import { Link } from 'react-router-dom';
import useCharactersStore from '@/store/useCharactersStore';
import './styles.scss';

const Header = () => {
  const { clearSearchResults, favorites } = useCharactersStore();

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link" onClick={clearSearchResults}>
          <img 
            src="/marvel-logo-custom.svg" 
            alt="Marvel Logo" 
            className="header__logo"
            width="48" 
            height="48"
          />
        </Link>

        <div className="header__actions">
          <Link to="/favorites" className="header__favorites-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {favorites.length > 0 && (
              <span className="header__favorites-count">{favorites.length}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 