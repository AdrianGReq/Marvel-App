import React, { useState, useEffect } from 'react';
import './styles.scss';
import { CHARACTER_NAME_IMAGE_MAPPING, getFallbackImage } from '@/utils/imageHelpers';

interface ImageTestItem {
  id: string;
  url: string;
  loaded: boolean;
  error: boolean;
}

const ImageTest: React.FC = () => {
  const [characterImages, setCharacterImages] = useState<ImageTestItem[]>([]);
  const [fallbackImages, setFallbackImages] = useState<ImageTestItem[]>([]);

  useEffect(() => {
    // Crear elementos de prueba
    const characterItems: ImageTestItem[] = [];
    const fallbackItems: ImageTestItem[] = [];
    
    // Preparar imágenes de personajes
    Object.entries(CHARACTER_NAME_IMAGE_MAPPING).forEach(([key, value]) => {
      characterItems.push({
        id: key,
        url: value as string,
        loaded: false,
        error: false
      });
    });
    
    // Preparar imágenes de respaldo
    Object.keys(CHARACTER_NAME_IMAGE_MAPPING).forEach(key => {
      fallbackItems.push({
        id: key,
        url: getFallbackImage(key),
        loaded: false,
        error: false
      });
    });
    
    setCharacterImages(characterItems);
    setFallbackImages(fallbackItems);
  }, []);

  const handleImageLoad = (set: 'character' | 'fallback', index: number) => {
    if (set === 'character') {
      const newImages = [...characterImages];
      newImages[index].loaded = true;
      setCharacterImages(newImages);
    } else {
      const newImages = [...fallbackImages];
      newImages[index].loaded = true;
      setFallbackImages(newImages);
    }
  };

  const handleImageError = (set: 'character' | 'fallback', index: number) => {
    if (set === 'character') {
      const newImages = [...characterImages];
      newImages[index].error = true;
      setCharacterImages(newImages);
    } else {
      const newImages = [...fallbackImages];
      newImages[index].error = true;
      setFallbackImages(newImages);
    }
  };

  return (
    <div className="image-test">
      <h2>Prueba de Imágenes</h2>
      
      <div className="image-test__section">
        <h3>Imágenes de Personajes</h3>
        <div className="image-test__grid">
          {characterImages.map((item, index) => (
            <div 
              key={item.id} 
              className={`image-test__item ${item.loaded ? 'loaded' : ''} ${item.error ? 'error' : ''}`}
            >
              <p>{item.id}</p>
              <img 
                src={item.url} 
                alt={item.id}
                onLoad={() => handleImageLoad('character', index)}
                onError={() => handleImageError('character', index)}
              />
              <div className="image-test__status">
                {item.error ? 'Error' : (item.loaded ? 'Cargada' : 'Cargando...')}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="image-test__section">
        <h3>Imágenes de Respaldo</h3>
        <div className="image-test__grid">
          {fallbackImages.map((item, index) => (
            <div 
              key={item.id} 
              className={`image-test__item ${item.loaded ? 'loaded' : ''} ${item.error ? 'error' : ''}`}
            >
              <p>{item.id}</p>
              <img 
                src={item.url} 
                alt={item.id}
                onLoad={() => handleImageLoad('fallback', index)}
                onError={() => handleImageError('fallback', index)}
              />
              <div className="image-test__status">
                {item.error ? 'Error' : (item.loaded ? 'Cargada' : 'Cargando...')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageTest; 