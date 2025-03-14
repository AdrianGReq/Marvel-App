export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    items: Comic[];
  };
}

export interface Comic {
  resourceURI: string;
  name: string;
  date?: string;
}

export interface ApiResponse<T> {
  code: number;
  status: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: T[];
  };
}

export interface CharacterState {
  characters: Character[];
  favorites: Character[];
  searchResults: Character[];
  selectedCharacter: Character | null;
  isLoading: boolean;
  error: string | null;
  searchTerm: string;
} 