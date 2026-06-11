import type { IncomingMessage, ServerResponse } from 'http';

export default async function handler(
  _req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const response = await fetch(
      'https://www.course-api.com/react-store-products'
    );

    if (!response.ok) {
      res.writeHead(response.status, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        error: `Failed to fetch products: ${response.statusText}`,
      }));
      return;
    }

    const data = await response.json();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error('API route error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      error: 'Failed to fetch products',
    }));
  }
}
