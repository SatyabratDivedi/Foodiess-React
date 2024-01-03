import React from "react";
import Logo from "../assets/food-logo.png";

function Footer() {
  return (
    <>
      <footer
        data-aos="fade-up"
        
        className="footer p-10 dark:bg-slate-700 bg-slate-400 text-black dark:text-white ">
        <aside>
          <img
            src={Logo}
            width="50"
            height="50"
            viewBox="0 0 24 24"
            className="fill-current"></img>
          <p className="font-bold">
            Foodiess Restaurent Ltd.
            <br />
            Providing delicious food
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
