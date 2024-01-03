import React, { useState } from "react";
import Logo from "../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { NavLink } from "react-router-dom";
import CartArea from "../../Page/CartArea";
import { RxCross1 } from "react-icons/rx";
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar({ setNavActive, cart, cartValue }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(false);

  return (
    <>
      <div   className=" px-4 text-black fixed  w-full z-20 shadow-md dark:bg-slate-800 bg-yellow-50 dark:text-white duration-200">
        <div className=" relative cursor-pointer z-[10000]">
          <DarkMode theme={theme} setTheme={setTheme} />
        </div>
        {open && <CartArea open={open} setOpen={setOpen} cart={cart}/>}
        <div className="  py-1 sm:py-2">
          <div className="flex justify-between items-center">
            <div>
              <NavLink
                to="/"
                className=" dark:text-blue-300 flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                <img className="w-10" src={Logo} alt="Logo" />
                Foodiess
              </NavLink>
            </div>
            <ul
              className={`${
                icon ? "maxWidthIconOpen" : "maxWidthIconClose"
              } md:flex gap-4 ${
                theme === "dark" && "maxWidthIconDark"
              } text-xl `}>
              <li>
                <NavLink
                  onClick={(value) => {
                    setNavActive(value.target.innerHTML);
                    setIcon(false);
                  }}
                  to="/"
                  className={({ isActive }) =>
                    ` ${isActive && "text-primary"} p-4 hover:text-primary`
                  }>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIcon(false)}
                  to="/About"
                  className={({ isActive }) =>
                    ` ${isActive && "text-primary"} p-4 hover:text-primary`
                  }>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setIcon(false)}
                  to="/Contact"
                  className={({ isActive }) =>
                    ` ${isActive && "text-primary"} p-4 hover:text-primary`
                  }>
                  Contact
                </NavLink>
              </li>
            </ul>
            <button
              onClick={() => {
                setOpen(!open);
              }}
              className=" text-black btn bg-gradient-to-r from-primary to bg-sky-200 text-gray px-4 py-1 rounded-full hover:scale-105 duration-100 hover:text-white">
              Order
              <FaCartShopping className="inline-block ml-1 " />
              <span className="ml-2 border-b-2 border-b-gray-800 ">
                {cartValue}
              </span>
            </button>
            <div
              onClick={() => setIcon(!icon)}
              className=" cursor-pointer md:hidden p-5 flex justify-center items-center text-2xl">
              {icon ? (
                <div className=" absolute">
                  <RxCross1 />
                </div>
              ) : (
                <div className=" absolute">
                  <FaBarsStaggered />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
