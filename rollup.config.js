import multiInput from 'rollup-plugin-multi-input'
import sass from 'rollup-plugin-sass'

export default {
  input: ['src/components/*.sass'],
  output: {
    format: 'esm',
    dir: 'dist',
  },
  plugins: [
    multiInput(),
    sass({
      options: { outputStyle: 'compressed' },
    }),
  ],
}
