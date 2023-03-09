export enum ELocales {
  uz = 'O\'zbek',
  en = 'English',
  ru = 'Русский'
}


export type LocaleTypes = keyof typeof ELocales;

export const localeKeys = Object.keys(ELocales);

export const DEFAULT_LOCALE = localeKeys[1];