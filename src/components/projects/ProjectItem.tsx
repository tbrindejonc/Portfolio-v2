import {project, theme} from '@/utils/AppTypes';
import {useContext} from 'react';
import {ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';

export default function ProjectItem({name, gif, description, views, techs}: project) {
  // get the theme from provider
  const theme = useContext<theme>(ThemeContext);
  // check if the current theme is light
  const isCurrentLight = isLight(theme);

  return (
    <div className={`project-item-base ${isCurrentLight ? 'project-item-light' : 'project-item-dark'}`}>
      <h2 className={'text-2xl font-bold'}>{name}</h2>
      <img src={gif} alt={name} className={'w-2/3 h-auto'}/>
      {
        isCurrentLight ?
          <img src='src/assets/images/projects/utils/arrow-light.png' alt='arrow'/>
          : <img src='src/assets/images/projects/utils/arrow-dark.png' alt='arrow'/>
      }
    </div>
  );
}