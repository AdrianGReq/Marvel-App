import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCharactersStore from '@/store/useCharactersStore';
import Header from '@/components/Header';
import BackToHomeButton from '@/components/BackToHomeButton';
import './styles.scss';
import { isImageNotAvailable, getFallbackImage, ensureHttps, getCharacterDescription } from '@/utils/imageHelpers';

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { 
    selectedCharacter, 
    fetchCharacterById, 
    addToFavorites, 
    removeFromFavorites, 
    favorites, 
    isLoading, 
    error 
  } = useCharactersStore();
  
  const [imageUrl, setImageUrl] = useState<string>('');
  const [usingFallback, setUsingFallback] = useState(false);
  
  // Cargar el personaje cuando cambia el ID
  useEffect(() => {
    if (id) {
      fetchCharacterById(Number(id));
    }
  }, [id, fetchCharacterById]);
  
  // Depuración para ver nombres exactos de personajes
  useEffect(() => {
    if (selectedCharacter) {
      // La depuración ya no es necesaria ya que el sistema funciona correctamente
      // Solo mantenemos un log básico para información durante desarrollo
      console.log(`Cargado: "${selectedCharacter.name}" (ID: ${selectedCharacter.id})`);
    }
  }, [selectedCharacter]);
  
  // Manejar la imagen cuando cambia el personaje seleccionado
  useEffect(() => {
    if (selectedCharacter) {
      // Primero verificamos si hay thumbnail y si la imagen está disponible
      if (selectedCharacter.thumbnail && !isImageNotAvailable(selectedCharacter.thumbnail.path)) {
        const httpsPath = ensureHttps(selectedCharacter.thumbnail.path);
        const fullUrl = `${httpsPath}.${selectedCharacter.thumbnail.extension}`;
        
        // Verificar si la imagen realmente ha cambiado antes de actualizar el estado
        if (imageUrl !== fullUrl) {
          setImageUrl(fullUrl);
          setUsingFallback(false);
        }
      } else {
        // Si no hay thumbnail o la imagen no está disponible, usamos la imagen de respaldo
        const fallbackUrl = getFallbackImage(selectedCharacter.name);
        
        if (imageUrl !== fallbackUrl) {
          setImageUrl(fallbackUrl);
          setUsingFallback(true);
        }
      }
    }
  }, [selectedCharacter, imageUrl]);
  
  const isFavorite = selectedCharacter 
    ? favorites.some(fav => fav.id === selectedCharacter.id)
    : false;
  
  const handleFavoriteClick = () => {
    if (!selectedCharacter) return;
    
    if (isFavorite) {
      removeFromFavorites(selectedCharacter.id);
    } else {
      addToFavorites(selectedCharacter);
    }
  };
  
  const handleImageError = () => {
    // Si la imagen original falla, usar la imagen de respaldo
    if (!usingFallback && selectedCharacter) {
      const fallbackUrl = getFallbackImage(selectedCharacter.name);
      setImageUrl(fallbackUrl);
      setUsingFallback(true);
    }
  };
  
  if (isLoading) {
    return (
      <div className="character-detail-page">
        <Header />
        <div className="character-detail-page__loading">
          <svg className="character-detail-page__spinner" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="#e62429" strokeWidth="5"></circle>
          </svg>
          <p>Cargando detalles del personaje...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="character-detail-page">
        <Header />
        <div className="character-detail-page__content">
          <BackToHomeButton />
          <div className="character-detail-page__error">
            <p>{error}</p>
            <button onClick={() => id && fetchCharacterById(Number(id))}>Intentar de Nuevo</button>
          </div>
        </div>
      </div>
    );
  }
  
  if (!selectedCharacter) {
    return (
      <div className="character-detail-page">
        <Header />
        <div className="character-detail-page__content">
          <BackToHomeButton />
          <div className="character-detail-page__not-found">
            <p>Personaje no encontrado.</p>
          </div>
        </div>
      </div>
    );
  }
  
  const { name, description, comics } = selectedCharacter;

  return (
    <div className="character-detail-page">
      <Header />
      
      <div className="character-detail-page__content">
        <BackToHomeButton />
        
        <main className="character-detail-page__main">
          <div className="character-detail-page__image-container">
            <img 
              src={imageUrl} 
              alt={name}
              className="character-detail-page__image"
              onError={handleImageError}
            />
          </div>
          
          <div className="character-detail-page__info">
            <div className="character-detail-page__header">
              <h1 className="character-detail-page__title">{name}</h1>
              
              <button 
                className={`character-detail-page__favorite-btn ${isFavorite ? 'character-detail-page__favorite-btn--active' : ''}`}
                onClick={handleFavoriteClick}
              >
                {isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
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
            
            <div className="character-detail-page__description">
              {(() => {
                const translatedDesc = getCharacterDescription(name, description, selectedCharacter.id);
                return translatedDesc ? (
                  <p>{translatedDesc}</p>
                ) : (
                  <p className="character-detail-page__no-description">No hay descripción disponible para este personaje.</p>
                );
              })()}
            </div>
          </div>
          
          <div className="character-detail-page__comics">
            <h2 className="character-detail-page__section-title">Comics</h2>
            
            {comics.available > 0 ? (
              <div className="character-detail-page__comics-list">
                {comics.items.slice(0, 20).map((comic, index) => (
                  <div key={index} className="character-detail-page__comic-item">
                    <h3 className="character-detail-page__comic-title">{comic.name}</h3>
                  </div>
                ))}
              </div>
            ) : (
              <p className="character-detail-page__no-comics">No hay comics disponibles para este personaje.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CharacterDetail; 