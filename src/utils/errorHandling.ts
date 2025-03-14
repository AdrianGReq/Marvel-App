/**
 * Extrae mensaje de error
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
    return error.message;
  }
  
  return 'An unknown error occurred';
};

/**
 * gestiona errores API devolviendo mensaje
 */
export const handleApiError = (error: unknown, context: string): string => {
  const message = getErrorMessage(error);
  console.error(`API Error in ${context}:`, error);
  return `Failed to ${context.toLowerCase()}: ${message}`;
}; 