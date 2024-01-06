import React from "react";
import Item from "./Item";
import products from "./ProductsData";

function FoodSection({ cart, setCart, setCartValue }) {
  return (
    <div className=" dark:bg-slate-700 bg-slate-400 shadow-xl">
      <div className="mx-auto max-w-2xl px-4 py-1  lg:max-w-7xl lg:pt-4 ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Customers Choice
          <span className="text-3xl text-yellow-400"> BURGER (🍔)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 gap-x-6 gap-y-10  mt-6 ">
          {products
            .filter((product) => product.item == "burger")
            .map((product) => (
              <div data-aos="fade-up" key={product.id}>
                <Item
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  setCartValue={setCartValue}
                />
              </div>
            ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-1  lg:max-w-7xl pt-16 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers Choice
          <span className="text-3xl text-yellow-400"> MOCTAIL (🥂)</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 gap-x-6 gap-y-10  mt-6 ">
          {products
            .filter((product) => product.item == "moctail")
            .map((product) => (
              <div data-aos="fade-up" key={product.id}>
                <Item
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  setCartValue={setCartValue}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FoodSection;
