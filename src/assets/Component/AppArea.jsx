import React from "react";
import ApplicationImg from "../assets/foodies-app-Img.jpg";




function AppArea() {
  return (
    <>
      <div data-aos="fade-up" className="  card text-black dark:text-white lg:card-side dark:bg-slate-700 bg-slate-400 shadow-xl md:flex-row ">
        <figure className=" w-full md:w-[60%] lg:w-[50%] xl:w-[40%] p-6 md:min-w-[400px]">
          <img
            className="rounded-3xl max-w-[500px] w-[90%] dark:opacity-70  "
            src={ApplicationImg}
            alt="Album"
          />
        </figure>
        <div className="card-body md:w-[60%] xl:w-[50%] ">
          <h2 className="card-title text-red-600 text-2xl dark:text-[#93C5FD]">Our New App Released! 🔥🔥 </h2>
          <p className="text-justify">
            "Welcome to Foodiess, your go-to destination for culinary
            exploration and seamless convenience! Experience the ultimate in
            dining ease by ordering directly through our app. Enjoy the
            convenience of ordering your favorite dishes effortlessly through
            Foodiess and savor every moment of your culinary journey!"
          </p>
          <div className="card-actions justify-end">
            <a
            href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"
            target="_blank"
            className=" hover:text-white text-black btn bg-gradient-to-r from-primary to bg-sky-200 text-gray px-4 py-1 rounded-full hover:scale-105 duration-100">
              
              Download Our App
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppArea;
