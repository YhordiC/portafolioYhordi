import { useEffect, useState } from "react";
import Proyect from "./Proyect";
import  '../stylesCss/Proyectos.css'
const URL_API = "https://65b9a286b71048505a8b0196.mockapi.io/api/v1/project";
import Mooks from "../apis.json"

export default function Proyectos() {
const [Scroll,setScroll] = useState()
  const [proyects,setProyects] = useState([]);

  useEffect(()=>{
    fetch(URL_API)
    .then(data=>data.json())
    .then((Proyects)=>{ console.log(Proyects)
       setProyects(Proyects)})

  
     const  scroll =  document.querySelectorAll('.ctn-carusel')
     setScroll(scroll)
       
    
  },[])

 function NextScroll(){



    Scroll[0].scrollTo({
        left:Scroll[0].clientWidth + Scroll[0].scrollLeft,
        behavior: 'smooth'
    })
   
}

function PreventScroll(){
    Scroll[0].scrollTo({
        left: Scroll[0].scrollLeft - 300,
        behavior: 'smooth'
    })
}
  return (

    <div id="proyectos" className=" relative my-10 px-3 flex flex-col items-center justify-center">
        <h3 className="text-center text-4xl
          mb-9 decoration-dashed">Proyectos en las que trabaje</h3>
          <div className=" overflow-x-scroll w-full contenido-proyecto ctn-carusel"> 
          <ul className="   flex  gap-3 w-max">

         
{
Mooks.map((proyect,index)=>(
 <Proyect key={proyect.id + index} URL_IMG={proyect.Portada}>
  <h4 className="text-2xl font-normal">{proyect.title}</h4>
  <p className="text-sm">{proyect.description}</p>
  
 
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
<button onClick={NextScroll} 
 className="transition-opacity opacity-20 hover:opacity-100 absolute right-2  z-10 bg-white text-black py-2 px-4  font-bold flex items-center justify-center rounded-full">{'>'}</button>
        <button onClick={PreventScroll} 
        className="transition-opacity opacity-20 hover:opacity-100 absolute left-2  z-10 bg-white text-black py-2 px-4  font-bold flex items-center justify-center rounded-full">{'<'}</button>
    </div>
  )
}
