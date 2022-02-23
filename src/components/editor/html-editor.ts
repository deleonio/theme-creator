import { editor } from 'monaco-editor';
import { components } from './store';

/**
 * - https://www.npmjs.com/package/sass
 * - https://www.npmjs.com/package/clean-css
 * - https://www.npmjs.com/package/monaco-editor
 */
export const createHtmlEditor = (ref: HTMLElement, component: string) => {
  setTimeout(() => {
    const vs = editor.create(ref, {
      value: components[component].html,
      language: 'html',
      theme: 'vs-dark',
      lineNumbers: 'on',
      formatOnPaste: true,
      formatOnType: true,
    });
  }, 0);
};
