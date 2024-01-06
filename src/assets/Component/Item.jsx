import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Item({ product, cart, setCart, setCartValue }) {
  const [orderValue, setOrderValue] = useState(0);
  useEffect(()=>{
    const totalItemsInCart = cart.reduce((total, currentItem) => total + currentItem.quantity, 0);
    setCartValue((totalItemsInCart));
  }, [orderValue])
  
  const handalAdd = (itemName, imageSrc, price) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.itemName === itemName
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { itemName, imageSrc, price, quantity: 1 };
      setCart([...cart, newItem]);
    }
    setOrderValue(orderValue + 1);
    toast.success(`😊 (${itemName}) added `, {
      position: "bottom-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handalSub = () => {
    const existingItemIndex = cart.findIndex(
      (item) => item.itemName === product.itemName
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
      setOrderValue(orderValue - 1);

      toast.warning(` 😊 (${product.itemName}) removed `, {
        position: "bottom-center",
        autoClose: 100,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.warning(` 😊 (${product.itemName}) not in cart `, {
        position: "bottom-center",
        autoClose: 100,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="relative pl-12 pr-12 sm:pl-6 sm:pr-6 lg:pl-0 lg:pr-0">
        <div key={product.id}>
          <p className="text-sm font-medium dark:text-white text-gray-900 priceBudge ">
            {product.price}
          </p>
          <Link to={`/${product.itemName}`}>
            <div className=" duration-200 w-full md:w-full overflow-hidden rounded-xl hover:rounded-[2.5rem] lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className=" h-full w-[100%] lg:h-full lg:w-full "
              />
            </div>
          </Link>
          <div className="mt-4 flex justify-between items-center ">
            <div>
              <h3 className="text-[1rem] lg:text-[.85rem] text-gray-700 dark:text-white xl:text-[1.1rem]">
                <div>
                  <span aria-hidden="true" />
                  {product.itemName}
                </div>
              </h3>
            </div>
            <div className=" flex items-center">
              <button
                onClick={handalSub}
                className="buttonn font-extrabold text-3xl pb-2 pl-4 pr-4">
                -
              </button>
              <span className="w-7 text-black dark:text-white tex border-2 flex items-center justify-center text-xl m-1 rounded-lg">
                {orderValue}
              </span>
              <div
                onClick={() =>
                  handalAdd(product.itemName, product.imageSrc, product.price)
                }
                className="buttonn font-extrabold text-3xl pb-2 pl-3 pr-3">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
