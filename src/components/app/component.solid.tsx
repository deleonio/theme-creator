import { Component, createSignal } from 'solid-js';

import { KolInputText, KolSelect } from '@kolibri/solid';
import { EditorComponent } from '../editor/component.solid';

export const AppComponent: Component = () => {
  const [getTheme, setTheme] = createSignal<string>('default');
  const [getComponent, setComponent] = createSignal<string>('KOL-BUTTON');

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
              setComponent((value as string[])[0]);
            },
          }}
        >
          Komponenten
        </KolSelect>
      </div>
      <EditorComponent component={getComponent()} theme={getTheme()}></EditorComponent>
    </div>
  );
};
