import { Component, createSignal } from 'solid-js';

import { KolInputText, KolSelect, KolButton, KolHeading, KolAlert, KolLink, KolInputFile } from '@kolibri/solid';
import { EditorComponent } from '../editor/component.solid';
import { KoliBriDevHelper, SelectOption } from '@kolibri/lib';
import { createTsEditor } from '../editor/ts-editor';
import { format } from 'prettier';
import parserBabel from 'prettier/esm/parser-babel.mjs';
import { TAG_NAMES } from '../tags';
import { restoreThemes, saveData, storeThemes } from '../../shares/theme';

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

export const AppComponent: Component = () => {
  const [getTheme, setTheme] = createSignal<string>(localStorage.getItem('kolibri-theme') || 'default');
  const [getComponent, setComponent] = createSignal<string>('KOL-BUTTON');
  const [getShow, setShow] = createSignal<boolean>(false);
  const [getValue, setValue] = createSignal<string>('');

  restoreThemes();

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
      saveData(
        format(getValue(), { parser: 'json', plugins: [parserBabel] }),
        `kolibri-theme-${getTheme()}-${new Date().toISOString()}.json`
      );
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
            storeThemes();
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

  let timeoutTheme: NodeJS.Timer;
  const onTheme = {
    onChange: (_event: Event, value: unknown) => {
      clearTimeout(timeoutTheme);
      timeoutTheme = setTimeout(() => {
        clearTimeout(timeoutTheme);
        localStorage.setItem('kolibri-theme', value as string);
        setTheme(value as string);
        setValue('');
        setShow(false);
      }, 1000);
    },
  };

  return (
    <div class="font-sans grid gap-2" data-theme="mapz">
      {getShow() ? (
        <>
          <div class="grid grid-cols-2 gap-2 mapz">
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
            <KolButton _label="Theme editieren" _on={onClickEdit}></KolButton>
          </div>
        </>
      ) : (
        <>
          <div class="grid gap-2 grid-cols-2 mapz">
            <KolInputText _value={getTheme()} _on={onTheme} _type="text">
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
          <div class="grid gap-2 mapz">
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
          </div>
        </>
      )}
    </div>
  );
};
