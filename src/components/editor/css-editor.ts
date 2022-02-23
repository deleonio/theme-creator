import { editor } from 'monaco-editor';
import { components } from './store';
import { format } from 'prettier';
import parserCss from 'prettier/esm/parser-postcss.mjs';

/**
 * - https://www.npmjs.com/package/sass
 * - https://www.npmjs.com/package/clean-css
 * - https://www.npmjs.com/package/monaco-editor
 */
export const createCssEditor = (ref: HTMLElement, component: string, theme: string, setSignal: Function) => {
  setTimeout(() => {
    const vs = editor.create(ref, {
      value: components[component].css,
      language: 'css',
      theme: 'vs-dark',
      lineNumbers: 'on',
      formatOnPaste: true,
      formatOnType: true,
    });
    let timeout: NodeJS.Timer;
    vs.getModel()?.onDidChangeContent(() => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const css = vs.getValue();
        window.KoliBriTheme = {
          [theme]: {
            'KOL-BUTTON': css,
          },
        };
        // const formattedCss = format(css, { parser: 'css', plugins: [parserCss] });
        // if (formattedCss != css) vs.setValue(formattedCss);
        setSignal(() => false);
        // const css = sass.compile(scss);
        // const minCss = console.log(vs.getValue());
      }, 1000);
    });
  }, 0);
};
