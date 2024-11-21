import { useState } from "react";
import Logo from "./Logo";
import { LogIn, Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-16 w-full items-center justify-between md:h-20">
      {/* LOGO */}
      <div className="flex items-center gap-4">
        <Logo />
        <span className="text-2xl font-bold text-blue-500">Blog</span>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* MOBILE MENU ICON */}
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`bg-[#e6e6ff]] absolute top-16 flex h-screen w-full flex-col items-center justify-center transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}
        >
          Menu
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Most Popular</a>
        <a href="">About</a>
        <a href="">
          <button className="flex items-center gap-1">
            Login <LogIn className="size-5 cursor-pointer" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
