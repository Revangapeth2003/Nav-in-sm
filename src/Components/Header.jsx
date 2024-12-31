import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container flex flex-col width-full md:flex-row justify-between py-8 px-16 bg-slate-300 lg:min-w-full">
      <h1 className="text-xl font-bold mb-4 md:mb-0">Header</h1>

      <button
        className="absolute right-4 top-4 md:hidden text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen ? "true" : "false"}
        aria-controls="main-menu"
      >
        &#9776;
      </button>

      <nav>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:flex-row flex-col md:block`}
        >
          <li>
            <Link to="/" className="mr-6 mb-4 md:mb-0">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="mr-6 mb-4 md:mb-0">
              About
            </Link>
          </li>
          <li>
            <Link to="/features" className="mr-6 mb-4 md:mb-0">
              Features
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mr-6 mb-4 md:mb-0">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
