import {useContext, useState} from 'react';
import {experience, lang, theme} from '@/utils/AppTypes';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';

import companyLight from '@/assets/images/experience/company-light.png';
import companyDark from '@/assets/images/experience/company-dark.png';
import arrowLight from '@/assets/images/experience/arrow-light.png';
import arrowDark from '@/assets/images/experience/arrow-dark.png';
import clockLight from '@/assets/images/experience/clock-light.png';
import clockDark from '@/assets/images/experience/clock-dark.png';
import jobLight from '@/assets/images/experience/job-light.png';
import jobDark from '@/assets/images/experience/job-dark.png';

export default function WorkItem({company, logo, period, role}: experience) {
  // get current theme
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);
  // get the lang from provider
  const lang = useContext<lang>(LangContext);

  // state of slider
  const [isActive, setActive] = useState<boolean>(false);

  // change state of slider
  const handleActivation = () => {
    setActive(!isActive);
  };

  return (
    <div className={`w-full flex flex-col items-center overflow-hidden relative ${isCurrentLight ? 'text-pink-light' : 'text-violet-dark'} xl:hidden`}>
      <div className={`experience-item-base-mobile ${isCurrentLight ? 'from-violet-dark to-green-dark border-primary-light' : 
        'from-pink-light to-green-light border-primary-dark'}`} onClick={handleActivation}>
        <div className={`flex flex-row items-center space-x-4 transform duration-200 ${isActive ? 'translate-x-[-150%]' : ''}`}>
          <div className={'flex flex-col items-center'}>
            {
              isCurrentLight ?
                <img src={companyLight} alt='company'/>
                :  <img src={companyDark} alt='company'/>
            }
            <h1 className={'font-bold text-2xl'}>{company}</h1>
          </div>
          <img src={logo} alt={`logo ${company}`} className={'w-24 h-auto'}/>
          {
            isCurrentLight ?
              <img src={arrowLight} alt='arrow' className={'h-10 w-auto'}/>
              :  <img src={arrowDark} alt='arrow' className={'h-10 w-auto'}/>
          }
        </div>
      </div>
      <div className={`experience-item-alternate-mobile ${isActive ? 'translate-x-[-110%]' : ''}`} onClick={handleActivation}>
        <div className={'flex flex-col items-start space-y-4'}>
          <div className={'flex flex-row items-center space-x-2 -ms-1'}>
            {
              isCurrentLight ?
                <img src={clockLight} alt='clock' className={'w-12 h-auto'}/>
                :  <img src={clockDark} alt='clock' className={'w-12 h-auto'}/>
            }
            <h2 className={'font-bold'}>{period[lang]}</h2>
          </div>
          <div className={'flex flex-row items-center space-x-3'}>
            {
              isCurrentLight ?
                <img src={jobLight} alt='job' className={'w-10 h-auto'}/>
                :  <img src={jobDark} alt='job' className={'w-10 h-auto'}/>
            }
            <h2>{role[lang]}</h2>
          </div>
        </div>
        {
          isCurrentLight ?
            <img src={arrowLight} alt='arrow' className={'h-10 w-auto rotate-180'}/>
            :  <img src={arrowDark} alt='arrow' className={'h-10 w-auto rotate-180'}/>
        }
      </div>
    </div>
  );
}