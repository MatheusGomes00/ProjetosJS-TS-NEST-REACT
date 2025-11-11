import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    server: {
      allowedHosts: ['intranet.testes', 'localhost']
    },
  plugins: [
      react(),
      tailwindcss(),
  ],
  base: "/sales-track",
})
