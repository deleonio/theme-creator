import { KoliBriDevHelper } from '@kolibri/lib';

KoliBriDevHelper.patchTheme('demo', {
	'KOL-BUTTON':
		'button {font-family: BundesSans;font-weight: 600;min-height: 44px;min-width: 44px;cursor: pointer;padding: 0.5em;border-radius: 2em;border-width: 1px;border-style: solid;line-height: 1em;text-transform: uppercase;transition-duration: 0.5s;transition-property: background-color, color, border-color;}button:disabled {cursor: not-allowed;opacity: 0.5;}button:hover {box-shadow: 0 0 0.25em black;}button:focus {outline-offset: 2px;outline-style: solid;outline-width: 3px;}button:disabled:hover {box-shadow: none;}button.primary {color: white;background-color: var(--primary);border-color: var(--primary);}button.primary:hover {background-color: white;color: var(--primary);}button.primary:focus {outline-color: var(--primary);}button.secondary {color: white;background-color: var(--secondary);border-color: var(--secondary);}button.secondary:hover {background-color: white;color: var(--secondary);}button.secondary:focus {outline-color: var(--secondary);}button.normal {color: white;background-color: var(--normal);border-color: var(--normal);}button.normal:hover {background-color: white;color: var(--normal);}button.normal:focus {outline-color: var(--normal);}button.danger {color: white;background-color: var(--danger);border-color: var(--danger);}button.danger:hover {background-color: white;color: var(--danger);}button.danger:focus {outline-color: var(--danger);}button.ghost {color: black;border-color: var(--ghost);background-color: var(--ghost);}button.ghost:hover {border-color: black;background-color: var(--ghost);}button.ghost:focus {outline-color: black;}button kol-icon-icofont {padding: 0.25em;}button span {padding: 0 0.25em;}',
	GLOBAL:
		':host {--primary: blueviolet;--secondary: rgb(255, 0, 200);--normal: rgb(0, 81, 255);--danger: rgb(226, 17, 17);--ghost: rgb(255, 255, 255);--font-family: BundesSans, Calibri, Verdana, Arial, Helvetica, sans-serif;--font-size: 16px;}:host {font-family: var(--font-family);font-size: var(--font-size);}',
	'KOL-HEADING':
		'h1,h2,h3,h4,h5,h6 {line-height: 1em;margin: 0;padding: 0;}h1 {font-size: 1.5rem;}h2 {font-size: 1.4rem;}h3 {font-size: 1.3rem;}h4 {font-size: 1.2rem;}h5 {font-size: 1.1rem;}h6 {font-size: 1rem;}',
});