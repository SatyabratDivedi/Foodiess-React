import React, { useEffect, useState } from "react";
import Navbar from "../assets/Component/Navbar";
import Footer from "../assets/Component/Footer";
import { useParams } from "react-router-dom";
import products from "../assets/Component/ProductsData";
import AppArea from "../assets/Component/AppArea";

function ItemDetail() {
  const { itemName } = useParams();
  const [parse, setParse] = useState({});

  useEffect(() => {
    const filterProduct = products.filter((product) => product.itemName == itemName);
    setParse(filterProduct[0]);
  }, [itemName]);

  return (
    <>
      <Navbar />
      <div  className=" md:flex w-full p-6  pt-16 text-5xl  dark:bg-slate-700 bg-slate-400 shadow-2xl  text-black">
        <div className="w-[100%] md:w-[60%]  flex items-center justify-center pt-5 pb-5">   
          <img
            className=" rounded-full w-[70%]  max-w-[250px] md:min-w-[200px] "
            src={parse.imageSrc}
            alt=""
          />
        </div>
        <div className=" pt-5 md:pt-0 flex flex-col items-center justify-center gap-5 w-full  text-2xl md:text-lg lg:text-2xl xl:text-3xl  text-center dark:text-white sm:text-3xl">
          <div className="border-b-2 pb-1">{`${itemName} (${parse.price})`}</div>
          <div className=" text-yellow-400 dark:text-gray-400">
            -:Ingredient We Use:-
          </div>
          <div className=" dark:text-gray-300 text-justify text-black">
            {parse.ingredients}
          </div>
        </div>
      </div>
      <div className="m-3">
      <AppArea/>
      </div>
      <Footer />
    </>
  );
}

export default ItemDetail;
