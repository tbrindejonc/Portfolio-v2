import {useState} from 'react';
import {experience} from '@/utils/AppTypes';

export default function WorkItem({company, logo, period, role}: experience) {
  // state of slider
  const [isActive, setActive] = useState<boolean>(false);

  // change state of slider
  const handleActivation = () => {
    setActive(!isActive);
  };

  return (
    <div className={'w-full flex flex-col items-center text-pink-light overflow-hidden relative'}>
      <div className={'experience-item-base-mobile'} onClick={handleActivation}>
        <div className={`flex flex-row items-center space-x-4 transform duration-200 ${isActive ? 'translate-x-[-150%]' : ''}`}>
          <div className={'flex flex-col items-center'}>
            <img src='src/assets/images/experience/company-light.png' alt='company'/>
            <h1 className={'font-bold text-2xl'}>{company}</h1>
          </div>
          <img src={logo} alt={`logo ${company}`} className={'w-24 h-auto'}/>
          <img src='src/assets/images/experience/arrow-light.png' alt='arrow' className={'h-10 w-auto'}/>
        </div>
      </div>
      <div className={`experience-item-alternate-mobile ${isActive ? 'translate-x-[-110%]' : ''}`} onClick={handleActivation}>
        <div className={'flex flex-col items-start space-y-4'}>
          <div className={'flex flex-row items-center space-x-2 -ms-1'}>
            <img src='src/assets/images/experience/clock-light.png' alt='clock' className={'w-12 h-auto'}/>
            <h2 className={'font-bold'}>{period}</h2>
          </div>
          <div className={'flex flex-row items-center space-x-3'}>
            <img src='src/assets/images/experience/job-light.png' alt='job' className={'w-10 h-auto'}/>
            <h2>{role}</h2>
          </div>
        </div>
        <img src='src/assets/images/experience/arrow-light.png' alt='arrow' className={'h-10 w-auto rotate-180'}/>
      </div>
    </div>
  );
}