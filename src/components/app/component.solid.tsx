import { Component, createSignal } from 'solid-js';

import { KolInputText, KolSelect } from '@kolibri/solid';
import { EditorComponent } from '../editor/component.solid';
import { KoliBriDevHelper } from '@kolibri/lib';

export const AppComponent: Component = () => {
  const [getTheme, setTheme] = createSignal<string>('default');
  const [getComponent, setComponent] = createSignal<string>('KOL-BUTTON');

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

  return (
    <div class="font-sans grid">
      <div class="m-1 grid grid-cols-2 gap-2">
        <KolInputText
          _value={getTheme()}
          _on={{
            onChange: (_event, value) => {
              setTheme(value as string);
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
              setComponent((value as KoliBri.TagName[])[0]);
            },
          }}
        >
          Komponenten
        </KolSelect>
      </div>
      <EditorComponent tagName={getComponent()} theme={getTheme()}></EditorComponent>
    </div>
  );
};
