import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: 'index.html',
      // Material ui's "use client" directive causes a warning.
      // This function ignores those warnings.
      // See https://github.com/rollup/rollup/issues/4699#issuecomment-1571555307
      // for more information.
      onwarn(warning, warn) {
        if (
          warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
          warning.message.includes('use client')
        ) {
          return
        }

        warn(warning)
      },
    },
    outDir: '.stormkit/public',
  },
  plugins: [react()],
})
