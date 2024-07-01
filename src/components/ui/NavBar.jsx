import { NavLink } from "react-router-dom";
import myImage from '../../assets/imgs/logo.png';
import React, { useState, useEffect } from 'react';
export function NavBar() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date());
          
        }, 6);
    
        return () => clearInterval(intervalId);
      }, []); // Run once on component mount
    return(
        <nav className="bg-gradient-to-r from-sky-300  to-white">
            <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 ">
                <div className="ml-20 text-gray-800 font-bold text-sm">{currentTime.toLocaleTimeString()}</div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 ">
                     
                        <NavLink to="/about" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</NavLink>
                        <NavLink to="/contact" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Formulario</NavLink>
                        <NavLink to="/contact" className="text-gray-400 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">

                       
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}