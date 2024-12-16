
export default function Proyect({URL_IMG,children}) {
  return (
    <li  className=" justify-center w-[300px]  gap-2 
     bg-slate-700  rounded-md flex-wrap shadow-xl ">
       <picture className=" p-2  w-full rounded-t-md">
        <img src={URL_IMG}  alt='Imagen de aplicación' 
        className="h-[300px] w-[auto] m-auto  shadow-2xl" />
        </picture> 
        <section className="flex flex-col gap-2 px-4 pt-2" >
            {children}
        </section>
    </li>
  )
}
