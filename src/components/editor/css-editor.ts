import { editor, KeyCode } from 'monaco-editor';
import { components } from './store';
import { format } from 'prettier';
import parserCss from 'prettier/esm/parser-postcss.mjs';
import { KoliBriDevHelper } from '@kolibri/lib';

/**
 * - https://www.npmjs.com/package/sass
 * - https://www.npmjs.com/package/clean-css
 * - https://www.npmjs.com/package/monaco-editor
 */
export const createCssEditor = (ref: HTMLElement, tagName: string, theme: string, setSignal: Function) => {
  setTimeout(() => {
    let css = ``;
    if (
      typeof window.KoliBri === 'object' &&
      window.KoliBri !== null &&
      typeof window.KoliBri.Themes === 'object' &&
      window.KoliBri.Themes !== null &&
      typeof window.KoliBri.Themes[theme] === 'object' &&
      window.KoliBri.Themes[theme] !== null &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      typeof window.KoliBri.Themes[theme][tagName] === 'string'
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      css = window.KoliBri.Themes[theme][tagName] as string;
      try {
        css = format(css, { parser: 'css', plugins: [parserCss] });
      } catch (e) {}
    }
    const vs = editor.create(ref, {
      value: css,
      language: 'css',
      theme: 'vs-dark',
      lineNumbers: 'on',
      formatOnPaste: true,
      formatOnType: true,
    });

    vs.onKeyDown((event) => {
      if ((event.ctrlKey || event.metaKey) && event.keyCode === KeyCode.KeyS) {
        event.preventDefault();
        let css = vs.getValue();
        try {
          css = format(css, { parser: 'css', plugins: [parserCss] });
        } catch (e) {}
        KoliBriDevHelper.patchTheme(theme, tagName, css);
        setSignal(() => false);
      }
    });
  }, 0);
};
