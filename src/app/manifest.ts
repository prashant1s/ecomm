import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'STYLEHUB E-commerce',
    short_name: 'STYLEHUB',
    description: 'Your one-stop destination for modern fashion.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
