import { Component, createSignal } from 'solid-js';

import { createCssEditor } from './css-editor';
import { components } from './store';

type Props = {
  tagName: string;
  theme: string;
};

export const EditorComponent: Component<Props> = (props: Props) => {
  const [getShow, setShow] = createSignal<boolean>(false);

  setInterval(() => {
    setShow(() => true);
  }, 0);

  const PreviewComponent = () => components[props.tagName] || <div>No defined.</div>;

  const renderEditor = (ref: HTMLElement) => {
    createCssEditor(ref, props.tagName, props.theme, setShow);
  };

  return (
    <div class="grid grid-cols-2 gap-2 items-center content-center h-80vh">
      {getShow() && (
        <>
          <div class="h-80vh">
            <div
              ref={renderEditor}
              style={{
                height: '100%',
                width: '100%',
              }}
            ></div>
            {/* <div
          ref={(ref) => createHtmlEditor(ref, props.component)}
          style={{
            height: '33%',
            width: '100%',
          }}
        ></div> */}
          </div>
          <div class="text-center" data-theme={props.theme}>
            <PreviewComponent />
          </div>
        </>
      )}
    </div>
  );
};
