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
        {
          isCurrentLight ?
            <img src={arrowLight} alt='previous'
              className={'w-14 h-auto absolute top-[10%] left-0 pe-4 rotate-180 cursor-pointer z-10'} onClick={previous}/>
            :  <img src={arrowDark} alt='previous'
              className={'w-14 h-auto absolute top-[10%] left-0 pe-4 rotate-180 cursor-pointer z-10'} onClick={previous}/>
        }
        {
          projects.map((project, index) => {
            return <ProjectCarouselItem project={project} key={index} index={index} active={current} />;
          })
        }
        {
          isCurrentLight ?
            <img src={arrowLight} alt='previous'
              className={'w-14 h-auto absolute top-[10%] right-0 pe-4 cursor-pointer z-10'} onClick={next}/>
            :  <img src={arrowDark} alt='previous'
              className={'w-14 h-auto absolute top-[10%] right-0 pe-4 cursor-pointer z-10'} onClick={next}/>
        }
      </div>
    </div>
  );
}