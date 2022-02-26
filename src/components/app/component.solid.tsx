import { Component, createSignal } from 'solid-js';

import { KolInputText, KolSelect, KolButton } from '@kolibri/solid';
import { EditorComponent } from '../editor/component.solid';
import { KoliBriDevHelper } from '@kolibri/lib';
import { createTsEditor } from '../editor/ts-editor';

export const AppComponent: Component = () => {
  const [getTheme, setTheme] = createSignal<string>('default');
  const [getComponent, setComponent] = createSignal<string>('KOL-BUTTON');
  const [getShow, setShow] = createSignal<boolean>(false);
  const [getValue, setValue] = createSignal<string>('');

  KoliBriDevHelper.patchKoliBriTheme(
    getTheme(),
    'KOL-BADGE',
    `:host span {
  border-radius: 2em;
  padding: 0.5em 1em;
}`
  );
  KoliBriDevHelper.patchKoliBriTheme(
    getTheme(),
    'KOL-BUTTON',
    `:host button {
    border-radius: 2em;
    padding: 0.5em 1em;
  }
  :host button.primary {
    background-color: blueviolet;
  }
  :host button.primary:hover {
    background-color: white;
  }
  :host button.secondary {
    background-color: rgb(165, 89, 236);
  }
  :host button.secondary:hover {
    background-color: white;
  }
  :host button.normal {
    background-color: rgb(43, 153, 226);
  }
  :host button.normal:hover {
    background-color: white;
  }
  :host button.danger {
    background-color: red;
  }
  :host button.danger:hover {
    background-color: white;
  }
  :host button.ghost {
    background-color: white;
  }
  :host button.ghost:hover {
    background-color: gray;
  }`
  );
  const renderJsonString = (theme: string): void => {
    setShow(false);
    if (
      typeof window.KoliBri === 'object' &&
      window.KoliBri !== null &&
      typeof window.KoliBri.Themes === 'object' &&
      window.KoliBri.Themes !== null &&
      typeof window.KoliBri.Themes[theme] === 'object' &&
      window.KoliBri.Themes[theme] !== null &&
      window.KoliBri.Themes[theme] !== undefined
    ) {
      setValue(JSON.stringify(window.KoliBri.Themes[theme]));
      setShow(true);
    }

    console.log(window.KoliBri.Themes?.[theme]);
    console.log(theme);
  };

  const renderTsEditor = (ref: HTMLElement) => {
    createTsEditor(ref, getValue());
  };

  const onClickGenerieren = {
    onClick: (...args: any[]) => {
      console.log(args);
      console.log(getTheme());
      renderJsonString(getTheme());
    },
  };

  return (
    <div class="font-sans grid">
      <div class="m-1 grid grid-cols-2 gap-2">
        <KolInputText
          _value={getTheme()}
          _on={{
            onChange: (_event, value) => {
              setTheme(value as string);
              setValue('');
              setShow(false);
            },
          }}
          _type="text"
        >
          Theme
        </KolInputText>
        <KolSelect
          _list={[
            {
              label: 'Badge',
              value: 'KOL-BADGE',
            },
            {
              label: 'Breadcrumb',
              value: 'KOL-BREADCRUMB',
            },
            {
              label: 'Button',
              value: 'KOL-BUTTON',
            },
          ]}
          _value={[getComponent()]}
          _on={{
            onChange: (_event, value) => {
              setComponent((value as string[])[0]);
            },
          }}
        >
          Komponenten
        </KolSelect>
      </div>
      <EditorComponent tagName={getComponent()} theme={getTheme()}></EditorComponent>
      <KolButton _label="Css String generieren" _on={onClickGenerieren}></KolButton>
      {getShow() && (
        <div
          ref={renderTsEditor}
          style={{
            height: '500px',
            width: '100%',
          }}
        ></div>
      )}
    </div>
  );
};
