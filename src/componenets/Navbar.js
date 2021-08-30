import React from "react";
import logo from "../images/logo-web.svg";
import { Link } from "react-router-dom";
import { SearchIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
export const Navbar = () => {
  return (
    <nav
      className="sticky top-0 z-50 grid grid-cols-3 
    bg-white shadow-md p-5 md:px-10"
    >
      {/*left*/}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Link to="/">
          <img src={logo} className="h-9" alt="Tovlo" />
        </Link>
      </div>

      {/*middle*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 flex-grow bg-transparent outline-none
            text-gray-600 placeholder-gray-600"
        />
        <SearchIcon
          className=" hidden md:inline-flex h-8 bg-red-400 text-white
          rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/*right*/}
      <div className="flex items-center space-x-4 justify-end">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <div
          className="flex items-center space-x-2 border-2 p-2 rounded-full
          cursor-pointer"
        >
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;