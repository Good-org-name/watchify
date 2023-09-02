import React, { useState } from "react" 
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import { styles } from "../styles"

// const NavLinks = () => {
//     return(
//     <>
//         <NavLink to="/myaccount"> My Account</NavLink>
//         <NavLink to="/login">Log In</NavLink>
//         <NavLink to= "/logout"> Log out</NavLink>
//     </>
//     )
// }
const Navbar = () => {
const navlinks = [
        { id: "home ", name:"Home", link:"/",},
        { id:"account",name:"Account", link:"/account",},
        { id:"login",name:"Login", link:"/login",},
    ]

    const [active, setActive] = useState("")

    return (
        <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 bg-red-950`}
    >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <img src= {logo} alt="logo" className="w-15 h-10 object-contain"/>
                    <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Watchify
          </p>
          </div>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                {navlinks.map((link)=>(
                        <li 
                        key={link.id} 
                        className={`${
                            active === link.title ? "text-white" : "text-secondary"
                          } hover:text-white text-[18px] font-medium cursor-pointer`}
                          onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.link}`}> {link.name} </a>
                        </li>
                    ))}
                </ul>
        </div>
    </nav>
    )
}
export default Navbar