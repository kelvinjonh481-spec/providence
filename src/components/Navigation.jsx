import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
// import Logo from "../../assets/icons/logo.png";

const Navigation = () => {
  const [clicked, setClicked] = useState(true);
  const changeToggle = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={`max-w-full w-full fixed z-50`}>
      <div className="mx-auto py-7 bg-black px-6 md:px-12 lg:px-20 backdrop-blur ">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-white">
              VOUGE
            </Link>
          </div>
          {clicked ? (
            <div className="lg:hidden text-white" onClick={changeToggle}>
              <FaBarsStaggered />
            </div>
          ) : (
            <div className="lg:hidden text-white" onClick={changeToggle}>
              <IoClose />
            </div>
          )}
          <div className="hidden lg:block ms-auto">
            <ul className="flex items-center justify-start lg:gap-16">
              {NavLinks.map((link, key) => (
                <li key={key} className="text-sm text-white">
                  <NavLink className="text-white/80 hover:text-[#0567FB] font-normal" to={link.url}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={!clicked ? "navbar_sm" : "navbar_lg"}>
            <div className="flex flex-col sm:justify-start justify-between h-full pt-24 px-5 sm:px-10 pb-40">
              <ul className="flex flex-col items-center justify-start gap-4">
                {NavLinks.map((link, key) => (
                  <li
                    key={key}
                    className="text-sm text-white text-left w-full font-medium"
                  >
                    <NavLink
                      className="hover:opacity-100 hover:bg-[#0567FB] hover:text-white w-full px-4 py-3 rounded-md block"
                      to={link.url}
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

const NavLinks = [
  {
    url: "/",
    name: "About",
  },
  {
    url: "/",
    name: "Services",
  },
  {
    url: "/",
    name: "Blog",
  },
  {
    url: "/",
    name: "Testimonials",
  },
  {
    url: "/",
    name: "Community",
  },
];
