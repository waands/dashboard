import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { Button } from ".";
import { cartData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const Notification = () => {
  const { currentColor, setSeeCart } = useStateContext();

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0">
      <div className="float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg dark:text-gray-200">
            Carrinho de compras
          </p>
          <button
            type="button"
            onClick={() => setSeeCart(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xs p-3 dark:hover:bg-main-dark-bg hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {cartData?.map((item, index) => (
          <div key={index}>
            <div className="flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4">
              <img className="rounded-lg h-80 w-240" src={item.image} alt="" />
              <div>
                <p className="font-semibold dark:text-gray-200">{item.name}</p>
                <p className="text-gray-600 text-sm dark:text-gray-400 font-semibold">
                  {item.category}
                </p>
                <div className="flex gap-4 mt-2 items-center">
                  <p className="font-semibold text-lg">{item.price}</p>
                  <div className="flex items-center border-1 border-r-0 border-color rounded">
                    <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 cursor-pointer">
                      <AiOutlineMinus />
                    </p>
                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">
                      1
                    </p>
                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600 cursor-pointer">
                      <AiOutlinePlus />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 mb-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub total</p>
            <p className="font-semibold">R$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">R$890</p>
          </div>
        </div>

        <div className="mt-5" onClick={() => setSeeCart(false)}>
          <Button
            color="white"
            bgColor={currentColor}
            text="Finalizar compra"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
