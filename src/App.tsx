import {createContext, useState} from 'react';
import {lang, theme} from '@/utils/AppTypes';
import Home from '@/components/Home';
import Navbar from '@/components/Navbar';
import {isLight} from '@/utils/AppFuncs';
import About from '@/components/About';
import Experience from '@/components/experience/Experience';

// context for app theme
export const ThemeContext = createContext<theme>('light');
// context for app langage
export const LangContext = createContext<lang>('fr');

export default function App() {
  // create and init theme context
  const [theme, setTheme] = useState<theme>('light');
  // create and init lang context
  const [lang, setLang] = useState<lang>('fr');

  // function to change theme in components
  const changeTheme = () => {
    isLight(theme) ? setTheme('dark') : setTheme('light');
  };

  return (
    <div id='App' className={'font-Wix'}>
      <ThemeContext.Provider value={theme}>
        <LangContext.Provider value={lang}>
          <Navbar changeTheme={changeTheme}/>
          <Home />
          <About />
          <Experience />
        </LangContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
