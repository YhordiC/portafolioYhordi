
import '../stylesCss/Habilidades.css'
export default function Habilidades() {
  
    
  return (
  <div id="habilidades" className=" pt-20 w-full contenedor-habilidades dark:bg-slate-900 ">
   <h4 className=" text-center text-4xl">Mis habilidades técnicas</h4>

   <div className="  max-w-[600px]   relative 
    top-10 mx-auto aspect-square contenedor">

     <section className=" habilidades1 absolute  w-[80%] h-[80%] border-4  right-[10%] 

      border-x-red-400 border-y-violet-500  rounded-full ">
      <p className="bg-[#27b1fa] w-[10%] h-[10%] rounded-full absolute -top-4 right-[50%]  ">React</p>
      <p className="bg-[#1c64f2] w-[10%] h-[10%] rounded-full absolute -left-4 bottom-[50%] ">Tailwind</p>
      <p className="bg-[#ea30da] w-[10%] h-[10%] rounded-full absolute -bottom-4 right-[50%]">Vite</p>
      <p className="bg-slate-900 w-[10%] h-[10%] rounded-full absolute -right-4 bottom-[50%]">Git</p>
     </section>
     <img className="perfilhabilidades rounded-full  absolute top-[25%] left-[35%]  z-20" height={'10%'} width={'30%'} src="src/assets/perfil.jpeg"/>
     <section className=" habilidades2 absolute w-[60%] h-[60%] top-[10%] right-[20%]
       border-4  border-x-emerald-400 border-l-cyan-400 rounded-full z-10">

     <p className="bg-red-700 w-[15%] h-[15%] rounded-full absolute -top-4 right-[50%] ">Html5</p>
      <p className="bg-cyan-400 w-[15%] h-[15%] rounded-full absolute -left-4 bottom-[50%] ">Css</p>
      <p className="bg-yellow-500 w-[15%] h-[15%] rounded-full absolute -bottom-4 right-[50%]">JS</p>
      <p className="bg-slate-50 text-black w-[15%] h-[15%] rounded-full absolute -right-4 bottom-[50%]">Java</p>
     </section>

   </div>
  </div>
  
  )
}
