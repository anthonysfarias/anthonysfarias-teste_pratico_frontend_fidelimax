import React from "react";
import {
  Bars3CenterLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center px-8 h-14 bg-slate-700 justify-between">
        <div className="flex justify-between gap-3 items-center">
          <Bars3CenterLeftIcon className="block h-5 w-5 cursor-pointer" aria-hidden="true" />
          <span>
            SUA <span className="text-orange-400">LOGO</span>
          </span>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            {/* <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" /> */}
            s
          </div>
          <p>asdasd</p>
          <ChevronDownIcon className="block h-3 w-3 cursor-pointer" aria-hidden="true" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
