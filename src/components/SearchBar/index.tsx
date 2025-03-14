import { useState, useEffect } from 'react';
import useCharactersStore from '@/store/useCharactersStore';
import './styles.scss';

const SearchBar = () => {
  const { searchCharactersByName, searchTerm, setSearchTerm } = useCharactersStore();
  const [inputValue, setInputValue] = useState(searchTerm);
  
  // Actualiza valor input cuando busca
  useEffect(() => {
    setInputValue(searchTerm);
  }, [searchTerm]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    searchCharactersByName(inputValue);
  };
  
  // devuelve valor cuando se escribe
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== searchTerm) {
        searchCharactersByName(inputValue);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [inputValue, searchTerm, searchCharactersByName]);
  
  const handleClear = () => {
    setInputValue('');
    setSearchTerm('');
    searchCharactersByName('');
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__input-wrapper">
        <svg className="search-bar__icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            fill="currentColor"
          />
        </svg>
        <input
          type="text"
          className="search-bar__input"
          placeholder="Buscar personaje"
          value={inputValue}
          onChange={handleInputChange}
          aria-label="Buscar personajes Marvel"
        />
        {inputValue && (
          <button 
            type="button" 
            className="search-bar__clear-btn"
            onClick={handleClear}
            aria-label="Limpiar búsqueda"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
      </div>
      <button type="submit" className="search-bar__submit-btn">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar; 