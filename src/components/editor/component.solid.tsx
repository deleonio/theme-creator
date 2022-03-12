import { KolButton, KolButtonGroup } from '@kolibri/solid';
import { editor, Uri } from 'monaco-editor';
import { Component, createSignal } from 'solid-js';

import { createCssEditor as createCssStyleEditor } from './css-style.editor';
import { components } from './store';

type Props = {
  tagName: string;
  theme: string;
};

const uriProps = Uri.parse('props.css');
const modelProps = editor.createModel('', 'css', uriProps);

const uriStyle = Uri.parse('style.css');
const modelStyle = editor.createModel('', 'css', uriStyle);

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
    <div class="grid grid-cols-2 gap-2 items-center content-center">
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
          <div data-theme={props.theme} data-theme-cache="false" data-theme-reset="true">
            <PreviewComponent />
          </div>
        </>
      )}
    </div>
  );
};
