import {useContext, useState} from 'react';
import {lang, theme} from '@/utils/AppTypes';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';
import {navbarContent} from '@/utils/TextContent';

// component props
type Props = {
  changeTheme: () => void,
  changeLang: () => void
}

export default function Navbar({changeTheme, changeLang}: Props) {
  // get theme context
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  // get the lang from provider
  const lang = useContext<lang>(LangContext);
  // get current traduction
  const currentTrad = navbarContent[lang];

  // check if element is last in the list
  const isLast = (index: number) => {
    return index < (currentTrad.sections.length -1);
  };

  // navbar menu activation state
  const [isActive, setActive] = useState<boolean>(false);
  // handle navbar menu activation
  const handleActivation = () => {
    setActive(!isActive);
  };

  return (
    <div id={'navbar'} className={'w-full h-20 z-10 fixed top-0 flex flex-row justify-between items-center px-2'}>
      <img src='src/assets/images/pictures/navbar-pic.jpg' alt='me' className={'h-16 w-16 rounded-full object-cover object-top'}/>
      <div className={'flex flex-row items-center space-x-2'}>
        <div className={`navbar-item-background-mobile ${isCurrentLight ? 'bg-violet-dark' : 'bg-pink-light'}`} onClick={changeLang}>
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
        <div className={`navbar-item-background-mobile ${isCurrentLight ? 'bg-violet-dark' : 'bg-pink-light'} relative`} onClick={handleActivation}>
          {
            isCurrentLight ?
              <img src='src/assets/images/navbar/selector-light.png' alt='lang-icon' />
              :  <img src='src/assets/images/navbar/selector-dark.png' alt='lang-icon' />
          }
          <div className={`navbar-menu-base ${isCurrentLight ? 'navbar-menu-light' : 'navbar-menu-dark'} ${isActive ? 'block' : 'hidden'}`}>
            {
              currentTrad.sections.map((section, index) => {
                return <a key={index} href={`#${section.link}`}
                  className={`navbar-menu-item-base ${isCurrentLight ? 'border-primary-dark' : 'border-primary-light'}
                  ${isLast(index) ? 'border-b-2' : ''}`}>{section.name}</a>;
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}