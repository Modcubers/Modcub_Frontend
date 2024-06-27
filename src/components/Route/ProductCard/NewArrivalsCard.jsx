import React from "react";
import { Link } from "react-router-dom";

const NewArrivalsCard = ({ data,isEvent }) => {
  // Check if the product has a price and it's a number

  return (
    <Link
      to={`${
        isEvent === true
          ? `/product/${data._id}?isEvent=true`
          : `/product/${data._id}`
      }`}
    >
      <div className="flex flex-row items-center justify-between p-2 rounded-lg shadow-md hover:bg-gray-100">
        <img 
          src={data.images && data.images[0]?.url}
          alt={data.category || "Product Image"}
          className="w-[100px] h-[100px] rounded-lg object-cover"
        />
        <div className="mt-2 text-left">
          <p className="text-gray-700 font-semibold">
            {data.name.length > 20 ? data.name.slice(0, 18) + ".." : data.name}
          </p>
          <p className="text-black mt-1">
            <span className="font-bold"> {data.discountPrice} Rs</span>{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewArrivalsCard;
