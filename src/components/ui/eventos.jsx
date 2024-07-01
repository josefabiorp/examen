import '../../index.css'
import '../../main.css'


export function Eventos() {

    return (

        <div className="mb-3 rounded-2xl min-h-32  ring-2 ring-white ml-[30%] mr-[10%] relative">
            <div className=" absolute h-8 w-8  bg-sky-600 border-b-2 border-l-2 border-white bottom-[32%] -left-[1.1rem] rotate-45 "></div>
            <div className="absolute right-[127.5%] h-full flex  flex-col">
                <div className="relative flex justify-center " >
                    <div className=" absolute size-8 bg-amber-500  rounded-full top-[3.5rem] "></div>
                    <div className=" absolute  h-40 top-0   w-1  bg-amber-500  rounded-3xl"></div>
                    <p className="absolute top-[3rem] left-5 text-white text-[2rem]">5:00pm</p>
                </div>
            </div>

            <div className="relative flex space-x-7">
                <div className="ml-4 mt-2 cursor-pointer" id="checkIcon"
                    onclick="changeColor3()">
                    <svg width="30" height="30" viewBox="0 0 36 36" fill="none"
                        xmlns="http://www.w3.org/2000/svg" className="text-yellow-400"
                        id="checkSVG03">
                        <path d="M9.89062 18.0001L15.894 24.0035L26.1028 13.7947"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <h1 className="subtitulo   text-white ml-6  text-center mt-3">Discusion tema de investigacion</h1>
            </div>

            <div className="relative flex  space-x-6">
                <div className="ml-4 mt-3">
                    <label className="container flex">
                        {/* <input type="checkbox" checked="checked"> */}
                        <svg className="star-regular" width="30" height="30" viewBox="0 0 18 19"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 0.615234L17.5595 6.83408L14.2901 16.8964H3.70993L0.440492 6.83408L9 0.615234Z"
                                fill="#F5A747" />
                        </svg>
                        <svg className="star-solid" width="30" height="30" viewBox="0 0 18 19"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.61606 7.21605L9 1.8513L16.3839 7.21605L13.5635 15.8964H4.43648L1.61606 7.21605Z"
                                stroke="white" stroke-width="2" />
                        </svg>
                        <span className="px-1 texto text-white"></span>
                    </label>
                </div>
                <div className="flex items-center">
                    <h2 className="mt-4 text-left text-white">Discusion de eleccion de tema para la investigacion</h2>
                    <div className="flex relative ml-6">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white">
                            <img src='./src/assets/components/img/3577429.png' alt="image" className="w-full h-full" />
                        </div>
                        <button><svg className="top-0 right-0 transform translate-x-8 -translate-y-6" width="8" height="38" viewBox="0 0 8 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="white" />
                            <circle cx="4" cy="19" r="4" fill="white" />
                            <circle cx="4" cy="34" r="4" fill="white" />
                        </svg> </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
