import "./App.css";
import React, { useState, useEffect } from "react";
import Hero from "./assets/Component/Hero";
import Navbar from "./assets/Component/Navbar";
import FoodSection from "./assets/Component/FoodSection";
import Footer from "./assets/Component/Footer";
import { Outlet } from "react-router-dom";
import AppArea from "./assets/Component/AppArea";
import { useLocation } from "react-router-dom";
import AppArea2 from "./assets/Component/AppArea2";
import { HoverSection } from "./assets/Component/HoverSection";




function App() {
  const location = useLocation();
  let [navActive, setNavActive] = useState("Home");
  let [cart, setCart] = useState([]);
  let [cartValue, setCartValue] = useState();

  useEffect(() => {
    if (location.pathname === "/") {
      setNavActive("Home");
    } else {
      setNavActive("");
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar setNavActive={setNavActive} cart={cart}  cartValue={cartValue} />
      <Outlet />
      {navActive === "Home" && <Hero />}
      {navActive === "Home" && <FoodSection cart={cart} setCart={setCart} setCartValue={setCartValue} />}
      <div className="m-3 martop  dark:bg-slate-700 bg-slate-400">
        <AppArea />
      </div>
      <HoverSection/>
      <div className="m-3  dark:bg-slate-700 bg-slate-400">
        <AppArea2 />
      </div>
      <Footer />
    </>
  );
}

export default App;
