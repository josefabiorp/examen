import React from "react";

import { useState } from "react";

import { CmBox } from "./CmBox.jsx";


export default function Modal() {
    const [isopen, setIsopen] = useState(true);
    return (
        <>
            <button onClick={() => setIsopen}></button>

            {isopen && (


<div className="fixed inset-0   justify-center  bg-black  bg-opacity-30  backdrop-blur-sm flex  text-center items-center">

<div className="fixed inset-0   justify-center max-w-[51rem] bg-yellow-100 rounded m-auto mb-3 mt-2 text-center items-center">


    <div className=" gap-5 max-w-[55rem] text-center  items-center">
        <div className=" flex m-6 mt-0 mb-0 col-span-6 text-center   items-center  sm:gap-4">
            <input
                className=" grid grid-flow-col content-center text-2xl font-bold text-gr p-2 mr-4 m-3 ring-2 mt-0 h-10  ring-red-500 text-center rounded-lg text-black bg-white w-full focus: outline-none"
                type="text" value="Nombre de evento" onfocus="clearDefaultValue(this)" onblur="restoreDefaultValue(this)"></input>





            <div className="mb-0  mt-0  flex text-sm  text-black">
                <label for="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-[var(--clr-yelow-100)] hover:text-[var(--clr-yelow-100)]" />
                <span class=" p-0 flex justify-center   text-black">

                    <div className=" mt-0 p-0 flex justify-center  py-4">
                        <div className="text-center rounded-full text-sky-500  ring-red-500 ring-2 p-10 ">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
  <polyline points="17 8 12 3 7 8"></polyline>
  <line x1="12" y1="3" x2="12" y2="15"></line>
</svg>




                        </div>

                    </div>

                </span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />

            </div>
        </div>












        <div className=" max-w-[55rem] grid grid-cols-2    gap-2 text-center justify-start  m-4">
            <div className=" grid  grid-cols-1   border-red-500 justify-start  ">
                <h2 className="text-center justify-start m-1 pl-8 sm:text-[1.625rem] text-sky-300  items-center mt-1 mb-0">Fecha y hora </h2>

                <div className="w-full  flex ms-5 ">
                    <input type="date" className="ring-2 ring-red-500 m-2 mt-0  text-black rounded-lg px-3 py-2 focus:outline-none bg-white focus:border-blue-300"

                    />

                    <input type="time"
                        className="ring-2 ring-red-500 text-black m-2 mt-0 pl-3  rounded-lg px-3 py-2 focus:outline-none bg-white focus:border-blue-300"
                    />

                </div>


                <h2 className="text-center sm:text-[1.625rem] text-sky-300  items-center mt-2 mb-2">Categoria</h2>
                <div className="d mt-0 mb-0 p-2">
                <CmBox/>

                </div>
            </div>



            <div className="col-start-2 mt-0">

                <h2 className="text-center  sm:text-[1.625rem] text-sky-500  items-center mt-2 mb-2">Etiqueta</h2>
                <div className="d mt-0 mb-0 p-2">
                <CmBox/>

                </div>




                <h2 className="text-center  sm:text-[1.625rem] text-sky-500 items-center mt-2 mb-2">Estado</h2>
                <div className="d mt-0 mb-0 p-2">
                <CmBox/>

                </div>


            </div>



















        </div>

        <h1 class=" m-5 sm:text-[1.625rem] text-sky-500  items-start text-justify ml-16 mt-0 mb-0 ">Descripción: </h1>
      <p class="ring-red-500 ring-1 m-6 mb-2 rounded-xl text-black  mt-0">Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Expedita nihil quo consequatur autem error, iste distinctio mollitia modi ipsam nam pariatur libero. Ab
        sed optio molestiae, culpa qui quisquam quo?</p>

      <a class=" max-w-[48.5rem] bg-[#F5A747] flex justify-center items-center mb-0 m-5 mt-4 text-center  rounded-full text-black  w-full h-10 focus: outline-none "
        href="#">Agregar</a>
        <button className="max-w-[48.5rem] bg-transparent mt-4 p-1 flex justify-center items-center  m-5  text-center  rounded-full text-red-500 w-full h-10 focus: outline-none  " onClick={() => setIsopen(false)} >Close</button>
    </div>

</div>


</div>




)
            }



        </>
    )
}