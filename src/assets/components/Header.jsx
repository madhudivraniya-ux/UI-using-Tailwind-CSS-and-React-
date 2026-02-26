import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">


          <a href="#" className="flex items-center gap-2 font-extrabold text-xl">

            Moonveil
          </a>


          <nav className="hidden md:flex items-center gap-8 font-medium">
            <nav className="hidden md:flex items-center gap-8 font-medium">
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </nav>
           
          </nav>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition">
              Sign In
            </button>


          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
