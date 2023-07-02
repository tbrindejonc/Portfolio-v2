// theme for the app
export type theme = 'light' | 'dark';

// langage for the app
export type lang = 'fr' | 'en';

// work experience
export type experience = {
  company: string,
  logo: string,
  period: {
    fr: string,
    en: string
  },
  role: {
    fr: string,
    en: string
  }
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

// text for home section
export type homeText = {
  name: string,
  firstPart: string,
  firstSpan: string,
  secondPart: string,
  secondSpan: string
}

// different traductions for home section
export type homeTrad = {
  fr: homeText,
  en: homeText
}

// text for about section
export type aboutText = {
  title: string,
  firstPartOne: string,
  firstSpanOne: string,
  firstPartTwo: string,
  firstSpanTwo: string,
  secondPartOne: string,
  secondSpanOne: string,
  secondPartTwo: string,
  thirdPartOne: string,
  thirdSpanOne: string,
  thirdPartTwo: string,
  fourthPartOne: string,
  fourthSpanOne: string,
  fourthPartTwo: string,
  fourthSpanTwo: string,
  fourthPartThree: string,
  fourthSpanThree: string,
  fourthPartFour: string,
  fourthSpanFour: string
}

// different traductions for about section
export type aboutTrad = {
  fr: aboutText,
  en: aboutText
}

// text for experience section
export type experienceText = {
  title: string
}

// different traductions for experience section
export type experienceTrad = {
  fr: experienceText,
  en: experienceText
}