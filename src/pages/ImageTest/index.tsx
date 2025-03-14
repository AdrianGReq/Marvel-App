import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { CHARACTER_IMAGE_MAPPING, FALLBACK_IMAGES } from '@/utils/imageHelpers';
import './styles.scss';

interface ImageTestItem {
  id: string;
  url: string;
  loaded: boolean;
  error: boolean;
}

const ImageTestPage = () => {
  const [characterImages, setCharacterImages] = useState<ImageTestItem[]>([]);
  const [fallbackImages, setFallbackImages] = useState<ImageTestItem[]>([]);
  
  useEffect(() => {
    // Convertir objetos de imágenes en arrays para prueba
    const characterItems = Object.entries(CHARACTER_IMAGE_MAPPING).map(([id, url]) => ({
      id,
      url,
      loaded: false,
      error: false
    }));
    
    const fallbackItems = Object.entries(FALLBACK_IMAGES).map(([key, url]) => ({
      id: key,
      url,
      loaded: false,
      error: false
    }));
    
    setCharacterImages(characterItems);
    setFallbackImages(fallbackItems);
  }, []);
  
  const handleImageLoad = (type: 'character' | 'fallback', index: number) => {
    if (type === 'character') {
      setCharacterImages(prev => {
        const newImages = [...prev];
        newImages[index] = {
          ...newImages[index],
          loaded: true,
          error: false
        };
        return newImages;
      });
    } else {
      setFallbackImages(prev => {
        const newImages = [...prev];
        newImages[index] = {
          ...newImages[index],
          loaded: true,
          error: false
        };
        return newImages;
      });
    }
  };
  
  const handleImageError = (type: 'character' | 'fallback', index: number) => {
    if (type === 'character') {
      setCharacterImages(prev => {
        const newImages = [...prev];
        newImages[index] = {
          ...newImages[index],
          loaded: false,
          error: true
        };
        return newImages;
      });
    } else {
      setFallbackImages(prev => {
        const newImages = [...prev];
        newImages[index] = {
          ...newImages[index],
          loaded: false,
          error: true
        };
        return newImages;
      });
    }
  };
  
  return (
    <div className="image-test-page">
      <Header />
      
      <main className="image-test-page__content">
        <h1 className="image-test-page__title">Diagnóstico de Imágenes</h1>
        <p className="image-test-page__description">
          Esta página permite comprobar si las imágenes de personajes se cargan correctamente.
        </p>
        
        <div className="image-test-page__section">
          <h2 className="image-test-page__subtitle">Imágenes Personalizadas ({characterImages.length})</h2>
          <div className="image-test-page__stats">
            <div className="image-test-page__stat">
              Correctas: {characterImages.filter(img => img.loaded).length} 
              ({Math.round((characterImages.filter(img => img.loaded).length / characterImages.length) * 100)}%)
            </div>
            <div className="image-test-page__stat">
              Con error: {characterImages.filter(img => img.error).length}
              ({Math.round((characterImages.filter(img => img.error).length / characterImages.length) * 100)}%)
            </div>
          </div>
          
          <div className="image-test-page__grid">
            {characterImages.map((img, index) => (
              <div key={img.id} className={`image-test-page__item ${img.error ? 'image-test-page__item--error' : ''} ${img.loaded ? 'image-test-page__item--loaded' : ''}`}>
                <div className="image-test-page__item-header">
                  <span className="image-test-page__item-id">{img.id}</span>
                  <span className={`image-test-page__item-status ${img.error ? 'image-test-page__item-status--error' : ''} ${img.loaded ? 'image-test-page__item-status--success' : ''}`}>
                    {img.error ? 'Error' : img.loaded ? 'OK' : 'Pendiente'}
                  </span>
                </div>
                <div className="image-test-page__image-container">
                  <img 
                    src={img.url} 
                    alt={`Character ${img.id}`}
                    className="image-test-page__image"
                    onLoad={() => handleImageLoad('character', index)}
                    onError={() => handleImageError('character', index)}
                  />
                </div>
                <div className="image-test-page__item-url">{img.url}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="image-test-page__section">
          <h2 className="image-test-page__subtitle">Imágenes de Respaldo ({fallbackImages.length})</h2>
          <div className="image-test-page__stats">
            <div className="image-test-page__stat">
              Correctas: {fallbackImages.filter(img => img.loaded).length}
              ({Math.round((fallbackImages.filter(img => img.loaded).length / fallbackImages.length) * 100)}%)
            </div>
            <div className="image-test-page__stat">
              Con error: {fallbackImages.filter(img => img.error).length}
              ({Math.round((fallbackImages.filter(img => img.error).length / fallbackImages.length) * 100)}%)
            </div>
          </div>
          
          <div className="image-test-page__grid">
            {fallbackImages.map((img, index) => (
              <div key={img.id} className={`image-test-page__item ${img.error ? 'image-test-page__item--error' : ''} ${img.loaded ? 'image-test-page__item--loaded' : ''}`}>
                <div className="image-test-page__item-header">
                  <span className="image-test-page__item-id">{img.id}</span>
                  <span className={`image-test-page__item-status ${img.error ? 'image-test-page__item-status--error' : ''} ${img.loaded ? 'image-test-page__item-status--success' : ''}`}>
                    {img.error ? 'Error' : img.loaded ? 'OK' : 'Pendiente'}
                  </span>
                </div>
                <div className="image-test-page__image-container">
                  <img 
                    src={img.url} 
                    alt={`Fallback ${img.id}`}
                    className="image-test-page__image"
                    onLoad={() => handleImageLoad('fallback', index)}
                    onError={() => handleImageError('fallback', index)}
                  />
                </div>
                <div className="image-test-page__item-url">{img.url}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImageTestPage; 