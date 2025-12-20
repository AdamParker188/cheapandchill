import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // Így biztosan a projekted mappájában lévõ Reactot használja mindenki
            react: path.resolve(process.cwd(), './node_modules/react'),
            'react-dom': path.resolve(process.cwd(), './node_modules/react-dom'),
        },
    },
})