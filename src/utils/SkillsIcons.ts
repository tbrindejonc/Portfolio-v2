import {projectIcon} from '@/utils/AppTypes';

import frontendLight from '@/assets/images/skills/sections/front-end-light.png';
import frontendDark from '@/assets/images/skills/sections/front-end-dark.png';
import backendLight from '@/assets/images/skills/sections/back-end-light.png';
import backendDark from '@/assets/images/skills/sections/back-end-dark.png';
import toolsLight from '@/assets/images/skills/sections/tools-light.png';
import toolsDark from '@/assets/images/skills/sections/tools-dark.png';
import learnLight from '@/assets/images/skills/sections/learn-light.png';
import learnDark from '@/assets/images/skills/sections/learn-dark.png';

import htmlLight from '@/assets/images/skills/front-end/html-light.png';
import htmlDark from '@/assets/images/skills/front-end/html-dark.png';
import cssLight from '@/assets/images/skills/front-end/css-light.png';
import cssDark from '@/assets/images/skills/front-end/css-dark.png';
import javascriptLight from '@/assets/images/skills/front-end/js-light.png';
import javascriptDark from '@/assets/images/skills/front-end/js-dark.png';
import reactLight from '@/assets/images/skills/front-end/react-light.png';
import reactDark from '@/assets/images/skills/front-end/react-dark.png';
import tailwindLight from '@/assets/images/skills/front-end/tailwind-light.png';
import tailwindDark from '@/assets/images/skills/front-end/tailwind-dark.png';

import phpLight from '@/assets/images/skills/back-end/php-light.png';
import phpDark from '@/assets/images/skills/back-end/php-dark.png';
import mysqlLight from '@/assets/images/skills/back-end/mysql-light.png';
import mysqlDark from '@/assets/images/skills/back-end/mysql-dark.png';
import oracleLight from '@/assets/images/skills/back-end/oracle-light.png';
import oracleDark from '@/assets/images/skills/back-end/oracle-dark.png';
import laravelLight from '@/assets/images/skills/back-end/laravel-light.png';
import laravelDark from '@/assets/images/skills/back-end/laravel-dark.png';

import linuxLight from '@/assets/images/skills/tools/linux-light.png';
import linuxDark from '@/assets/images/skills/tools/linux-dark.png';
import bashLight from '@/assets/images/skills/tools/bash-light.png';
import bashDark from '@/assets/images/skills/tools/bash-dark.png';
import jetbrainsLight from '@/assets/images/skills/tools/jetbrains-light.png';
import jetbrainsDark from '@/assets/images/skills/tools/jetbrains-dark.png';
import figmaLight from '@/assets/images/skills/tools/figma-light.png';
import figmaDark from '@/assets/images/skills/tools/figma-dark.png';
import viteLight from '@/assets/images/skills/tools/vite-light.png';
import viteDark from '@/assets/images/skills/tools/vite-dark.png';
import firebaseLight from '@/assets/images/skills/tools/firebase-light.png';
import firebaseDark from '@/assets/images/skills/tools/firebase-dark.png';

import nextLight from '@/assets/images/skills/learning/next-light.png';
import nextDark from '@/assets/images/skills/learning/next-dark.png';
import mongoLight from '@/assets/images/skills/learning/mongo-light.png';
import mongoDark from '@/assets/images/skills/learning/mongo-dark.png';
import vueLight from '@/assets/images/skills/learning/vue-light.png';
import vueDark from '@/assets/images/skills/learning/vue-dark.png';
import nuxtLight from '@/assets/images/skills/learning/nuxt-light.png';
import nuxtDark from '@/assets/images/skills/learning/nuxt-dark.png';

// array of all skill sections icons
export const skillSectionsIcons: Array<projectIcon> = [
  {
    dark: frontendLight,
    light: frontendDark,
    name: 'frontend'
  },
  {
    dark: backendLight,
    light: backendDark,
    name: 'backend'
  },
  {
    dark: toolsLight,
    light: toolsDark,
    name: 'tools'
  },
  {
    dark: learnLight,
    light: learnDark,
    name: 'learn'
  }
];

export const skillIcons: Array<Array<projectIcon>> = [
  [
    {
      dark: htmlDark,
      light: htmlLight,
      name: 'HTML'
    },
    {
      dark: cssDark,
      light: cssLight,
      name: 'CSS'
    },
    {
      dark: javascriptDark,
      light: javascriptLight,
      name: 'Javascript'
    },
    {
      dark: reactDark,
      light: reactLight,
      name: 'React Js'
    },
    {
      dark: tailwindDark,
      light: tailwindLight,
      name: 'Tailwind CSS'
    }
  ],
  [
    {
      dark: phpDark,
      light: phpLight,
      name: 'PHP'
    },
    {
      dark: oracleDark,
      light: oracleLight,
      name: 'Oracle SQL'
    },
    {
      dark: mysqlDark,
      light: mysqlLight,
      name: 'MySQL'
    },
    {
      dark: laravelDark,
      light: laravelLight,
      name: 'Laravel'
    }
  ],
  [
    {
      dark: linuxDark,
      light: linuxLight,
      name: 'Linux'
    },
    {
      dark: bashDark,
      light: bashLight,
      name: 'Bash'
    },
    {
      dark: jetbrainsDark,
      light: jetbrainsLight,
      name: 'Jetbrains Tools'
    },
    {
      dark: figmaDark,
      light: figmaLight,
      name: 'Figma'
    },
    {
      dark: viteDark,
      light: viteLight,
      name: 'Vite Js'
    },
    {
      dark: firebaseDark,
      light: firebaseLight,
      name: 'Firebase'
    }
  ],
  [
    {
      dark: nextDark,
      light: nextLight,
      name: 'Next Js'
    },
    {
      dark: mongoDark,
      light: mongoLight,
      name: 'Mongo DB'
    },
    {
      dark: vueDark,
      light: vueLight,
      name: 'Vue Js'
    },
    {
      dark: nuxtDark,
      light: nuxtLight,
      name: 'Nuxt Js'
    }
  ]
];