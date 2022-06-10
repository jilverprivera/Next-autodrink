import React from "react";
import { Logo } from "./Logo";

const Header = () => {
  return (
    <div className="w-full">
      <div className="flex h-20 max-w-7xl mx-auto items-center justify-between flex-row w-full">
        <Logo width="55" height="55" bgColor="#5B21B6" initials="#F8F8F8" />
        <button className="border-2 px-3 py-1 rounded-md border-violet-800 text-violet-800 hover:bg-violet-800 hover:text-white">
          Ingresar
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
