import {projects} from '@/utils/Projects';
import ProjectItem from '@/components/projects/mobile/ProjectItem';
import {useContext} from 'react';
import {LangContext, ThemeContext} from '@/App';
import {lang, theme} from '@/utils/AppTypes';
import {isLight} from '@/utils/AppFuncs';
import {projectsContent} from '@/utils/TextContent';
import ProjectCarousel from '@/components/projects/desktop/ProjectCarousel';

export default function Projects() {
  // get the theme from provider
  const theme = useContext<theme>(ThemeContext);
  // check if the current theme is light
  const isCurrentLight = isLight(theme);

  // get the lang from provider
  const lang = useContext<lang>(LangContext);
  // get current traduction
  const currentTrad = projectsContent[lang];

  return (
    <div id={'projects'} className={`h-full w-full flex flex-col items-center justify-center space-y-12 py-12 xl:h-screen
      ${isCurrentLight ? 'bg-green-light' : 'bg-green-dark'}`}>
      {
        isCurrentLight ?
          <img src='src/assets/images/projects/utils/projects-light.png' alt='project icon' className={'xl:w-32'}/>
          : <img src='src/assets/images/projects/utils/projects-dark.png' alt='project icon' className={'xl:w-32'}/>
      }
      <h1 className={`text-5xl font-bold ${isCurrentLight ? 'text-green-dark' : 'text-green-light'} xl:text-6xl`}>{currentTrad.title}</h1>
      {
        projects.map((project, index)  => {
          return <ProjectItem key={index} name={project.name} gif={project.gif} description={project.description}
            techs={project.techs} views={project.views}/>;
        })
      }
      <ProjectCarousel projects={projects}/>
    </div>
  );
}