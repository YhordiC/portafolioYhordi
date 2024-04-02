import '../stylesCss/Apuntar.css'

export default function NavList({url,children}) {
    return (
      <div  className="apuntar" >
           <a href={url} target="_blank" rel="noreferrer" 
           className='flex items-center gap-2 relative m-2'>
           {children}
            </a>
      </div>
    )
  }
  