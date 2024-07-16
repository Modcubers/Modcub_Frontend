import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import SidebarLink from "../components/SidebarLink";
import headerbg from "../Assests/Images/header.png";

const ReturCenter = () => {
  // Placeholder data until backend integration
  const demoImages = [
    "https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=3HUg5TdHHWq4rmYJ7lA0Jn9koAesfCrO4lFiEaUFKuI=",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
    "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
  ];

  return (
    <>
      <Header activeHeading={0} navbar={true} />
      <div className="bg-[#E7F2F9]">
        <div className="relative">
          <img
            src={`${headerbg}`}
            alt="Demo Image 1"
            className="w-full mb-6 md:mb-0 h-[100px]"
          />
          <div className="absolute top-[30%] left-[5%]  text-gray-100 text-2xl md:text-4xl font-Poppins font-bold">
            Return Center
          </div>
        </div>

        <div className=" container mx-auto py-8 flex flex-col md:flex-row">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">
              🛍️ Welcome to the ModCub Return Center! 📦
            </h1>
            <span className="text-red-800">
              *Your product returned within the 7 working days & refund will be
              intiated in 14 working days*
            </span>
            <span></span>
            <p className="text-lg mb-6">
              We understand that sometimes purchases don't meet expectations,
              and we're here to make the return process as seamless as possible.
              Our Return Center is designed to guide you through the steps to
              initiate a return, exchange, or refund for your ModCub purchases.
            </p>
            <p className="text-lg mb-6">
              *Our Return Policy:*
              <b>
                - We want you to shop with confidence at ModCub, which is why we
                offer a hassle-free return policy for most items within 7 days
                of delivery.
              </b>
              - To be eligible for a return, your item must be unused, in the
              same condition that you received it, and in its original
              packaging. - Certain items, such as perishable goods, personalized
              items, and final sale items, may not be eligible for return.
              Please refer to the product description or contact our customer
              support team for more information.
            </p>
            <ol className="text-lg mb-6 ">
              *How to Initiate a Return:*
              <li>
                1. Log In to Your Account: Navigate to the "My Orders" section
                of your ModCub account and select the order containing the
                item(s) you wish to return.
              </li>
              <li>
                2. Choose the item(s) you'd like to return and indicate the
                reason for the return. containing the item(s) you wish to
                return.
              </li>
              <li>
                3. Follow the prompts to submit your return request. You'll
                receive a confirmation email with further instructions on how to
                proceed.
              </li>
              <li>
                4. Carefully package the item(s) you're returning, ensuring
                they're securely packed to prevent damage during transit.
              </li>
              <li>
                5. Use the provided shipping label or instructions to send your
                return back to the designated return address.{" "}
                <b>
                  Please note that return shipping costs may apply, unless the
                  return is due to a mistake on our part.
                </b>{" "}
              </li>
              <li>
                6. Keep an eye on your return shipment's tracking information to
                monitor its progress.
              </li>
              <li>
                7. Once we receive and inspect your return, we'll process your
                refund or exchange according to our return policy. Refunds will
                be issued to the original payment method used for the purchase.
              </li>
            </ol>
            <p className="text-lg mb-6">
              If you have any questions or need assistance with your return, our
              dedicated customer support team is here to help. Contact us via
              email at viralproduction.studios@gmail.com or through our online
              chat support for prompt assistance.
            </p>
            <p className="text-lg mb-6">
              *Please Note:* - Returns that do not meet our return policy
              criteria may be subject to additional fees or refusal. -
              Processing times for refunds and exchanges may vary depending on
              your location and the nature of your return. - For exchanges,
              availability of replacement items may be subject to stock
              availability.
            </p>
            <p className="text-lg mb-6">
              Thank you for shopping with ModCub. We appreciate your business
              and strive to make every shopping experience a positive one. If
              there's anything else we can do to assist you, please don't
              hesitate to reach out. Happy Shopping
            </p>{" "}
          </div>

          {/* Show sidebar only on medium and larger screens */}
          <div className="w-full md:w-1/4 ml-0 md:ml-8">
            <SidebarLink />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ReturCenter;
