import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "./utils/store";
import { ToggelMenu } from "../component/utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-flow-col p-4 m-1 shadow items-center">
      <div className="flex flex-wrap mx-5 items-center col-span-1 cursor-pointer">
        <img
          onClick={() => {
            dispatch(ToggelMenu());
          }}
          className="h-6 pr-3 "
          alt="menus"
          src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/menu-1024.png"
        />
        <img
          className="h-12"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="logo"
        />
      </div>

      <div className="col-span-10 items-center">
        <input
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-500 p-2 rounded-r-full px-5 py-2 bg-gray-200">
          🔍
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
        />
      </div>
    </div>
  );
};

export default Head;
