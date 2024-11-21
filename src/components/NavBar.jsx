import { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

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
        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex">D</div>
    </div>
  );
};

export default NavBar;
