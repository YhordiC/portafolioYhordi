import { useEffect, useState } from "react";
import Proyect from "./Proyect";
import  '../stylesCss/Proyectos.css'

const URL_API = "https://65b9a286b71048505a8b0196.mockapi.io/api/v1/project";

export default function Proyectos() {

  const [proyects,setProyects] = useState([]);

  useEffect(()=>{
    fetch(URL_API)
    .then(data=>data.json())
    .then((Proyects)=>{ console.log(Proyects)
       setProyects(Proyects)})
    
  },[])
  return (

    <div id="proyectos" className="my-10 px-3">
        <h3 className="text-center text-4xl
          mb-9 decoration-dashed">Proyectos en las que trabaje</h3>
        <ul className="contenido-proyecto ">
        {proyects.map((proyect)=>(
         <Proyect key={proyect.id} URL_IMG={proyect.Portada}>
          <h4 className="text-2xl font-normal">{proyect.title}</h4>
          <p className="text-sm">{proyect.description}</p>
          <ul className="text-sm list-disc px-3">
            {proyect.funciones.map((item,i)=>(
              <li className="" key={i}>{item}</li>
            ))}
          </ul>
         
          <div className="flex  flex-wrap gap-2 text-sm">
             {proyect.tegnologias.map((item,i)=>(
              <span key={i}
              className="bg-cyan-500  p-1 rounded-sm " >{item}</span>
             ))}
          </div>

          <div className="flex gap-3 pb-3 ">
             <a className='hover:text-[#66ec5c]  hover:font-black hover:scale-105 transition-transform' href={proyect.Github} target='_black'>Github</a>
            {proyect.url ? 
             <a className='hover:text-[#b777e1]  hover:font-black hover:scale-105 transition-transform'  href={proyect.url} target="_black">Pagina web</a> :"" }
          </div>
         </Proyect>
        ))}
        </ul>
    </div>
  )
}
