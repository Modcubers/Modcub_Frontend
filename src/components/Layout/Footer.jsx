import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlinePhone
} from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";

import modcub from "../../Assests/modcub.jpg";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      {/* <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-[#56d879]">Subscribe</span> us for get news{" "}
          <br />
          events and offers
        </h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter your email..."
            className="text-gray-800
                sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
            Submit
          </button>
        </div>
      </div> */}
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src={modcub}
            width={300}
            height={100}
            alt=""
            style={{ filter: "invert(100)" }}
          />
          <br />
          <p>Discover, Shop, Delight - Your world, curated by Modcub.</p>
          <div className="flex items-center mt-[15px]">
            <a
              href="https://www.facebook.com/profile.php?id=61559028762884"
              target="/"
            >
              {" "}
              <AiFillFacebook size={25} className="cursor-pointer" />
            </a>

            <a href="https://twitter.com/Rajat_khanna123" target="/">
              <AiOutlineTwitter
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>

            <AiFillInstagram
              size={25}
              style={{ marginLeft: "15px", cursor: "pointer" }}
            />
            <a
              href="https://youtube.com/@Modcub-by6zj?si=NqLR1sfIz3Ej_EQf"
              target="/"
            >
              <AiFillYoutube
                size={25}
                style={{ marginLeft: "15px", cursor: "pointer" }}
              />
            </a>
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Contact</h1>
          <li
            className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
          >
            Rajpura Gurmandi near Udhbav Boys Hostel, Roop nagar, New Delhi,
            Delhi, 110007
          </li>
          <li
            className="flex justify-start items-center text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
          >
            <AiOutlineMail
              size={20}
              style={{marginRight:"5px",cursor: "pointer" }}
            ></AiOutlineMail>
            email@gmail.com
          </li>
          <li
            className="flex justify-start items-center text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
          >
            <AiOutlinePhone
              size={20}
              style={{marginRight:"5px",cursor: "pointer" }}
            ></AiOutlinePhone>
            7231987257
          </li>
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Modcub. All rights reserved.</span>
        <span></span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
