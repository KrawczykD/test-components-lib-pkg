import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import htmlTemplate from 'rollup-plugin-generate-html-template';
const path = require('path');
const pkgjson = require('./package.json');

export default defineConfig({
  plugins: [
    vue(),
    htmlTemplate({
      template: 'src/pkg-template.html',
      target: 'index.html'
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/libraryentrypoint.ts'),
      name: pkgjson.libraryName,
      fileName: (format) => `${pkgjson.libraryName}.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        //dir: 'library',
        // Provide global variables to use in the UMD build
        // for externalized deps
        assetFileNames: `${pkgjson.libraryName}.css`,
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
