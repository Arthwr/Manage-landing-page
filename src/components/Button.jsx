import { PropTypes } from "prop-types";

const Button = ({ color, hidden }) => {
  const colorVariants = {
    whiteOnRed: "text-white bg-brightRed",
    redOnWhite: "text-brightRed bg-white shadow-2xl hover:bg-gray-800",
  };
  // Hide button element on small screen if hidden prop is set to true
  const hiddenClass = hidden === "true" ? "hidden md:flex" : "";

  return (
    <a
      href="#"
      className={`p-3 px-6 pt-2 ${colorVariants[color]} ${hiddenClass} rounded-full baseline hover:bg-brightRedLight`}
    >
      Get Started
    </a>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  hidden: PropTypes.string,
};

export default Button;
