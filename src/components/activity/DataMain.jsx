import { Header } from "../ui/Header";
import myImage from '../../assets/imgs/graph.png';



import '../../index.css';
 export function DataMain() {



 return (

<div className="bg-gradient-to-r from-sky-300 h-max to-white">

    <Header />


<div className="grid  p-3 text-center gap-4 grid-cols-3">

<h2 className=" font-bold text-2xl text-red-500">Cursos</h2>
<h2 className=" font-bold text-2xl text-red-500">Evaluaciones</h2>
<h2 className=" font-bold text-2xl text-red-500">Progreso del curso</h2>

</div>


<div className="grid  p-3 text-center gap-4 grid-cols-3">

<div className="bg-white pt-16 items-center justify-center bg-opacity-50 rounded-full"> 


<h1 className="font-medium ">Aplicaciones Interactivas 2</h1>  
<h2>1 semestre, 2024</h2>
</div>



<div className=" justify-start text-justify bg-white bg-opacity-50 font-medium rounded-full grid grid-cols-2">  
<div className=" ps-28 py-5">
<h2 className="inline text-xs">Tareas:   </h2>     
<br />
<h3 className="inline text-xs">Proyectos:  </h3>

<h4 className="inline text-xs">Exposiciones:    </h4>
<h5 className="inline text-xs">Laboratorio:  </h5>

<h6 className="inline text-xs">Quices: </h6>

<h7 className="inline text-xs">Examenes:1/5</h7>
</div>
<div className="ps-10 py-5">
<p>10% </p>                
<p>25%</p>
<p>20%</p>
<  p>20%</p>
<p>5%</p>
<p>25%</p>



</div>


  </div>

<div className="text-center items-center justify-center bg-white bg-opacity-50 rounded-full"> 

<img className="pt-16 px-4 "src={myImage} alt="" />
    
     
    
     </div>

</div>






</div>


 );}
