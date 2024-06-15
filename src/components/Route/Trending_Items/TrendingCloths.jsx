import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import { brandImages } from "../../../static/data";
import ProductCard from "../ProductCard/ProductCard";
import ad_img from "../../../Assests/Advertisements/image.png";

const TrendingCloths = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);

  useEffect(() => {
    if (allProducts) {
      const clothingProducts = allProducts.filter(
        (product) => product.category === "Cloths"
      );
      const sortedClothing = clothingProducts.sort(
        (a, b) => b.sold_out - a.sold_out
      );
      const topFiveClothing = sortedClothing.slice(0, 5);
      setData(topFiveClothing);
    } else {
      setData([]);
    }
  }, [allProducts]);

  const [images, setImages] = useState(brandImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => {
        const [first, ...rest] = prevImages;
        return [...rest, first];
      });
    }, 700); // Adjust the interval as per the animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={`${styles.section} flex flex-row justify-between bg-white p-6 rounded-lg mb-12 shadow-xl mt-5`}
        id="categories"
      >
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          <div>
            <h1 className="text-black underline text-xl">Trending Clothes</h1>
          </div>
          {data && data.length !== 0 && (
            <>
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
        <div className="relative w-[20%] max-lg:flex max-lg:w-[35%] items-center flex-col">
          <img src={ad_img} alt="" className="w-full" />
          <p className="absolute text-white w-max bottom-1 right-0 p-2 bg-red-700  max-lg:p-1 max-lg:text-xs max-sm:text-[8px]">
            Get 30% discount on <br />
            Bombay Shirt Company
          </p>
        </div>
        {/* <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
          {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                <div
                  className="w-full h-[100px] flex items-center justify-between cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className={`text-[18px] leading-[1.3]`}>{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className="w-[120px] object-cover shadow-lg"
                    alt=""
                  />
                </div>
              );
            })}
        </div> */}
      </div>
      <div
        className={`${styles.section} hidden sm:block shadow-xl rounded-lg bg-white overflow-clip `}
      >
        <div className="branding my-12 flex justify-between w-full shadow-sm p-5 rounded-md animate-scrollHorizontal">
          {images.map((brand, index) => (
            <div className="flex items-start" key={brand.src || index}>
              <img src={brand.src} alt={brand.alt} className="max-h-12" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingCloths;
