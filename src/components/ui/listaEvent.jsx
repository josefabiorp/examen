import "../../index.css"

export function ListaEvent() {
    return (
        <div className="mb-3 rounded-2xl min-h-32  ring-white ml-[30%] relative ">

            <div className="absolute right-[127.5%] h-full flex  flex-col">
                <div className="relative flex justify-center " >
                    <div className=" absolute size-5 bg-red-500  rounded-full top-[3.5rem] "></div>
                    <div className=" absolute  h-40 top-0   w-1  bg-red-500 rounded-3xl"></div>

                </div>
            </div>

            <div className="relative flex m-3">
                <div className=" mt-2 cursor-pointer" id="checkIcon"
                    onclick="changeColor3()">

                </div>
                <button class=" text-gray-700 flex items-center">
                    <span className=" text-gray-700 mr-3 ml-0">Aplicaciones interactivas 2</span>
                    <svg class="w-6 h-6 text-gray-800 dark:text-white items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>

            </div>
        </div>











    )
}