import { editor, Uri, languages, Position } from 'monaco-editor';
import { Component, createSignal } from 'solid-js';

import { createCssEditor as createCssStyleEditor } from './css-style.editor';
import { components } from './store';

type Props = {
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
    const selector = matches[0].replace('var(', '');
    console.log(selector);

    console.log(modelProps.getValue());

    let properties: string[] = [];
    properties = properties.concat(modelProps.getValue().match(/-(-[a-z0-9]+)+:/g) || []);
    // properties = properties.concat(modelStyle.getValue().match(/-(-[a-z0-9]+)+:/g) || []);
    properties = properties.sort();

    const suggestions: languages.CompletionItem[] = [];
    properties.forEach((property) => {
      property = property.replace(':', '');
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
    });

    return {
      suggestions: suggestions,
    };
  }
}

languages.registerCompletionItemProvider('css', new CssProvider());

export const EditorComponent: Component<Props> = (props: Props) => {
  const [getShow, setShow] = createSignal<boolean>(false);

  setInterval(() => {
    setShow(() => true);
  }, 500);

  const PreviewComponent = () => components[props.tagName] || <div>not prepared yet</div>;

  const renderPropsEditor = (ref: HTMLElement) => {
    createCssStyleEditor(modelProps, ref, 'GLOBAL', props.theme, setShow);
  };

  const renderStyleEditor = (ref: HTMLElement) => {
    createCssStyleEditor(modelStyle, ref, props.tagName, props.theme, setShow);
  };

  return (
    <div class="grid grid-cols-3 gap-2 items-center content-center">
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
            <div ref={renderPropsEditor} class="h-20vh"></div>
            <div ref={renderStyleEditor} class="h-50vh"></div>
            {/* <div
          ref={(ref) => createHtmlEditor(ref, props.component)}
          style={{
            height: '33%',
            width: '100%',
          }}
        ></div> */}
          </div>
          <div class="col-span-2" data-theme={props.theme} data-theme-cache="false" data-theme-reset="true">
            <PreviewComponent />
          </div>
        </>
      )}
    </div>
  );
};
