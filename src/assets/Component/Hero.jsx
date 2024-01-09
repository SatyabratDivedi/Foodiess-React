import React, { useState } from "react";
import Food1 from "../assets/biryani2.png";
import Food2 from "../assets/biryani3.png";
import Food3 from "../assets/biryani.png";

const FoodList = [
  {
    id: 1,
    image: Food1,
  },
  {
    id: 2,
    image: Food2,
  },
  {
    id: 3,
    image: Food3,
  },
];

function Hero() {
  let [spinImg, setSpinImg] = useState(Food1);

  return (
    <>
      <div
        data-aos="fade-down"
        className=" bgImg flex flex-col-reverse md:flex-row  justify-center items-center min-w-[100%] min-h-[550px] md:min-h-[800px] sm:min-h-[600px]
          bg-slate-600 dark:bg-base-200 dark:text-white drop-shadow-lg ">
        <div className="container pb-8 sm:pb-0 lg:pr-56  ">
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-9 order-2 leading-10 ">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-boldtext-justify">
                Welcome to the{" "}
                <span className="text-yellow-400 font-bold border-b-4 border-yellow-400">
                  Foodie
                </span>{" "}
                Zone
              </h1>
              <p className=" selection:text-yellow-400 m-4 lg:text-xl text-justify">
                "Welcome to Foodiess, your go-to destination for culinary
                exploration and seamless convenience! Experience the ultimate in
                dining ease by ordering directly through our app. Enjoy the
                convenience of ordering your favorite dishes effortlessly
                through Foodiess and savor every moment of your culinary
                journey!"
              </p>
              <div>
                <button className=" ml-4 animate-bounce bg-gradient-to-r from-primary to-cyan-200 text-white px-3 py-1 rounded-full ">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:max-w-[600px] md:flex-col">
          <div className=" andr h-[320px] rounded-full md:w-80 lg:w-[26vw] w-[20rem] md:translate-y-20 md:-translate-x-6 lg:translate-y-24 2xl:translate-y-32 lg:-translate-x-40">
            <div className=" md:scale-[1.1] lg:scale-[1.3] duration-300 md:-translate-y-12 ">
              <img
                className=" spin mt-20 sm:max-h-[350px] rounded-full"
                src={spinImg}
                alt=""
              />
            </div>
          </div>
          <div className=" md:mt-44 mb-9 w-[16rem] md:w-[20rem] md:-translate-x-3 md:-translate-y-4 xl:translate-x-28 2xl:translate-x-40 2xl:translate-y-8 lg:w-[5.5rem] lg:translate-x-20 lg:-translate-y-28 h-[5.8rem] lg:h-[16rem] flex bg-yellow-300 rounded-full pt-2 pb-2 lg:flex-col m-auto ">
            {FoodList.map((food) => (
              <img
                className=" lg:w-32  z-10 w-[5.5rem] cursor-pointer mx-auto hover:scale-105 duration-300 "
                key={food.id}
                src={food.image}
                onClick={() =>
                  (food.id === 1 && setSpinImg(Food1)) ||
                  (food.id === 2 && setSpinImg(Food2)) ||
                  (food.id === 3 && setSpinImg(Food3))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
