import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    server: {
    origin: 'http://localhost:5004',
    port: 5004,
  },
  base: "http://localhost:5004",
  plugins: [
    federation({
      name: 'first_app',
      manifest: true,
      remotes: {
        sidebar_app: {
          type: "module",
          name: "sidebar_app",
          entry: "http://localhost:5001/mf-manifest.json",
        },
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
  // Do you need to support build targets lower than chrome89?
  // You can use 'vite-plugin-top-level-await' plugin for that.
  build: {
    target: 'chrome89',
  },
});