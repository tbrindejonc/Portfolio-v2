import {project} from '@/utils/AppTypes';

// object for all techs projectIcons
export const allTechs = {
  firebase: {
    dark: '../src/assets/images/projects/techs/firebase-dark.png',
    light: '../src/assets/images/projects/techs/firebase-light.png',
    name: 'Firebase'
  },
  java: {
    dark: '../src/assets/images/projects/techs/java-dark.png',
    light: '../src/assets/images/projects/techs/java-light.png',
    name: 'Java'
  },
  javascript: {
    dark: '../src/assets/images/projects/techs/javascript-dark.png',
    light: '../src/assets/images/projects/techs/javascript-light.png',
    name: 'Javascript'
  },
  node: {
    dark: '../src/assets/images/projects/techs/node-dark.png',
    light: '../src/assets/images/projects/techs/node-light.png',
    name: 'Node Js'
  },
  php: {
    dark: '../src/assets/images/projects/techs/php-dark.png',
    light: '../src/assets/images/projects/techs/php-light.png',
    name: 'Php'
  },
  react: {
    dark: '../src/assets/images/projects/techs/react-dark.png',
    light: '../src/assets/images/projects/techs/react-light.png',
    name: 'React Js'
  },
  tailwind: {
    dark: '../src/assets/images/projects/techs/tailwind-dark.png',
    light: '../src/assets/images/projects/techs/tailwind-light.png',
    name: 'Tailwind CSS'
  },
  typescript: {
    dark: '../src/assets/images/projects/techs/typescript-dark.png',
    light: '../src/assets/images/projects/techs/typescript-light.png',
    name: 'Typescript'
  }
};

// object for all views projectIcons
export const allViews = {
  github: {
    dark: '../src/assets/images/projects/links/github-dark.png',
    light: '../src/assets/images/projects/links/github-light.png',
    name: 'Github'
  },
  web: {
    dark: '../src/assets/images/projects/links/web-dark.png',
    light: '../src/assets/images/projects/links/web-light.png',
    name: 'Web'
  }
};

// array of projects objects
export const projects: Array<project> = [
  {
    name: 'Pinit',
    gif: '../src/assets/images/projects/utils/placeholder.gif',
    description: 'Pinit est un outil en ligne de commandes qui permet de rapidement créer et commencer un projet web Javascript. ' +
      'Il est également possible d’utiliser une template de projet pour commencer encore plus vite.',
    techs: [
      allTechs.javascript,
      allTechs.typescript,
      allTechs.node
    ],
    views: [
      {
        ...allViews.github,
        link: 'https://github.com/Timeuh/Pinit'
      }
    ]
  },
  {
    name: 'Portfolio V1',
    gif: '../src/assets/images/projects/utils/placeholder.gif',
    description: 'La première version de mon portfolio était mon premier pas dans l’univers de React Js et l’utilisation  de Tailwind CSS.  ' +
      'Il est hébergé avec Firebase, et toujours consultable pour  voir la progression entre la V1 et la  V2.',
    techs: [
      allTechs.javascript,
      allTechs.react,
      allTechs.tailwind,
      allTechs.firebase
    ],
    views: [
      {
        ...allViews.github,
        link: 'https://github.com/Timeuh/Portfolio'
      },
      {
        ...allViews.web,
        link: 'https://portfolio-v1.timeuh.live/'
      }
    ]
  },
  {
    name: 'Spotifree',
    gif: '../src/assets/images/projects/utils/placeholder.gif',
    description: 'Spotifree est un site web de streaming de musique, programmé en PHP. Le style est fait avec Tailwind CSS. ' +
      'Ce projet était mon premier site web, et je voulais essayer d\'utiliser Tailwind CSS.',
    techs: [
      allTechs.php,
      allTechs.tailwind
    ],
    views: [
      {
        ...allViews.github,
        link: 'https://github.com/Timeuh/Spotifree'
      }
    ]
  },
  {
    name: 'UHC Run',
    gif: '../src/assets/images/projects/utils/placeholder.gif',
    description: 'L\'UHC Run est mon premier projet de code, programmé en Java. Il s\'agit d\'un plugin minecraft permettant de jouer des parties' +
      ' en multijoueur avec plusieurs ajouts au jeu de base.',
    techs: [
      allTechs.java
    ],
    views: [
      {
        ...allViews.github,
        link: 'https://github.com/Timeuh/UHC-Run'
      }
    ]
  }
];