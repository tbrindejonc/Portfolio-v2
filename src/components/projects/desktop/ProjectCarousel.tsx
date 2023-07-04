import {project, theme} from '@/utils/AppTypes';
import {ThemeContext} from '@/App';
import {useContext, useState} from 'react';
import {isLight} from '@/utils/AppFuncs';
import ProjectCarouselItem from '@/components/projects/desktop/ProjectCarouselItem';

import arrowLight from '@/assets/images/experience/arrow-light.png';
import arrowDark from '@/assets/images/experience/arrow-dark.png';

type Props = {
  projects: Array<project>,
}

export default function ProjectCarousel({projects}: Props){
  // get current theme
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  // current experience of the carousel
  const [current, setCurrent] = useState<number>(0);

  // go to next slide
  const next = () => {
    setCurrent(current === projects.length-1 ? 0 : current+1);
  };

  // go to previous slide
  const previous = () => {
    setCurrent(current === 0 ? projects.length-1 : current-1);
  };

  return (
    <div className={`hidden w-full flex-col items-center h-3/5 ${isCurrentLight ? 'text-pink-light' : 'text-violet-dark'} xl:flex`}>
      <div className={`project-carousel ${isCurrentLight ? 'project-carousel-light' : 'project-carousel-dark'}`}>
        <div className={`projects-carousel-arrow-background bg-opacity-0 
          ${isCurrentLight ? 'bg-pink-light' : 'bg-violet-dark'}`} onClick={previous}>
          {
            isCurrentLight ?
              <img src={arrowLight} alt='previous' className={'projects-carousel-arrow-left'}/>
              : <img src={arrowDark} alt='previous' className={'projects-carousel-arrow-left'}/>
          }
        </div>
        {
          projects.map((project, index) => {
            return <ProjectCarouselItem project={project} key={index} index={index} active={current} />;
          })
        }
        <div className={`projects-carousel-arrow-background right-4 bg-opacity-0 
          ${isCurrentLight ? 'bg-pink-light' : 'bg-violet-dark'}`} onClick={next}>
          {
            isCurrentLight ?
              <img src={arrowLight} alt='previous' className={'projects-carousel-arrow-right'}/>
              :  <img src={arrowDark} alt='previous' className={'projects-carousel-arrow-right'}/>
          }
        </div>
      </div>
    </div>
  );
}