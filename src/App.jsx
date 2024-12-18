
import  './App.css'
import Certificaciones from './components/Certificaciones'
import Habilidades from './components/Habilidades'
import OtrasHabilidades from './components/OtrasHabilidades'

import Proyectos from './components/Proyectos'
import YhordiDev from './components/YhordiDev'




function App() {
  

  return (
    <div className='portafolio   font-mono  bg-slate-900 '>
      <header className='  w-full
        text-white flex  items-end  h-[300px]
        bg-[url(https://live.staticflickr.com/65535/53617362636_d385158a3c_k.jpg)]
        bg-cover  bg-center shadow-2xl '>
      </header>
      

      

        <div className=' inicio mx-auto   
         text-amber-50  max-w-7xl bg-slate-900 ' > 
         <div className='flex flex-wrap 
         items-center justify-evenly   relative  -top-20  gap-3'>

          <img src="/img/perfil.jpg" 
          alt="imagen de portada" 
          className='w-[200px] rounded-full shadow-2xl  '  />
         <section id='quiensoy'  className='flex flex-col items-center gap-3 bg-violet-950 p-4 
            rounded-md shadow-2xl'>
            <p className='text-3xl tracking-tight'>¡Hello!, soy desabollador frontend</p>
            <p className='text-[50px] Imagine
              '>Imagine it and program it.</p>
          </section>
        
         </div>

         <YhordiDev/> 

         <Proyectos/>
         
         <Habilidades/>
         
         <Certificaciones/>
         <OtrasHabilidades/>
        </div>

        

        

      <footer className='mt-16 px-2 bg-slate-800 flex justify-around  gap-4 flex-wrap py-12  text-amber-50'>
        <section>
          <h4 className='font-black '>Pagina web</h4>
          <hr className='border-blue-600 border-2'/>
          <ul className='mt-3 '>
            <li className= 'hover:font-black hover:translate-x-2 transition-transform'>
              <a href='#quiensoy'>Quien soy?</a>
              </li>

              <li className= 'hover:font-black hover:translate-x-2 transition-transform'>
              <a href='#proyectos'>Proyectos</a>
              </li>

              <li className= 'hover:font-black hover:translate-x-2 transition-transform'>
              <a href='#habilidades'>Habilidades</a>
              </li>

              <li className= 'hover:font-black hover:translate-x-2 transition-transform'>
              <a href='#certificados'>Certificados</a>
              </li>
          </ul>
        </section>

        <section>
          <h4 className='font-black'>Contactame</h4>
          <hr className='border-blue-600 border-2'/>
          <ul className='mt-3 '>
            <li className= 'hover:font-black hover:translate-x-2 transition-transform '>
              <a className='flex gap-1 flex-wrap items-center' href='https://www.linkedin.com/in/yhordi-code/' target='_blank' rel='noreferrer'>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="mdi-linkedin" width="30" 
            height="30" viewBox="0 0 24 24" fill='azure'>
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
            </svg><p>LinkedIn</p>
            </a>
              </li>

              <li className= 'hover:font-black hover:translate-x-2 transition-transform'>
              <a className='flex gap-1 flex-wrap items-center' href='https://github.com/YhordiC' target='_blank' rel='noreferrer'> <svg version="1.1" id="Capa_1"  x="0px" y="0px"width="30" height="30" viewBox="0 0 438.549 438.549" fill='azure'>
<g>
	<path d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>GitHub
</a>
              </li>

              <li className= 'hover:font-black hover:translate-x-2 transition-transform'>
              <a>yordychoque124@gmail.com</a>
              </li>

          </ul>
        </section>

        <section>
          <h4 className='font-black'>Sígueme</h4>
          <hr className='border-blue-600 border-2 mb-3'/>
         <section className= 'hover:font-black hover:translate-x-2 transition-transform'>
         <a className='flex gap-1 flex-wrap items-center' href='https://www.linkedin.com/in/yhordi-code/' target='_blank' rel='noreferrer' >
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="mdi-linkedin" width="30" 
            height="30" viewBox="0 0 24 24" fill='azure'>
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
            </svg>LinkedIn</a>
         </section>
          
        </section>

      </footer>
    </div>
  )
}

export default App
