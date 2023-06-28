import {createContext, useState} from 'react';
import {theme} from '@/utils/AppTypes';

export default function App() {
  const [theme, setTheme] = useState<theme>('light');
  const ThemeContext = createContext<theme>(theme);

  return (
    <div id='App'>
      <ThemeContext.Provider value={theme}>
      </ThemeContext.Provider>
    </div>
  );
}
