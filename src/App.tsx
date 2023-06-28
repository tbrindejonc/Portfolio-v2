import {createContext, useState} from 'react';
import {lang, theme} from '@/utils/AppTypes';
import Home from '@/components/Home';

// context for app theme
export const ThemeContext = createContext<theme>('light');
// context for app langage
export const LangContext = createContext<lang>('fr');

export default function App() {
  // create and init theme context
  const [theme, setTheme] = useState<theme>('light');
  // create and init lang context
  const [lang, setLang] = useState<lang>('fr');

  return (
    <div id='App'>
      <ThemeContext.Provider value={theme}>
        <LangContext.Provider value={lang}>
          <Home />
        </LangContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
