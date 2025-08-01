import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react({
    jsxRuntime: 'automatic' 
  })],
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg'],
  css: {
    postcss: './postcss.config.js',
  },
});
