import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    origin: 'http://localhost:5001',
    port: 5001,
  },
  base: "http://localhost:5001",
  plugins: [
    federation({
      name: 'sidebar_app',
      manifest: true,
      exposes: {
        './sidebar': './src/sidebar/sidebar.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react/': {
          singleton: true,
        },
      },
    }),
  ],
  build: {
    target: 'chrome89',
  },
});