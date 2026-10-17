import React, { useEffect, useState } from "react";
import { navLinks } from "../data/data";
import { MenuIcon, XIcon } from "lucide-react";
// import HeroSection from "../Section/HeroSection";

const Navbar = () => {
  const [mobileOpen, setMobileOpne] = useState(false);
  const [scrolled,setScrolled] = useState(false)
  useEffect( ()=> {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10 );
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <nav className={`fixed top-0 z-20 px-auto w-full transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'} `}>
        <div className="flex items-center justify-between font-medium py-4 mx-auto max-w-7xl">
          <a href="/">
            <img src="/assets/logo.svg" alt="logo" />
          </a>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-10 text-[20px]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[23px] hover:text-[#ff7200]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#booking-process"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-[#fff] p-[10px_25px] text-[20px] rounded-[30px] transition"
          >
            Book A Table
          </a>
          <button
            onClick={() => setMobileOpne(true)}
            className="hover:cursor-pointer md:hidden bg-zinc-800 text-white p-2 rounded-[6px] aspect-square"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>
      {/* Mobile NAvigation Drawer */}
      <div
        className={`flex flex-col items-center justify-center p-8 fixed inset-0 bg-white/70 backdrop-blur-md z-40 transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col items-center space-y-6 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl text-zinc-800 hover:text-orange-500 transition"
              onClick={() => setMobileOpne(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setMobileOpne(false)}
            className="bg-zinc-800 text-white p-2 rounded-md aspect-square"
          >
            <XIcon />
          </button>
        </div>
      </div>
      {/* <HeroSection/> */}
    </>
  );
};

export default Navbar;
