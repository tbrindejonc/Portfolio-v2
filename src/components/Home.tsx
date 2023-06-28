export default function Home(){
  return (
    <div className={'h-screen w-full bg-home-light-mobile bg-no-repeat bg-cover flex flex-col justify-center items-center space-y-8'}>
      <h1 className={'text-6xl text-violet-dark font-bold text-center'}>Timothée Brindejonc</h1>
      <img src='src/assets/images/sections/developer.png' alt='developer' className={'w-40 h-40'}/>
      <h2 className={'text-5xl text-violet-dark w-2/3'}>Étudiant en
        <span className={'text-pink-light font-bold'}> BUT Informatique</span> et futur développeur
        <span className={'text-pink-light font-bold'}> Frontend</span>
      </h2>
    </div>
  );
}