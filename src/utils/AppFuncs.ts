import {theme} from '@/utils/AppTypes';

// check if the theme is light
export const isLight = (theme: theme) => {
  return theme === 'light';
};