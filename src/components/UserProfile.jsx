import React from "react";
import { MdOutlineCancel } from "react-icons/md";

import { Button } from ".";
import { userProfileData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import avatar from "../data/avatar.jpg";

const Notification = () => {
  const { currentColor, setSeeProfile } = useStateContext();

  return (
    <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">Perfil</p>
        <button
          type="button"
          onClick={() => setSeeProfile(false)}
          style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
          className="text-2xs p-3 dark:hover:bg-main-dark-bg hover:drop-shadow-xl hover:bg-light-gray"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="perfil do usuário"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            {" "}
            Wanderson Teixeira
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Administrador
          </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400">
            wandersontrj@gmail.com
          </p>
        </div>
      </div>

      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5" onClick={() => setSeeProfile(false)}>
          <Button
            color="white"
            bgColor={currentColor}
            text="Sair"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
