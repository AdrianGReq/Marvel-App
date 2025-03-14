import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CharacterList from '@/pages/CharacterList';
import CharacterDetail from '@/pages/CharacterDetail';
import ImageTest from '@/pages/ImageTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CharacterList />
  },
  {
    path: '/character/:id',
    element: <CharacterDetail />
  },
  {
    path: '/image-test',
    element: <ImageTest />
  }
]);

