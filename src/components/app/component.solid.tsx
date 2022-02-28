import { Component, createSignal } from 'solid-js';

import { KolInputText, KolSelect, KolButton, KolHeading, KolAlert, KolLink } from '@kolibri/solid';
import { EditorComponent } from '../editor/component.solid';
import { KoliBriDevHelper, SelectOption } from '@kolibri/lib';
import { createTsEditor } from '../editor/ts-editor';
import { TAG_NAMES } from '../tags';

const TAG_NAME_LIST: SelectOption<string>[] = [];
TAG_NAMES.forEach((tagName) => {
  TAG_NAME_LIST.push({
    label:
      tagName === 'kol-badge' || tagName === 'kol-breadcrumb' || tagName === 'kol-button'
        ? tagName
        : `${tagName} (not prepared yet)`,
    value: tagName.toLocaleUpperCase(),
  });
});

const restoreThemes = () => {
  let store: Record<string, Record<string, string>> = {};
  try {
    store = JSON.parse(localStorage.getItem('kolibri-themes') || '{}') as Record<string, Record<string, string>>;
  } catch (e) {}
  if (typeof store === 'object' && store !== null) {
    const themeNames = Object.getOwnPropertyNames(store);
    themeNames.forEach((themeName) => {
      if (typeof store[themeName] === 'object' && store[themeName] !== null) {
        KoliBriDevHelper.patchTheme(themeName, store[themeName]);
      }
    });
  }
};

const storeThemes = () => {
  if (
    typeof window.KoliBri === 'object' &&
    window.KoliBri !== null &&
    typeof window.KoliBri.Themes === 'object' &&
    window.KoliBri.Themes !== null
  ) {
    localStorage.setItem('kolibri-themes', JSON.stringify(window.KoliBri.Themes));
  }
};

export const AppComponent: Component = () => {
  const [getTheme, setTheme] = createSignal<string>('default');
  const [getComponent, setComponent] = createSignal<string>('KOL-BUTTON');
  const [getShow, setShow] = createSignal<boolean>(false);
  const [getValue, setValue] = createSignal<string>('');

  KoliBriDevHelper.patchThemeTag(
    getTheme(),
    'KOL-BADGE',
    `:host span {
  border-radius: 2em;
  padding: 0.5em 1em;
}`
  );
  KoliBriDevHelper.patchThemeTag(
    getTheme(),
    'KOL-BREADCRUMB',
    `:host kol-link {
      color: green;
    }
    `
  );
  KoliBriDevHelper.patchThemeTag(
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
  restoreThemes();
  setInterval(storeThemes, 1000);
  const renderJsonString = (theme: string): void => {
    if (
      typeof window.KoliBri === 'object' &&
      window.KoliBri !== null &&
      typeof window.KoliBri.Themes === 'object' &&
      window.KoliBri.Themes !== null &&
      typeof window.KoliBri.Themes[theme] === 'object' &&
      window.KoliBri.Themes[theme] !== null &&
      window.KoliBri.Themes[theme] !== undefined
    ) {
      const styles = window.KoliBri.Themes[theme];
      const keys = Object.getOwnPropertyNames(styles);
      keys.forEach((key: string) => {
        styles[key] = (styles[key] as string).replace(/( {2,}|\n|)/g, '');
      });
      setValue(JSON.stringify(window.KoliBri.Themes[theme]));
    }
  };

  const renderTsEditor = (ref: HTMLElement) => {
    createTsEditor(ref, getTheme(), getValue() || '{}');
  };

  const onClickCreate = {
    onClick: () => {
      renderJsonString(getTheme());
      setShow(true);
    },
  };

  const onClickEdit = {
    onClick: () => {
      setShow(false);
    },
  };

  const onClickClear = {
    onClick: () => {
      localStorage.removeItem('kolibri-themes');
      window.location.reload();
    },
  };

  return (
    <div class="font-sans grid gap-2">
      {getShow() ? (
        <>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <KolHeading>Theming</KolHeading>
              <KolAlert _type="info">
                Das Theming ist noch in einem experimentellen Zustand. Für Hinweise oder Verbesserungsvorschläge wenden
                Sie sich gerne an <KolLink _href="mailto: ---@---.de">---@---.de</KolLink>
              </KolAlert>
              <p>
                Zum Gestalten der Komponenten werden sogenannte Themes verwendet. Jedes Theme beinhaltet
                CSS-Definitionen, die jede Komponente individuell stylt.
              </p>
              <KolHeading>Theme einbinden</KolHeading>
              <p>
                Um ihr Theme ({getTheme()}) in ihre Anwendung einzubinden, müssen Sie einfach den Quellcode kopieren und
                in z.B. die <code>main.ts</code> ihrer Anwendung einfügen.
              </p>
            </div>
            <div
              ref={renderTsEditor}
              style={{
                height: '500px',
                width: '100%',
              }}
            ></div>
          </div>
          <KolButton _label="Theme editieren" _on={onClickEdit}></KolButton>
        </>
      ) : (
        <>
          <div class="grid grid-cols-2 gap-2">
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
              _list={TAG_NAME_LIST}
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
          <div class="mt-4">
            Drücke entweder <code class="text-lg border-1 rounded px-1">Strg + S</code> oder{' '}
            <code class="text-lg border-1 rounded px-1">Command + S</code>, um die Änderungen zu übernehmen und zu
            speichern.
          </div>
          <div class="flex gap-2">
            <KolButton _label="Theme erstellen" _on={onClickCreate} _variant="primary"></KolButton>
            <KolButton _label="Alle Änderungen verwerfen" _on={onClickClear} _variant="ghost"></KolButton>
          </div>
        </>
      )}
    </div>
  );
};
