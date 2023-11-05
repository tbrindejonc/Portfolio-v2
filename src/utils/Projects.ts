import {project} from '@/utils/AppTypes';

import firebaseLight from '@/assets/images/projects/techs/firebase-light.png';
import firebaseDark from '@/assets/images/projects/techs/firebase-dark.png';
import javaLight from '@/assets/images/projects/techs/java-light.png';
import javaDark from '@/assets/images/projects/techs/java-dark.png';
import javascriptLight from '@/assets/images/projects/techs/javascript-light.png';
import javascriptDark from '@/assets/images/projects/techs/javascript-dark.png';
import nodeLight from '@/assets/images/projects/techs/node-light.png';
import nodeDark from '@/assets/images/projects/techs/node-dark.png';
import phpLight from '@/assets/images/projects/techs/php-light.png';
import phpDark from '@/assets/images/projects/techs/php-dark.png';
import reactLight from '@/assets/images/projects/techs/react-light.png';
import reactDark from '@/assets/images/projects/techs/react-dark.png';
import tailwindLight from '@/assets/images/projects/techs/tailwind-light.png';
import tailwindDark from '@/assets/images/projects/techs/tailwind-dark.png';
import typescriptLight from '@/assets/images/projects/techs/typescript-light.png';
import typescriptDark from '@/assets/images/projects/techs/typescript-dark.png';
import githubLight from '@/assets/images/projects/links/github-light.png';
import githubDark from '@/assets/images/projects/links/github-dark.png';
import webLight from '@/assets/images/projects/links/web-light.png';
import webDark from '@/assets/images/projects/links/web-dark.png';

import pinitGif from '@/assets/images/projects/utils/pinit.gif';
import portfolioV1Gif from '@/assets/images/projects/utils/portfolio-v1.gif';
import wankuldexGif from '@/assets/images/projects/utils/wankuldex.gif';
import memoAppGif from '@/assets/images/projects/utils/memo-app.gif';

// object for all techs projectIcons
export const allTechs = {
  firebase: {
    dark: firebaseDark,
    light: firebaseLight,
    name: 'Firebase'
  },
  java: {
    dark: javaDark,
    light: javaLight,
    name: 'Java'
  },
  javascript: {
    dark: javascriptDark,
    light: javascriptLight,
    name: 'Javascript'
  },
  node: {
    dark: nodeDark,
    light: nodeLight,
    name: 'Node Js'
  },
  php: {
    dark: phpDark,
    light: phpLight,
    name: 'Php'
  },
  react: {
    dark: reactDark,
    light: reactLight,
    name: 'React Js'
  },
  tailwind: {
    dark: tailwindDark,
    light: tailwindLight,
    name: 'Tailwind CSS'
  },
  typescript: {
    dark: typescriptDark,
    light: typescriptLight,
    name: 'Typescript'
  }
};

// object for all views projectIcons
export const allViews = {
  github: {
    dark: githubDark,
    light: githubLight,
    name: 'Github'
  },
  web: {
    dark: webDark,
    light: webLight,
    name: 'Web'
  }
};

// array of projects objects
export const projects: Array<project> = [
  {
    name: 'WankulDex',
    gif: wankuldexGif,
    description: {
      fr: 'Le WankulDex est un site permettant de consulter et manipuler les cartes Wankul, créées par le duo de streamers/youtubers Wankil Studio.',
      en: 'The WankulDex is a site enabling you to see and manipulate Wankul cards, which were created by the duo of streamers/youtubers Wankil Studio.'
    },
    techs: [
      allTechs.react,
      allTechs.tailwind,
      allTechs.typescript
    ],
    views: [
      {
        ...allViews.github,
        link: 'https://github.com/Timeuh/Wankuldex'
      },
      {
        ...allViews.web,
        link: 'https://wankuldex.timeuh.fr'
      }
    ]
  },
  {
    name: 'Memo App',
    gif: memoAppGif,
    description: {
      fr: 'Cette petite app permet de créer, modifier et supprimer des petits memos. On peut également changer le thème et la langue de l\'app.',
      en: 'This little app enables you to create, modify and delete little memos. You are also able to change the theme or the langage of the page.'
    },
    techs: [
      allTechs.react,
      allTechs.typescript,
      allTechs.tailwind,
      allTechs.firebase
    ],
    views: [
      {
        ...allViews.github,
        link: 'https://github.com/Timeuh/memo-app'
      },
      {
        ...allViews.web,
        link: 'https://memo-app.timeuh.live/'
      }
    ]
  },
  {
    name: 'Pinit',
    gif: pinitGif,
    description: {
      fr: 'Pinit est un outil en ligne de commandes qui permet de rapidement créer et commencer un projet web Javascript. ' +
        'Il est également possible d’utiliser une template de projet pour commencer encore plus vite.',
      en: 'Pinit is a command line interface to rapidly bootstrap a Javascript web project. It is possible to use a project template to start faster.'
    },
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
    gif: portfolioV1Gif,
    description: {
      fr: 'La première version de mon portfolio était mon premier pas dans l’univers de React Js et l’utilisation de Tailwind CSS. ' +
        'Il est hébergé avec Firebase, et toujours consultable pour voir la progression entre la V1 et la  V2.',
      en: 'The first version of my portfolio was my first steps in the universe of React Js and the use of Tailwind CSS. It is hosted with Firebase ' +
        'and is still available to view to compare between the two versions of my portfolio.'
    },
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
  }
];