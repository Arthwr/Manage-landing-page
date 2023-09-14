import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 50;
      setHasScrolled(scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        id="menu"
        className={`
      text-lg
      transform origin-top-right left-8 right-8 top-20
      transition-all duration-200 ease-in-out
      fixed flex flex-col items-center space-y-4
      font-bold bg-white drop-shadow-md
      sm:self-center rounded-2xl py-10 z-10 mx-5`}
        style={{
          transform: isMenuOpen ? "scale(1)" : "scale(0)",
        }}
      >
        {/* Mobile X button */}
        {hasScrolled && (
          <button
            className="absolute right-6 cursor-pointer h-6 w-6 caret-transparent"
            onClick={toggleMenu}
          >
            <span className="x-top"></span>
            <span className="x-bottom"></span>
          </button>
        )}

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
    </>
  );
};

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
