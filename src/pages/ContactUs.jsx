import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import contactusimg from "../Assests/Images/contactus.png";
import {
  AiFillMail,
  AiFillPhone,
  AiFillEnvironment,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const ContactUs = () => {
  // Placeholder data until backend integration
  const demoImages = [
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
  ];

  return (
    <>
      <Header navbar={true} />
      <div className="bg-[#E7F2F9]">
        <div className="w-full mx-auto bg-[#124888]">
          <div className="w-full mx-auto h-[300px] flex items-center justify-between max-800px:h-[200px]">
            <div className="flex justify-center items-center w-[50%]">
              <h1 className="text-6xl font-semibold text-white max-800px:text-2xl">
                Get in Touch
              </h1>
            </div>
            <img src={contactusimg} alt="" className="h-[300px] max-800px:h-[200px]" />
          </div>
        </div>
        <div className="flex mt-[-50px] max-800px:flex-col">
          <div className="w-11/12 800px:w-[40%] mx-auto bg-white p-4 mb-4 flex justify-center flex-col items-center ">
            <h1 className="text-2xl font-semibold text-left w-full">
              Contact Us
            </h1>
            <div className="flex flex-col justify-center w-full p-4">
              <a href="#" className="flex items-center my-2">
                <AiFillEnvironment className="text-lg mr-2" />
                11752/4, Sat Nagar, Karol Bagh, New Delhi-110005
              </a>
              <a href="#" className="flex items-center my-2">
                <AiFillMail className="text-lg mr-2" />
                viralproduction.studios@gmail.com
              </a>
              <a href="#" className="flex items-center my-2">
                <AiFillPhone className="text-lg mr-2" />
                9560154974
              </a>
            </div>
            <div className="flex justify-around w-full">
              <a href="#" className="">
                <AiFillTwitterSquare className="text-6xl"></AiFillTwitterSquare>
              </a>
              <a href="#" className="">
                <AiFillInstagram className="text-6xl"></AiFillInstagram>
              </a>
              <a href="#" className="">
                <AiFillYoutube className="text-6xl"></AiFillYoutube>
              </a>
            </div>
          </div>
          <div className="w-11/12 800px:w-[40%] mx-auto bg-white p-4 mb-4 flex justify-center flex-col items-center ">
            <h1 className="text-2xl font-semibold text-left w-full">
              Get In Touch
            </h1>
            <form
              action=""
              className="flex justify-center items-center flex-col w-[80%]"
            >
              <div className="w-full my-4">
                {/* <label htmlFor="name">Name</label> */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-gray-300 w-full border-none rounded-sm"
                />
              </div>
              <div className="w-full my-4">
                {/* <label htmlFor="">Email</label> */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-gray-300 w-full border-none rounded-sm"
                />
              </div>
              <div className="w-full my-4">
                {/* <label htmlFor="message">Message</label> */}
                <textarea
                  name="message"
                  id=""
                  rows={5}
                  placeholder="Message"
                  className="bg-gray-300 w-full border-none rounded-sm"
                ></textarea>
              </div>
              <button className="h-[40px] w-[150px] bg-[#005DC9] border-none rounded-lg text-white">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
