import {experience, lang, theme} from '@/utils/AppTypes';
import {useContext} from 'react';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';

import companyLight from '@/assets/images/experience/company-light.png';
import companyDark from '@/assets/images/experience/company-dark.png';
import clockLight from '@/assets/images/experience/clock-light.png';
import clockDark from '@/assets/images/experience/clock-dark.png';
import jobLight from '@/assets/images/experience/job-light.png';
import jobDark from '@/assets/images/experience/job-dark.png';

type Props = {
  experience: experience,
  index: number,
  active: number
}

export default function CarouselItem({experience, index, active}: Props){
  // get current theme
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  // get the lang from provider
  const lang = useContext<lang>(LangContext);

  // check if current item is shown
  const isActive = () => {
    return index === active;
  };

  // check if current item is before the active one
  const isPrev = () => {
    return index < active;
  };

  // get coordinates class for current item
  const getCoordinates = () => {
    // if active, it's shown
    if (isActive()) {
      return 'right-[18%]';
    }

    // if previous, go on left
    if (isPrev()) {
      return 'right-[110%]';
    }

    // go on right
    return 'right-[-100%]';
  };

  return (
    <div className={`flex flex-col items-center w-2/3 space-y-16 absolute duration-500 transform ${getCoordinates()}`}>
      <div className={'flex flex-row items-center justify-center space-x-40'}>
        <div className={'flex flex-col items-center'}>
          {
            isCurrentLight ?
              <img src={companyLight} alt={'company'} className={'w-32 h-auto'}/>
              :  <img src={companyDark} alt={'company'} className={'w-32 h-auto'}/>
          }
          <h1 className={'text-4xl font-bold'}>{experience.company}</h1>
        </div>
        <img src={experience.logo} alt={`Logo ${experience.company}`} className={'w-40 h-auto'}/>
      </div>
      <div className={'flex flex-row items-center justify-center space-x-16 w-full'}>
        <div className={'flex flex-row items-center justify-center space-x-4 w-1/2'}>
          {
            isCurrentLight ?
              <img src={clockLight} alt={'duration'} className={'w-24 h-auto'}/>
              :  <img src={clockDark} alt={'duration'} className={'w-24 h-auto'}/>
          }
          <h1 className={'text-xl font-bold'}>{experience.period[lang]}</h1>
        </div>
        <div className={'flex flex-row items-center justify-center space-x-4 w-1/2'}>
          {
            isCurrentLight ?
              <img src={jobLight} alt={'duration'} className={'w-20 h-auto'}/>
              :  <img src={jobDark} alt={'duration'} className={'w-20 h-auto'}/>
          }
          <h1 className={'text-xl'}>{experience.role[lang]}</h1>
        </div>
      </div>
    </div>
  );
}