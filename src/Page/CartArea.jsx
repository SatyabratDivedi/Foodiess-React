import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartArea({ open, setOpen, cart  }) {
  const handleShopingDone = () => {
    toast.warning(` 😊  Thanks for Order `, {
      position: "top-center",
      autoClose: 100,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden ">
            <div className="absolute inset-0 overflow-hidden ">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-[80%] ">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-1000 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-1000 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full">
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className=" dark:bg-slate-500  flex h-full flex-col overflow-y-scroll bg-white shadow-xl pt-12">
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
                        <div className=" flex items-start justify-between ">
                          <Dialog.Title className="text-lg font-medium text-gray-900 dark:text-white">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 dark:text-white"
                              onClick={() => {
                                setOpen(!open);
                              }}>
                              <span className="absolute -inset-0.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        {cart.length > 0 ? (
                          <div className="mt-8 ">
                            <div className="flow-root ">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200 ">
                                {cart.map((product) => (
                                  <li className="flex py-6">
                                    <div
                                      key={product.id}
                                      className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 ">
                                      <img
                                        onClick={() => {
                                          console.log(product.price);
                                          console.log(typeof product.price);
                                          console.log(product.quantity);
                                          console.log(typeof product.quantity);

                                          let strToNumMethod1 = parseFloat(
                                            product.price
                                          );
                                          console.log(strToNumMethod1);

                                          let strToNumMethod2 = parseInt(
                                            product.price,
                                            10
                                          );
                                          console.log(strToNumMethod2);

                                          let strToNumMethod3 = parseInt(
                                            product.price
                                          );
                                          console.log(strToNumMethod3);

                                          console.log(
                                            strToNumMethod1 * product.quantity
                                          );
                                        }}
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div className=" text-black dark:text-white">
                                        <div className="flex justify-between text-base font-medium text-black dark:text-white">
                                          <h3>
                                            <div>{product.itemName}</div>
                                          </h3>
                                          <p className="ml-4">
                                            price:{product.price}
                                          </p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500 dark:text-white">
                                          Qty {product.quantity}
                                        </p>

                                        <div className="flex">
                                          <button
                                            // onClick={handleRemove(product.id)}
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <div className=" flex items-center justify-center text-black dark:text-white h-full">
                            There is no any item in cart
                          </div>
                        )}
                      </div>

                      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium dark:text-white text-gray-900">
                          <p>Subtotal</p>
                          <p>
                            Total Cart Value: {cart.length > 0 ? "40$" : "0$"}{" "}
                          </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <a
                            onClick={() => {
                              setOpen(!open);
                              handleShopingDone();
                            }}
                            href="#"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                            Checkout
                          </a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or &nbsp;
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => {
                                // setOpen(!open);
                              }}>
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
