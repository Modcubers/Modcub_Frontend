import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";

import clothes_img from "../../../Assests/Images/clothes_1.png";
import { all } from "axios";

const FeaturedProduct = () => {
  //   const { allProducts } = useSelector((state) => state.products);

  //   return (
  //     <div
  //       className={`${styles.section} bg-white p-6 rounded-lg mb-12 shadow-xl mt-5`}
  //     >
  //       <h1 className="text-black underline text-xl">Featured Products</h1>

  //       <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
  //         {allProducts && allProducts.length !== 0 && (
  //           <>
  //             {allProducts &&
  //               allProducts.map((i, index) => (
  //                 <ProductCard data={i} key={index} />
  //               ))}
  //           </>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  const { allProducts } = useSelector((state) => state.products);

  return (
    <div
      className={`${styles.section} flex justify-between items-center bg-white p-6 rounded-lg mb-12 shadow-xl mt-5`}
    >
      <div className="w-[68%] flex flex-row flex-wrap justify-between items-center">
        <h1 className="text-black underline text-xl w-full">New Arrivals</h1>
        {/* New Arrivals here from data array */}
        {/* <div className="border p-2 w-[32%] my-2 flex justify-evenly items-center rounded-lg">
      <img
        src={clothes_img}
        alt=""
        className="w-[100px] h-[100px] rounded-lg"
      />
      <div>
        <p className="text-black">Shoes with best offer...</p>
        <p className="text-black">Starts with $20</p>
      </div>
    </div> */}
        {
            allProducts && allProducts.length !== 0 &&(
              <>
               {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
      </div>

      <div className="w-[30%] relative">
        <img src={clothes_img} alt="clothes" className="w-full h-full" />
        <p className="absolute text-white w-max bottom-0 right-0 p-4 bg-red-700 max-lg:p-1 max-lg:text-xs max-sm:text-[8px]">
          50 % off For Today <br /> Start @ 60$/ shirt
        </p>
      </div>

      {/* <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
    {allProducts && allProducts.length !== 0 && (
      <>
        {allProducts &&
          allProducts.map((i, index) => (
            <ProductCard data={i} key={index} />
          ))}
      </>
    )}
  </div> */}
    </div>
  );
};

export default FeaturedProduct;
