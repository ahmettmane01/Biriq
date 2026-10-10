import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Biriq Store', short_name: 'Biriq', description: 'Gaming top-up store for Somalia', start_url: '/', display: 'standalone', background_color: '#07080c', theme_color: '#07080c', icons: []
  };
}
