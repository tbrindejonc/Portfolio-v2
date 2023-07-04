import {useContext, useState} from 'react';
import {lang, theme} from '@/utils/AppTypes';
import {LangContext, ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';
import {navbarContent} from '@/utils/TextContent';

import me from '@/assets/images/pictures/navbar-pic.jpg';
import langLight from '@/assets/images/navbar/lang-light.png';
import langDark from '@/assets/images/navbar/lang-dark.png';
import moon from '@/assets/images/navbar/moon.png';
import sun from '@/assets/images/navbar/sun.png';
import selectorLight from 'src/assets/images/navbar/selector-light.png';
import selectorDark from 'src/assets/images/navbar/selector-dark.png';

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
      <img src={me} alt='me' className={'h-16 w-16 rounded-full object-cover object-top'}/>
      <div className={'hidden xl:flex flex-row items-center justify-around w-4/5'}>
        {
          currentTrad.sections.map((section, index) => {
            return <a key={index} href={`#${section.link}`}
              className={`navbar-item-desktop ${isCurrentLight ? 'navbar-item-desktop-light' : 'navbar-item-desktop-dark'}`}>{section.name}</a>;
          })
        }
      </div>
      <div className={'flex flex-row items-center space-x-2'}>
        <div className={`navbar-item-background-mobile ${isCurrentLight ? 'bg-violet-dark' : 'bg-pink-light'}`} onClick={changeLang}>
          {
            isCurrentLight ?
              <img src={langLight} alt='lang-icon' className={'navbar-item-mobile'}/>
              :  <img src={langDark} alt='lang-icon' className={'navbar-item-mobile'}/>
          }
        </div>
        <div className={`navbar-item-background-mobile ${isCurrentLight ? 'bg-violet-dark' : 'bg-pink-light'}`} onClick={changeTheme}>
          {
            isCurrentLight ?
              <img src={moon} alt='lang-icon' className={'navbar-item-mobile'}/>
              :  <img src={sun} alt='lang-icon' className={'navbar-item-mobile'}/>
          }
        </div>
        <div className={`navbar-item-background-mobile xl:hidden ${isCurrentLight ? 'bg-violet-dark' : 'bg-pink-light'} relative`}
          onClick={handleActivation}>
          {
            isCurrentLight ?
              <img src={selectorLight} alt='lang-icon' />
              :  <img src={selectorDark} alt='lang-icon' />
          }
          <div className={`navbar-menu-base ${isCurrentLight ? 'navbar-menu-light' : 'navbar-menu-dark'} 
            ${isActive ? 'opacity-100 visible right-0' : 'opacity-0 invisible right-[-500%]'}`}>
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