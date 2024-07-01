
import { Inputs } from "../ui/inputs.jsx";
import { Button} from "../ui/button.jsx";
 import { LoginGoogle } from "../ui/Logingoogle.jsx";
import { BarkingDog} from './BarkingDog.jsx';
import '../../index.css';
 export function Login() {



 return (

    <div className=" bg-sky-300  text-white flex   min-h-svh">
    <div className="flex flex-col justify-center items-center m-auto p-8 w-[29rem] ">

        <BarkingDog />
        <Inputs text="Usuario" />
        <Inputs text="Contraseña" />

      <a
        className="ml-[64%] text-sm text-nowrap"
        href="#"
      >
        Olvidó su contraseña?
      </a>

        <Button text="Iniciar Sesion" address="#" />
        <Button text="Iniciar Sesion" address="#" />

      <hr className="w-full" />
      <LoginGoogle/>
      <a href="singup.html">
        Registrarse
      </a>
    </div>
    <a href="singup.html">
    </a>
  </div>
 );
 }