import {useContext} from 'react';
import {lang, theme} from '@/utils/AppTypes';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';
import {homeContent} from '@/utils/TextContent';

export default function Home(){
  // get the theme from provider
  const theme = useContext<theme>(ThemeContext);
  // check if the current theme is light
  const isCurrentLight = isLight(theme);

  // get the lang from provider
  const lang = useContext<lang>(LangContext);
  // get current traduction
  const currentTrad = homeContent[lang];

  return (
    <div id={'home'} className={`home-base-mobile 
      ${isCurrentLight ? 'home-light-mobile xl:home-light-desktop' : 'home-dark-mobile xl:home-dark-desktop'}`}>
      <h1 className={`text-6xl font-bold text-center xl:text-9xl ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'}`}>{currentTrad.name}</h1>
      <img src='src/assets/images/sections/developer.png' alt='developer' className={'w-40 h-auto xl:w-60'}/>
      <h2 className={`text-5xl w-2/3 ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'} xl:home-text-desktop`}>{currentTrad.firstPart}
        <span className={`font-bold ${isCurrentLight ? 'text-pink-light' : 'text-primary-dark'}`}>{currentTrad.firstSpan}</span>
        {currentTrad.secondPart}<span className={`font-bold ${isCurrentLight ? 'text-pink-light' : 'text-primary-dark'}`}>
          {currentTrad.secondSpan}</span>
      </h2>
    </div>
  );
}