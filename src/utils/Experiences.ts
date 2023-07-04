import {experience} from '@/utils/AppTypes';

import gibraltaz from '@/assets/images/experience/gibraltaz.png';
import defaultLogo from '@/assets/images/experience/soon.png';

// work experiences
export const workExperiences: Array<experience> = [
  {
    company: 'GIBRALTAZ',
    logo: gibraltaz,
    period: {
      fr: 'Février-Avril 2023',
      en: 'February-April 2023'
    },
    role: {
      fr: 'Développeur web (stage)',
      en: 'Web Developer (placement)'
    }
  },
  {
    company: '',
    logo: defaultLogo,
    period: {
      fr: 'Revenez plus tard',
      en: 'Come back later'
    },
    role: {
      fr: 'Développe mes projets',
      en: 'Developing my projects'
    }
  }
];