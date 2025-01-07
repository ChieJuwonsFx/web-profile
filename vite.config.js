import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.js'], // file input utama
      refresh: true,
    }),
  ],
  build: {
    outDir: 'dist', // pastikan output ke folder dist
    emptyOutDir: true, // pastikan folder dist dibersihkan sebelum build
    manifest: true, // buat manifest untuk mendeteksi file yang dihasilkan
  },
});
