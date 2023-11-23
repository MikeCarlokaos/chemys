import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/chemys-logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const genericHamburgerLine = `h-1 w-[32px] my-[4px] rounded-full bg-primary transition ease transform duration-300`;

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section className="py-2 bg-slate-100 shadow-lg">
      <div className="w-full flex justify-between items-center px-5 py-2 md:px-20">
        {/* logo */}
        <div className="w-full">
          <div className="w-28 md:w-40 ">
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-full h-20 md:h-28 " />
            </NavLink>
          </div>
        </div>
        {/* hamburger menu */}
        <div className="w-full h-full md:hidden">
          <div className="w-full flex justify-end items-center">
            <button onClick={handleMenu} className="flex items-center">
              <h2 className="text-lg text-primary font-bold">Menu</h2>
              <div className="flex flex-col h-12 w-12 rounded justify-center items-center group">
                <div
                  className={`${genericHamburgerLine} ${
                    openMenu ? "rotate-45 translate-y-[12px] " : ""
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    openMenu ? "opacity-0" : ""
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    openMenu ? "-rotate-45 -translate-y-[12px] " : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
        {/* nav */}
        <nav
          className={`absolute -bottom-36 left-0 w-full h-36 flex items-center bg-slate-100 border-y-2 md:block md:static md:h-full md:border-none md:justify-end ${
            openMenu ? "" : "hidden"
          }`}
        >
          <ul className="w-full h-full flex flex-col items-center justify-between text-lg capitalize gap-2 md:flex-row md:items-start md:text-xl">
            <li>
              <NavLink
                to="/"
                className="px-4 py-1.5 rounded-2xl ease-in-out duration-300 hover:underline active:text-secondary"
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="px-4 py-1.5 rounded-2xl ease-in-out duration-300 hover:underline active:text-secondary"
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className="px-4 py-1.5 rounded-2xl ease-in-out duration-300 hover:underline active:text-secondary"
              >
                service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="px-4 py-1.5 rounded-2xl ease-in-out duration-300 hover:underline active:text-secondary"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
