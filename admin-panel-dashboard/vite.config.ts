//@ts-ignore
import { resolve } from 'path'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
  define: {
    'process.env': process.env
  }
});
