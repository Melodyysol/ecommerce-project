/**
 * API Configuration
 * Centralized API endpoints and configuration
 */

// External API endpoint
export const EXTERNAL_API_URL = 'https://www.course-api.com/react-store-products';

// Vercel API endpoint (used in production)
export const VERCEL_API_ENDPOINT = '/api/products';

/**
 * Get the appropriate API endpoint based on environment
 * - Development: Uses external API directly via proxy
 * - Production: Uses Vercel API route to avoid CORS issues
 */
export const getProductsEndpoint = (): string => {
  return import.meta.env.PROD ? VERCEL_API_ENDPOINT : EXTERNAL_API_URL;
};
