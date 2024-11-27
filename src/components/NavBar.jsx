import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { LogIn, Menu, X, Home, TrendingUp, Star, Info } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-xl font-bold text-white">B</span>
              </div>
              <span className="text-xl font-bold text-blue-600">Blog</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600"
              >
                <Home className="size-5" />
                <span className="font-medium">Home</span>
              </Link>
              <Link
                to="/posts?sort=trending"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600"
              >
                <TrendingUp className="size-5" />
                <span className="font-medium">Trending</span>
              </Link>
              <Link
                to="/posts?sort=popular"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600"
              >
                <Star className="size-5" />
                <span className="font-medium">Popular</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-blue-600"
              >
                <Info className="size-5" />
                <span className="font-medium">About</span>
              </Link>

              {/* Auth Buttons */}
              <SignedOut>
                <Link
                  to="/login"
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700"
                >
                  Login
                  <LogIn className="size-4" />
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu (outside header) */}
      {open && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl">
            <div className="flex h-16 items-center justify-between border-b px-4">
              <span className="text-lg font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex h-[calc(100%-64px)] flex-col">
              <nav className="flex-1 space-y-1 p-4">
                <Link
                  to="/"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50"
                  onClick={() => setOpen(false)}
                >
                  <Home className="size-5 text-blue-600" />
                  <span className="font-medium">Home</span>
                </Link>
                <Link
                  to="/posts?sort=trending"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50"
                  onClick={() => setOpen(false)}
                >
                  <TrendingUp className="size-5 text-blue-600" />
                  <span className="font-medium">Trending</span>
                </Link>
                <Link
                  to="/posts?sort=popular"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50"
                  onClick={() => setOpen(false)}
                >
                  <Star className="size-5 text-blue-600" />
                  <span className="font-medium">Popular</span>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-blue-50"
                  onClick={() => setOpen(false)}
                >
                  <Info className="size-5 text-blue-600" />
                  <span className="font-medium">About</span>
                </Link>
              </nav>

              <div className="border-t p-4">
                <SignedOut>
                  <Link
                    to="/login"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700"
                    onClick={() => setOpen(false)}
                  >
                    <span className="font-medium">Login</span>
                    <LogIn className="size-5" />
                  </Link>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center justify-center py-2">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
