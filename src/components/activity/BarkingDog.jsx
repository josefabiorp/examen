import myImage from '../../assets/imgs/logo.png';
import '../../index.css'

export function BarkingDog() {
  return (
    <div className="bg-sky-300 w-full max-w-screen-sm mx-auto">
      <div className="flex flex-col p-3 justify-center items-center">
        <img className="h-28 mt-20" src={myImage} alt="" />
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-mono text-black">
          Bark
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center">
          Agenda Virtual
        </h2>
      </div>
    </div>
  );
}
