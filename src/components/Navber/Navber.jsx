import { NavLink ,Link} from "react-router-dom"
import "./Navber.css"
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";


function Navber() {
 const [isOpen,setIsOpen] = useState(false);
 const toggleMenu = () => {
  setIsOpen(!isOpen)

  const CloseMenu = () => setIsOpen(false);
 } 
  return (
    <nav>
      <Link to={'/'} className="logo"> Portfolio. </Link>
        <div className="icons">
          <button className="MenuBtn" onClick={toggleMenu}>
            {
              isOpen ?   <IoMdClose className="clos"/> :  <FaBars/>
            }
         
        
          </button>
         
        </div>
      <ul className={`nav-links ${isOpen ? "block" : "hidden"}`}>
             
        <li> <NavLink to={'/'} onClick={'CloseMenu'}> Home </NavLink> </li>
        <li> <NavLink to={'/abouts'} onClick={'CloseMenu'} > Abouts </NavLink> </li>
        <li> <NavLink to={'/portfolio'} onClick={'CloseMenu'}> Portfolio </NavLink> </li>
        <li> <NavLink to={'/services'} onClick={'CloseMenu'}> Services </NavLink> </li>
        <li> <NavLink to={'/contacts'} onClick={'CloseMenu'}> Contacts </NavLink> </li>
      </ul>
    </nav>
  )
}

export default Navber