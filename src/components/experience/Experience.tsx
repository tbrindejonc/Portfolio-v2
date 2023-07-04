import WorkItem from '@/components/experience/mobile/WorkItem';
import {workExperiences} from '@/utils/Experiences';
import {useContext} from 'react';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';
import {lang, theme} from '@/utils/AppTypes';
import {experienceContent} from '@/utils/TextContent';
import WorkCarousel from '@/components/experience/desktop/WorkCarousel';

export default function Experience() {
  // get current theme
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  // get the lang from provider
  const lang = useContext<lang>(LangContext);
  // get current traduction
  const currentTrad = experienceContent[lang];

  return (
    <div id={'experience'} className={`h-screen w-full flex flex-col items-center justify-center space-y-4 
      ${isCurrentLight ? 'bg-pink-light' : 'bg-violet-dark'}`}>
      {
        isCurrentLight ?
          <img src='src/assets/images/sections/work-light.png' alt='work' className={'w-32 h-auto rounded-full xl:w-40'}/>
          :  <img src='src/assets/images/sections/work-dark.png' alt='work' className={'w-32 h-auto rounded-full xl:w-40'}/>
      }
      <h1 className={`text-5xl font-bold text-center w-5/6 ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'} pb-6
        xl:text-6xl`}>{currentTrad.title}</h1>
      {workExperiences.map((workExperience, index) => {
        return (
          <WorkItem key={index} logo={workExperience.logo} company={workExperience.company}
            period={workExperience.period} role={workExperience.role} />
        );
      })}
      <WorkCarousel experiences={workExperiences} />
    </div>
  );
}