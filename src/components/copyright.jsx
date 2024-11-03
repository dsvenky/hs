import React from "react";
import { Typography } from "@material-tailwind/react";

const CopyRight = () => {
  return (
    <div>
      <footer className="flex flex-col items-center justify-center gap-y-6 py-6 border-t border-blue-gray-50 backdrop-blur-lg md:flex-row md:justify-between">
        <Typography
          color="blue-gray"
          className="font-normal text-center md:text-left md:ml-10"
        >
          &copy; 2024 SG Dental Clinic
        </Typography>
        <ul className="flex flex-col items-center gap-y-2 md:flex-row md:gap-x-8 md:mr-10">
          <li>
            <Typography
              as="a"
              href="/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/services"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Services
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/Contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default CopyRight;
