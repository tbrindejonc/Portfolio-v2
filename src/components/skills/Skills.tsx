import {skillIcons, skillSectionsIcons} from '@/utils/SkillsIcons';
import {useContext, useState} from 'react';
import {LangContext, ThemeContext} from '@/App';
import {lang, projectIcon, theme} from '@/utils/AppTypes';
import {isLight} from '@/utils/AppFuncs';
import {skillsContent} from '@/utils/TextContent';

export default function Skills() {
  // get the theme from provider
  const theme = useContext<theme>(ThemeContext);
  // check if the current theme is light
  const isCurrentLight = isLight(theme);

  // get the lang from provider
  const lang = useContext<lang>(LangContext);
  // get current traduction
  const currentTrad = skillsContent[lang];

  // selected section
  const [selected, setSelected] = useState<number>(0);

  // get section class
  const getSectionClass = (currentIndex: number) => {
    // if light theme
    if (isCurrentLight){
      // if selected
      if (currentIndex === selected){
        return 'skill-section-light-selected';
      }
      // else
      return 'skill-section-light-unselected';
    }

    // if here, then is dark theme
    if (currentIndex === selected){
      // if selected
      return 'skill-section-dark-selected';
    }
    // else
    return 'skill-section-dark-unselected';
  };

  // get section icon
  const getCurrentIcon = (currentIcon: projectIcon, currentIndex: number) => {
    // if light theme
    if (isCurrentLight){
      // if selected
      if (currentIndex === selected){
        return currentIcon.dark;
      }
      // else
      return currentIcon.light;
    }

    // else is dark theme
    if (currentIndex === selected){
      // if selected
      return currentIcon.light;
    }
    // else
    return currentIcon.dark;
  };

  return (
    <div id={'skills'} className={`h-screen w-full flex flex-col items-center justify-center space-y-4 xl:space-y-8
      ${isCurrentLight ? 'bg-green-light' : 'bg-green-dark'}`}>
      {
        isCurrentLight ?
          <img src='src/assets/images/sections/skills-light.png' alt='skills' className={'w-[5rem] h-auto pt-12 xl:w-32'}/>
          :  <img src='src/assets/images/sections/skills-dark.png' alt='skills' className={'w-[5rem] h-auto pt-12 xl:w-32'}/>
      }
      <h1 className={`text-5xl font-bold text-center ${isCurrentLight ? 'text-green-dark' : 'text-green-light'} xl:text-6xl`}>
        {currentTrad.title}</h1>
      <div className={'w-5/6 h-3/5 flex flex-col items-center justify-center xl:flex-row xl:justify-center'}>
        <div className={'w-full flex flex-row justify-between xl:flex-col xl:w-fit xl:h-full xl:items-end'}>
          {
            skillSectionsIcons.map((skillSectionsIcon, index) => {
              return (
                <div key={index} className={`skill-section-base ${getSectionClass(index)} xl:w-32 xl:h-32 xl:rounded-xl me-2`} onClick={() => {
                  setSelected(index);
                }}>
                  <img src={getCurrentIcon(skillSectionsIcon, index)} alt={skillSectionsIcon.name}/>
                </div>
              );
            })
          }
        </div>
        <div className={`w-full h-full border-2 rounded-b-xl grid grid-cols-2 xl:w-3/5 xl:rounded-xl
          ${isCurrentLight ? 'border-primary-dark bg-violet-dark text-green-light' : 'border-violet-dark bg-green-light text-green-dark'}`}>
          {
            skillIcons[selected].map((item, index) => {
              return (
                <div key={index} className={'flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:ps-24'}>
                  <img src={isCurrentLight ? item.light : item.dark} alt={item.name} className={'w-24 h-auto xl:w-32'}/>
                  <h3 className={'text-xl xl:text-4xl xl:ps-8'}>{item.name}</h3>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}