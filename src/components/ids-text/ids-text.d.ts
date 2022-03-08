export default class IdsText extends HTMLElement {
  /** Set the type of element it is (h1-h6, span (default)) */
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | string | null;

  /** Set `audible` string (screen reader only text) */
  audible: string | null;

  /** Set the text to disabled */
  disabled: boolean;

  /** Set the size of font to use */
  labelFontSize: 10 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 40 | 48 | 60 | 72 | string | number;

  /** Set the font weight */
  fontWeight: 'bold' | 'lighter' | null;

  /** Set the overflow style */
  overflow: 'ellipsis' | null;

  /* Sets up a string based tooltip , if true the text will show when the text is ellipsis */
  tooltip?: string | boolean;

  /* Sets the text to the matching translations (if found) */
  translateText: boolean;

  /** Set the theme mode */
  mode: 'light' | 'dark' | 'contrast' | string;

  /** Set the theme version */
  version: 'new' | 'classic' | string;

  /** If set to "unset", allows parent to color text */
  color: 'unset' | null;

  /** Set the language */
  language: string;

  /** Set the locale */
  locale: 'unset' | null;
}
