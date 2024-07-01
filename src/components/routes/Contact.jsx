"./../index.css";
import React from "react";
import { Inputs } from "../ui/inputs.jsx";
import { Button} from "../ui/button.jsx";

import { BarkingDog } from "../activity/BarkingDog.jsx";
export function Contact() { 
    return (
        <div className="bg-sky-300 py-px text-black flex">
        <div className="flex flex-col justify-center items-center m-auto p-8 w-full max-w-screen-md">
          <BarkingDog />
          <section className="mx-auto max-w-lg">
            <h2 className="text-4xl font-extrabold text-center mb-16">Formulario de registro</h2>
            <form className="w-full gap-4 mt-4">
              <div className="mt-9 p-0 flex justify-center py-6">
                <div className="text-center rounded-full ring-white ring-2 p-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
              </div>
              <div className="mb-8 justify-center flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-semibold text-[var(--clr-yelow-100)] focus-within:outline-none focus-within:ring-2 focus-within:ring-[var(--clr-yelow-100)] focus-within:ring-offset-2 hover:text-[var(--clr-yelow-100)]">
                  <span className="p-0 flex justify-center text-white">Cargar imagen</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
              </div>
              <Inputs text="Nombre" />
              <Inputs text="Apellido" />
              <Inputs text="Correo" />
              <Inputs text="Nombre de usuario" />
              <Inputs text="Contraseña" />
              <Button text="Continuar" address="#" />
            </form>
          </section>
        </div>
      </div>
    );
       
    }