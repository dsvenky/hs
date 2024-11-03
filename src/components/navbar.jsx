import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Navbar open/close state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Main dropdown open/close state
  const [activeService, setActiveService] = useState(null); // State for active sub-services

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const services = [
    { name: "Teeth Fillings" },
    {
      name: "Common Problems",
      subService: [
        "Sensitive Teeth Treatment",
        "Mouth Ulcers",
        "Teeth Grinding",
      ],
    },
    { name: "Root Canal Treatment" },
    { name: "Caps & Bridges" },
    {
      name: "Dental Implant",
      subService: [
        "Single / Multi Teeth Replacement",
        "Full Mouth Fixed Teeth",
      ],
    },
    { name: "Dentures" },
    { name: "Braces & Invisible Aligners" },
    { name: "Kids Dentistry" },
    {
      name: "Surgeries",
      subService: ["Wisdom Teeth Removal", "Simple Extraction", "Other"],
    },
  ];
  const socialIcons = [
    {
      appname: "fb",
      href: "/",
      viewBox: "0 0 512 512",
      path_d:
        "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
    },
    {
      appname: "linkdin",
      href: "/",
      viewBox: "0 0 448 512",
      path_d:
        "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
    },
    {
      appname: "printerest",
      href: "/",
      viewBox: "0 0 384 512",
      path_d:
        "M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z",
    },
    {
      appname: "whatsapp",
      href: "",
      viewBox: "0 0 448 512",
      path_d:
        "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z",
    },
    {
      appname: "x",
      href: "/",
      viewBox: "0 0 512 512",
      path_d:
        "M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z",
    },
  ];

  return (
    <nav className="bg-blue-600 w-full p-4 z-30 relative flex flex-wrap items-center">
      {/* Toggle Button */}
      <button
        onClick={toggleNavbar}
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
        rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-dropdown"
        aria-expanded={isOpen ? "true" : "false"}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
          <path
            d="M1 1h15M1 7h15M1 13h15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>

      {/* Navbar Links */}
      <div
        className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto`}
        id="navbar-dropdown"
      >
        <ul className="flex flex-col md:flex-row justify-start space-x-3 gap-5 align-middle text-white 2xl:ml-2 lg:ml-6">
          <Link
            to="/"
            className="hover:bg-blue-400 py-2 px-4 rounded-lg text-lg"
          >
            Home
          </Link>

          <div
            className="relative inline-block z-30"
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              onMouseEnter={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center py-2 px-4 rounded-lg text-lg hover:bg-blue-400"
            >
              Services
              <i className="fa fa-caret-down ml-1"></i>
            </button>

            {/* Services Dropdown */}
            {isDropdownOpen && (
              <div className="absolute bg-white text-black mt-1 py-2 rounded shadow-md w-50 z-40">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setActiveService(index)}
                    onMouseLeave={() => setActiveService(null)}
                  >
                    <Link
                      to={`/${service.name.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100 w-full whitespace-nowrap"
                    >
                      {service.name}
                    </Link>
                    {activeService === index && service.subService && (
                      <div className="absolute left-full top-0 bg-white text-black py-2 rounded shadow-md w-50 z-50">
                        {service.subService.map((sub, subIndex) => (
                          <Link
                            key={subIndex}
                            to={`/${service.name.toLowerCase()}/${sub.toLowerCase()}`}
                            className="block px-4 py-1 text-gray-700 w-full hover:bg-gray-200 whitespace-nowrap"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="hover:bg-blue-400 py-2 px-4 rounded-lg text-lg"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:bg-blue-400 py-2 px-4 rounded-lg text-lg"
          >
            Contact
          </Link>
          <Link
            to="/blog"
            className="hover:bg-blue-400 py-2 px-4 rounded-lg text-lg"
          >
            Blog
          </Link>
          <Link
            to="/appointment"
            className="hover:bg-blue-400 py-2 px-4 rounded-lg text-lg"
          >
            Appointment
          </Link>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="hidden lg:block ml-auto">
        <div className="flex space-x-3">
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white hover:animate-bounce"
            >
              <span className="sr-only">{icon.appname}</span>
              <svg
                className="w-6 h-6"
                viewBox={icon.viewBox}
                fill="currentColor"
              >
                <path d={icon.path_d} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
