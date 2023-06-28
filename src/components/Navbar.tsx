import {useContext} from 'react';
import {theme} from '@/utils/AppTypes';
import {ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';

export default function Navbar() {
  // get theme context
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  return (
    <div id={'navbar'} className={'w-full h-20 z-10 fixed top-0 flex flex-row justify-between items-center px-2'}>
      <img src='src/assets/images/pictures/photo_9.png' alt='me' className={'h-16 w-16 rounded-full'}/>
      <div className={'flex flex-row items-center space-x-2'}>
        <div className={`${isCurrentLight ? 'navbar-item-background-light-mobile' : ''}`}>
          <img src='src/assets/images/navbar/lang-light.png' alt='lang-icon' className={'navbar-item-light-mobile'}/>
        </div>
        <div className={`${isCurrentLight ? 'navbar-item-background-light-mobile' : ''}`}>
          <img src='src/assets/images/navbar/moon.png' alt='lang-icon' className={'navbar-item-light-mobile'}/>
        </div>
        <div className={`${isCurrentLight ? 'navbar-item-background-light-mobile' : ''}`}>
          <img src='src/assets/images/navbar/selector-light.png' alt='lang-icon'/>
        </div>
      </div>
    </div>
  );
}