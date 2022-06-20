import { render } from 'solid-js/web';

import { register } from '@kolibri/core';
import { defineCustomElements } from '@kolibri/lib/dist/loader';
import { BAMF, BMF, BPA, BZST, DESY, HAMBURG, ITZBund, MAPZ, NXT, ZOLL } from '@kolibri/themes';
import { AppComponent } from './components/app/component.solid';

register([BAMF, BPA, BMF, BZST, DESY, HAMBURG, ITZBund, MAPZ, NXT, ZOLL], defineCustomElements, {
	theme: {
		detect: 'auto',
	},
})
	.then(() => {
		const htmlElement: HTMLElement | null = document.querySelector<HTMLDivElement>('div#app');
		if (htmlElement instanceof HTMLElement) {
			render(() => <AppComponent />, htmlElement);
		}
	})
	.catch(console.warn);
