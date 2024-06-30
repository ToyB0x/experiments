import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  target: 'es2021',
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs'],
  minify: true,
  sourcemap: true,
})
