import React from "react";

const Touch = () => {
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
      href: "/",
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
    <div className="flex flex-col lg:flex-row backdrop-blur-xl w-full h-auto lg:h-[34rem] p-4 lg:p-0">
      <div className="rounded-lg flex-col lg:ml-[10rem]">
        <div className="mt-10 lg:ml-5 p-4">
          <h2
            className="text-xl lg:text-2xl text-start"
            style={{ fontFamily: "Josefin Sans" }}
          >
            We would love to be a part of your Smile Reimagining Journey...
          </h2>
          <h3 className="text-2xl lg:text-3xl text-blue-500 text-start">
            SG Dental Clinic
          </h3>
          <div className="flex flex-col mt-5 space-y-4 lg:space-y-5">
            <h4
              className="flex items-start lg:text-start text-sm lg:text-base"
              style={{ fontFamily: "Josefin Sans" }}
            >
              <span className="p-2 lg:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 lg:w-8 h-6 lg:h-8"
                >
                  <path d="M256 0c17.7 0 32 14.3 32 32l0 34.7C368.4 80.1 431.9 143.6 445.3 224l34.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-34.7 0C431.9 368.4 368.4 431.9 288 445.3l0 34.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7C143.6 431.9 80.1 368.4 66.7 288L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l34.7 0C80.1 143.6 143.6 80.1 224 66.7L224 32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                </svg>
              </span>
              Plot No:12H, 3rd floor, Above Union Bank <br />/ Naturals salon,
              Nallagandla
            </h4>

            <h4
              className="flex items-start lg:text-start text-sm lg:text-base"
              style={{ fontFamily: "Josefin Sans" }}
            >
              <span className="p-2 lg:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 lg:w-8 h-6 lg:h-8"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
              </span>
              Mon - Fri: 9.00 am - 8.00 pm, <br /> Sat - Sun 9.00 am - 10.00 pm
            </h4>

            <h4
              className="flex items-start lg:text-start text-sm lg:text-base"
              style={{ fontFamily: "Josefin Sans" }}
            >
              <span className="p-2 lg:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 lg:w-8 h-6 lg:h-8"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                </svg>
              </span>
              contactus@sgdental.com
            </h4>
          </div>

          <h3
            className="text-3xl lg:text-5xl p-4 text-blue-600 text-start"
            style={{ fontFamily: "Josefin Sans" }}
          >
            Follow Us
          </h3>
          <div className="flex flex-wrap justify-center lg:justify-start space-x-3 mt-4">
            {/* Social media icons */}
            {socialIcons.map((e) => (
              <a
                className="flex items-center justify-center w-12 h-10  text-blue-850 hover:animate-bounce  hover:bg-slate-300 rounded-full"
                href="https://m.facebook.com/C.SDentalHospital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{e.appname}</span>
                <svg
                  className="w-8 h-8"
                  viewBox={e.viewBox}
                  fill="currentColor"
                >
                  <path d={e.path_d} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-40 w-full md:w-3/4 lg:w-[38rem] flex justify-end mr-2 items-center">
        <iframe
          className="w-full h-60 sm:h-72 md:h-80 lg:h-[20rem] rounded-lg border-0"
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799181496!2d-74.25987571760744!3d40.69767006358627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b60165%3A0x8b621f8a7a7d28a4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633452834502!5m2!1sen!2s"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Touch;
