import { useState } from "react";
import Logo from "./Logo";
import { LogIn, Menu, X, Home, TrendingUp, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-16 w-full items-center justify-between md:h-20">
      {/* LOGO */}
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <Logo />
        </Link>
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
          className={`absolute top-16 flex h-screen w-full flex-col items-center justify-center gap-8 bg-[#e6e6ff] text-lg font-medium transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}
        >
          <Link to="/" className="flex items-center gap-2">
            <Home className="size-5" />
            Home
          </Link>
          <Link to="/posts?sort=trending" className="flex items-center gap-2">
            <TrendingUp className="size-5" />
            Trending
          </Link>
          <Link to="/posts?sort=popular" className="flex items-center gap-2">
            <Star className="size-5" />
            Most Popular
          </Link>
          <Link to="/about" className="flex items-center gap-2">
            <Info className="size-5" />
            About
          </Link>
          <Link to="/login" className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-white transition-colors hover:bg-blue-600">
              Login <LogIn className="size-5 cursor-pointer" />
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-8 font-medium md:flex xl:gap-12">
        <Link to="/" className="flex items-center gap-2">
          <Home className="size-5" />
          Home
        </Link>
        <Link to="/posts?sort=trending" className="flex items-center gap-2">
          <TrendingUp className="size-5" />
          Trending
        </Link>
        <Link to="/posts?sort=popular" className="flex items-center gap-2">
          <Star className="size-5" />
          Most Popular
        </Link>
        <Link to="/about" className="flex items-center gap-2">
          <Info className="size-5" />
          About
        </Link>
        <SignedOut>
          <Link to="/login" className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-white transition-colors hover:bg-blue-600">
              Login <LogIn className="size-5 cursor-pointer" />
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default NavBar;
