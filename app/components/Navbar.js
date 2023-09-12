import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"


const Navbar = () => {
  const navlinks = [
    { id: "home", name: "Home", link: "/" },
    { id: "account", name: "Account", link: "/account" },
    { id: "login", name: "Login", link: "/login" },
  ];

  const [active, setActive] = useState("");

  return (
    <nav className={`paddingX w-full flex items-center py-4 fixed top-0 z-20 bg-night`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-15 h-10 object-contain" />
          <p className="text-bluish text-[18px] font-bold cursor-pointer flex">
            Watchify
          </p>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navlinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.id ? "text-bluish" : "text-white"} hover:text-bluish text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.id)}
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
