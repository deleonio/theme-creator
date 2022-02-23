import { Component, createEffect, createSignal, on } from 'solid-js';

import { createCssEditor } from './css-editor';
import { components } from './store';

type Props = {
  component: string;
  theme: string;
};

export const EditorComponent: Component<Props> = (props: Props) => {
  const [getShow, setShow] = createSignal<boolean>(false);

  setInterval(() => {
    setShow(() => true);
  }, 0);

  const Component = () => components[props.component].html;

  return (
    <div class="grid grid-cols-2 gap-2 items-center content-center h-80vh m-1">
      <div class="h-80vh">
        <div
          ref={(ref) => createCssEditor(ref, props.component, props.theme, setShow)}
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
      {getShow() && (
        <div class="text-center" data-theme={props.theme}>
          <Component />
        </div>
      )}
    </div>
  );
};
