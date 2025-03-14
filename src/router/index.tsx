import App from '@/App';
import CharacterList from '@/pages/CharacterList';
import CharacterDetail from '@/pages/CharacterDetail';

// Definición de rutas - Se mantiene para referencia aunque no se usa actualmente
// La configuración de rutas real está en App.tsx
export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <CharacterList />
      },
      {
        path: '/character/:id',
        element: <CharacterDetail />
      },
      {
        path: '/favorites',
        element: <CharacterList />
      }
    ]
  }
];

