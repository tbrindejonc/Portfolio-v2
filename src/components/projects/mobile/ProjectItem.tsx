import {lang, project, theme} from '@/utils/AppTypes';
import {useContext, useState} from 'react';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';

import arrowLight from '@/assets/images/projects/utils/arrow-light.png';
import arrowDark from '@/assets/images/projects/utils/arrow-dark.png';

export default function ProjectItem({name, gif, description, views, techs}: project) {
  // get the theme from provider
  const theme = useContext<theme>(ThemeContext);
  // check if the current theme is light
  const isCurrentLight = isLight(theme);
  // get the lang from provider
  const lang = useContext<lang>(LangContext);

  // activation state of the project item
  const [isActive, setActive] = useState<boolean>(false);

  // activate and deactivate item
  const handleActivation = () => {
    setActive(!isActive);
  };

  return (
    <div className={'flex flex-col items-center relative xl:hidden'} onClick={handleActivation}>
      <div className={`project-item-base ${isCurrentLight ? 'project-item-light' : 'project-item-dark'} 
        ${isActive ? 'h-[70vh]' : 'h-[27vh]'} overflow-hidden`}>
        <h2 className={'text-2xl font-bold'}>{name}</h2>
        <img src={gif} alt={name} className={'w-auto h-[13vh]'}/>
        {
          isCurrentLight ?
            <img src={arrowLight} alt='arrow' className={`${isActive ? 'project-arrow-active' : 'project-arrow-inactive'}`}/>
            : <img src={arrowDark} alt='arrow' className={`${isActive ? 'project-arrow-active' : 'project-arrow-inactive'}`}/>
        }
        <div className={`w-full rounded-xl flex flex-row items-center justify-around ${isCurrentLight ? 'bg-green-light' : 'bg-violet-dark'}`}>
          {
            techs.map((tech, index) => {
              return <img key={index} src={isCurrentLight ? tech.light : tech.dark} alt={tech.name} className={'w-14 h-auto py-1'}/>;
            })
          }
        </div>
        <p>{description[lang]}</p>
        <div className={`w-full rounded-xl flex flex-row items-center justify-around ${isCurrentLight ? 'bg-pink-light' : 'bg-green-dark'}`}>
          {
            views.map((view, index) => {
              return <a href={view.link} key={index}>
                <img src={isCurrentLight ? view.light : view.dark} alt={view.name} className={'w-14 h-auto py-1'} />
              </a>;
            })
          }
        </div>
      </div>
    </div>
  );
}