import { defineConfig } from '@unocss/webpack';
import { presetMini } from '@unocss/preset-mini';
import transformerDirective from '@unocss/transformer-directives';

export default defineConfig({
  presets: [presetMini()],
  shortcuts: {
    h1: 'text-2xl mt-2 mb-1.5',
    h2: 'text-xl mt-2 mb-1.5',
    h3: 'text-lg mt-2 mb-1.5',
    button:
      'bg-gray-700 hover:bg-gray-500 text-white py-2 px-3 rounded-md my-1 mr-1',
    primary: 'bg-green-700 hover:bg-green-500',
    secondary: 'bg-green-700 hover:bg-green-500',
    danger: 'bg-red-700 hover:bg-red-500',
  },
  transformers: [transformerDirective()],
});
