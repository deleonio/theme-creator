import { render } from 'solid-js/web';

import { AppComponent } from './components/app/component.solid';
import { defineCustomElements } from '@kolibri/lib/dist/loader';
import { register } from '@kolibri/lib';
import { BAMF, BMF, BPA, BZST, DESY, ITZBund, MAPZ, NXT, ZOLL } from '@kolibri/themes';

register([BAMF, BPA, BMF, BZST, DESY, ITZBund, MAPZ, NXT, ZOLL], defineCustomElements, {
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
