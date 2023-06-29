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
export type projectIcon = {
  dark: string,
  light: string,
  name: string
}

// project item
export type project = {
  name: string,
  gif: string,
  description: string,
  techs: Array<projectIcon>,
  views: Array<projectLinkIcon>
}

// project icon link
export type projectLinkIcon = {
  dark: string,
  light: string,
  name: string,
  link: string
}