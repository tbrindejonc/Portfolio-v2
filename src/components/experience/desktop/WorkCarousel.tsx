import {experience, theme} from '@/utils/AppTypes';
import {ThemeContext} from '@/App';
import {useContext, useState} from 'react';
import {isLight} from '@/utils/AppFuncs';
import CarouselItem from '@/components/experience/desktop/CarouselItem';

import arrowLight from '@/assets/images/experience/arrow-light.png';
import arrowDark from '@/assets/images/experience/arrow-dark.png';

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
        <div className={'experience-carousel-arrow-background'} onClick={previous}>
          {
            isCurrentLight ?
              <img src={arrowLight} alt='previous' className={'experience-carousel-arrow-left'} />
              :  <img src={arrowDark} alt='previous' className={'experience-carousel-arrow-left'} />
          }
        </div>
        {
          experiences.map((experience, index) => {
            return <CarouselItem key={index} index={index} active={current} experience={experience}/>;
          })
        }
        <div className={'experience-carousel-arrow-background'} onClick={next}>
          {
            isCurrentLight ?
              <img src={arrowLight} alt='previous' className={'experience-carousel-arrow-right'} />
              :  <img src={arrowDark} alt='previous' className={'experience-carousel-arrow-right'} />
          }
        </div>
      </div>
    </div>
  );
}