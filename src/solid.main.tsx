import { render } from 'solid-js/web';

import { AppComponent } from './components/app/component.solid';
import { defineCustomElements } from '@kolibri/lib/dist/loader';

defineCustomElements().finally(() => {
  const htmlDivElement: HTMLDivElement | null = document.querySelector('div#solid');
  if (htmlDivElement instanceof HTMLDivElement) {
    render(() => <AppComponent />, htmlDivElement);
  }
});
