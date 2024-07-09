import React from "react";
import { useSearchParams } from "react-router-dom";
import shoesimg from "../../Assests/Images/shoes.png";
import Cosmeticspng from "../../Assests/Categories/Cosmetics.png";
import HomeDecor from "../../Assests/Categories/HomeDecor.png";
import MobileAccessories from "../../Assests/Categories/Mobile_Accessories.png";
import Music from "../../Assests/Categories/Music.png";
import Supplements from "../../Assests/Categories/Supplements.png";
import cloths from "../../Assests/Images/clothes.png";

const discountsData = {
  Electronics: {
    text: "Mobile Accessories Headphones, Charging cable, Phone covers",
    discount: "Get at -40%",
    price: "$200",
    img: MobileAccessories,
  },
  Cloths: {
    text: "Fashionable Clothes",
    discount: "-15%",
    price: "$50",
    img: cloths,
  },
  "Cosmetics and Body Care": {
    text: "Check out the new Sell on Cosmetics products With all Verties from Lipstick to Foundation ",
    discount: "Get at -20%",
    price: "$30",
    img: Cosmeticspng,
  },
  Shoes: {
    text: "Sports Shoes",
    discount: "-32%",
    price: "$60",
    img: shoesimg,
  },
};

const TrendingDiscounts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  console.log(category);
  const discount = discountsData[category]; // Default to Shoes if category is not found

  return (
    <div
      className={`w-11/12 mx-auto h-[300px] flex justify-evenly max-400px:justify-between max-sm:justify-between items-center bg-[#047BBE] p-6 rounded-sm mb-12 shadow-xl mt-5`}
      id="categories"
    >
      <img
        src={discount.img}
        alt="Discount image"
        className="w-[40%] h-auto object-contain max-sm:w-5/12"
      />
      <p className="text-[25px] w-[50%] text-white max-800px:text-lg max-sm:text-[10px]">
        {discount.text} <br />
        <span className="text-white">{discount.discount}</span>{" "}
        {/* {discount.price} */}
      </p>
    </div>
  );
};

export default TrendingDiscounts;
