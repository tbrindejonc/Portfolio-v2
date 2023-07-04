import {useContext} from 'react';
import {LangContext, ThemeContext} from '@/App';
import {lang, theme} from '@/utils/AppTypes';
import {isLight} from '@/utils/AppFuncs';
import {contactContent} from '@/utils/TextContent';

import contactLight from '@/assets/images/contact/contact-light.png';
import contactDark from '@/assets/images/contact/contact-dark.png';
import linkedInLight from '@/assets/images/contact/linkedin-light.png';
import linkedInDark from '@/assets/images/contact/linkedin-dark.png';
import githubLight from '@/assets/images/contact/github-light.png';
import githubDark from '@/assets/images/contact/github-dark.png';
import mailLight from '@/assets/images/contact/mail-light.png';
import mailDark from '@/assets/images/contact/mail-dark.png';

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
          <img src={contactLight} alt='contact' className={'xl:w-40'}/>
          : <img src={contactDark} alt='contact' className={'xl:w-40'}/>
      }
      <h1 className={`font-bold text-5xl ${isCurrentLight ? 'text-purple-dark' : 'text-violet-light'} xl:text-7xl`}>{currentTrad.title}</h1>
      <div className={'w-5/6 xl:w-2/5'}>
        <a href={'https://www.linkedin.com/in/timothee-brindejonc/'} className={`contact-link border-b-2 
          ${isCurrentLight ? 'border-green-dark' : 'border-green-light'}`}>
          {
            isCurrentLight ?
              <img src={linkedInLight} alt='linkedin' className={'contact-icon'}/>
              : <img src={linkedInDark} alt='linkedin' className={'contact-icon'}/>
          }
          <h2 className={`text-4xl ${isCurrentLight ? 'text-green-dark' : 'text-green-light'}`}>LinkedIn</h2>
        </a>
        <a href={'https://github.com/Timeuh'} className={`contact-link border-b-2 ${isCurrentLight ? 'border-violet-dark' : 'border-violet-light'}`}>
          {
            isCurrentLight ?
              <img src={githubLight} alt='github' className={'contact-icon'}/>
              : <img src={githubDark} alt='github' className={'contact-icon'}/>
          }
          <h2 className={`text-4xl ${isCurrentLight ? 'text-violet-dark' : 'text-pink-light'}`}>Github</h2>
        </a>
        <a href={'mailto:tbrindejonc@gmail.com'} className={'contact-link'}>
          {
            isCurrentLight ?
              <img src={mailLight} alt='email' className={'contact-icon'}/>
              : <img src={mailDark} alt='email' className={'contact-icon'}/>
          }
          <h2 className={`text-4xl ${isCurrentLight ? 'text-purple-dark' : 'text-violet-light'}`}>Email</h2>
        </a>
      </div>
    </div>
  );
}