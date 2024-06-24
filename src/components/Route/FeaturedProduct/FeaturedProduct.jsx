import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import NewArrivalsCard from "../ProductCard/NewArrivalsCard";
import clothes_img from "../../../Assests/Images/clothes_1.png";

const FeaturedProduct = () => {
  const { allProducts } = useSelector((state) => state.products);
  const [lowestPricedProducts, setLowestPricedProducts] = useState([]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0) {
      const calculatedProducts = Object.values(
        allProducts.reduce((acc, product) => {
          if (
            !acc[product.category] ||
            product.discountPrice < acc[product.category].discountPrice
          ) {
            acc[product.category] = product;
          }
          return acc;
        }, {})
      )
        .slice(0, 12)
        .sort((a, b) => a.discountPrice - b.discountPrice);

      setLowestPricedProducts(calculatedProducts);
    }
  }, [allProducts]);

  return (
    <div
      className={`${styles.section} flex justify-between items-center bg-white p-6 rounded-lg mb-12 shadow-xl mt-5`}
    >
      <div className="w-[68%] flex flex-row flex-wrap justify-between items-center">
        <h1 className="text-black underline text-xl w-full mb-4">
          New Arrivals
        </h1>
        {lowestPricedProducts &&
          lowestPricedProducts.map((product) => (
            <div
              key={product.id}
              className="m-2 w-[280px] border rounded-lg bg-white"
            >
              <NewArrivalsCard data={product} />
            </div>
          ))}
      </div>

      <div className="w-[30%] relative">
        <img src={clothes_img} alt="clothes" className="w-full h-full" />
        <p className="absolute text-white w-max bottom-0 right-0 p-4 bg-red-700 max-lg:p-1 max-lg:text-xs max-sm:text-[8px]">
          50 % off For Today <br /> Start @ 60$/ shirt
        </p>
      </div>
    </div>
  );
};

export default FeaturedProduct;
