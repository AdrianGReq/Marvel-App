import axios from 'axios';
import md5 from 'md5';
import { ApiResponse, Character } from '@/types';

// credenciales de la Marvel API
const BASE_URL = 'https://gateway.marvel.com/v1/public';
const API_PUBLIC_KEY = 'd21b8deb7f421d6f19af13d1de1caa26';
const API_PRIVATE_KEY = 'cee25d194a6dcc723bc241c82c897a61a83b9952';

// configuracion cache
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const CHARACTERS_CACHE_KEY = 'marvel_characters';
const CHARACTER_CACHE_PREFIX = 'marvel_character_';

// parametros auth de la API
const getAuthParams = () => {
  const timestamp = new Date().getTime().toString();
  const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY);
  
  return {
    ts: timestamp,
    apikey: API_PUBLIC_KEY,
    hash: hash
  };
};

// checkear si cache es valida
const isCacheValid = (cacheTime: number): boolean => {
  return Date.now() - cacheTime < CACHE_TTL;
};

// Get personajes de cache o API
export const getCharacters = async (limit = 50, offset = 0): Promise<Character[]> => {
  // Check cache primero
  const cachedData = localStorage.getItem(CHARACTERS_CACHE_KEY);
  
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    
    // si cache es valida, devuelve cache
    if (isCacheValid(timestamp)) {
      return data as Character[];
    }
  }
  
  try {
    // Peticion API si cache no es valida
    const params = {
      ...getAuthParams(),
      limit,
      offset
    };
    
    const response = await axios.get<ApiResponse<Character>>(`${BASE_URL}/characters`, { params });
    const data = response.data.data.results;
    
    // guardar en cache
    localStorage.setItem(CHARACTERS_CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
    
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

// buscar personajes
export const searchCharacters = async (nameStartsWith: string): Promise<Character[]> => {
  try {
    const params = {
      ...getAuthParams(),
      nameStartsWith,
      limit: 50
    };
    
    const response = await axios.get<ApiResponse<Character>>(`${BASE_URL}/characters`, { params });
    return response.data.data.results;
  } catch (error) {
    console.error('Error searching characters:', error);
    throw error;
  }
};

// get detalles personaje
export const getCharacterById = async (characterId: number): Promise<Character> => {
  // Check cache primero
  const cacheKey = `${CHARACTER_CACHE_PREFIX}${characterId}`;
  const cachedData = localStorage.getItem(cacheKey);
  
  if (cachedData) {
    const { data, timestamp } = JSON.parse(cachedData);
    
    // si cache es valida, devuelve cache
    if (isCacheValid(timestamp)) {
      return data as Character;
    }
  }
  
  try {
    // Peticion API si cache no es valida
    const params = getAuthParams();
    
    const response = await axios.get<ApiResponse<Character>>(`${BASE_URL}/characters/${characterId}`, { params });
    const data = response.data.data.results[0];
    
    // guardar en cache
    localStorage.setItem(cacheKey, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
    
    return data;
  } catch (error) {
    console.error(`Error fetching character ${characterId}:`, error);
    throw error;
  }
};

// Get personajes
export const getCharacterComics = async (characterId: number, limit = 20): Promise<any[]> => {
  try {
    const params = {
      ...getAuthParams(),
      limit,
      orderBy: 'onsaleDate'
    };
    
    const response = await axios.get(`${BASE_URL}/characters/${characterId}/comics`, { params });
    return response.data.data.results;
  } catch (error) {
    console.error(`Error fetching comics for character ${characterId}:`, error);
    throw error;
  }
}; 