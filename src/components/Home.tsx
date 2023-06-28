import {useContext} from 'react';
import {theme} from '@/utils/AppTypes';
import {ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';

export default function Home(){
  // get the theme from provider
  const theme = useContext<theme>(ThemeContext);
  // check if the current theme is light
  const isCurrentLight = isLight(theme);

  return (
    <div id={'home'} className={`home-base-mobile ${isCurrentLight ? 'home-light-mobile' : 'home-dark-mobile'}`}>
      <h1 className={`text-6xl font-bold text-center ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'}`}>Timothée Brindejonc</h1>
      <img src='src/assets/images/sections/developer.png' alt='developer' className={'w-40 h-40'}/>
      <h2 className={`text-5xl w-2/3 ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'}`}>Étudiant en
        <span className={`font-bold ${isCurrentLight ? 'text-pink-light' : 'text-primary-dark'}`}> BUT Informatique</span> et futur développeur
        <span className={`font-bold ${isCurrentLight ? 'text-pink-light' : 'text-primary-dark'}`}> Frontend</span>
      </h2>
    </div>
  );
}