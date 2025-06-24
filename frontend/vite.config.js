// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'    // ✅ Use Vite plugin

// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     port: 5173,
//     open: true,
    
//   }
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    hmr: {
      overlay: false, // optional: hides the red overlay error screen
    },
  },
});

