import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Character } from '@/types';
import useCharactersStore from '@/store/useCharactersStore';
import { isImageNotAvailable, getFallbackImage, ensureHttps } from '@/utils/imageHelpers';
import './styles.scss';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const navigate = useNavigate();
  const { addToFavorites, removeFromFavorites, favorites } = useCharactersStore();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [usingFallback, setUsingFallback] = useState(false);
  
  const isFavorite = favorites.some(fav => fav.id === character.id);
  
  // Configurar la URL de la imagen al montar el componente o cuando cambia el personaje
  useEffect(() => {
    // Primero verificamos si hay thumbnail y si la imagen está disponible
    if (character.thumbnail && !isImageNotAvailable(character.thumbnail.path)) {
      const httpsPath = ensureHttps(character.thumbnail.path);
      const fullUrl = `${httpsPath}.${character.thumbnail.extension}`;
      
      // Verificar si la imagen realmente ha cambiado antes de actualizar el estado
      if (imageUrl !== fullUrl) {
        setImageUrl(fullUrl);
        setUsingFallback(false);
      }
    } else {
      // Si no hay thumbnail o la imagen no está disponible, usamos la imagen de respaldo
      const fallbackUrl = getFallbackImage(character.name);
      
      if (imageUrl !== fallbackUrl) {
        setImageUrl(fallbackUrl);
        setUsingFallback(true);
      }
    }
  }, [character, character.thumbnail, imageUrl]);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isFavorite) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };
  
  const handleCardClick = () => {
    navigate(`/character/${character.id}`);
  };
  
  const handleImageError = () => {
    if (!usingFallback) {
      const fallbackUrl = getFallbackImage(character.name);
      setImageUrl(fallbackUrl);
      setUsingFallback(true);
    }
  };
  
  return (
    <div className="character-card" onClick={handleCardClick}>
      <div className="character-card__image-container">
        <img 
          src={imageUrl} 
          alt={character.name} 
          className="character-card__image"
          onError={handleImageError}
        />
      </div>
      <div className="character-card__info">
        <h3 className="character-card__name">{character.name}</h3>
        <button 
          className={`character-card__favorite-btn ${isFavorite ? 'character-card__favorite-btn--active' : ''}`}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={isFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CharacterCard; 