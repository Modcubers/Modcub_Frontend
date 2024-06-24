import React from "react";

const NewArrivalsCard = ({ data }) => {
  // Check if the product has a price and it's a number

  return (
    <div className="flex flex-row items-center justify-between p-4 rounded-lg shadow-md">
      <img
        src={data.images && data.images[0]?.url}
        alt={data.category || "Product Image"}
        className="w-[100px] h-[100px] rounded-lg object-cover"
      />
      <div className="mt-2 text-left">
        <p className="text-gray-700 font-semibold">
          {data.category || "Category"}
        </p>
        <p className="text-black mt-1">
          Starting at Rs<span className="font-bold"> {data.discountPrice}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default NewArrivalsCard;
