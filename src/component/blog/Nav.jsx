import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-2xl fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20 relative">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="https://aaragroups.com/logo.png"
            alt="Logo"
            className="h-30 w-auto"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center text-xl lg:text-xl space-x-8 font-bold">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Projects</li>
          <li className="hover:text-orange-500 cursor-pointer">Subsiders</li>
          <li className="hover:text-orange-500 cursor-pointer">Career</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          <li className="hover:text-orange-500 cursor-pointer">Training</li>

          <div className=" relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-3xl focus:outline-none"
            >
              {menuOpen ? <IoClose /> : <IoMenu />}
            </button>

            {/* Mobile Dropdown Menu beside icon */}
            {menuOpen && (
              <div className="absolute right-0  mt-2 lg:w-90 bg-white shadow-lg rounded-xl p-4 ">
                <ul className="space-y-4 lg:space-y-8 text-lg  font-semibold ">
                  <img
                    src="https://aaragroups.com/logo.png"
                    className="w-10  h-auto mx-auto "
                    alt="logo"
                  />
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Navigate Your Next
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Industries
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Services
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Plateforms
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    About Us
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Career
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Blog
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Projects
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Contact Us
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Training
                  </li>
                  <li className="hover:text-orange-500 cursor-pointer border-b border-orange-300">
                    Form
                  </li>
                </ul>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
