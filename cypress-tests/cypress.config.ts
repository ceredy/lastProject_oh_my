import { defineConfig } from 'cypress';

export default defineConfig({
  viewportHeight: 800,
  viewportWidth: 1280,
  watchForFileChanges: false,
  
  
  e2e: {
    baseUrl: 'https://www.spokojenypes.cz',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});