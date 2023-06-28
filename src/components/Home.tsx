import {useContext} from 'react';
import {theme} from '@/utils/AppTypes';
import {ThemeContext} from '@/App';

export default function Home(){
  // get the theme from provider
  const theme = useContext<theme>(ThemeContext);

  // check if the theme is light
  const isLight = () => {
    return theme === 'light';
  };

  return (
    <div id={'home'} className={`home-base-mobile ${isLight() ? 'home-light-mobile' : 'home-dark-mobile'}`}>
      <h1 className={`text-6xl font-bold text-center ${isLight() ? 'text-violet-dark' : 'text-pink-light'}`}>Timothée Brindejonc</h1>
      <img src='src/assets/images/sections/developer.png' alt='developer' className={'w-40 h-40'}/>
      <h2 className={`text-5xl w-2/3 ${isLight() ? 'text-violet-dark' : 'text-pink-light'}`}>Étudiant en
        <span className={`font-bold ${isLight() ? 'text-pink-light' : 'text-primary-dark'}`}> BUT Informatique</span> et futur développeur
        <span className={`font-bold ${isLight() ? 'text-pink-light' : 'text-primary-dark'}`}> Frontend</span>
      </h2>
    </div>
  );
}