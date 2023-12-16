import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/posts/': 'http://localhost:5100'
        },
        port: 5200,
    },
    plugins: [react()],
})
