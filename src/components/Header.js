import { useState } from "react";
import Sidebar from "./Sidebar";
import {
  BadgeCheckIcon,
  MenuAlt1Icon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from "@heroicons/react/solid";
import HeaderContent from "./HeaderContent";

const Header = () => {
  const [sideBar, setSidebar] = useState(false);

  const toggle = () => {
    setSidebar(!sideBar);
  };
  //
  return (
    <header className="bg-gradient-to-r from-white via-white to-gray-50 sm:min-h-[50vh]  lg:min-h-screen">
      <main className="lg:max-w-7xl lg:mx-auto">
        <nav className="flex items-center justify-between py-4 px-4 lg:px-0">
          <div>
            <img src="/images/Logo.png" alt="" />
          </div>
          <div className="mr-16">
            <img
              src="/images/Slice.png"
              alt=""
              className="hidden sm:inline-flex h-14"
            />
          </div>
          <div className="sm:hidden px-3">
            {sideBar ? (
              <XIcon className="h-10 text-yellow-500" onClick={toggle} />
            ) : (
              <MenuAlt1Icon className="h-10 text-yellow-500" onClick={toggle} />
            )}
          </div>
          <div className="hidden sm:flex items-center space-x-5">
            <SearchIcon className="h-7 text-yellow-500 cursor-pointer" />
            <BadgeCheckIcon className="h-7 text-yellow-500 cursor-pointer" />
            <ShoppingBagIcon className="h-7 text-yellow-500 cursor-pointer" />
          </div>
        </nav>
        {sideBar && <Sidebar />}
        <div className="sm:grid sm:grid-cols-2 sm:py-3 lg:py-10 sm:px-5 lg:px-0">
          <HeaderContent />
        </div>
      </main>
    </header>
  );
};

export default Header;
