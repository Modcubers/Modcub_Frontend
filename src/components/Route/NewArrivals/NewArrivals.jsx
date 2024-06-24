import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import clothes_img from "../../../Assests/Images/clothes_1.png";
import { categoriesData } from "../../../static/data";

const NewArrivals = () => {
  // const { allProducts } = useSelector((state) => state.products);
  const halfLength = Math.ceil(categoriesData.length / 2);
  return (
    <>
      <div
        className={`${styles.section} bg-white p-6 rounded-t-lg shadow-xl mt-5`}
      >
        <h1 className="text-black underline text-xl">Featured Products</h1>

        <div className="h-full w-full">
          {categoriesData.length > 0 ? (
            <div className="w-full flex justify-evenly overflow-scroll">
              {categoriesData.slice(0,halfLength).map((category) => (
                <img
                  src={category.image_Url}
                  alt={category.title}
                  className="h-32 w-max m-5"
                />
                // <p>{category.title}</p>
              ))}
              ;
            </div>
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>
      </div>
      <div
        className={`${styles.section} bg-white p-6 rounded-b-lg mb-12 shadow-xl`}
      >
        <div className="h-full w-full">
          {categoriesData.length > 0 ? (
            <div className="w-full flex justify-evenly overflow-scroll">
              {categoriesData.slice(halfLength).map((category) => (
                <img
                  src={category.image_Url}
                  alt={category.title}
                  className="h-32 w-max m-5"
                />
                // <p>{category.title}</p>
              ))}
              ;
            </div>
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
