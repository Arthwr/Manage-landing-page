import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Hide mobile menu on desktop screens (> 768px)
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Bg overlay for open mobile menu */}
      <div
        className={`${
          isMenuOpen ? "" : "hidden"
        }  fixed h-screen w-full bg-gradient-to-r from-[rgba(0,0,0,0.7)] via-transparent to-[rgba(0,0,0,0.7)] z-0`}
      ></div>
      <nav className="relative container mx-auto p-6">
        {/* Flex Container */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="pt-2">
            <img src={logo} alt="Logo" />
          </div>
          {/* Menu Items */}
          <div className="hidden space-x-6 md:flex">
            <a href="#" className="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Product
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              About Us
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" className="hover:text-darkGrayishBlue">
              Community
            </a>
          </div>
          <Button color={"whiteOnRed"} hidden={"true"} />
          <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </nav>
    </>
  );
}
