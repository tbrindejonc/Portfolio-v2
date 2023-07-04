import {lang, project, theme} from '@/utils/AppTypes';
import {useContext} from 'react';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';

type Props = {
  project: project,
  index: number,
  active: number
}

export default function ProjectCarouselItem({project, index, active}: Props){
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
      return 'right-0';
    }

    // if previous, go on left
    if (isPrev()) {
      return 'right-[110%]';
    }

    // go on right
    return 'right-[-100%]';
  };

  return (
    <div className={`flex flex-col items-center justify-center w-full absolute duration-500 transform space-y-16 ${getCoordinates()}`}>
      <h1 className={'text-5xl font-bold w-1/2 flex flex-col items-center justify-center'}>{project.name}</h1>
      <div className={'w-full h-4/5 flex flex-row items-center justify-around'}>
        <img src={project.gif} alt={project.name} className={'w-1/3 h-auto'}/>
        <div className={'h-full w-1/3 flex flex-col items-center justify-between space-y-4'}>
          <div className={'w-full flex flex-row items-center justify-around'}>
            {
              project.techs.map((tech, index) => {
                return <img key={index} src={isCurrentLight ? tech.dark : tech.light} alt={tech.name} className={'w-12 h-auto'}/>;
              })
            }
          </div>
          <p className={'text-xl'}>{project.description[lang]}</p>
          <div className={'w-full flex flex-row items-center justify-around'}>
            {
              project.views.map((view, index) => {
                return <a key={index} href={view.link} className={'transform duration-500 hover:animate-spin hover:scale-150'}>
                  <img src={isCurrentLight ? view.dark : view.light} alt={view.name} className={'w-12 h-auto'}/></a>;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}