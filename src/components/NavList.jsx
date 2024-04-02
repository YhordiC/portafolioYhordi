
import '../stylesCss/NavList.css'

export default function NavList({Link,children}) {
  return (
    <li className="Nav " >
         <a href={Link} className='flex items-center gap-2'>
        {children}
          </a>
    </li>
  )
}
