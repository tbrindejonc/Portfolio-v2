// theme for the app
export type theme = 'light' | 'dark';

// langage for the app
export type lang = 'fr' | 'en';

// work experience
export type experience = {
  company: string,
  logo: string,
  period: string,
  role: string
}

// skill section icon
export type skillIcon = {
  dark: string,
  light: string,
  name: string
}