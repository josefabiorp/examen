
import { Inputs } from "../ui/inputs.jsx";
import { Button} from "../ui/button.jsx";
 import { LoginGoogleTwo } from "../ui/loginGoogleTwo.jsx";
import { BarkingDog} from './BarkingDog.jsx';
import '../../index.css';

export function Sing_up() {
  return (
    <div className="overflow-y-hidden bg-sky-300 text-white flex min-h-svh">
      <div className="flex flex-col justify-center items-center m-auto p-8 w-[29rem]">
        <BarkingDog />
        <Button text="New user" address="#" />
        <hr className="w-full" />
        <LoginGoogleTwo/>
        <a href="singup.html">Sing-up</a>
      </div>
    </div>
  );
}
