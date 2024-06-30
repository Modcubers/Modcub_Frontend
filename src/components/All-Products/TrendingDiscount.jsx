import React from "react";
import styles from "../../styles/styles";
import discountimg from "../../Assests/Images/shoes.png";

const TrendingDiscounts = () => {
  return (
    <div
      className={`w-full h-[300px] flex justify-evenly max-400px:justify-between max-sm:justify-between items-center bg-[#047BBE] p-6 rounded-sm mb-12 shadow-xl mt-5`}
      id="categories"
    >
      <img
        src={discountimg}
        alt="Discount image"
        className="w-3/12 h-auto object-contain max-sm:w-5/12"
      />
      <p className="text-[25px] text-white max-800px:text-lg max-sm:text-[10px]">
        Sports Shoes, "enjoy your life the way you want" <br /> <span className="text-red-600">-32%</span> $60
      </p>
    </div>
  );
};

export default TrendingDiscounts;
