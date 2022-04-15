import { render } from 'solid-js/web';

import { AppComponent } from './components/app/component.solid';
import { defineCustomElements } from '@kolibri/lib/dist/loader';
import { register } from '@kolibri/lib';

register(['bmf', 'itz', 'mapz'], defineCustomElements).finally(() => {
  const htmlElement: HTMLElement | null = document.querySelector<HTMLDivElement>('div#app');
  if (htmlElement instanceof HTMLElement) {
    render(() => <AppComponent />, htmlElement);
  }
});
