import { editor, Uri, languages, Position } from 'monaco-editor';
import { Component, createSignal } from 'solid-js';

import { createCssEditor as createCssStyleEditor } from './css-style.editor';
import { components } from './store';

type Props = {
  propsStyle: boolean;
  tagName: string;
  theme: string;
};

languages.typescript.javascriptDefaults.setEagerModelSync(true);
languages.typescript.typescriptDefaults.setEagerModelSync(true);

const uriProps = Uri.parse(`props.css`);
const modelProps = editor.createModel('', 'css', uriProps);

const uriStyle = Uri.parse('style.css');
const modelStyle = editor.createModel('', 'css', uriStyle);

class CssProvider implements languages.CompletionItemProvider {
  public triggerCharacters?: string[] | undefined;
  public provideCompletionItems(
    model: editor.ITextModel,
    position: Position
  ): languages.ProviderResult<languages.CompletionList> {
    const matches = model
      .getValueInRange({
        startLineNumber: 1,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      })
      .match(/var\((-(-[a-z0-9]+)*)*/);

    if (matches === null) {
      return {
        suggestions: [],
      };
    }

    const whiteList = [...new Set(modelProps.getValue().match(/-(-[a-z0-9]+)+:/g) || [])];
    whiteList.sort();

    let blackList: string[] = [];
    blackList = blackList.concat(modelProps.getValue().match(/-(-[a-z0-9]+)+:/g) || []);
    blackList = blackList.concat(model.getValue().match(/var\(-(-[a-z0-9]+)+\)/g) || []);
    blackList.forEach((item, index) => {
      blackList[index] = item.replace('var(', '').replace(')', '').replace(':', '');
    });
    blackList = [...new Set(blackList)];

    const suggestions: languages.CompletionItem[] = [];
    whiteList.forEach((property) => {
      property = property.replace(':', '');
      if (blackList.includes(property) === false) {
        suggestions.push({
          insertText: property,
          label: property,
          kind: languages.CompletionItemKind.Property,
          range: null,
          // range: {
          //   endColumn: position.column,
          //   endLineNumber: position.lineNumber,
          //   startColumn: position.column,
          //   startLineNumber: position.lineNumber,
          // },
        });
      }
    });

    return {
      suggestions: suggestions,
    };
  }
}

languages.registerCompletionItemProvider('css', new CssProvider());

export const EditorComponent: Component<Props> = (props: Props) => {
  const [getShow, setShow] = createSignal<boolean>(false);
  const [getRerenderEditor, setRerenderEditor] = createSignal<boolean>(false);

  setInterval(() => {
    setShow(() => true);
    setRerenderEditor(() => true);
  }, 500);

  const PreviewComponent = () => components[props.tagName] || <div>not prepared yet</div>;

  const renderEditor = (ref: HTMLElement) => {
    if (props.propsStyle === true) {
      createCssStyleEditor(modelStyle, ref, props.tagName, props.theme, setRerenderEditor);
    } else {
      createCssStyleEditor(modelProps, ref, 'GLOBAL', props.theme, setRerenderEditor);
    }
  };

  return (
    <div class="grid grid-cols-3 gap-2 content-center">
      {getShow() && (
        <>
          <div class="grid gap-1 grid-rows-[min-content]">
            {/* <KolButtonGroup>
              <KolButton
                _label="CSS-Properties"
                _on={{
                  onClick: () => {},
                }}
              ></KolButton>
              <KolButton
                _label="CSS-Style"
                _on={{
                  onClick: () => {},
                }}
              ></KolButton>
            </KolButtonGroup> */}
            <div ref={renderEditor} class="h-70vh"></div>
            {/* <div
          ref={(ref) => createHtmlEditor(ref, props.component)}
          style={{
            height: '33%',
            width: '100%',
          }}
        ></div> */}
          </div>
          {getRerenderEditor() && (
            <div
              class="col-span-2 p-4 border-1 border-gray-300"
              data-theme={props.theme}
              data-theme-cache="false"
              data-theme-reset="true"
            >
              <PreviewComponent />
            </div>
          )}
        </>
      )}
    </div>
  );
};
