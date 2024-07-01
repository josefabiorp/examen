"../../index.css";
import React from "react";



import { Header } from '../ui/Header';
import { NextEvent } from '../ui/nextEvent';
import { ListaEvent } from '../ui/listaEvent';

export function About() {

  

    return (


<div >
    
        <Header/>
        <div className="max-w-[90rem]  bg-gradient-to-r from-white via-white   to-sky-300  ">
    
<div className='grid grid-cols-2'>
    <div className="grid col-span-1 gap-1 grid-cols-2 sm:gap-5  sm:h-[30rem] mb-32  ">


       
        <div className="overflow-y-hidden size- col-span-1 bg-transparent rounded-3xl ">
            <h1 className="text-center text-2xl text-bold mt-4 mb-4 text-gray-700">Actividades del día 25 de abril</h1>
          
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
        </div>

 <div className="grid    h-full sm:h-[30rem]  ">
       
 <div className="overflow-y-hidden col-span-1 bg-transparent rounded-3xl ">
            <h1 className="text-center text-2xl text-bold mt-4 mb-4 text-gray-700">Actividades de a semana día 20 a 26 de mayo</h1>
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
            <ListaEvent />
        </div>
   </div>


    </div>
    <div className="col-start-2 ">
    <div className='grid grid-cols-2'>

    <div className="grid overflow-y-auto scrollbar-hide text-center items-center t m-5 mt-0 col-span-1 bg-transparent rounded-3xl h-[10rem] ">
    <h1 className="text-center items-center bg-gradient-to-t from-transparent rounded-full to-sky-300 text-4xl text-bold mt-4 mb-4 text-gray-700">Fecha</h1>


    </div>

    <div className="grid overflow-y-auto scrollbar-hide text-center items-center t m-5 mt-0 col-span-1 bg-transparent rounded-3xl h-[10rem] ">
    <h1 className="text-center items-center text-4xl text-bold mt-4 mb-4 border m-2   text-gray-700 border-white rounded-full px-3 py-2 ">25/04/24</h1>


    </div>


    </div>

    <div className="grid  overflow-y-auto text-center ring-2 ring-orange-500 m-5 mt-0 col-span-1 bg-transparent rounded-3xl h-[19rem] ">
    <h1 className="text-center text-4xl text-bold m-1 text-gray-700">Estadisticas</h1>

    <div className='grid grid-cols-2'>

  <div className='grid'>
  <h1 className="text-center text-2xl font-bold m-1 text-gray-700">Actividades del día completadas</h1>
  <div className="flex flex-col items-center  ring-2 m-2 mt-0 rounded-full  ring-orange-500  text-gray-700">
    <span className="m-2">4/5</span>
    <div className='flex'>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    </div>
  </div>
</div>


<div className='grid'>
  <h1 className="text-center text-2xl font-bold m-1 text-gray-700">Actividades de la semana completadas</h1>
  <div className="flex flex-col items-center  ring-2 m-2 mt-0 rounded-full  ring-orange-500  text-gray-700">
    <span className="m-2">4/5</span>
    <div className='flex'>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10   dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10   dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    <svg fill="hsl(33.1, 89.69%, 61.96%)" className=" w-10 h-10  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
    </svg>
    </div>
  </div>
</div>

 </div>
    </div>

    </div>
    </div>
   
</div>
</div>

 );
 }


  