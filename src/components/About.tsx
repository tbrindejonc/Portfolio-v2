import {useContext} from 'react';
import {theme} from '@/utils/AppTypes';
import {ThemeContext} from '@/App';
import {isLight} from '@/utils/AppFuncs';

export default function About() {
  // get current theme
  const theme = useContext<theme>(ThemeContext);
  // check if current theme is light
  const isCurrentLight = isLight(theme);

  return (
    <div id={'about'} className={`about-base-mobile ${isCurrentLight ? 'bg-pink-light text-violet-dark' : 'bg-violet-dark text-pink-light'}`}>
      <img src='src/assets/images/pictures/photo_8.png' alt='me' className={'w-16 h-16 rounded-full'}/>
      <h1 className={'text-5xl pb-8 pt-2 font-bold'}>Qui suis-je ?</h1>
      <div className={'flex flex-col items-center space-y-4 w-2/3'}>
        <p>Je m’appelle Timothée Brindejonc et j’ai 21 ans. Je suis actuellement en 3ème année de
          <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}> BUT Informatique </span>
          (en alternance ?) en parcours
          <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}> Développement Web</span>.
        </p>
        <p>J’ai pour projet de faire un bac +5, en Master ou bien en École d’ingénieur, et ce en
          <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}> alternance</span>.
          Ensuite, je chercherai une entreprise qui travaille avec des technologies qui me plaisent / m’intéressent.
        </p>
        <p>En attendant, je fais des projets personnels sur des technologies qui me plaisent : principalement
          <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}> React</span>.
          J’essaie aussi de découvrir des technologies que je ne connais pas, pour élargir mes horizons de connaissance.
        </p>
        <p>Sinon j’aime aussi lire des <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}>romans </span>
          et des <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}> mangas</span>, regarder des
          <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}> animés japonais </span>
          avec mes amis et jouer aux <span className={`font-bold ${isCurrentLight ? 'text-primary-light' : 'text-primary-dark'}`}> jeux vidéos</span>.
        </p>
      </div>
    </div>
  );
}