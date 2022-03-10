import { Component } from 'solid-js';
import {
  KolAbbr,
  KolAccordion,
  KolAlert,
  KolBadge,
  KolBreadcrumb,
  KolButton,
  KolButtonGroup,
  KolCard,
  KolDetails,
  KolHeading,
  KolIconFontAwesome,
  KolIconIcofont,
  KolIndentedText,
  KolInputCheckbox,
  KolInputColor,
  KolInputEmail,
  KolInputFile,
  KolInputNumber,
  KolInputPassword,
  KolInputRadio,
  KolInputRange,
  KolInputText,
  KolLink,
  KolLinkGroup,
  KolLogo,
  KolModal,
  KolNav,
  KolProgress,
  KolSelect,
  KolSpin,
  KolTable,
  KolTabs,
  KolTextarea,
  KolVersion,
} from '@kolibri/solid';

export const baseCss = `:host button.normal {
    background-color: rgb(105, 11, 85);
    border-radius: 0;
    min-height: auto;
    min-width: auto;
}`;

export const selectedComponent = 'KOL-BUTTON';

const activeElement = null;

const STATUS_OPTIONS = [
  {
    label: '- Keine Auswahl',
    value: null,
  },
  {
    label: 'Herr',
    value: 'Herr',
  },
  {
    label: 'Frau',
    value: 'Frau',
  },
  {
    label: 'Firma',
    value: 'Firma',
  },
];

export const components: Record<string, Component> = {
  'KOL-ABBR': () => (
    <>
      <div class="grid gap-2">
        <p>
          Ich bin eine{' '}
          <KolAbbr _title="Ausführliche Beschreibung" _align="top">
            ABB
          </KolAbbr>{' '}
          mit Tooltip oben
        </p>
        <p>
          Ich bin eine{' '}
          <KolAbbr _title="Ausführliche Beschreibung" _align="right">
            ABB
          </KolAbbr>{' '}
          mit Tooltip rechts
        </p>
        <p>
          Ich bin eine{' '}
          <KolAbbr _title="Ausführliche Beschreibung" _align="bottom">
            ABB
          </KolAbbr>{' '}
          mit Tooltip unten
        </p>
        <p>
          Ich bin eine{' '}
          <KolAbbr _title="Ausführliche Beschreibung" _align="left">
            ABB
          </KolAbbr>{' '}
          mit Tooltip links
        </p>
      </div>
    </>
  ),
  'KOL-ACCORDION': () => (
    <>
      <div class="grid grid-cols-1 gap-2">
        <KolAccordion _level={1} _heading="Überschrift Accordion 1">
          <div slot="content">
            <p>Inhalt Accordion 1</p>
          </div>
        </KolAccordion>
        <KolAccordion _level={1} _heading="Überschrift Accordion 2">
          <div slot="content">
            <p>Inhalt Accordion 2</p>
          </div>
        </KolAccordion>
        <KolAccordion _level={1} _heading="Überschrift Accordion 3">
          <div slot="content">
            <p>Inhalt Accordion 3</p>
          </div>
        </KolAccordion>
      </div>
    </>
  ),
  'KOL-ALERT': () => (
    <>
      <div class="grid grid-cols-1 gap-2">
        <KolAlert _level={1} _heading="Erfolgsmeldung" _type="success"></KolAlert>
        <KolAlert _level={1} _heading="Information" _type="info"></KolAlert>
        <KolAlert _level={1} _heading="Fehlermeldung" _type="error"></KolAlert>
        <KolAlert _level={1} _heading="Warnmeldung" _type="warning"></KolAlert>
      </div>
    </>
  ),
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
    <div class="grid grid-cols-4 gap-2">
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
        <KolButton _label="Klick mich!" _icon="home" _iconAlign="right" _variant="primary"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconAlign="right" _variant="secondary"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconAlign="right" _variant="normal"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconAlign="right"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconAlign="right" _variant="danger"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconAlign="right" _variant="ghost"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconAlign="right" _disabled></KolButton>
      </div>
      <div class="grid gap-2">
        <KolButton _label="Klick mich!" _icon="home" _iconOnly _variant="primary"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconOnly _variant="secondary"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconOnly _variant="normal"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconOnly></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconOnly _variant="danger"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconOnly _variant="ghost"></KolButton>
        <KolButton _label="Klick mich!" _icon="home" _iconOnly _disabled></KolButton>
      </div>
    </div>
  ),
  'KOL-BUTTON-GROUP': () => (
    <div class="grid grid-cols-1 gap-2">
      <div class="grid gap-2">
        <KolButtonGroup>
          <KolButton _label="Klick mich!" _variant="primary"></KolButton>
          <KolButton _label="Klick mich!" _variant="secondary"></KolButton>
          <KolButton _label="Klick mich!" _variant="normal"></KolButton>
          <KolButton _label="Klick mich!"></KolButton>
          <KolButton _label="Klick mich!" _variant="danger"></KolButton>
          <KolButton _label="Klick mich!" _variant="ghost"></KolButton>
          <KolButton _label="Klick mich!" _disabled></KolButton>
        </KolButtonGroup>
      </div>
    </div>
  ),
  'KOL-CARD': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolCard _hasFooter _headline="Überschrift der Card" _level={1}>
        <div slot="content">Inhalt der Card</div>
        <div slot="footer">Fußbereich der Card</div>
      </KolCard>
    </div>
  ),
  'KOL-DETAILS': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolDetails _open _summary="Ihre Überschrift">
        Inhalt der Details-Komponente
      </KolDetails>
    </div>
  ),
  'KOL-HEADING': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolHeading _level={1}>H1-Überschrift</KolHeading>
      <KolHeading _level={2}>H2-Überschrift</KolHeading>
      <KolHeading _level={3}>H3-Überschrift</KolHeading>
      <KolHeading _level={4}>H4-Überschrift</KolHeading>
      <KolHeading _level={5}>H5-Überschrift</KolHeading>
      <KolHeading _level={6}>H6-Überschrift</KolHeading>
    </div>
  ),
  'KOL-ICON-FONT-AWESOME': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolIconFontAwesome _prefix="fas" _icon="home"></KolIconFontAwesome>
      <KolIconFontAwesome _prefix="fas" _icon="envelope"></KolIconFontAwesome>
      <KolIconFontAwesome _prefix="fas" _icon="phone"></KolIconFontAwesome>
    </div>
  ),
  'KOL-ICON-ICOFONT': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolIconIcofont _icon="home"></KolIconIcofont>
      <KolIconIcofont _icon="envelope"></KolIconIcofont>
      <KolIconIcofont _icon="phone"></KolIconIcofont>
    </div>
  ),
  'KOL-INDENTED-TEXT': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolIndentedText>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </KolIndentedText>
    </div>
  ),
  'KOL-INPUT-CHECKBOX': () => (
    <div class="grid grid-cols-1 gap-2">
      <div class="grid gap-2">
        <KolInputCheckbox _id="anrede" _name="anrede" _type="checkbox">
          Nicht ausgewählt
        </KolInputCheckbox>
        <KolInputCheckbox _checked _id="anrede" _name="anrede" _type="checkbox">
          Ausgewählt
        </KolInputCheckbox>
        <KolInputCheckbox _id="anrede" _indeterminate _name="anrede" _type="checkbox">
          Unbestimmt (Indeterminate)
        </KolInputCheckbox>
      </div>
      <div class="grid gap-2">
        <KolInputCheckbox _id="anrede" _name="anrede" _type="switch">
          Nicht ausgewählt
        </KolInputCheckbox>
        <KolInputCheckbox _checked _id="anrede" _name="anrede" _type="switch">
          Ausgewählt
        </KolInputCheckbox>
        <KolInputCheckbox _id="anrede" _indeterminate _name="anrede" _type="switch">
          Unbestimmt (Indeterminate)
        </KolInputCheckbox>
      </div>
    </div>
  ),
  'KOL-INPUT-COLOR': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolInputColor _id="farbe" _name="farbe" _value="#ff0000">
        Farbe
      </KolInputColor>
      <KolInputColor _id="farbe" _name="farbe" _list="['#000000','#ff0000', '#0000ff','#00ff00']">
        Farbe
      </KolInputColor>
      <KolInputColor _disabled _id="farbe" _name="farbe" _value="#ff0000">
        Farbe (Disabled)
      </KolInputColor>
    </div>
  ),
  'KOL-INPUT-EMAIL': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolInputEmail _id="email" _name="email" _value="test@mail.de">
        E-Mail
      </KolInputEmail>
      <KolInputEmail _id="email" _name="email" _list="['test1@mail.de', 'test2@mail.de', 'test3@mail.de']">
        E-Mail (Liste)
      </KolInputEmail>
      <KolInputEmail _disabled _id="email" _name="email" _value="test@mail.de">
        E-Mail (Disabled)
      </KolInputEmail>
      <KolInputEmail _id="email" _name="email" _readOnly _value="test@mail.de">
        E-Mail (Readonly)
      </KolInputEmail>
    </div>
  ),
  'KOL-INPUT-FILE': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolInputFile _id="file" _name="file">
        Datei hochladen
      </KolInputFile>
      <KolInputFile _id="file" _multiple _name="file">
        Datei hochladen (Multiple)
      </KolInputFile>
      <KolInputFile _disabled _id="file" _name="file">
        Datei hochladen (Disabled)
      </KolInputFile>
    </div>
  ),
  'KOL-INPUT-NUMBER': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolInputNumber _id="number" _name="number" _type="number">
        Zahleneingabe
      </KolInputNumber>
      <KolInputNumber _id="number" _max={10} _min={-10} _name="number" _step={2} _type="number">
        Zahleneingabe (-10 bis 10 in 2er Schritten)
      </KolInputNumber>
      <KolInputNumber _id="date" _name="date" _type="date">
        Datumseingabe
      </KolInputNumber>
      <KolInputNumber _id="time" _name="time" _type="datetime-local">
        Local-Datetime (Standard)
      </KolInputNumber>
      <KolInputNumber _id="time" _name="time" _step={1} _type="datetime-local">
        Local-Datetime (mit Sekunden)
      </KolInputNumber>
      <KolInputNumber _id="month" _name="month" _type="month">
        Monat
      </KolInputNumber>
      <KolInputNumber _id="week" _name="week" _type="week">
        Woche
      </KolInputNumber>
      <KolInputNumber _id="time" _name="time" _type="time">
        Zeit (Standard)
      </KolInputNumber>
      <KolInputNumber _id="time" _name="time" _step={1} _type="time">
        Zeit (mit Sekunden)
      </KolInputNumber>
      <KolInputNumber _id="number" _name="number" _readOnly _type="number">
        Zahleneingabe (Readonly)
      </KolInputNumber>
      <KolInputNumber _disabled _id="number" _name="number" _type="number">
        Zahleneingabe (Disabled)
      </KolInputNumber>
    </div>
  ),
  'KOL-INPUT-PASSWORD': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolInputPassword _id="password" _name="password">
        Passwort
      </KolInputPassword>
      <KolInputPassword _disabled _id="password" _name="password">
        Passwort (Disabled)
      </KolInputPassword>
      <KolInputPassword _id="password" _name="password" _readOnly>
        Passwort (Readonly)
      </KolInputPassword>
    </div>
  ),
  'KOL-INPUT-RADIO': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolInputRadio
        _id="anrede"
        _name="anrede"
        _list="[{'label':'Frau','value':'Frau'},{'label':'Herr','value':'Herr'},{'label':'Firma','value':'Firma'}]"
      >
        Anrede
      </KolInputRadio>
    </div>
  ),
  'KOL-INPUT-RANGE': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolInputRange _id="range" _min={0} _max={50} _name="range">
        Schieberegler
      </KolInputRange>
      <KolInputRange _id="range" _min={0} _max={50} _name="range" _step={10}>
        Schieberegler
      </KolInputRange>
      <KolInputRange _disabled _id="range" _min={0} _max={50} _name="range">
        Schieberegler
      </KolInputRange>
    </div>
  ),
  'KOL-INPUT-TEXT': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolInputText _id="vorname" _name="vorname" _type="text">
        Vorname
      </KolInputText>
      <KolInputText _id="vorname" _name="vorname" _type="search">
        Suche
      </KolInputText>
      <KolInputText _id="vorname" _name="vorname" _type="url">
        URL
      </KolInputText>
      <KolInputText _id="vorname" _name="vorname" _type="tel">
        Telefon
      </KolInputText>
      <KolInputText _id="vorname" _name="vorname" _readOnly _type="text">
        Vorname (Readonly)
      </KolInputText>
      <KolInputText _disabled _id="vorname" _name="vorname" _type="text">
        Vorname (Disabled)
      </KolInputText>
    </div>
  ),
  'KOL-LINK-GROUP': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolLinkGroup
        _heading="Überschrift für diese Linkgroup"
        _links="[{'_label':'Link nur Text','_href':'https://www.w3.org'}, {'_label':'Link mit Icon','_href':'https://www.w3.org','_icon':'home'},{'_label':'Link nur Icon','_href':'https://www.w3.org','_icon':'home','_iconOnly':'true'},{'_label':'Link ohne Unterstrich','_href':'https://www.w3.org','_underline':'false'}]"
      ></KolLinkGroup>
    </div>
  ),
  'KOL-LINK': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolLink _href="https://www.w3.org" _icon="home" _iconAlign="left">
        Dies ist ein Link
      </KolLink>
      <KolLink _href="https://www.w3.org" _icon="home" _iconAlign="right">
        Dies ist ein Link
      </KolLink>
    </div>
  ),
  'KOL-LOGO': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolLogo _abbr="BReg"></KolLogo>
      <KolLogo _abbr="BMF"></KolLogo>
      <KolLogo _abbr="BMG"></KolLogo>
    </div>
  ),
  'KOL-MODAL': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolModal _activeElement={activeElement} _width="80%">
        <div>
          <div>Ich bin ein Modal</div>
          <KolButton _label="Schließen"></KolButton>
        </div>
      </KolModal>
      <KolButton
        _label="Modal öffnen"
        _on={{
          onClick: (event: Event) => {
            activeElement = event.target as HTMLElement;
          },
        }}
      ></KolButton>
    </div>
  ),
  'KOL-NAV': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolNav
        _compact={false}
        _hasCompactButton
        _links="[{'_label':'Startseite','_href':'startseite'},{'_label':'Über uns','_href':'ueberuns'},{'_label':'Bereiche','_href':'bereiche','_children':[{'_label':'1. Unterpunkt','_href':'unterpunkt1'},{'_label':'2. Unterpunkt','_href':'unterpunkt2'},{'_label':'3. Unterpunkt','_href':'unterpunkt3'}]}]"
      ></KolNav>
    </div>
  ),
  'KOL-PROGRESS': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolProgress _max={1000} _type="bar" _value={100}></KolProgress>
      <KolProgress _max={1000} _type="cycle" _value={100}></KolProgress>
    </div>
  ),
  'KOL-SELECT': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolSelect _id="anrede" _name="anrede" _list={STATUS_OPTIONS}>
        Anrede
      </KolSelect>
      <KolSelect _id="anrede" _name="anrede" _list={STATUS_OPTIONS} _multiple>
        Anrede
      </KolSelect>
    </div>
  ),
  'KOL-SPIN': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolSpin _show>Anrede</KolSpin>
    </div>
  ),
  'KOL-TABLE': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolTable
        _caption="Öffnungszeiten"
        _data={[
          {
            asp: 'City',
            montag: '08:00',
            dienstag: '08:00',
            mittwoch: '10:00',
            donnerstag: '11:00',
            freitag: '08:00',
          },
          {
            asp: 'City-Süd',
            montag: '08:00',
            dienstag: '08:00',
            mittwoch: '10:00',
            donnerstag: '11:00',
            freitag: '08:00',
          },
          {
            asp: 'City-Nord',
            montag: '08:00',
            dienstag: '08:00',
            mittwoch: '10:00',
            donnerstag: '11:00',
            freitag: '08:00',
          },
        ]}
        _headers={{
          horizontal: [
            [
              {
                label: 'Stadtteil',
                key: 'asp',
              },
              {
                label: 'Montag',
                key: 'montag',
              },
              {
                label: 'Dienstag',
                key: 'dienstag',
              },
              {
                label: 'Mittwoch',
                key: 'mittwoch',
              },
              {
                label: 'Donnerstag',
                key: 'donnerstag',
              },
              {
                label: 'Freitag',
                key: 'freitag',
              },
            ],
          ],
        }}
      >
        Anrede
      </KolTable>
    </div>
  ),
  'KOL-TABS': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolTabs
        _selected={1}
        _tabs={[{ _label: 'Nicht ausgewählt' }, { _label: 'Ausgewählt' }, { _label: 'Nicht ausgewählt' }]}
      >
        <div slot="tab-0">Inhalte von Tab 1</div>
        <div slot="tab-1">Inhalte von Tab 2</div>
        <div slot="tab-2">Inhalte von Tab 3</div>
      </KolTabs>
    </div>
  ),
  'KOL-TEXTAREA': () => (
    <div class="grid grid-cols-1 gap-2">
      <KolTextarea _id="text" _name="text">
        Ihre Nachricht
      </KolTextarea>
      <KolTextarea _disabled _id="text" _name="text">
        Ihre Nachricht (Disabled)
      </KolTextarea>
      <KolTextarea _id="text" _name="text" _readOnly>
        Ihre Nachricht (Readonly)
      </KolTextarea>
    </div>
  ),
  'KOL-TOOLTIP': () => (
    <div class="flex gap-2">
      <KolButton _icon="simple-down" _iconOnly _label="unten" _tooltipAlign="bottom" _variant="primary"></KolButton>
      <KolButton _icon="simple-up" _iconOnly _label="oben" _tooltipAlign="top" _variant="secondary"></KolButton>
      <KolButton _icon="simple-left" _iconOnly _label="links" _tooltipAlign="left" _variant="normal"></KolButton>
      <KolButton _icon="simple-right" _iconOnly _label="rechts" _tooltipAlign="right" _variant="danger"></KolButton>
    </div>
  ),
  'KOL-VERSION': () => (
    <div class="flex gap-2">
      <KolVersion _version="1.0.0"></KolVersion>
      <KolVersion _version="2.0.0"></KolVersion>
      <KolVersion _version="3.0.0"></KolVersion>
    </div>
  ),
};
