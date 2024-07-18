import React from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const orders = [
  {
    title: "Want to manage your order?",
    description: "View, cancel or refund on product",
  },
  {
    title: "Need help with payment?",
    description: "Manage your payment methods",
  },
  {
    title: "Looking for deals?",
    description: "Check out the latest offers",
  },
  {
    title: "Looking for deals?",
    description: "Check out the latest offers",
  },
  {
    title: "Looking for deals?",
    description: "Check out the latest offers",
  },
];

const ReturCenter = () => {
  return (
    <>
      <Header activeHeading={0} navbar={true} />
      <div className="bg-[#E7F2F9] p-2">
        <div className="bg-white w-11/12 mx-auto my-4 border p-2">
          <h1>What are issue your facing ?</h1>
          <div className="flex flex-wrap items-center justify-center overflow-y-scroll max-450px:h-[400px]">
            {orders.map((order, index) => (
              <div
                key={index}
                className="h-[200px] m-4 w-[200px] bg-[#DDEFF7] flex flex-col justify-start items-start p-2"
              >
                <h1>{order.title}</h1>
                <p className="text-gray-600 mt-4">{order.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white w-11/12 mx-auto my-4 border p-2">
          <h1>Some Common Questions</h1>
          <div className="flex flex-col">
            <details className="m-2">
              I want to change the address of my order, if it possible now?
              <summary>I want to change the address of my order, if it possible now?</summary>
            </details>
            <details className="m-2">
              I want to change the address of my order, if it possible now?
              <summary>I want to change the address of my order, if it possible now?</summary>
            </details>
            <details className="m-2">
              I want to change the address of my order, if it possible now?
              <summary>I want to change the address of my order, if it possible now?</summary>
            </details>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturCenter;
