import WorkItem from '@/components/experience/WorkItem';
import {workExperiences} from '@/utils/Experiences';

export default function Experience() {
  return (
    <div id={'experience'} className={'h-screen w-full flex flex-col items-center justify-center bg-pink-light space-y-4'}>
      <img src='src/assets/images/sections/work-light.png' alt='work' className={'w-32 h-32 rounded-full'}/>
      <h1 className={'text-6xl text-violet-dark font-bold text-center'}>Mon expérience</h1>
      {workExperiences.map((workExperience, index) => {
        return (
          <WorkItem key={index} logo={workExperience.logo} company={workExperience.company}
            period={workExperience.period} role={workExperience.role} />
        );
      })}
    </div>
  );
}