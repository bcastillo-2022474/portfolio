import { Navbar } from "../components/nav-bar.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Outlet } from "react-router-dom";
export function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col h-dvh overflow-y-hidden">
      <div className="sm:hidden px-5 py-3 text-gray-300 bg-main-ultra-dark w-full z-10">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="text-2xl"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <Navbar isOpen={isOpen} className="sm:hidden grow text-gray-300 z-10" />
      <div className="bg-main absolute flex text-gray-300 grow sm:relative h-full">
        <Navbar isOpen={isOpen} className="hidden sm:block fixed h-full" />
        <div className="px-3 py-10 sm:px-14 overflow-y-scroll scroll-py-16 md:scroll-py-0 overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
