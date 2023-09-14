import { PropTypes } from "prop-types";

const Hamburger = ({ isMenuOpen, toggleMenu }) => {
  return (
    <>
      {/* Hamburger Icon */}
      <button
        id="menu-btn"
        className={`block hamburger caret-transparent md:hidden focus:outline-none
        ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </>
  );
};

Hamburger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Hamburger;
