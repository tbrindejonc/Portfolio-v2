import {useContext} from 'react';
import {theme} from '@/utils/AppTypes';
import {ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';

// component props
type Props = {
  changeTheme: () => void
}

export default function Navbar({changeTheme}: Props) {
  // get theme context
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  return (
    <div id={'navbar'} className={'w-full h-20 z-10 fixed top-0 flex flex-row justify-between items-center px-2'}>
      <img src='src/assets/images/pictures/navbar-pic.jpg' alt='me' className={'h-16 w-16 rounded-full object-cover object-top'}/>
      <div className={'flex flex-row items-center space-x-2'}>
        <div className={`navbar-item-background-mobile ${isCurrentLight ? 'bg-violet-dark' : 'bg-pink-light'}`}>
          {
            isCurrentLight ?
              <img src='src/assets/images/navbar/lang-light.png' alt='lang-icon' className={'navbar-item-mobile'}/>
              :  <img src='src/assets/images/navbar/lang-dark.png' alt='lang-icon' className={'navbar-item-mobile'}/>
          }
        </div>
        <div className={`navbar-item-background-mobile ${isCurrentLight ? 'bg-violet-dark' : 'bg-pink-light'}`} onClick={changeTheme}>
          {
            isCurrentLight ?
              <img src='src/assets/images/navbar/moon.png' alt='lang-icon' className={'navbar-item-mobile'}/>
              :  <img src='src/assets/images/navbar/sun.png' alt='lang-icon' className={'navbar-item-mobile'}/>
          }
        </div>
        <div className={`navbar-item-background-mobile ${isCurrentLight ? 'bg-violet-dark' : 'bg-pink-light'}`}>
          {
            isCurrentLight ?
              <img src='src/assets/images/navbar/selector-light.png' alt='lang-icon' />
              :  <img src='src/assets/images/navbar/selector-dark.png' alt='lang-icon' />
          }
        </div>
      </div>
    </div>
  );
}