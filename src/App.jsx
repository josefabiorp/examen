import { Home } from "./components/routes/Home.jsx";
import { About } from "./components/routes/About.jsx";
import { Contact } from "./components/routes/Contact.jsx";





import "./index.css";
import { NavBar } from "./components/ui/NavBar.jsx";
import { BarkingDog} from "./components/activity/BarkingDog.jsx";
import { Login} from "./components/activity/login.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { Sing_up} from "./components/activity/Sing_up.jsx";
import{DataMain} from"./components/activity/DataMain.jsx"
import { Header } from "./components/ui/Header.jsx";

export function App() {
 

  return (
    <div className="container mx-auto max-w-full">
     <NavBar/>
        
     {/* los siguientes elementos se deben descomentarse uno a uno para su revicion */}
{/* <DataMain /> */}
{/* <Login /> */}

{/* <BarkingDog /> */}

       
      <Routes> 
      
        <Route path="/" element={<Home />} />

             {/* en la ruta about puse provisionalmente el registro de actividades por día y por mes*/} 
         <Route path="/About" element={<About />} />

        {/* en la ruta contact puse provisionalmente el formulario de registro */} 
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={ <Navigate to="/" />} />
        
      </Routes>
   
    </div>
  );
}