import { render } from 'solid-js/web';

import { AppComponent } from './components/app/component.solid';
import { defineCustomElements } from '@kolibri/lib/dist/loader';
import { register } from '@kolibri/lib';
import { themeBMF } from '@kolibri/theme-bmf';
import { themeBPA } from '@kolibri/theme-bpa';
import { themeITZBund } from '@kolibri/theme-itzbund';
import { themeMAPZ } from '@kolibri/theme-mapz';

register([themeBMF, themeBPA, themeITZBund, themeMAPZ], defineCustomElements, {
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
