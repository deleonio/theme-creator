import { Bundesanstalt, SelectOption } from '@kolibri/lib';
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
	KolIcon,
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
	KolPagination,
	KolProgress,
	KolSelect,
	KolSkipNav,
	KolSpin,
	KolTable,
	KolTabs,
	KolTextarea,
	KolToast,
	KolVersion,
} from '@kolibri/solid';
import { Component } from 'solid-js';
import countries from 'world_countries_lists/data/countries/de/countries.json';
import { DATA, Zeiten } from './data';

export const baseCss = `:host button.normal {
    background-color: rgb(105, 11, 85);
    border-radius: 0;
    min-height: auto;
    min-width: auto;
}`;

export const selectedComponent = 'KOL-BUTTON';

// https://css-tricks.com/snippets/javascript/random-hex-color/
const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const activeElement = null;

const STATUS_OPTIONS: SelectOption<string>[] = [
	{
		label: '- Keine Auswahl',
		value: '',
		disabled: true,
	},
];

type Country = {
	id: number;
	alpha2: string;
	alpha3: string;
	name: string;
};
(countries as Country[]).forEach((country) =>
	STATUS_OPTIONS.push({
		label: country.name,
		value: country.alpha2,
	})
);

const HINT_MSG = 'Ich bin ein Hinweis.';
const ERROR_MSG = 'Ich bin eine Fehlermeldung!';

const LONG_TEXT = `Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.`;

export const components: Record<string, Component> = {
	'KOL-ABBR': () => (
		<div class="grid justify-center">
			<div class="grid gap-6 text-center">
				<p>
					Ich bin eine{' '}
					<KolAbbr _title="Ausführliche Beschreibung" _tooltipAlign="top">
						ABB
					</KolAbbr>{' '}
					mit Tooltip oben
				</p>
				<p>
					Ich bin eine{' '}
					<KolAbbr _title="Ausführliche Beschreibung" _tooltipAlign="right">
						ABB
					</KolAbbr>{' '}
					mit Tooltip rechts
				</p>
				<p>
					Ich bin eine{' '}
					<KolAbbr _title="Ausführliche Beschreibung" _tooltipAlign="bottom">
						ABB
					</KolAbbr>{' '}
					mit Tooltip unten
				</p>
				<p>
					Ich bin eine{' '}
					<KolAbbr _title="Ausführliche Beschreibung" _tooltipAlign="left">
						ABB
					</KolAbbr>{' '}
					mit Tooltip links
				</p>
			</div>
		</div>
	),
	'KOL-ACCORDION': () => (
		<div class="grid justify-center gap-1">
			<KolAccordion _level={1} _heading="Überschrift Accordion 1" _open>
				<div slot="content">{LONG_TEXT}</div>
			</KolAccordion>
			<KolAccordion _level={2} _heading="Überschrift Accordion 2">
				<div slot="content">{LONG_TEXT}</div>
			</KolAccordion>
			<KolAccordion _level={3} _heading="Überschrift Accordion 3">
				<div slot="content">{LONG_TEXT}</div>
			</KolAccordion>
			<KolAccordion _level={4} _heading="Überschrift Accordion 4" _open>
				<div slot="content">{LONG_TEXT}</div>
			</KolAccordion>
			<KolAccordion _level={5} _heading="Überschrift Accordion 5">
				<div slot="content">{LONG_TEXT}</div>
			</KolAccordion>
			<KolAccordion _level={6} _heading="Überschrift Accordion 6">
				<div slot="content">{LONG_TEXT}</div>
			</KolAccordion>
			<KolAccordion class="bordered" _heading="Accordion #3 Header" _level={3}>
				<p slot="header">
					In den Accordion-Header kann auch noch was komplexeres eingefügt werden.
					<KolButton class="not-used" _icon="ui-add" _label="Hinzufügen" _variant="secondary"></KolButton>
				</p>
				<p slot="content">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta pariatur laudantium saepe ipsa atque officia cupiditate repudiandae harum earum aut
					doloribus autem libero exercitationem dolor ad, magni dignissimos ratione fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
					perferendis qui animi nesciunt illo facere, doloribus sint cupiditate nihil dolorem voluptate ab esse! Ducimus ad est commodi molestias voluptas
					reiciendis.
				</p>
			</KolAccordion>
		</div>
	),
	'KOL-ALERT': () => (
		<div class="grid justify-center bg-red-100 gap-6">
			<KolAlert _heading="Nachricht" _level={3}>
				Hier wird die Nachricht näher beschrieben.
			</KolAlert>
			<KolAlert _type="error" _heading="Fehler" _level={3}>
				Hier wird der Fehler näher beschrieben.
			</KolAlert>
			<KolAlert _type="info" _heading="Hinweis" _level={4}>
				Hier wird der Hinweis näher beschrieben.
			</KolAlert>
			<KolAlert _type="success" _heading="Erfolg" _level={5}>
				Hier wird der Erfolg näher beschrieben.
			</KolAlert>
			<KolAlert _type="warning" _heading="Warnung" _level={6}>
				Hier wird die Warnung näher beschrieben.
			</KolAlert>
			<KolAlert>Hier wird die Nachricht näher beschrieben.</KolAlert>
			<KolAlert _type="error">Hier wird der Fehler kurz beschrieben.</KolAlert>
			<KolAlert _type="info">Hier wird der Hinweis kurz beschrieben.</KolAlert>
			<KolAlert _type="success">Hier wird der Erfolg kurz beschrieben.</KolAlert>
			<KolAlert _type="warning">Hier wird die Warnung kurz beschrieben.</KolAlert>
			<KolAlert _heading="Nachricht" _level={3} _variant="card">
				Hier wird die Nachricht näher beschrieben.
			</KolAlert>
			<KolAlert _type="error" _heading="Fehler" _level={3} _variant="card">
				Hier wird der Fehler näher beschrieben.
			</KolAlert>
			<KolAlert _type="info" _heading="Hinweis" _level={4} _variant="card">
				Hier wird der Hinweis näher beschrieben.
			</KolAlert>
			<KolAlert _type="success" _heading="Erfolg" _level={5} _variant="card">
				Hier wird der Erfolg näher beschrieben.
			</KolAlert>
			<KolAlert _type="warning" _heading="Warnung" _level={6} _variant="card">
				Hier wird die Warnung näher beschrieben.
			</KolAlert>
			<KolAlert _variant="card">Hier wird die Nachricht näher beschrieben.</KolAlert>
			<KolAlert _type="error" _variant="card">
				Hier wird der Fehler kurz beschrieben.
			</KolAlert>
			<KolAlert _type="info" _variant="card">
				Hier wird der Hinweis kurz beschrieben.
			</KolAlert>
			<KolAlert _type="success" _variant="card">
				Hier wird der Erfolg kurz beschrieben.
			</KolAlert>
			<KolAlert _type="warning" _variant="card">
				Hier wird die Warnung kurz beschrieben.
			</KolAlert>
		</div>
	),
	'KOL-BADGE': () => (
		<div class="flex flex-wrap gap-6">
			<KolBadge
				_label="Text"
				_color={{
					backgroundColor: `#000`,
					color: `#fff`,
				}}
			></KolBadge>
			<KolBadge
				_label="Text"
				_color={{
					backgroundColor: `#ddd`,
					color: `#222`,
				}}
				_icon="tree"
			></KolBadge>
			<KolBadge
				_label="Text"
				_color={{
					backgroundColor: `#ff0`,
					color: `#860`,
				}}
				_icon="tree"
				_iconAlign="right"
			></KolBadge>
			<KolBadge
				_label="Text"
				_color={{
					backgroundColor: `#333`,
					color: `#888`,
				}}
				_icon="tree"
				_iconOnly
			></KolBadge>
			{new Array(10).fill(null).map(() => (
				<>
					<KolBadge _label="Text" _color={`#${randomColor()}`}></KolBadge>
					<KolBadge _label="Text" _color={`#${randomColor()}`} _icon="tree"></KolBadge>
					<KolBadge _label="Text" _color={`#${randomColor()}`} _icon="tree" _iconAlign="right"></KolBadge>
					<KolBadge _label="Text" _color={`#${randomColor()}`} _icon="tree" _iconOnly></KolBadge>
				</>
			))}
			<div style="max-width: 100px">
				<KolBadge
					_label="Ein Badge mit sehr viel Text sieht z.B. so aus!"
					_color={{
						backgroundColor: `#CCDEDA`,
						color: `#005C45`,
					}}
				></KolBadge>
				<KolBadge _label="Ein Badge mit sehr viel Text sieht z.B. so aus!" _color={`#CCDEDA`}></KolBadge>
			</div>
		</div>
	),
	'KOL-BREADCRUMB': () => (
		<div class="grid justify-center gap-6">
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
					{ _label: 'Startseite', _icon: 'home', _href: '#/' },
					{ _label: 'Unterseite der Startseite mit sehr langem Link-Test', _href: '#/unterseite' },
					{ _label: 'Unterseite der Unterseite', _href: '#/unterseite/unterseite' },
				]}
			></KolBreadcrumb>
			<KolBreadcrumb
				_ariaLabel="Breadcrumb aus Text-Links"
				_links={[
					{ _ariaLabel: 'Startseite', _label: 'Startseite', _icon: 'home', _iconOnly: true, _href: '#/' },
					{ _label: 'Unterseite der Startseite mit sehr langem Link-Test', _href: '#/unterseite' },
					{ _label: 'Unterseite der Unterseite', _href: '#/unterseite/unterseite' },
				]}
			></KolBreadcrumb>
		</div>
	),
	'KOL-BUTTON': () => (
		<div class="grid grid-cols-3 items-center justify-items-center gap-6">
			<div class="grid gap-6 text-center items-center justify-items-center">
				<KolButton _label="Primary" _variant="primary"></KolButton>
				<KolButton _label="Secondary" _variant="secondary"></KolButton>
				<KolButton _label="Normal" _variant="normal"></KolButton>
				<KolButton _label="Danger" _variant="danger"></KolButton>
				<KolButton _label="Ghost" _variant="ghost"></KolButton>
				<KolButton _label="Loading" _customClass="loading"></KolButton>
			</div>
			<div class="grid gap-6 text-center items-center justify-items-center">
				<KolButton _label="Primary" _icon="home" _variant="primary"></KolButton>
				<KolButton _label="Secondary" _icon="home" _variant="secondary"></KolButton>
				<KolButton _label="Normal" _icon="home" _variant="normal"></KolButton>
				<KolButton _label="Danger" _icon="home" _variant="danger"></KolButton>
				<KolButton _label="Ghost" _icon="home" _variant="ghost"></KolButton>
				<KolButton _label="Loading" _icon="home" _customClass="loading"></KolButton>
			</div>
			<div class="grid gap-6 text-center items-center justify-items-center">
				<KolButton _label="Primary" _icon="home" _iconAlign="right" _variant="primary" style="width: 120px"></KolButton>
				<KolButton _label="Secondary" _icon="home" _iconAlign="right" _variant="secondary" style="width: 120px"></KolButton>
				<KolButton _label="Normal" _icon="home" _iconAlign="right" _variant="normal" style="width: 120px"></KolButton>
				<KolButton _label="Danger" _icon="home" _iconAlign="right" _variant="danger" style="width: 120px"></KolButton>
				<KolButton _label="Ghost" _icon="home" _iconAlign="right" _variant="ghost" style="width: 120px"></KolButton>
				<KolButton _label="Loading" _icon="home" _iconAlign="right" _customClass="loading" style="width: 120px"></KolButton>
			</div>
			<div class="grid gap-6 text-center items-center justify-items-center">
				<KolButton _label="Primary" _icon="home" _iconOnly _variant="primary"></KolButton>
				<KolButton _label="Secondary" _icon="home" _iconOnly _variant="secondary" _tooltipAlign="right"></KolButton>
				<KolButton _label="Normal" _icon="home" _iconOnly _variant="normal" _tooltipAlign="bottom"></KolButton>
				<KolButton _label="Danger" _icon="home" _iconOnly _variant="danger" _tooltipAlign="left"></KolButton>
				<KolButton _label="Ghost" _icon="home" _iconOnly _variant="ghost" _tooltipAlign="top"></KolButton>
				<KolButton _label="Loading" _icon="home" _iconOnly _customClass="loading" _tooltipAlign="top"></KolButton>
			</div>
			<div class="grid gap-6 text-center items-center justify-items-center">
				<KolButton _label="Primary" _icon="home" _disabled _variant="primary"></KolButton>
				<KolButton _label="Secondary" _icon="home" _disabled _variant="secondary"></KolButton>
				<KolButton _label="Normal" _icon="home" _disabled _variant="normal"></KolButton>
				<KolButton _label="Danger" _icon="home" _disabled _variant="danger"></KolButton>
				<KolButton _label="Ghost" _icon="home" _disabled _variant="ghost"></KolButton>
				<KolButton _label="Loading" _icon="home" _disabled _customClass="loading"></KolButton>
			</div>
			<div class="grid gap-6 text-center items-center justify-items-center">
				<KolButton
					_label="Primary"
					_icon={{
						left: 'icofont-arrow-left',
						right: 'icofont-arrow-right',
						top: 'icofont-arrow-up',
						bottom: 'icofont-arrow-down',
					}}
					_variant="primary"
				></KolButton>
				<KolButton
					_label="Secondary"
					_icon={{
						left: 'icofont-arrow-left',
						right: 'icofont-arrow-right',
						top: 'icofont-arrow-up',
						bottom: 'icofont-arrow-down',
					}}
					_variant="secondary"
				></KolButton>
				<KolButton
					_label="Normal"
					_icon={{
						left: 'icofont-arrow-left',
						right: 'icofont-arrow-right',
						top: 'icofont-arrow-up',
						bottom: 'icofont-arrow-down',
					}}
					_variant="normal"
				></KolButton>
				<KolButton
					_label="Danger"
					_icon={{
						left: 'icofont-arrow-left',
						right: 'icofont-arrow-right',
						top: 'icofont-arrow-up',
						bottom: 'icofont-arrow-down',
					}}
					_variant="danger"
				></KolButton>
				<KolButton
					_label="Ghost"
					_icon={{
						left: 'icofont-arrow-left',
						right: 'icofont-arrow-right',
						top: 'icofont-arrow-up',
						bottom: 'icofont-arrow-down',
					}}
					_variant="ghost"
				></KolButton>
				<KolButton
					_label="Loading"
					_icon={{
						left: 'icofont-arrow-left',
						right: 'icofont-arrow-right',
						top: 'icofont-arrow-up',
						bottom: 'icofont-arrow-down',
					}}
					_customClass="loading"
				></KolButton>
			</div>
		</div>
	),
	'KOL-BUTTON-GROUP': () => (
		<div class="grid gap-6 text-center">
			<KolButtonGroup>
				<KolButton _label="Primary" _variant="primary"></KolButton>
				<KolButton _label="Secondary" _variant="secondary"></KolButton>
				<KolButton _label="Normal" _variant="normal"></KolButton>
				<KolButton _label="Danger" _variant="danger"></KolButton>
				<KolButton _label="Ghost" _variant="ghost"></KolButton>
				<KolButton _label="Disabled" _disabled></KolButton>
			</KolButtonGroup>
			<KolButtonGroup>
				<KolButton _label="Primary" _variant="primary"></KolButton>
				<KolButton _label="Secondary" _variant="secondary"></KolButton>
				<KolButton _label="Normal" _variant="normal"></KolButton>
				<KolButton _label="Danger" _icon="trash" _iconOnly _variant="danger"></KolButton>
				<KolButton _label="Ghost" _icon="info" _iconOnly _variant="ghost"></KolButton>
				<KolButton _label="Disabled" _icon="lock" _iconOnly _disabled></KolButton>
			</KolButtonGroup>
		</div>
	),
	'KOL-CARD': () => (
		<div class="grid xl:grid-cols-2 2xl:grid-cols-3 gap-6">
			<KolCard _hasFooter _headline="H1-Überschrift der Card" _level={1}>
				<div slot="content">
					Inhalt der Card Hier wird der Fehler näher beschrieben. Hier wird der Fehler näher beschrieben. Hier wird der Fehler näher beschrieben. Hier wird der
					Fehler näher beschrieben. Hier wird der Fehler näher beschrieben.
				</div>
				<div slot="footer">Fußbereich der Card</div>
			</KolCard>
			<KolCard _headline="H2-Überschrift der Card" _level={2}>
				<div slot="content">Inhalt der Card</div>
			</KolCard>
			<KolCard _headline="Bild in der Card" _hasFooter _level={2}>
				<div slot="content">
					<img alt="Einleitungsbild der Stadtverwaltung" class="w-full" src="http://placeimg.com/400/200/arch" />
				</div>
				<div slot="footer">
					<KolButtonGroup>
						<KolButton _label="Kaufen" _variant="primary"></KolButton>
						<KolButton _label="Löschen" _icon={'trash'} _iconOnly _variant="danger"></KolButton>
					</KolButtonGroup>
				</div>
			</KolCard>
			<KolCard _headline="H3-Überschrift der Card" _level={3}>
				<div slot="header">Fußbereich der Card</div>
				<div slot="content">
					Inhalt der Card Hier wird der Fehler näher beschrieben. Hier wird der Fehler näher beschrieben. Hier wird der Fehler näher beschrieben. Hier wird der
					Fehler näher beschrieben. Hier wird der Fehler näher beschrieben. Hier wird der Fehler näher beschrieben.
				</div>
			</KolCard>
			<KolCard _hasFooter _headline="H4-Überschrift der Card" _level={4}>
				<div slot="content">Inhalt der Card</div>
				<div slot="footer">Fußbereich der Card</div>
			</KolCard>
			<KolCard _hasFooter _headline="H5-Überschrift der Card" _level={5}>
				<div slot="content">Inhalt der Card</div>
				<div slot="footer">Fußbereich der Card</div>
			</KolCard>
			<KolCard _hasFooter _headline="H6-Überschrift der Card" _level={6}>
				<div slot="content">Inhalt der Card</div>
				<div slot="footer">
					<KolButtonGroup>
						<KolButton _label="Speichern" _variant="primary"></KolButton>
						<KolButton _label="Abbrechen" _variant="secondary"></KolButton>
						<KolButton _label="Löschen" _variant="danger"></KolButton>
					</KolButtonGroup>
				</div>
			</KolCard>
		</div>
	),
	'KOL-DETAILS': () => (
		<div class="grid justify-center gap-6">
			<KolDetails _open _summary="Ihre Überschrift 1">
				Inhalt der ersten Details-Komponente
			</KolDetails>
			<KolDetails _open _summary="Ihre Überschrift 2">
				Inhalt der zweiten Details-Komponente
			</KolDetails>
		</div>
	),
	'KOL-HEADING': () => (
		<div class="grid grid-cols-2">
			<div class="grid gap-6 text-center">
				<KolHeading _level={1}>H1-Überschrift</KolHeading>
				<KolHeading _level={2}>H2-Überschrift</KolHeading>
				<KolHeading _level={3}>H3-Überschrift</KolHeading>
				<KolHeading _level={4}>H4-Überschrift</KolHeading>
				<KolHeading _level={5}>H5-Überschrift</KolHeading>
				<KolHeading _level={6}>H6-Überschrift</KolHeading>
			</div>
		</div>
	),
	'KOL-ICON': () => (
		<div class="grid justify-center gap-6">
			<KolIcon _ariaLabel="" _icon="icofont-home"></KolIcon>
			<KolIcon _ariaLabel="" _icon="codicon codicon-bug"></KolIcon>
			<KolIcon _ariaLabel="" _icon="fa-solid fa-arrow-down-1-9"></KolIcon>
		</div>
	),
	'KOL-INDENTED-TEXT': () => (
		<div class="grid justify-center gap-6">
			<KolIndentedText>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			</KolIndentedText>
		</div>
	),
	'KOL-INPUT-CHECKBOX': () => (
		<div class="grid justify-center gap-6">
			<div class="grid gap-6 text-center">
				<KolInputCheckbox _id="anrede" _name="anrede" _required _type="checkbox">
					Nicht ausgewählt
				</KolInputCheckbox>
				<KolInputCheckbox _checked _id="anrede" _name="anrede" _type="checkbox" _touched _error={ERROR_MSG}>
					Ausgewählt
				</KolInputCheckbox>
				<KolInputCheckbox _id="anrede" _indeterminate _name="anrede" _type="checkbox">
					Unbestimmt (Indeterminate)
				</KolInputCheckbox>
			</div>
			<div class="grid gap-6 text-center">
				<KolInputCheckbox _id="anrede" _name="anrede" _type="switch" _error={ERROR_MSG}>
					Nicht ausgewählt
				</KolInputCheckbox>
				<KolInputCheckbox _checked _id="anrede" _name="anrede" _type="switch">
					Ausgewählt
				</KolInputCheckbox>
				<KolInputCheckbox _id="anrede" _disabled _indeterminate _name="anrede" _type="switch" _touched _error={ERROR_MSG}>
					Unbestimmt (Indeterminate)
				</KolInputCheckbox>
			</div>
		</div>
	),
	'KOL-INPUT-COLOR': () => (
		<div class="grid justify-center gap-6">
			<KolInputColor
				_id="farbe"
				_name="farbe"
				_value="#ff0000"
				_error={ERROR_MSG}
				_icon={{
					left: {
						icon: 'icofont-home',
					},
					right: {
						icon: 'icofont-home',
					},
				}}
				_touched
			>
				Farbe
			</KolInputColor>
			<KolInputColor _id="farbe" _name="farbe" _list="['#000000','#ff0000', '#0000ff','#00ff00']" _error={ERROR_MSG}>
				Farbe
			</KolInputColor>
			<KolInputColor _disabled _id="farbe" _name="farbe" _value="#ff0000">
				Farbe (Disabled)
			</KolInputColor>
		</div>
	),
	'KOL-INPUT-EMAIL': () => (
		<div class="grid justify-center gap-6">
			<KolInputEmail _id="email" _name="email" _required _value="test@mail.de" _error={ERROR_MSG}>
				E-Mail
			</KolInputEmail>
			<KolInputEmail
				_id="email"
				_name="email"
				_placeholder="elke@mustermann.de"
				_list="['test1@mail.de', 'test2@mail.de', 'test3@mail.de']"
				_error={ERROR_MSG}
				_icon={{
					left: {
						icon: 'icofont-home',
					},
					right: {
						icon: 'icofont-home',
					},
				}}
				_touched
			>
				E-Mail (Liste)
			</KolInputEmail>
			<KolInputEmail _disabled _id="email" _name="email" _value="test@mail.de">
				E-Mail (Disabled)
			</KolInputEmail>
			<KolInputEmail _id="email" _name="email" _read-only _value="test@mail.de">
				E-Mail (Readonly)
			</KolInputEmail>
		</div>
	),
	'KOL-INPUT-FILE': () => (
		<div class="grid justify-center gap-6">
			<KolInputFile
				_id="file"
				_name="file"
				_required
				_error={ERROR_MSG}
				_icon={{
					left: {
						icon: 'icofont-home',
					},
					right: {
						icon: 'icofont-home',
					},
				}}
				_touched
			>
				Datei hochladen
			</KolInputFile>
			<KolInputFile _id="file" _multiple _name="file" _error={ERROR_MSG}>
				Datei hochladen (Multiple)
			</KolInputFile>
			<KolInputFile _disabled _id="file" _name="file">
				Datei hochladen (Disabled)
			</KolInputFile>
		</div>
	),
	'KOL-INPUT-NUMBER': () => (
		<div class="grid justify-center gap-6">
			<KolInputNumber
				_id="number"
				_name="number"
				_required
				_type="number"
				_error={ERROR_MSG}
				_placeholder="Mit Icons"
				_icon={{
					left: {
						icon: 'icofont-home',
					},
					right: {
						icon: 'icofont-home',
					},
				}}
				_touched
			>
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
			<KolInputNumber _id="time" _name="time" _step={1} _type="datetime-local" _error={ERROR_MSG}>
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
			<KolInputNumber _id="number" _name="number" _read-only _type="number">
				Zahleneingabe (Readonly)
			</KolInputNumber>
			<KolInputNumber _disabled _id="number" _name="number" _type="number">
				Zahleneingabe (Disabled)
			</KolInputNumber>
		</div>
	),
	'KOL-INPUT-PASSWORD': () => (
		<div class="grid justify-center gap-6">
			<KolInputPassword
				_id="password"
				_name="password"
				_required
				_error={ERROR_MSG}
				_placeholder="Mit Icons"
				_icon={{
					left: {
						icon: 'icofont-home',
					},
					right: {
						icon: 'icofont-home',
					},
				}}
				_smartButton={{
					_icon: {
						left: {
							icon: 'icofont-eye',
						},
					},
					_iconOnly: true,
					_label: 'Passwort anzeigen',
					_on: {
						onClick: () => {},
					},
				}}
				_touched
			>
				Passwort
			</KolInputPassword>
			<KolInputPassword _disabled _id="password" _name="password" _error={ERROR_MSG}>
				Passwort (Disabled)
			</KolInputPassword>
			<KolInputPassword _id="password" _name="password" _read-only>
				Passwort (Readonly)
			</KolInputPassword>
		</div>
	),
	'KOL-INPUT-RADIO': () => (
		<div class="grid justify-center gap-6">
			<KolInputRadio
				_id="anrede"
				_error={ERROR_MSG}
				_name="anrede"
				_list="[{'label':'Frau','value':'Frau'},{'label':'Herr','value':'Herr'},{'label':'Firma','value':'Firma'}]"
			>
				Anrede
			</KolInputRadio>
			<KolInputRadio
				_id="anrede"
				_required
				_error={ERROR_MSG}
				_name="anrede2"
				_value="Firma"
				_list="[{'label':'Frau','value':'Frau'},{'label':'Herr','value':'Herr'},{'label':'Firma','value':'Firma'}]"
			>
				Anrede
			</KolInputRadio>
			<KolInputRadio
				_id="anrede"
				_disabled
				_touched
				_error={ERROR_MSG}
				_name="anrede3"
				_value="Firma"
				_list="[{'label':'Frau','value':'Frau'},{'label':'Herr','value':'Herr'},{'label':'Firma','value':'Firma'}]"
			>
				Anrede
			</KolInputRadio>
		</div>
	),
	'KOL-INPUT-RANGE': () => (
		<div class="grid justify-center gap-6">
			<KolInputRange
				_id="range"
				_min={0}
				_max={50}
				_name="range"
				_error={ERROR_MSG}
				_icon={{
					left: {
						icon: 'icofont-home',
					},
					right: {
						icon: 'icofont-home',
					},
				}}
				_touched
			>
				Schieberegler
			</KolInputRange>
			<KolInputRange _id="range" _min={0} _max={50} _name="range" _step={10} _error={ERROR_MSG}>
				Schieberegler
			</KolInputRange>
			<KolInputRange _disabled _id="range" _min={0} _max={50} _name="range">
				Schieberegler
			</KolInputRange>
		</div>
	),
	'KOL-INPUT-TEXT': () => (
		<div class="grid justify-center gap-6 bg-red-100">
			<KolInputText
				_hint={HINT_MSG}
				_error={ERROR_MSG}
				_placeholder="Mit Icons"
				_icon={{
					left: 'icofont-arrow-left',
					right: {
						icon: 'icofont-arrow-right',
						style: {
							'font-size': '200%',
						},
					},
				}}
				_hideLabel
				_required
				_smartButton={{
					_icon: {
						left: {
							icon: 'icofont-eye',
						},
					},
					_iconOnly: true,
					_label: 'Passwort anzeigen',
					_on: {
						onClick: () => {},
					},
				}}
				_touched
				_type="search"
			>
				Suche
			</KolInputText>
			<KolInputText
				_error={ERROR_MSG}
				_placeholder="Mit Icons"
				_icon={{
					left: {
						icon: 'icofont-home',
					},
					right: {
						icon: 'icofont-home',
					},
				}}
				_hideLabel
				_touched
				_type="search"
			>
				Suche
			</KolInputText>
			<KolInputText _placeholder="Placeholder" _required _type="text">
				Vorname (text)
			</KolInputText>
			<KolInputText _placeholder="Placeholder" _type="search">
				Suche (search)
			</KolInputText>
			<KolInputText _id="vorname" _name="vorname" _placeholder="Placeholder" _error={ERROR_MSG} _touched _type="url">
				URL (url)
			</KolInputText>
			<KolInputText _placeholder="Placeholder" _type="tel">
				Telefon (tel)
			</KolInputText>
			<KolInputText _placeholder="Placeholder" _read-only _type="text">
				Vorname (text, readonly)
			</KolInputText>
			<KolInputText _value="Value" _read-only _type="text">
				Vorname (text, readonly)
			</KolInputText>
			<KolInputText _placeholder="Placeholder" _disabled _type="text">
				Vorname (text, disabled)
			</KolInputText>
			<KolInputText _value="Value" _disabled _type="text">
				Vorname (text, disabled)
			</KolInputText>
		</div>
	),
	'KOL-LINK-GROUP': () => (
		<div class="grid justify-center gap-6">
			<KolLinkGroup
				_heading="Überschrift für diese Linkgroup"
				_links={[
					{ _label: 'Link nur Text', _href: 'https://www.w3.org' },
					{ _label: 'Link mit Icon', _href: 'https://www.w3.org', _icon: 'home' },
					{ _label: 'Link nur Icon', _href: 'https://www.w3.org', _icon: 'home', _iconOnly: 'true' },
					{ _label: 'Link ohne Unterstrich', _href: 'https://www.w3.org', _underline: 'false' },
				]}
				_orientation="vertical"
			></KolLinkGroup>
			<KolLinkGroup
				_heading="Horizontale Linkgroup"
				_links={[
					{ _label: 'Link nur Text', _href: 'https://www.w3.org' },
					{ _label: 'Link mit Icon', _href: 'https://www.w3.org', _icon: 'home' },
					{ _label: 'Link nur Icon', _href: 'https://www.w3.org', _icon: 'home', _iconOnly: 'true' },
					{ _label: 'Link ohne Unterstrich', _href: 'https://www.w3.org', _underline: 'false' },
				]}
				_orientation="horizontal"
			></KolLinkGroup>
		</div>
	),
	'KOL-LINK': () => (
		<div class="grid justify-items-center gap-6">
			<KolLink _href="https://www.w3.org" _icon="home" _iconOnly _ariaLabel="Home"></KolLink>
			<KolLink _href="https://www.w3.org">Normaler Link</KolLink>
			<KolLink _href="https://www.w3.org" _icon="home" _iconAlign="left">
				Normaler Link mit Icon links
			</KolLink>
			<KolLink _href="https://www.w3.org" _icon="home" _iconAlign="right">
				Normaler Link mit Icon rechts
			</KolLink>
			<KolLink _href="https://www.w3.org" _icon="home" _iconOnly>
				Nur Icon-Link
			</KolLink>
			<KolLink _href="https://www.w3.org" _target="w3c">
				Externer Link
			</KolLink>
			<KolLink _href="/">Besuchter Link</KolLink>
			<KolLink _href="#/" _useCase="image" _ariaLabel="Zurück zur Startseite">
				<KolLogo class="inline-flex w-50" _org={Bundesanstalt['Informationstechnikzentrum Bund']}></KolLogo>
			</KolLink>
			<KolIndentedText>
				<p>
					<b>Links sind unsichtbar geschalten</b>
					<br />
					Um die Links zu sehen, am besten einmal in diesen Bereich klicken und Tab-Taste drücken.
				</p>
			</KolIndentedText>
			<KolSkipNav
				_ariaLabel="Skip-Nav"
				_links={[
					{ _label: 'Link nur Text', _href: 'https://www.w3.org' },
					{ _label: 'Link mit Icon', _href: 'https://www.w3.org', _icon: 'home' },
					{ _label: 'Link nur Icon', _href: 'https://www.w3.org', _icon: 'home', _iconOnly: 'true' },
					{ _label: 'Link ohne Unterstrich', _href: 'https://www.w3.org', _underline: 'false' },
				]}
			></KolSkipNav>
		</div>
	),
	'KOL-LOGO': () => (
		<div class="grid justify-center gap-6">
			<KolLogo _abbr="BReg"></KolLogo>
			<KolLogo _abbr="BMF"></KolLogo>
			<KolLogo _abbr="BMG"></KolLogo>
		</div>
	),
	'KOL-MODAL': () => (
		<div class="grid justify-center gap-6">
			<KolModal _active-element={activeElement} _width="80%">
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
		<div class="col-12 grid gap-6">
			<div class="inline-flex">
				<KolNav
					class="font-80 max-width"
					_ariaLabel="Navigation in der Breite beschränkt"
					_has-compact-button
					_links={[
						{
							_label: '1 Navigationspunkt mit sehr langem Link-Test',
							_href: '#abc',
							_icon: 'woodpecker',
							_target: 'asdasd',
						},
						{
							_label: '2 Navigationspunkt und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen',
							_href: '#abc',
							_icon: 'woodpecker',
						},
						{
							_active: true,
							_label: '3 Navigationspunkt',
							_href: '#abc',
							_icon: 'woodpecker',
							_children: [
								{ _label: '3.1 Navigationspunkt', _href: '#abc', _icon: 'woodpecker' },
								{ _label: '3.2 Navigationspunkt', _href: '#abc', _icon: 'woodpecker', _target: 'asdasd' },
								{
									_active: true,
									_label: '3.3 Navigationspunkt',
									_href: '#abc',
									_children: [
										{ _active: true, _label: '3.3.1 Navigationspunkt (aktiv)', _href: '#abc' },
										{ _label: '3.3.2 Navigationspunkt', _href: '#abc' },
									],
								},
								{
									_label: '3.4 Navigationspunkt',
									_href: '#abc',
									_children: [
										{ _label: '3.4.1 Navigationspunkt', _href: '#abc' },
										{ _label: '3.4.2 Navigationspunkt', _href: '#abc' },
									],
								},
								{ _label: '3.5 Navigationspunkt', _href: '#abc' },
							],
						},
						{ _label: '4 Navigationspunkt', _href: '#abc' },
					]}
				></KolNav>
			</div>
			<div class="inline-flex">
				<KolNav
					class="font-60 max-width"
					_ariaLabel="Navigation initial eingeklappt"
					_compact
					_links={[
						{
							_label: '1 Navigationspunkt mit sehr langem Link-Test',
							_href: '#abc',
							_icon: 'woodpecker',
							_target: 'asdasd',
						},
						{
							_label: '2 Navigationspunkt und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen',
							_href: '#abc',
							_icon: 'woodpecker',
						},
						{
							_active: true,
							_label: '3 Navigationspunkt',
							_href: '#abc',
							_icon: 'woodpecker',
							_children: [
								{ _label: '3.1 Navigationspunkt', _href: '#abc', _icon: 'woodpecker' },
								{ _label: '3.2 Navigationspunkt', _href: '#abc', _icon: 'woodpecker', _target: 'asdasd' },
								{
									_active: true,
									_label: '3.3 Navigationspunkt',
									_href: '#abc',
									_children: [
										{ _active: true, _label: '3.3.1 Navigationspunkt (aktiv)', _href: '#abc' },
										{ _label: '3.3.2 Navigationspunkt', _href: '#abc' },
									],
								},
								{
									_label: '3.4 Navigationspunkt',
									_href: '#abc',
									_children: [
										{ _label: '3.4.1 Navigationspunkt', _href: '#abc' },
										{ _label: '3.4.2 Navigationspunkt', _href: '#abc' },
									],
								},
								{ _label: '3.5 Navigationspunkt', _href: '#abc' },
							],
						},
						{ _label: '4 Navigationspunkt', _href: '#abc' },
					]}
				></KolNav>
			</div>
			<div class="inline-flex">
				<KolNav
					_ariaLabel="Navigation mit sinnvoller Breite"
					_links={[
						{
							_label: '1 Navigationspunkt mit sehr langem Link-Test',
							_href: '#abc',
							_icon: 'woodpecker',
							_target: 'asdasd',
						},
						{
							_label: '2 Navigationspunkt und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen',
							_href: '#abc',
							_icon: 'woodpecker',
						},
						{
							_active: true,
							_label: '3 Navigationspunkt',
							_href: '#abc',
							_icon: 'woodpecker',
							_children: [
								{ _label: '3.1 Navigationspunkt', _href: '#abc', _icon: 'woodpecker' },
								{ _label: '3.2 Navigationspunkt', _href: '#abc', _icon: 'woodpecker', _target: 'asdasd' },
								{
									_active: true,
									_label: '3.3 Navigationspunkt',
									_href: '#abc',
									_children: [
										{ _active: true, _label: '3.3.1 Navigationspunkt (aktiv)', _href: '#abc' },
										{ _label: '3.3.2 Navigationspunkt', _href: '#abc' },
									],
								},
								{
									_label: '3.4 Navigationspunkt',
									_href: '#abc',
									_children: [
										{ _label: '3.4.1 Navigationspunkt', _href: '#abc' },
										{ _label: '3.4.2 Navigationspunkt', _href: '#abc' },
									],
								},
								{ _label: '3.5 Navigationspunkt', _href: '#abc' },
							],
						},
						{ _label: '4 Navigationspunkt', _href: '#abc' },
					]}
					_orientation="horizontal"
				></KolNav>
			</div>
			<div class="inline-flex">
				<KolNav
					class="font-80"
					style="display: inline-flex"
					_ariaLabel="Navigation mit sinnvoller Breite"
					_links={[
						{
							_label: '1 Navigationspunkt mit sehr langem Link-Test',
							_href: '#abc',
							_icon: 'woodpecker',
							_iconOnly: true,
							_target: 'asdasd',
						},
						{
							_label: '2 Navigationspunkt und ich_bin_ein_echt_langes_zusammengesetztes_Worte_und_versuche_das_Layout_zu_brechen',
							_href: '#abc',
							_icon: 'woodpecker',
							_iconOnly: true,
						},
						{
							_active: true,
							_label: '3 Navigationspunkt',
							_href: '#abc',
							_icon: 'woodpecker',
							_iconOnly: true,
							_children: [
								{ _label: '3.1 Navigationspunkt', _href: '#abc', _icon: 'woodpecker' },
								{ _label: '3.2 Navigationspunkt', _href: '#abc', _icon: 'woodpecker', _target: 'asdasd' },
								{
									_active: true,
									_label: '3.3 Navigationspunkt',
									_href: '#abc',
									_children: [
										{ _active: true, _label: '3.3.1 Navigationspunkt (aktiv)', _href: '#abc' },
										{ _label: '3.3.2 Navigationspunkt', _href: '#abc' },
									],
								},
								{
									_label: '3.4 Navigationspunkt',
									_href: '#abc',
									_children: [
										{ _label: '3.4.1 Navigationspunkt', _href: '#abc' },
										{ _label: '3.4.2 Navigationspunkt', _href: '#abc' },
									],
								},
								{ _label: '3.5 Navigationspunkt', _href: '#abc' },
							],
						},
						{ _label: '4 Navigationspunkt', _href: '#abc', _iconOnly: true },
					]}
					_orientation="horizontal"
				></KolNav>
			</div>
		</div>
	),
	'KOL-PAGINATION': () => (
		<div class="grid justify-center gap-6">
			<KolPagination _count={15} _page={6} _sibling-count={0} _variant="primary"></KolPagination>
			<KolPagination _count={15} _page={6} _variant="secondary"></KolPagination>
			<KolPagination _count={15} _page={6} _sibling-count={0} _boundary-count={2} _variant="normal"></KolPagination>
			<KolPagination _count={15} _page={6} _boundary-count={2} _variant="danger"></KolPagination>
			<KolPagination _count={15} _page={6} _boundary-count={2} _tooltipAlign="bottom" _variant="ghost"></KolPagination>
		</div>
	),
	'KOL-PROGRESS': () => (
		<div class="grid justify-center gap-6">
			<KolProgress _max={100} _type="bar" _unit="Meter" _value={10}></KolProgress>
			<KolProgress _max={100} _type="cycle" _value={10}></KolProgress>
		</div>
	),
	'KOL-SELECT': () => (
		<div class="grid justify-center gap-6">
			<KolSelect
				_list={STATUS_OPTIONS}
				_error={ERROR_MSG}
				_touched
				_icon={{
					left: {
						icon: 'icofont-home',
					},
					right: {
						icon: 'icofont-home',
					},
				}}
			>
				Anrede
			</KolSelect>
			<KolSelect _list={STATUS_OPTIONS} _multiple _required _error={ERROR_MSG}>
				Anrede
			</KolSelect>
		</div>
	),
	'KOL-SPIN': () => (
		<div class="grid justify-center gap-6">
			<KolSpin _show></KolSpin>
		</div>
	),
	'KOL-TABLE': () => (
		<div class="grid justify-center gap-6">
			<KolTable
				_caption="Öffnungszeiten"
				_data={DATA}
				_headers={{
					horizontal: [
						[
							{ label: '', asTd: true },
							{ label: 'Tag', colSpan: 5 },
						],
						[
							{
								label: 'Stadtteil',
								key: 'stadtteil',
								textAlign: 'left',
								sort: (data: Zeiten[]) => {
									return data.sort((first, second) => {
										if (first.stadtteil < second.stadtteil) {
											return -1;
										}
										if (first.stadtteil > second.stadtteil) {
											return 1;
										}
										return 0;
									});
								},
							},
							{ label: 'Montag', key: 'montag', textAlign: 'center' },
							{ label: 'Dienstag', key: 'dienstag', textAlign: 'center' },
							{ label: 'Mittwoch', key: 'mittwoch', textAlign: 'center' },
							{ label: 'Donnerstag', key: 'donnerstag', textAlign: 'center' },
							{ label: 'Freitag', key: 'freitag', textAlign: 'center' },
						],
					],
				}}
				_minWidth="50em"
				_pagination
				style={{
					display: 'inline-grid',
					width: '100%',
				}}
			></KolTable>
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
		<div class="grid gap-6">
			<KolTabs
				_selected={1}
				_tabs={[
					{ _label: 'Nicht ausgewählt' },
					{
						_label: 'Ausgewählt',
						_on: {
							onCreate: () => {},
							onClose: true,
						},
					},
					{ _label: 'Nicht ausgewählt' },
				]}
			>
				<div slot="tab-0">Inhalte von Tab 1</div>
				<div slot="tab-1">Inhalte von Tab 2</div>
				<div slot="tab-2">Inhalte von Tab 3</div>
			</KolTabs>
		</div>
	),
	'KOL-TEXTAREA': () => (
		<div class="grid justify-center gap-6">
			<KolTextarea _id="text" _name="text" _required _error={ERROR_MSG} _placeholder="Mit Icons" _touched>
				Ihre Nachricht
			</KolTextarea>
			<KolTextarea _id="text" _resize="none" _rows={10} _name="text" _required _error={ERROR_MSG}>
				Ihre Nachricht
			</KolTextarea>
			<KolTextarea _id="text" _hasCounter _maxLength={200} _resize="none" _rows={10} _name="text" _required _error={ERROR_MSG}>
				Ihre Nachricht
			</KolTextarea>
			<KolTextarea _disabled _id="text" _name="text">
				Ihre Nachricht (Disabled)
			</KolTextarea>
			<KolTextarea _id="text" _name="text" _read-only>
				Ihre Nachricht (Readonly)
			</KolTextarea>
		</div>
	),
	'KOL-SKIP-NAV': () => (
		<div class="grid justify-center gap-6">
			<KolIndentedText>
				<p>
					<b>Links sind unsichtbar geschalten</b>
					<br />
					Um die Links zu sehen, am besten einmal in diesen Bereich klicken und Tab-Taste drücken.
				</p>
			</KolIndentedText>
			<KolSkipNav
				_ariaLabel="Skip-Nav"
				_links={[
					{ _label: 'Link nur Text', _href: 'https://www.w3.org' },
					{ _label: 'Link mit Icon', _href: 'https://www.w3.org', _icon: 'home' },
					{ _label: 'Link nur Icon', _href: 'https://www.w3.org', _icon: 'home', _iconOnly: 'true' },
					{ _label: 'Link ohne Unterstrich', _href: 'https://www.w3.org', _underline: 'false' },
				]}
			></KolSkipNav>
		</div>
	),
	'KOL-TOAST': () => (
		<div
			class="grid justify-center gap-6"
			ref={(elm) => {
				if (elm instanceof HTMLElement) {
					const toasts = elm.querySelectorAll('kol-toast');
					toasts.forEach((toast) => toast.setAttribute('_show', 'false'));
					if (toasts.length > 0) {
						toasts[0].setAttribute('_show', 'true');
					}
				}
			}}
		>
			<KolToast _type="error" _heading="Fehler" _level={3}>
				Hier wird der Fehler näher beschrieben.
			</KolToast>
			<KolToast _type="info" _heading="Hinweis" _level={4}>
				Hier wird der Hinweis näher beschrieben.
			</KolToast>
			<KolToast _type="success" _heading="Erfolg" _level={5}>
				Hier wird der Erfolg näher beschrieben.
			</KolToast>
			<KolToast _type="warning" _heading="Warnung" _level={6}>
				Hier wird die Warnung näher beschrieben.
			</KolToast>
			{/* <KolToast _type="error">Hier wird der Fehler kurz beschrieben.</KolToast>
      <KolToast _type="info">Hier wird der Hinweis kurz beschrieben.</KolToast>
      <KolToast _type="success">Hier wird der Erfolg kurz beschrieben.</KolToast>
      <KolToast _type="warning">Hier wird die Warnung kurz beschrieben.</KolToast> */}
		</div>
	),
	'KOL-TOOLTIP': () => (
		<div class="grid justify-center gap-6">
			<KolButton _icon="simple-down" _iconOnly _label="unten" _tooltip-align="bottom" _variant="primary"></KolButton>
			<KolButton _icon="simple-up" _iconOnly _label="oben" _tooltip-align="top" _variant="secondary"></KolButton>
			<KolButton _icon="simple-left" _iconOnly _label="links" _tooltip-align="left" _variant="normal"></KolButton>
			<KolButton _icon="simple-right" _iconOnly _label="rechts" _tooltip-align="right" _variant="danger"></KolButton>
			<KolLink class="text-center" _ariaLabel="unten" _icon="simple-down" _iconOnly _tooltip-align="bottom"></KolLink>
			<KolLink class="text-center" _ariaLabel="oben" _icon="simple-up" _iconOnly _tooltip-align="top"></KolLink>
			<KolLink class="text-center" _ariaLabel="links" _icon="simple-left" _iconOnly _tooltip-align="left"></KolLink>
			<KolLink class="text-center" _ariaLabel="rechts" _icon="simple-right" _iconOnly _tooltip-align="right"></KolLink>
		</div>
	),
	'KOL-VERSION': () => (
		<div class="grid gap-6 text-center">
			<KolVersion _version="1.0.0"></KolVersion>
		</div>
	),
};
