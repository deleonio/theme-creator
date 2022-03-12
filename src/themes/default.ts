import { KoliBriDevHelper } from '@kolibri/lib';

KoliBriDevHelper.patchTheme('bmf', {
  'KOL-BUTTON':
    '* {--primary: #80cdec;--secondary: #004b76;--normal: #f2f3f4;--danger: #c0003c;--dark-red: #780f2d;--ghost: white;--secondary-blue: #004b76;font-size: 16px;}:host {font-family: BundesSans;display: inline-block;}:host button:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}button {line-height: 1.5rem;font-family: BundesSans;font-weight: 700;cursor: pointer;padding: 10px 12px;border-radius: 1.5em;border: none;font-size: 16px;font-style: normal;text-align: center;text-transform: uppercase;width: inherit;box-shadow: 0px 2px 4px 0px #0823303d;letter-spacing: 0.75px;transition-duration: 0.5s;}button:disabled {cursor: not-allowed;opacity: 0.5;}button.icon-only {padding: 10px;}button.primary,button.primary:disabled:hover {color: var(--secondary-blue);background-color: var(--primary);border-color: var(--primary);}button.secondary,button.secondary:disabled:hover,button.normal,button.normal:disabled:hover {color: var(--secondary-blue);background-color: var(--normal);border-color: var(--normal);}button.danger,button.danger:disabled:hover {color: white;background-color: var(--danger);border-color: var(--danger);}button.ghost,button.ghost:disabled:hover {color: var(--secondary-blue);border-color: var(--ghost);background-color: var(--ghost);box-shadow: none;}button.primary:hover,button.secondary:hover,button.normal:hover,button.danger:hover,button.ghost:hover {color: white;box-shadow: 0px 2px 8px 2px rgba(8, 35, 48, 0.24);}button.primary:hover,button.secondary:hover,button.normal:hover,button.ghost:hover {background-color: var(--secondary);}button.primary:disabled:hover,button.secondary:disabled:hover,button.normal:disabled:hover,button.danger:disabled:hover {box-shadow: 0px 2px 4px 0px #0823303d;}button.danger:hover {background-color: var(--dark-red);}button.ghost:disabled:hover {box-shadow: none;}button.primary:active,button.secondary:active,button.normal:active,button.danger:active,button.ghost:active {box-shadow: none;}button i {width: 1.5em;height: 1.5em;display: inline-block;}button i:before {line-height: 1.5em;}button span {padding: 0 0.25em;}',
  'KOL-INPUT-TEXT':
    '* {--primary: #80cdec;--secondary: #004b76;--normal: #f2f3f4;--danger: #c0003c;--dark-red: #780f2d;--ghost: white;--secondary-blue: #004b76;--default-letter: #202020;--default-border: #576164;--default-border-hover: var(--secondary);--border-default: #bec5c9;--background-light-grey: #f2f3f4;}:host {font-family: BundesSans;}:host input:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;}input {box-sizing: border-box;width: 100%;color: var(--default-letter);border-color: var(--default-border);border-width: 2px;border-style: solid;border-radius: 5px;padding: 10px 14px;line-height: 24px;font-size: 16px;}input::placeholder {color: var(--default-border);}input:hover {border-color: var(--default-border-hover);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}kol-alert {margin-top: var(--kolibri-spacing);display: block;}',
  'KOL-INPUT-PASSWORD':
    '* {--primary: #80cdec;--secondary: #004b76;--normal: #f2f3f4;--danger: #c0003c;--dark-red: #780f2d;--ghost: white;--secondary-blue: #004b76;--default-letter: #202020;--default-border: #576164;--default-border-hover: var(--secondary);--border-default: #bec5c9;--background-light-grey: #f2f3f4;}:host {font-family: BundesSans;}:host input:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;}input {color: var(--default-letter);border-color: var(--default-border);border-width: 2px;border-style: solid;border-radius: 5px;padding: 10px 14px;line-height: 24px;font-size: 16px;}input::placeholder {color: var(--default-border);}input:hover {border-color: var(--default-border-hover);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}',
  'KOL-INPUT-NUMBER':
    '* {--primary: #80cdec;--secondary: #004b76;--normal: #f2f3f4;--danger: #c0003c;--dark-red: #780f2d;--ghost: white;--secondary-blue: #004b76;--default-letter: #202020;--default-border: #576164;--default-border-hover: var(--secondary);--border-default: #bec5c9;--background-light-grey: #f2f3f4;}:host {font-family: BundesSans;}:host input:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;}input {color: var(--default-letter);border-color: var(--default-border);border-width: 2px;border-style: solid;border-radius: 5px;padding: 10px 14px;line-height: 24px;font-size: 16px;}input::placeholder {color: var(--default-border);}input:hover {border-color: var(--default-border-hover);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}',
  'KOL-INPUT-EMAIL':
    '* {--primary: #80cdec;--secondary: #004b76;--normal: #f2f3f4;--danger: #c0003c;--dark-red: #780f2d;--ghost: white;--secondary-blue: #004b76;--default-letter: #202020;--default-border: #576164;--default-border-hover: var(--secondary);--border-default: #bec5c9;--background-light-grey: #f2f3f4;}:host {font-family: BundesSans;}:host input:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;}input {color: var(--default-letter);border-color: var(--default-border);border-width: 2px;border-style: solid;border-radius: 5px;padding: 10px 14px;line-height: 24px;font-size: 16px;}input::placeholder {color: var(--default-border);}input:hover {border-color: var(--default-border-hover);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}',
  'KOL-INPUT-FILE':
    '* {--primary: #80cdec;--secondary: #004b76;--normal: #f2f3f4;--danger: #c0003c;--dark-red: #780f2d;--ghost: white;--secondary-blue: #004b76;--default-letter: #202020;--default-border: #576164;--default-border-hover: var(--secondary);--border-default: #bec5c9;--background-light-grey: #f2f3f4;}:host {font-family: BundesSans;}:host input:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;}input {color: var(--default-letter);border-color: var(--default-border);border-width: 2px;border-style: solid;border-radius: 5px;padding: 10px 14px;line-height: 24px;font-size: 16px;}input::placeholder {color: var(--default-border);}input:hover {border-color: var(--default-border-hover);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}',
  'KOL-TEXTAREA':
    '* {--primary: #80cdec;--secondary: #004b76;--normal: #f2f3f4;--danger: #c0003c;--dark-red: #780f2d;--ghost: white;--secondary-blue: #004b76;--default-letter: #202020;--default-border: #576164;--default-border-hover: var(--secondary);--border-default: #bec5c9;--background-light-grey: #f2f3f4;}:host {font-family: BundesSans;}:host textarea:focus {outline-color: var(--primary) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;}textarea {color: var(--default-letter);border-color: var(--default-border);border-width: 2px;border-style: solid;border-radius: 5px;padding: 10px 14px;line-height: 24px;font-size: 16px;}textarea::placeholder {color: var(--default-border);}textarea:hover {border-color: var(--default-border-hover);}textarea:read-only,textarea:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}',
  'KOL-ALERT':
    ':host {--kolibri-background-color: white;--kolibri-background-color-modal: rgba(0, 0, 0, 0.5);--kolibri-border-color: #aaaaaa;--kolibri-border-radius: 5px;--kolibri-border-width: 2px;--kolibri-color: black;--kolibri-color-undefined: #fb00d2;--kolibri-color-accent: #ef9e48;--kolibri-color-active: #1e538f;--kolibri-color-hover: #1e538f;--kolibri-color-focus: #1e538f;--kolibri-color-danger: #ad0e0b; /* --kolibri-color-dark: #222222; */--kolibri-color-error: #ad0e0b;--kolibri-color-ghost: #333333;--kolibri-color-info: #28568a; /* --kolibri-color-light: #f2f2f2; */--kolibri-color-normal: #326cae;--kolibri-color-outline: rgba(0, 0, 0, 0.5);--kolibri-color-primary: #1e538f;--kolibri-color-secondary: #444444;--kolibri-color-spin-1: #000000;--kolibri-color-spin-2: #ff0000;--kolibri-color-spin-3: #ffcc00;--kolibri-color-success: #12632f;--kolibri-color-warning: #854000;--kolibri-font-family: BundesSans, Calibri, Verdana, Arial, Helvetica,sans-serif;--kolibri-font-size: 16px;--kolibri-hyphens: auto;--kolibri-line-height: 1.5em;--kolibri-shadow-color: black;--kolibri-spacing: 0.25em;}:host {font-family: BundesSans;}:host > div {box-sizing: border-box;border-width: var(--kolibri-border-width);border-style: solid;border-radius: var(--kolibri-border-radius);display: table;align-items: center;width: 100%;}div > div {display: table-cell;}div > div:first-child {color: white;width: 2em;text-align: center;}div > div:last-child {background-color: white;padding: var(--kolibri-spacing);}div.border-success {border-color: var(--kolibri-color-success);}div.border-info {border-color: var(--kolibri-color-info);}div.border-error {border-color: var(--kolibri-color-error);}div.border-warning {border-color: var(--kolibri-color-warning);}div.border-success div:first-child {background-color: var(--kolibri-color-success);}div.border-info div:first-child {background-color: var(--kolibri-color-info);}div.border-error div:first-child {background-color: var(--kolibri-color-error);}div.border-warning div:first-child {background-color: var(--kolibri-color-warning);}',
});

KoliBriDevHelper.patchTheme('default', {
  'KOL-BUTTON':
    'button {font-family: BundesSans;font-weight: 600;min-height: 44px;min-width: 44px;cursor: pointer;padding: 0.5em;border-radius: 2em;border-width: 1px;border-style: solid;line-height: 1em;text-transform: uppercase;transition-duration: 0.5s;}button:disabled {cursor: not-allowed;opacity: 0.5;}button:hover {box-shadow: 0 0 0.25em black;}button:focus {outline-offset: 2px;outline-style: solid;outline-width: 3px;}button:disabled:hover {box-shadow: none;}button.primary {color: white;background-color: var(--primary);border-color: var(--primary);}button.primary:hover {background-color: white;color: var(--primary);}button.primary:focus {outline-color: var(--primary);}button.secondary {color: white;background-color: var(--secondary);border-color: var(--secondary);}button.secondary:hover {background-color: white;color: var(--secondary);}button.secondary:focus {outline-color: var(--secondary);}button.normal {color: white;background-color: var(--normal);border-color: var(--normal);}button.normal:hover {background-color: white;color: var(--normal);}button.normal:focus {outline-color: var(--normal);}button.danger {color: white;background-color: var(--danger);border-color: var(--danger);}button.danger:hover {background-color: white;color: var(--danger);}button.danger:focus {outline-color: var(--danger);}button.ghost {color: black;border-color: var(--ghost);background-color: var(--ghost);}button.ghost:hover {border-color: black;background-color: var(--ghost);}button.ghost:focus {outline-color: black;}button kol-icon-icofont {padding: 0.25em;}button span {padding: 0 0.25em;}',
  GLOBAL:
    '* {line-height: 1em !important;--primary: blueviolet;--secondary: rgb(255, 0, 200);--normal: rgb(0, 81, 255);--danger: rgb(226, 17, 17);--ghost: rgb(255, 255, 255);}',
});

KoliBriDevHelper.patchTheme('mapz', {
  'KOL-BUTTON':
    ':host {--kolibri-background-color: white;--kolibri-background-color-modal: rgba(0, 0, 0, 0.5);--kolibri-border-color: #aaaaaa;--kolibri-border-radius: 5px;--kolibri-border-width: 2px;--kolibri-color: black;--kolibri-color-undefined: #fb00d2;--kolibri-color-accent: #ef9e48;--kolibri-color-active: #1e538f;--kolibri-color-hover: #1e538f;--kolibri-color-focus: #1e538f;--kolibri-color-danger: #ad0e0b; /* --kolibri-color-dark: #222222; */--kolibri-color-error: #ad0e0b;--kolibri-color-ghost: #333333;--kolibri-color-info: #28568a; /* --kolibri-color-light: #f2f2f2; */--kolibri-color-normal: #326cae;--kolibri-color-outline: rgba(0, 0, 0, 0.5);--kolibri-color-primary: #1e538f;--kolibri-color-secondary: #444444;--kolibri-color-spin-1: #000000;--kolibri-color-spin-2: #ff0000;--kolibri-color-spin-3: #ffcc00;--kolibri-color-success: #12632f;--kolibri-color-warning: #854000;--kolibri-font-family: BundesSans, Calibri, Verdana, Arial, Helvetica,sans-serif;--kolibri-font-size: 16px;--kolibri-hyphens: auto;--kolibri-line-height: 1.5em;--kolibri-shadow-color: black;--kolibri-spacing: 0.25em;}:host {font-family: BundesSans;display: inline-block;}button {box-sizing: border-box;font-size: var(--kolibri-font-size);cursor: pointer;border-width: 2px;min-height: 44px;min-width: 44px;letter-spacing: 0.02em;font-family: var(--kolibri-font-family);width: inherit;border-radius: var(--kolibri-border-radius);border-style: solid;align-items: center !important;justify-content: center !important;padding: calc(2 * var(--kolibri-spacing));display: flex;gap: var(--kolibri-spacing);transition-duration: 0.5s;transition-property: background-color, color, border-color;box-shadow: 0 0 0.25em gray;}button:focus {outline-color: var(--kolibri-color-outline) !important;outline-offset: 2px !important;outline-style: solid !important;outline-width: 2px !important;}button:disabled {cursor: not-allowed;opacity: 0.5;}button.primary,button.primary:disabled:hover {background-color: var(--kolibri-color-primary);border-color: var(--kolibri-color-primary);color: white;box-shadow: 0 0 0.25em gray;}button.primary:hover,button.primary:focus {color: var(--kolibri-color-primary);}button.secondary,button.secondary:disabled:hover {background-color: var(--kolibri-color-secondary);border-color: var(--kolibri-color-secondary);color: white;box-shadow: 0 0 0.25em gray;}button.secondary:hover,button.secondary:focus {color: var(--kolibri-color-secondary);}button.normal,button.normal:disabled:hover {background-color: var(--kolibri-color-normal);border-color: var(--kolibri-color-normal);color: white;box-shadow: 0 0 0.25em gray;}button.normal:hover,button.normal:focus {color: var(--kolibri-color-normal);}button.danger,button.danger:disabled:hover {background-color: var(--kolibri-color-danger);border-color: var(--kolibri-color-danger);color: white;box-shadow: 0 0 0.25em gray;}button.danger:hover,button.danger:focus {color: var(--kolibri-color-danger);}button.ghost,button.ghost:disabled:hover {background-color: white;border-color: var(--kolibri-color-ghost);color: var(--kolibri-color-ghost);box-shadow: 0 0 0.25em gray;}button.ghost:hover,button.ghost:focus {background-color: var(--kolibri-color-ghost);color: white;}button:hover,button:focus {background-color: white;box-shadow: 0 0 0.25em black;}',
  'KOL-ALERT':
    ':host {--kolibri-background-color: white;--kolibri-background-color-modal: rgba(0, 0, 0, 0.5);--kolibri-border-color: #aaaaaa;--kolibri-border-radius: 5px;--kolibri-border-width: 2px;--kolibri-color: black;--kolibri-color-undefined: #fb00d2;--kolibri-color-accent: #ef9e48;--kolibri-color-active: #1e538f;--kolibri-color-hover: #1e538f;--kolibri-color-focus: #1e538f;--kolibri-color-danger: #ad0e0b; /* --kolibri-color-dark: #222222; */--kolibri-color-error: #ad0e0b;--kolibri-color-ghost: #333333;--kolibri-color-info: #28568a; /* --kolibri-color-light: #f2f2f2; */--kolibri-color-normal: #326cae;--kolibri-color-outline: rgba(0, 0, 0, 0.5);--kolibri-color-primary: #1e538f;--kolibri-color-secondary: #444444;--kolibri-color-spin-1: #000000;--kolibri-color-spin-2: #ff0000;--kolibri-color-spin-3: #ffcc00;--kolibri-color-success: #12632f;--kolibri-color-warning: #854000;--kolibri-font-family: BundesSans, Calibri, Verdana, Arial, Helvetica,sans-serif;--kolibri-font-size: 16px;--kolibri-hyphens: auto;--kolibri-line-height: 1.5em;--kolibri-shadow-color: black;--kolibri-spacing: 0.25em;}:host {font-family: BundesSans;}:host > div {box-sizing: border-box;border-width: var(--kolibri-border-width);border-style: solid;border-radius: var(--kolibri-border-radius);display: table;align-items: center;width: 100%;}div > div {display: table-cell;}div > div:first-child {color: white;width: 2em;text-align: center;}div > div:last-child {padding: var(--kolibri-spacing);}div.border-success {border-color: var(--kolibri-color-success);}div.border-info {border-color: var(--kolibri-color-info);}div.border-error {border-color: var(--kolibri-color-error);}div.border-warning {border-color: var(--kolibri-color-warning);}div.border-success div:first-child {background-color: var(--kolibri-color-success);}div.border-info div:first-child {background-color: var(--kolibri-color-info);}div.border-error div:first-child {background-color: var(--kolibri-color-error);}div.border-warning div:first-child {background-color: var(--kolibri-color-warning);}',
  'KOL-INPUT-TEXT':
    ':host {--kolibri-background-color: white;--kolibri-background-color-modal: rgba(0, 0, 0, 0.5);--kolibri-border-color: #aaaaaa;--kolibri-border-radius: 5px;--kolibri-border-width: 2px;--kolibri-color: black;--kolibri-color-undefined: #fb00d2;--kolibri-color-accent: #ef9e48;--kolibri-color-active: #1e538f;--kolibri-color-hover: #1e538f;--kolibri-color-focus: #1e538f;--kolibri-color-danger: #ad0e0b; /* --kolibri-color-dark: #222222; */--kolibri-color-error: #ad0e0b;--kolibri-color-ghost: #333333;--kolibri-color-info: #28568a; /* --kolibri-color-light: #f2f2f2; */--kolibri-color-normal: #326cae;--kolibri-color-outline: rgba(0, 0, 0, 0.5);--kolibri-color-primary: #1e538f;--kolibri-color-secondary: #444444;--kolibri-color-spin-1: #000000;--kolibri-color-spin-2: #ff0000;--kolibri-color-spin-3: #ffcc00;--kolibri-color-success: #12632f;--kolibri-color-warning: #854000;--kolibri-font-family: BundesSans, Calibri, Verdana, Arial, Helvetica,sans-serif;--kolibri-font-size: 16px;--kolibri-hyphens: auto;--kolibri-line-height: 1.5em;--kolibri-shadow-color: black;--kolibri-spacing: 0.25em;}:host {font-family: BundesSans;}:host input:focus {outline-color: var(--kolibri-color-outline) !important;outline-offset: 2px;outline-style: solid;outline-width: 3px;}label {color: var(--default-letter);display: grid;font-size: 14px;line-height: 20px;gap: 8px;width: 100%;}input {box-sizing: border-box;width: 100%;color: var(--default-letter);border-color: var(--default-border);border-width: 2px;border-style: solid;border-radius: 5px;padding: 10px 14px;line-height: 24px;font-size: 16px;}input::placeholder {color: var(--default-border);}input:hover {border-color: var(--default-border-hover);}input:read-only,input:disabled {cursor: not-allowed;border-color: var(--border-default);background-color: var(--background-light-grey);}kol-alert {margin-top: var(--kolibri-spacing);display: block;}',
  'KOL-BUTTON-GROUP':
    ':host {--kolibri-background-color: white;--kolibri-background-color-modal: rgba(0, 0, 0, 0.5);--kolibri-border-color: #aaaaaa;--kolibri-border-radius: 5px;--kolibri-border-width: 2px;--kolibri-color: black;--kolibri-color-undefined: #fb00d2;--kolibri-color-accent: #ef9e48;--kolibri-color-active: #1e538f;--kolibri-color-hover: #1e538f;--kolibri-color-focus: #1e538f;--kolibri-color-danger: #ad0e0b; /* --kolibri-color-dark: #222222; */--kolibri-color-error: #ad0e0b;--kolibri-color-ghost: #333333;--kolibri-color-info: #28568a; /* --kolibri-color-light: #f2f2f2; */--kolibri-color-normal: #326cae;--kolibri-color-outline: rgba(0, 0, 0, 0.5);--kolibri-color-primary: #1e538f;--kolibri-color-secondary: #444444;--kolibri-color-spin-1: #000000;--kolibri-color-spin-2: #ff0000;--kolibri-color-spin-3: #ffcc00;--kolibri-color-success: #12632f;--kolibri-color-warning: #854000;--kolibri-font-family: BundesSans, Calibri, Verdana, Arial, Helvetica,sans-serif;--kolibri-font-size: 16px;--kolibri-hyphens: auto;--kolibri-line-height: 1.5em;--kolibri-shadow-color: black;--kolibri-spacing: 0.25em;}:host {display: inline-flex;}div {display: flex;flex-wrap: wrap;padding: 0.25em;border-radius: 5px;gap: 0.25em;background-color: var(--kolibri-color-normal);}',
});
