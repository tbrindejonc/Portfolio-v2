import {skillIcons, skillSectionsIcons} from '@/utils/SkillsIcons';
import {useContext, useState} from 'react';
import {ThemeContext} from '@/App';
import {projectIcon, theme} from '@/utils/AppTypes';
import {isLight} from '@/utils/AppFuncs';

export default function Skills() {
  // get the theme from provider
  const theme = useContext<theme>(ThemeContext);
  // check if the current theme is light
  const isCurrentLight = isLight(theme);

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
    <div id={'skills'} className={`h-screen w-full flex flex-col items-center justify-center space-y-4 
      ${isCurrentLight ? 'bg-green-light' : 'bg-green-dark'}`}>
      {
        isCurrentLight ?
          <img src='src/assets/images/sections/skills-light.png' alt='skills' className={'w-[5rem] h-auto pt-12'}/>
          :  <img src='src/assets/images/sections/skills-dark.png' alt='skills' className={'w-[5rem] h-auto pt-12'}/>
      }
      <h1 className={`text-5xl font-bold text-center ${isCurrentLight ? 'text-green-dark' : 'text-green-light'}`}>Mes compétences</h1>
      <div className={'w-5/6 h-3/5 flex flex-col items-center justify-center'}>
        <div className={'w-full flex flex-row justify-between'}>
          {
            skillSectionsIcons.map((skillSectionsIcon, index) => {
              return (
                <div key={index} className={`skill-section-base ${getSectionClass(index)}`} onClick={() => {
                  setSelected(index);
                }}>
                  <img src={getCurrentIcon(skillSectionsIcon, index)} alt={skillSectionsIcon.name}/>
                </div>
              );
            })
          }
        </div>
        <div className={`w-full h-full border-2 rounded-b-xl grid grid-cols-2
          ${isCurrentLight ? 'border-primary-dark bg-violet-dark text-green-light' : 'border-violet-dark bg-green-light text-green-dark'}`}>
          {
            skillIcons[selected].map((item, index) => {
              return (
                <div key={index} className={'flex flex-col items-center justify-center'}>
                  <img src={isCurrentLight ? item.light : item.dark} alt={item.name} className={'w-24 h-auto'}/>
                  <h3 className={'text-xl'}>{item.name}</h3>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}