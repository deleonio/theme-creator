import { Component } from 'solid-js';
import { KolBadge, KolBreadcrumb, KolButton } from '@kolibri/solid';

export const baseCss = `:host button.normal {
    background-color: rgb(105, 11, 85);
    border-radius: 0;
    min-height: auto;
    min-width: auto;
}`;

export const selectedComponent = 'KOL-BUTTON';

export const components: Record<string, { html: Component; css: string }> = {
  'KOL-BADGE': {
    css: ``,
    html: () => <KolBadge _label="Test"></KolBadge>,
  },
  'KOL-BREADCRUMB': {
    css: ``,
    html: () => <KolBreadcrumb _ariaLabel="Test"></KolBreadcrumb>,
  },
  'KOL-BUTTON': {
    css: `:host button.normal {
  background-color: rgb(19, 233, 101);
}
#host button.normal:hover {
  box-shadow: 5px 5px 10px black;
  border: 0;
}
:host button {
  border-radius: 2em;
}
:host button:focus {
  outline: 5px solid rgba(190, 18, 18, 0.5) !important;
}`,
    html: () => (
      <div class="grid grid-cols-3 gap-2">
        <div class="grid gap-2">
          <KolButton _label="Klick mich!" _variant="primary"></KolButton>
          <KolButton _label="Klick mich!" _variant="secondary"></KolButton>
          <KolButton _label="Klick mich!" _variant="normal"></KolButton>
          <KolButton _label="Klick mich!"></KolButton>
          <KolButton _label="Klick mich!" _variant="danger"></KolButton>
          <KolButton _label="Klick mich!" _variant="ghost"></KolButton>
          <KolButton _label="Klick mich!" _disabled></KolButton>
        </div>
        <div class="grid gap-2">
          <KolButton _label="Klick mich!" _icon="home" _variant="primary"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _variant="secondary"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _variant="normal"></KolButton>
          <KolButton _label="Klick mich!" _icon="home"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _variant="danger"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _variant="ghost"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _disabled></KolButton>
        </div>
        <div class="grid gap-2">
          <KolButton _label="Klick mich!" _icon="home" _icon-only _variant="primary"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _icon-only _variant="secondary"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _icon-only _variant="normal"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _icon-only></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _icon-only _variant="danger"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _icon-only _variant="ghost"></KolButton>
          <KolButton _label="Klick mich!" _icon="home" _icon-only _disabled></KolButton>
        </div>
      </div>
    ),
  },
};
