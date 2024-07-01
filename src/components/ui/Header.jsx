import myImage from '../../assets/imgs/logo.png';
import myImageN from '../../assets/imgs/alert.png';
import "../../index.css";


export function Header() {

 

  return(<div className="py-5 sm:block hidden bg-gradient-to-r from-sky-300 to-white">
  <div className=" flex gap-x-5 sm:bg-gradient-to-r from-sky-300 to-white bg-sky-600 sm:py-0 py-4">
    <div className="sm:flex block gap-x-5 ">
      <div className="flex flex-col">
        <div className=" bg-transparent rounded-3xl w-full h-[3.5rem] items-center flex justify-between grow sm:px-5">
        <h1 className="flex pt-5 font-logo text-center sm:text-left text-3xl font-bold text-gr">
          <img className=" w-24  px-2" src={myImage} alt="logo" />
          Bark
        </h1>
       
          <a href="#">
          <img className="inline w-14 m-5 pt-5" src={myImageN} alt="logo" />
          </a>
        </div>
        <div className="flex gap-x-6 h-[100%] px-5 mt-4">
          <div className="hidden sm:block hover flex-col h-[100%] shadow-lg p-4 bg-white rounded-3xl justify-center ">
            <h2 className="text-orange-500 text-3xl flex justify-center font-bold">
              Proximo evento
            </h2>
            <div className="text-ellipsis overflow-hidden h-[5rem]">
              <h3 className=" mt-3 texto text-sky-300 ">
                Lorem ipsum dolor sit amet consectetur. Feugiat                                    hendrerit aliquet diam vulputate nibh. Adipisci dapibus. Elit commodo facilisisLorem                                    ipsum                                    dolor                                    sit amet consectetur. Feugiat hendrerit aliquet diam vulputate nibh. Adipisci                                    dapibus.                                    Elit                                    commodo facilisis
              </h3>
            </div>
            <div className=" mt-3 flex justify-between">
              <h2 className="text-orange-500 text-3xl flex justify-center font-bold">
                25 abr
              </h2>
              <h2 className="text-orange-500 text-3xl flex justify-center font-bold">
                5:00pm
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col flex-row">
        <form
          action=""
          className="ring-2 ring-white flex sm:h-[3.5rem] h-[2rem] bg-white rounded-full"
        >
          <input
            className="focus:outline-none pl-8 w-full text-white texto bg-transparent"
            placeholder="Buscar"
            type="text"
          />
          <input
            className="px-8 lupa w-10"
            type="submit"
            value=""
          />
        </form>
        <div className="hidden sm:flex  gap-x-6 h-[100%] mt-4">
          <div className=" flex flex-col h-[100%]  p-4 bg-sky-300 shadow-lg  rounded-3xl ">
            <div className="py-2 flex justify-between w-[20vw]">
              <h1 className="texto text-white">
                Cursos matriculados
              </h1>
              <svg class="w-6 h-6 mr-2 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M3 4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H3zm0 2h14v10H3V6zm4 4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2H7zm0 3a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2H7zm0 3a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2H7z"/>
</svg>

            </div>
            <hr className="text-red-500 w-full" />
            <ul className=" mt-2 flex flex-col">
              
              <li className="flex m-2 texto text-white ">
              <svg class="w-6 h-6 mr-2 fill-white text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7"></path>
    </svg>
                
                Desarrollo de aplicaciones interactivas II
              </li>
              <li className="m-2 flex texto text-white ">
              <svg class="w-6 h-6 mr-2 fill-white text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7"></path>
    </svg>
                Desarrollo de aplicaciones interactivas II
              </li>
              <li className="m-2 flex texto text-white ">
              <svg class="w-6 h-6 mr-2 fill-white text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7"></path>
    </svg>
                Desarrollo de aplicaciones interactivas II
              </li>
            </ul>
          </div>
          <div className=" flex flex-col h-[100%]  p-4 bg-sky-300 shadow-lg rounded-3xl">
            <div className="py-2 flex justify-between w-[20vw]">
              <h1 className="texto text-white">
                Aplicar filtros de busqueda
              </h1>
              <svg class="w-6 h-6 mr-2 fill-current text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M13 3a2 2 0 0 1 2 2v1.5a1 1 0 0 0 .293.707l1.5 1.5a1 1 0 0 1 0 1.414l-1.5 1.5a1 1 0 0 0-.293.707V15a2 2 0 0 1-2 2h-1.5a1 1 0 0 0-.707.293l-1.5 1.5a1 1 0 0 1-1.414 0l-1.5-1.5a1 1 0 0 0-.707-.293H5a2 2 0 0 1-2-2v-1.5a1 1 0 0 0-.293-.707l-1.5-1.5a1 1 0 0 1 0-1.414l1.5-1.5A1 1 0 0 0 3 6.5V5a2 2 0 0 1 2-2h1.5a1 1 0 0 0 .707-.293l1.5-1.5a1 1 0 0 1 1.414 0l1.5 1.5A1 1 0 0 0 13 3zM10 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
</svg>


            </div>
            <hr className="text-white w-full" />
            <ul className=" mt-2 flex flex-col">
              <li className="mt-2">
                <label className="container flex">
                  <input
                    defaultChecked
                    type="checkbox"
                  />
                   <svg class="w-6 h-6 mr-2 fill-white text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7"></path>
    </svg>
                  <span className="px-2 texto text-white">
                    Eventos de carrera
                  </span>
                </label>
              </li>
              <li className="mt-2">
                <label className="container flex">
                  <input
                    defaultChecked
                    type="checkbox"
                  />
                 
                 <svg class="w-6 h-6 mr-2 fill-white text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7"></path>
    </svg>
                  <span className="px-2 texto text-white">
                    Eventos de universidad
                  </span>
                </label>
              </li>
              <li className="mt-2">
                <label className="container flex">
                  <input
                    defaultChecked
                    type="checkbox"
                  />
                   <svg class="w-6 h-6 mr-2 fill-white text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7"></path>
    </svg>
                  <span className="px-2 texto text-white">
                    Eventos de cursos
                  </span>
                </label>
              </li>
              <li className="mt-2">
                <label className="container flex">
                  <input
                    defaultChecked
                    type="checkbox"
                  />
                  <svg class="w-6 h-6 mr-2 fill-white text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7"></path>
    </svg>
                  <span className="px-2 texto text-white">
                    Eventos de estudiantes
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="hidden sm:block">
      <div className="p-7 bg-white bg-opacity-25 shadow-lg flex  gap-x-2 rounded-3xl items-center  w-[22vw] ">
        <div className="">
          <h1 className="subtitulo-pesado text-gray-500">
            Monica Muñoz Alpizar
          </h1>
          <h2 className="texto text-gray-500 pt-2">
            Informatica y tecnologia multimedia
          </h2>
          <h2 className="texto text-gray-500 pt-2">
            B33210
          </h2>
        </div>
        <img
          alt="User Profile"
          className="rounded-full w-[5vw]"
          src="https://randomuser.me/api/portraits/women/31.jpg"
        />
      </div>
      <a
        className="mt-3 texto ring-2 ring-sky-300 h-10 rounded-full bg-sky-300 text-gray-500 flex justify-center items-center"
        href="#"
      >
        Progreso del                    curso
      </a>
      <a />
      <a
        className="mt-3 texto text-sky-600 ring-2 ring-sky-300 h-10 rounded-full flex justify-center items-center"
        href="login.html"
      >
        Cerrar sesion
      </a>
      <a>
      </a>
    </div>
    <a>
    </a>
  </div>
  <a>
  </a>
</div>
        
);
}



