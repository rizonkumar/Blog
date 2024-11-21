import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between md:h-20">
      {/* LOGO */}
      <div className="flex items-center gap-4">
        <Logo />
        <span className="text-2xl font-bold text-blue-500">Blog</span>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">M</div>
      {/* Desktop Menu */}
      <div className="hidden md:flex">D</div>
    </div>
  );
};

export default NavBar;
