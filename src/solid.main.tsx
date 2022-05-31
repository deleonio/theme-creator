import { render } from 'solid-js/web';

import { AppComponent } from './components/app/component.solid';
import { defineCustomElements } from '@kolibri/lib/dist/loader';
import { register } from '@kolibri/lib';
import { BMF } from '@kolibri/theme-bmf';
import { BPA } from '@kolibri/theme-bpa';
import { ITZBund } from '@kolibri/theme-itzbund';
import { MAPZ } from '@kolibri/theme-mapz';

register([BMF, BPA, ITZBund, MAPZ], defineCustomElements, {
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
