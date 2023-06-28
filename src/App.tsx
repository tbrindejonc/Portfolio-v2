import {createContext, useState} from 'react';
import {lang, theme} from '@/utils/AppTypes';

export default function App() {
  // create and init theme context
  const [theme, setTheme] = useState<theme>('light');
  const ThemeContext = createContext<theme>(theme);

  // create and init lang context
  const [lang, setLang] = useState<lang>('fr');
  const LangContext = createContext<lang>(lang);

  return (
    <div id='App'>
      <ThemeContext.Provider value={theme}>
        <LangContext.Provider value={lang}>

        </LangContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
