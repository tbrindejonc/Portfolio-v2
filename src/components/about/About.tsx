import {useContext} from 'react';
import {lang, theme} from '@/utils/AppTypes';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';
import {aboutContent} from '@/utils/TextContent';

export default function About() {
  // get current theme
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  // get the lang from provider
  const lang = useContext<lang>(LangContext);
  // get current traduction
  const currentTrad = aboutContent[lang];

  return (
    <div id={'about'} className={`about-base-mobile ${isCurrentLight ? 'bg-pink-light text-violet-dark' : 'bg-violet-dark text-pink-light'}`}>
      <img src='src/assets/images/pictures/about-pic.jpg' alt='me' className={'w-20 h-20 rounded-full mt-14 object-cover object-top'}/>
      <h1 className={'text-5xl pb-8 pt-2 font-bold'}>{currentTrad.title}</h1>
      <div className={'flex flex-col items-center space-y-4 w-2/3'}>
        <p>{currentTrad.firstPartOne}
          <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}>{currentTrad.firstSpanOne}</span>
          {currentTrad.firstPartTwo}
          <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}>{currentTrad.firstSpanTwo}</span>.
        </p>
        <p>{currentTrad.secondPartOne}
          <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}>{currentTrad.secondSpanOne}</span>.
          {currentTrad.secondPartTwo}
        </p>
        <p>{currentTrad.thirdPartOne}
          <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}>{currentTrad.thirdSpanOne}</span>.
          {currentTrad.thirdPartTwo}
        </p>
        <p>{currentTrad.fourthPartOne}<span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}>
          {currentTrad.fourthSpanOne}</span>{currentTrad.fourthPartTwo}
        <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}>{currentTrad.fourthSpanTwo}</span>
        {currentTrad.fourthPartThree}
        <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}>{currentTrad.fourthSpanThree}</span>
        {currentTrad.fourthPartFour}
        <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}>{currentTrad.fourthSpanFour}</span>.
        </p>
      </div>
    </div>
  );
}