import { Component, createEffect, createSignal, Match, onMount, Switch } from 'solid-js';

import {
  KolInputText,
  KolSelect,
  KolButton,
  KolHeading,
  KolAlert,
  KolLink,
  KolInputFile,
  KolModal,
} from '@kolibri/solid';
import { EditorComponent } from '../editor/component.solid';
import { KoliBriDevHelper, SelectOption } from '@kolibri/lib';
import { createTsEditor } from '../editor/ts-editor';
import AllComp from '../../assets/components-overview.svg';
import { format } from 'prettier';
import parserBabel from 'prettier/esm/parser-babel.mjs';
import { TAG_NAMES } from '../tags';
import { restoreThemes, saveData, storeThemes } from '../../shares/theme';

// const kebabToPascalCase = (str: string) =>
//   str
//     .toLowerCase()
//     .split('-')
//     .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
//     .join('');

// https://betterprogramming.pub/string-case-styles-camel-pascal-snake-and-kebab-case-981407998841
// https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case
// const camelOrPascalToKebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
// const camelToKebabCase = camelOrPascalToKebabCase;
// const pascalToKebabCase = camelOrPascalToKebabCase;
// const snakeToKebabCase = (str: string) => str.replace(/_/g, '-').toLowerCase();
// console.log(kebabToPascalCase('ich-bin-ein-berliner'));
// console.log(camelToKebabCase('ichBinEinBerliner'));
// console.log(pascalToKebabCase('IchBinEinBerliner'));
// console.log(snakeToKebabCase('ich_bin_ein_Berliner'));

type Page = 'editor' | 'result' | 'overview';

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

// const InputComponent: Component = () => {
//   const [getClass, setClass] = createSignal('');

//   return <input class={getClass()} onInput={(event) => setClass((event.target as HTMLInputElement).value)} />;
// };

export const AppComponent: Component = () => {
  const [getTheme, setTheme] = createSignal(localStorage.getItem('kolibri-theme') || 'default');
  const [getComponent, setComponent] = createSignal('KOL-BUTTON');
  const [getShow, setShow] = createSignal<Page>('editor');
  const [getValue, setValue] = createSignal('');

  let select: HTMLElement;

  createEffect(() => {
    console.log(getComponent());
    if (select instanceof HTMLElement) {
      select._value = [getComponent()];
    }
  });

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
      setShow('result');
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
      setShow('editor');
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
        setShow('editor');
      }, 1000);
    },
  };

  onMount(() => console.log(select));

  return (
    <div class="font-sans grid gap-2" data-theme="mapz">
      {/* <InputComponent /> */}
      <Switch
        fallback={
          <>
            <div class="grid gap-2 grid-cols-3 justify-items-center items-end mapz">
              <KolInputText class="w-full" style="width: 100%" _value={getTheme()} _on={onTheme} _type="text">
                Theme
              </KolInputText>
              <KolButton
                _label="Komponenten-Übersicht"
                _on={{
                  onClick: (event) => {
                    event.preventDefault();
                    setShow('overview');
                  },
                }}
              ></KolButton>
              <div class="flex gap-2 items-end">
                <KolButton
                  _label="Zurück"
                  _icon="arrow-left"
                  _iconOnly
                  _on={{
                    onClick: (event) => {
                      event.preventDefault();
                      const index = TAG_NAMES.indexOf(getComponent().toLowerCase());
                      if (index > 0) {
                        setComponent(() => TAG_NAMES[index - 1].toUpperCase());
                      }
                    },
                  }}
                ></KolButton>
                <KolSelect
                  _list={TAG_NAME_LIST}
                  _on={{
                    onChange: (_event, value) => {
                      setComponent((value as string[])[0]);
                    },
                  }}
                  ref={(el) => {
                    console.log(el);
                    select = el;
                  }}
                >
                  Komponenten
                </KolSelect>
                <KolButton
                  _label="Weiter"
                  _icon="arrow-right"
                  _iconOnly
                  _on={{
                    onClick: (event) => {
                      event.preventDefault();
                      const index = TAG_NAMES.indexOf(getComponent().toLowerCase());
                      if (index < TAG_NAMES.length - 1) {
                        setComponent(() => TAG_NAMES[index + 1].toUpperCase());
                      }
                    },
                  }}
                ></KolButton>
              </div>
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
        }
      >
        <Match when={getShow() === 'overview'}>
          <div class="grid gap-2 mapz">
            <div class="w-full overflow-scroll">
              <img src={AllComp as unknown as string}></img>
            </div>
            <KolButton _label="Theme editieren" _on={onClickEdit}></KolButton>
          </div>
        </Match>
        <Match when={getShow() === 'result'}>
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
        </Match>
      </Switch>
    </div>
  );
};
