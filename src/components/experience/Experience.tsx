import WorkItem from '@/components/experience/WorkItem';
import {workExperiences} from '@/utils/Experiences';
import {useContext} from 'react';
import {ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';
import {theme} from '@/utils/AppTypes';

export default function Experience() {
  // get current theme
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  return (
    <div id={'experience'} className={`h-screen w-full flex flex-col items-center justify-center space-y-4 
      ${isCurrentLight ? 'bg-pink-light' : 'bg-violet-dark'}`}>
      {
        isCurrentLight ?
          <img src='src/assets/images/sections/work-light.png' alt='work' className={'w-32 h-32 rounded-full'}/>
          :  <img src='src/assets/images/sections/work-dark.png' alt='work' className={'w-32 h-32 rounded-full'}/>
      }
      <h1 className={`text-6xl font-bold text-center ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'}`}>Mon expérience</h1>
      {workExperiences.map((workExperience, index) => {
        return (
          <WorkItem key={index} logo={workExperience.logo} company={workExperience.company}
            period={workExperience.period} role={workExperience.role} />
        );
      })}
    </div>
  );
}