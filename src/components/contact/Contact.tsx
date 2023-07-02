import {useContext} from 'react';
import {LangContext, ThemeContext} from '@/App';
import {lang, theme} from '@/utils/AppTypes';
import {isLight} from '@/utils/AppFuncs';
import {contactContent} from '@/utils/TextContent';

export default function Contact() {
  // get current theme
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  // get the lang from provider
  const lang = useContext<lang>(LangContext);
  // get current traduction
  const currentTrad = contactContent[lang];

  return (
    <div id={'contact'} className={`h-screen w-full flex flex-col items-center justify-center space-y-8
      ${isCurrentLight ? 'bg-violet-light' : 'bg-purple-dark'}`}>
      {
        isCurrentLight ?
          <img src='src/assets/images/contact/contact-light.png' alt='contact'/>
          : <img src='src/assets/images/contact/contact-dark.png' alt='contact'/>
      }
      <h1 className={`font-bold text-5xl ${isCurrentLight ? 'text-purple-dark' : 'text-violet-light'}`}>{currentTrad.title}</h1>
      <div className={'w-5/6'}>
        <a href={'https://www.linkedin.com/in/timothee-brindejonc/'} className={`contact-link border-b-2 
          ${isCurrentLight ? 'border-green-dark' : 'border-green-light'}`}>
          {
            isCurrentLight ?
              <img src='src/assets/images/contact/linkedin-light.png' alt='linkedin' className={'w-20 h-auto'}/>
              : <img src='src/assets/images/contact/linkedin-dark.png' alt='linkedin' className={'w-20 h-auto'}/>
          }
          <h2 className={`text-4xl ${isCurrentLight ? 'text-green-dark' : 'text-green-light'}`}>LinkedIn</h2>
        </a>
        <a href={'https://github.com/Timeuh'} className={`contact-link border-b-2 ${isCurrentLight ? 'border-violet-dark' : 'border-violet-light'}`}>
          {
            isCurrentLight ?
              <img src='src/assets/images/contact/github-light.png' alt='github' className={'w-20 h-auto'}/>
              : <img src='src/assets/images/contact/github-dark.png' alt='github' className={'w-20 h-auto'}/>
          }
          <h2 className={`text-4xl ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'}`}>Github</h2>
        </a>
        <a href={'mailto:tbrindejonc@gmail.com'} className={'contact-link'}>
          {
            isCurrentLight ?
              <img src='src/assets/images/contact/mail-light.png' alt='email' className={'w-20 h-auto'}/>
              : <img src='src/assets/images/contact/mail-dark.png' alt='email' className={'w-20 h-auto'}/>
          }
          <h2 className={`text-4xl ${isCurrentLight ? 'text-purple-dark' : 'text-violet-light'}`}>Email</h2>
        </a>
      </div>
    </div>
  );
}