import { federation } from '@module-federation/vite'
import { defineConfig } from 'vite'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    origin: `http://localhost:5003`,
    port: 5003,
  },
  base: `http://localhost:5003`,
  plugins: [
    federation({
      name: `to-dos_app`, // Unique name for the application
      manifest: true,
      remotes: {
        sidebar_app: {
          type: `module`,
          name: `sidebar_app`, // The unique name of the remote application that will be used for identification
          entry: `http://localhost:5001/mf-manifest.json`, // The URL where the manifest file for the remote application can be found
        },
      }, 
      shared: { // Used to define dependencies that should be shared between different applications
        react: {
          singleton: true, // Ensures that only one instance of React is used
        },
        'react/': {
          singleton: true, // Ensures that all modules starting with 'react/' also use the same instance
        },
      },
      /* singleton: true: This setting ensures that only a single instance of the specified module 
      (in this case, react) is loaded in the application. 
      If multiple applications try to load their own version of React, 
      this setting prevents that by sharing the same instance across all applications */
    }),
  ],
  build: {
    target: `chrome89`, // Setting the target browser version for the build
  },
})