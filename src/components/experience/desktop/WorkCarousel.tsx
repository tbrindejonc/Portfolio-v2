import {experience, theme} from '@/utils/AppTypes';
import {ThemeContext} from '@/App';
import {useContext, useState} from 'react';
import {isLight} from '@/utils/AppFuncs';
import CarouselItem from '@/components/experience/desktop/CarouselItem';

type Props = {
  experiences: Array<experience>,
}

export default function WorkCarousel({experiences}: Props){
  // get current theme
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  // current experience of the carousel
  const [current, setCurrent] = useState<number>(0);

  // go to next slide
  const next = () => {
    setCurrent(current === experiences.length-1 ? 0 : current+1);
  };

  // go to previous slide
  const previous = () => {
    setCurrent(current === 0 ? experiences.length-1 : current-1);
  };

  return (
    <div className={`hidden w-full flex-col items-center h-3/5 ${isCurrentLight ? 'text-pink-light' : 'text-violet-dark'} xl:flex`}>
      <div className={`experience-carousel ${isCurrentLight ? 'experience-carousel-light' : 'experience-carousel-dark'}`}>
        {
          isCurrentLight ?
            <img src='src/assets/images/experience/arrow-light.png' alt='previous' className={'w-14 h-auto absolute top-[45%] rotate-180 pe-4'}
              onClick={previous}/>
            :  <img src='src/assets/images/experience/arrow-dark.png' alt='previous' className={'w-14 h-auto absolute top-[45%] rotate-180 pe-4'}
              onClick={previous}/>
        }
        {
          experiences.map((experience, index) => {
            return <CarouselItem key={index} index={index} active={current} experience={experience}/>;
          })
        }
        {
          isCurrentLight ?
            <img src='src/assets/images/experience/arrow-light.png' alt='previous' className={'w-14 h-auto absolute top-[45%] right-0 pe-4'}
              onClick={next}/>
            :  <img src='src/assets/images/experience/arrow-dark.png' alt='previous' className={'w-14 h-auto absolute top-[45%] right-0 pe-4'}
              onClick={next}/>
        }
      </div>
    </div>
  );
}