import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Character, CharacterState } from '@/types';
import { getCharacterById, getCharacters, searchCharacters } from '@/services/api';

interface CharacterActions {
  fetchCharacters: () => Promise<void>;
  searchCharactersByName: (name: string) => Promise<void>;
  fetchCharacterById: (id: number) => Promise<void>;
  addToFavorites: (character: Character) => void;
  removeFromFavorites: (characterId: number) => void;
  setSearchTerm: (term: string) => void;
  clearSearchResults: () => void;
  resetError: () => void;
}

const initialState: CharacterState = {
  characters: [],
  favorites: [],
  searchResults: [],
  selectedCharacter: null,
  isLoading: false,
  error: null,
  searchTerm: ''
};

const useCharactersStore = create<CharacterState & CharacterActions>()(
  persist(
    (set, get) => ({
      ...initialState,
      
      fetchCharacters: async () => {
        set({ isLoading: true, error: null });
        
        try {
          const characters = await getCharacters();
          set({ characters, isLoading: false });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to fetch characters', 
            isLoading: false 
          });
        }
      },
      
      searchCharactersByName: async (name: string) => {
        set({ isLoading: true, error: null, searchTerm: name });
        
        try {
          if (!name.trim()) {
            set({ searchResults: [], isLoading: false });
            return;
          }
          
          const results = await searchCharacters(name);
          set({ searchResults: results, isLoading: false });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to search characters', 
            isLoading: false 
          });
        }
      },
      
      fetchCharacterById: async (id: number) => {
        set({ isLoading: true, error: null });
        
        try {
          const character = await getCharacterById(id);
          set({ selectedCharacter: character, isLoading: false });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : `Failed to fetch character with ID ${id}`, 
            isLoading: false 
          });
        }
      },
      
      addToFavorites: (character: Character) => {
        const { favorites } = get();
        
        // Check si personaje already en favoritos
        if (!favorites.some(fav => fav.id === character.id)) {
          set({ favorites: [...favorites, character] });
        }
      },
      
      removeFromFavorites: (characterId: number) => {
        const { favorites } = get();
        set({ favorites: favorites.filter(fav => fav.id !== characterId) });
      },
      
      setSearchTerm: (term: string) => {
        set({ searchTerm: term });
      },
      
      clearSearchResults: () => {
        set({ searchResults: [], searchTerm: '' });
      },
      
      resetError: () => {
        set({ error: null });
      }
    }),
    {
      name: 'marvel-characters-storage',
      partialize: (state) => ({ favorites: state.favorites })
    }
  )
);

export default useCharactersStore; 