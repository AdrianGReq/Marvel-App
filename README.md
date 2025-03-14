# Marvel App

Aplicación web que consume la API de Marvel para mostrar información sobre personajes.

## Requisitos

- React 18+
- Node.js v16+ 
- npm v8+

## Instalación

```bash
git clone [URL_DEL_REPOSITORIO]
cd marvel-app
npm install
```

## Ejecución

```bash
npm run dev
```

La aplicación estará disponible en http://localhost:5173

## Testing

```bash
npm test
```

## Arquitectura y Estructura

### Estructura de carpetas

- `/src`: Código fuente
  - `/components`: Componentes reutilizables
  - `/pages`: Páginas principales
  - `/store`: Gestión de estado global
  - `/services`: Servicios API
  - `/utils`: Utilidades y funciones auxiliares
  - `/styles`: Estilos globales (SCSS)

### Gestión de Estados

- **Estado Global**: Implementado con Zustand para gestionar personajes, favoritos y estados de carga.
- **Estado Local**: Utilizando React useState para estados específicos de componentes.

### Estilos

- Implementados con SCSS para una mejor organización y reutilización.
- Diseño responsive adaptable a diferentes dispositivos.

### Patrones y Decisiones Técnicas

- **BEM**: Metodología para nombrar clases CSS
- **Componentes Funcionales**: Utilizando React Hooks
- **Código Limpio**: Siguiendo principios SOLID
- **Manejo de Imágenes Fallback**: Sistema robusto para manejar imágenes y descripciones traducidas faltantes

## Mejoras Futuras

- Implementación de PWA
- Caché offline
- Mejoras de rendimiento
- Tests End-to-End

## Tecnologías Utilizadas

- React
- TypeScript
- SCSS
- Zustand
- Vite
- Vitest
- React Router
- Axios