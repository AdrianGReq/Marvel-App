import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useCharactersStore from '@/store/useCharactersStore';
import CharacterCard from '@/components/CharacterCard';
import SearchBar from '@/components/SearchBar';
import Header from '@/components/Header';
import BackToHomeButton from '@/components/BackToHomeButton';
import './styles.scss';

const CharacterList = () => {
  const location = useLocation();
  const { 
    characters, 
    searchResults, 
    favorites, 
    isLoading, 
    error, 
    searchTerm, 
    fetchCharacters 
  } = useCharactersStore();
  
  const isFavoritesRoute = location.pathname === '/favorites';
  
  useEffect(() => {
    if (characters.length === 0 && !isLoading) {
      fetchCharacters();
    }
  }, [characters.length, fetchCharacters, isLoading]);
  
  // dertemina que lista mostrar 
  const getDisplayedCharacters = () => {
    if (isFavoritesRoute) {
      return favorites;
    }
    
    if (searchTerm && searchResults.length > 0) {
      return searchResults;
    }
    
    return characters;
  };
  
  const displayedCharacters = getDisplayedCharacters();
  
  // Get title y el conteo
  const getTitle = () => {
    if (isFavoritesRoute) {
      return 'Personajes Favoritos';
    }
    
    if (searchTerm) {
      return `Resultados para "${searchTerm}"`;
    }
    
    return 'Personajes Marvel';
  };
  
  return (
    <div className="character-list-page content-width-limiter">
      <Header />
      
      <main className="character-list-page__content main-content">
        <div className="character-list-page__header">
          <h1 className="character-list-page__title">{getTitle()}</h1>
          
          <div className="character-list-page__search-container">
            {!isFavoritesRoute ? (
              <SearchBar />
            ) : (
              <div className="character-list-page__search-placeholder"></div>
            )}
          </div>
          
          <p className="character-list-page__count">
            {displayedCharacters.length} {displayedCharacters.length === 1 ? 'personaje' : 'personajes'} encontrados
          </p>
        </div>
        
        <BackToHomeButton />
        
        {error && (
          <div className="character-list-page__error">
            <p>{error}</p>
            <button onClick={() => fetchCharacters()}>Intentar de Nuevo</button>
          </div>
        )}
        
        {isLoading ? (
          <div className="character-list-page__loading">
            <svg className="character-list-page__spinner" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="20" fill="none" stroke="#e62429" strokeWidth="5"></circle>
            </svg>
            <p>Cargando personajes...</p>
          </div>
        ) : (
          <>
            {displayedCharacters.length === 0 ? (
              <div className="character-list-page__empty">
                {isFavoritesRoute ? (
                  <p>No has añadido ningún favorito todavía.</p>
                ) : searchTerm ? (
                  <p>No se encontraron personajes que coincidan con "{searchTerm}".</p>
                ) : (
                  <p>No hay personajes disponibles.</p>
                )}
              </div>
            ) : (
              <div className="character-list-page__grid">
                {displayedCharacters.map(character => (
                  <div key={character.id} className="character-list-page__grid-item">
                    <CharacterCard character={character} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default CharacterList; 