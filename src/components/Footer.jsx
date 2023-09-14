import logoWhite from "../assets/logo-white.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconYoutube from "../assets/icon-youtube.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and Social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="max-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2023. All Rights Reserved.
          </div>
          {/* Logo */}
          <div>
            <img className="h-8" src={logoWhite} alt="Logo" />
          </div>
          {/* Social Links container */}
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img className="h-8" src={iconFacebook} alt="Facebook icon" />
            </a>
            <a href="#">
              <img className="h-8" src={iconYoutube} alt="Youtube icon" />
            </a>
            <a href="#">
              <img className="h-8" src={iconTwitter} alt="Twitter icon" />
            </a>
            <a href="#">
              <img className="h-8" src={iconPinterest} alt="Pinterest icon" />
            </a>
            <a href="#">
              <img className="h-8" src={iconInstagram} alt="Instagram icon" />
            </a>
          </div>
        </div>
        {/* List Container */}
        <div className="flex flex-wrap justify-around gap-1 md:space-x-5 md:flex-row">
          <div className="flex flex-col space-y-3 text-white text-center">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white text-center">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
          {/* Form and Copyright container */}
          <div className="flex flex-col justify-between mt-6 md:mt-0">
            <form className="md:flex">
              <div className="flex flex-col space-y-4 md:space-x-3 md:space-y-3 md:block">
                <input
                  className="flex-1 px-4 rounded-full focus:outline-none md:max-w-[90%]"
                  type="text"
                  placeholder="Subscribe to our mail"
                />
                <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none md:max-w-[50%]">
                  Go
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; 2023, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
