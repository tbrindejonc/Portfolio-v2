import React, {useContext, useRef} from 'react';
import {lang, theme} from '@/utils/AppTypes';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';
import {homeContent} from '@/utils/TextContent';

import developer from '@/assets/images/sections/developer.png';

export default function Home(){
  // get the theme from provider
  const theme = useContext<theme>(ThemeContext);
  // check if the current theme is light
  const isCurrentLight = isLight(theme);

  // get the lang from provider
  const lang = useContext<lang>(LangContext);
  // get current traduction
  const currentTrad = homeContent[lang];

  // title hover effect
  const titleEffect = (reference:  React.RefObject<HTMLHeadingElement>) => {
    // count iterations
    let iterations = 0;

    // repeat effect 30 times per second
    const interval = setInterval(() => {
      // split name and then
      reference.current!.innerText = currentTrad.name.split('').map((letter, index) => {
        // if current iteration is superior to index letter
        if (index < iterations){
          // keep original letter
          return currentTrad.name[index];
        }

        // else return random letter
        return getRandomLetter();
        // and rejoin letters
      }).join('');

      // if it did enough iterations, stop the process
      if (iterations > currentTrad.name.length){
        clearInterval(interval);
      }

      // increment iterations
      iterations ++;
    }, 30);
  };

  // full alphabet
  const alphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // get a random alphabet letter
  const getRandomLetter = () => {
    return alphabet[Math.floor(Math.random() * 26)];
  };

  // name heading reference
  const nameRef = useRef<HTMLHeadingElement>(null);

  return (
    <div id={'home'} className={`home-base-mobile 
      ${isCurrentLight ? 'home-light-mobile xl:home-light-desktop' : 'home-dark-mobile xl:home-dark-desktop'}`}>
      <h1 ref={nameRef} className={`text-6xl font-bold text-center xl:text-9xl ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'}`}
        onMouseEnter={() => {
          titleEffect(nameRef);
        }}>{currentTrad.name}</h1>
      <img src={developer} alt='developer' className={'w-40 h-auto xl:w-60'}/>
      <h2 className={`text-5xl w-2/3 ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'} xl:home-text-desktop`}>{currentTrad.firstPart}
        <span className={`font-bold ${isCurrentLight ? 'text-pink-light' : 'text-primary-dark'}`}>{currentTrad.firstSpan}</span>
        {currentTrad.secondPart}<span className={`font-bold ${isCurrentLight ? 'text-pink-light' : 'text-primary-dark'}`}>
          {currentTrad.secondSpan}</span>
      </h2>
    </div>
  );
}