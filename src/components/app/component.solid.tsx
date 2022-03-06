import { Component, createSignal } from 'solid-js';

import { KolInputText, KolSelect, KolButton, KolHeading, KolAlert, KolLink, KolInputFile } from '@kolibri/solid';
import { EditorComponent } from '../editor/component.solid';
import { KoliBriDevHelper, SelectOption } from '@kolibri/lib';
import { createTsEditor } from '../editor/ts-editor';
import { format } from 'prettier';
import parserBabel from 'prettier/esm/parser-babel.mjs';
import { TAG_NAMES } from '../tags';

const saveData = (content: string, fileName: string) => {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style.display = 'none';
  const blob = new Blob([content], { type: 'octet/stream' }),
    url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
};

const TAG_NAME_LIST: SelectOption<string>[] = [];
TAG_NAMES.forEach((tagName) => {
  TAG_NAME_LIST.push({
    label:
      tagName === 'kol-abbr' ||
      tagName === 'kol-accordion' ||
      tagName === 'kol-alert' ||
      tagName === 'kol-badge' ||
      tagName === 'kol-breadcrumb' ||
      tagName === 'kol-button' ||
      tagName === 'kol-button-group' ||
      tagName === 'kol-card' ||
      tagName === 'kol-details' ||
      tagName === 'kol-heading' ||
      tagName === 'kol-icon-font-awesome' ||
      tagName === 'kol-icon-icofont' ||
      tagName === 'kol-indented-text' ||
      tagName === 'kol-input-checkbox' ||
      tagName === 'kol-input-color' ||
      tagName === 'kol-input-email' ||
      tagName === 'kol-input-file' ||
      tagName === 'kol-input-number' ||
      tagName === 'kol-input-password' ||
      tagName === 'kol-input-range' ||
      tagName === 'kol-input-radio' ||
      tagName === 'kol-input-text' ||
      tagName === 'kol-link' ||
      tagName === 'kol-link-group' ||
      tagName === 'kol-logo' ||
      tagName === 'kol-modal' ||
      tagName === 'kol-nav' ||
      tagName === 'kol-progress' ||
      tagName === 'kol-select' ||
      tagName === 'kol-spin' ||
      tagName === 'kol-table' ||
      tagName === 'kol-tabs' ||
      tagName === 'kol-textarea' ||
      tagName === 'kol-tooltip' ||
      tagName === 'kol-version'
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
  const [getTheme, setTheme] = createSignal<string>(localStorage.getItem('kolibri-theme') || 'default');
  const [getComponent, setComponent] = createSignal<string>('KOL-BUTTON');
  const [getShow, setShow] = createSignal<boolean>(false);
  const [getValue, setValue] = createSignal<string>('');

  KoliBriDevHelper.patchThemeTag(
    getTheme(),
    'KOL-ABBR',
    `:host abbr {
      background-color: #2D424DE3;
      color: #fff;
    }`
  );
  KoliBriDevHelper.patchThemeTag(
    getTheme(),
    'KOL-ACCORDION',
    `:host kol-heading {
      border-color: #bec5c9;
      border-style: solid;
      border-width: 1px;
      padding: 0.25em;
    }
    :host kol-icon-icofont {
      padding-right: 0.5em;
    }`
  );
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
  KoliBriDevHelper.patchThemeTag(
    getTheme(),
    'KOL-BUTTON-GROUP',
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
  KoliBriDevHelper.patchThemeTag(
    getTheme(),
    'KOL-LOGO',
    `kol-logo {
      width: 300px;
    }
    `
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

  const onClickDownload = {
    onClick: () => {
      renderJsonString(getTheme());
      console.log(getValue(), format(getValue(), { parser: 'json', plugins: [parserBabel] }));
      saveData(format(getValue(), { parser: 'json', plugins: [parserBabel] }), `kolibri-theme-${getTheme()}.json`);
    },
  };

  const onChangeUpload = {
    onChange: (_event: Event, value: unknown) => {
      if (value instanceof FileList && value.item(0) instanceof File) {
        value
          .item(0)
          ?.text()
          .then((content: string) => {
            KoliBriDevHelper.patchTheme(getTheme(), JSON.parse(content) as Record<string, string>);
            window.location.reload();
          })
          .catch(console.warn);
      }
    },
  };

  const onClickEdit = {
    onClick: () => {
      setShow(false);
    },
  };

  const onClickClear = {
    onClick: () => {
      localStorage.removeItem('kolibri-theme');
      localStorage.removeItem('kolibri-themes');
      window.location.reload();
    },
  };

  return (
    <div class="font-sans grid gap-2" data-theme="default">
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
                  localStorage.setItem('kolibri-theme', value as string);
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
            <KolButton _label="Theme herunterladen" _on={onClickDownload}></KolButton>
            <KolButton _label="Alle Änderungen verwerfen" _on={onClickClear} _variant="danger"></KolButton>
          </div>
          <div class="flex gap-2">
            <KolInputFile _on={onChangeUpload}>Theme laden</KolInputFile>
          </div>
        </>
      )}
    </div>
  );
};
