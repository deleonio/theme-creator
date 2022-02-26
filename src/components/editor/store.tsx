import { Component } from 'solid-js';
import { KolBadge, KolBreadcrumb, KolButton } from '@kolibri/solid';

export const baseCss = `:host button.normal {
    background-color: rgb(105, 11, 85);
    border-radius: 0;
    min-height: auto;
    min-width: auto;
}`;

export const selectedComponent = 'KOL-BUTTON';

export const components: Record<string, Component> = {
  'KOL-BADGE': () => <KolBadge _label="Test"></KolBadge>,
  'KOL-BREADCRUMB': () => (
    <>
      <KolBreadcrumb
        _ariaLabel="Breadcrumb aus Text-Links"
        _links={[
          { _label: 'Startseite', _href: '#/' },
          { _label: 'Unterseite der Startseite', _href: '#/unterseite' },
          { _label: 'Unterseite der Unterseite', _href: '#/unterseite/unterseite' },
        ]}
      ></KolBreadcrumb>
      <KolBreadcrumb
        _ariaLabel="Breadcrumb aus Text-Links"
        _links={[
          { _label: 'Startseite', _icon: 'home', _iconOnly: true, _href: '#/' },
          { _label: 'Unterseite der Startseite mit sehr langem Link-Test', _href: '#/unterseite' },
          { _label: 'Unterseite der Unterseite', _href: '#/unterseite/unterseite' },
        ]}
      ></KolBreadcrumb>
    </>
  ),
  'KOL-BUTTON': () => (
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
};
