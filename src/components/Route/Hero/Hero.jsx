import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { Carousel } from "flowbite-react";

const Hero = () => {
  return (
    <div
      className={` min-h-[5vh] w-full sm:min-h-[5vh] bg-no-repeat flex justify-center`}
    >
      <div className="w-11/12 h-max sm:h-[250px]">
        <Carousel indicators={false}>
          <a href="" className="w-full" >
            <img
              src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/f241e768f8367561.jpg?q=20"
              alt="..."
              className="w-full h-fit"
            />
          </a>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/a859e5c525a11ef9.jpg?q=20"
            alt="..."
            className="w-full h-fit"
          />
        </Carousel>
      </div>
      {/* <div
                className={`${styles.section} w-[90%] sm:w-[60%] sm:absolute top-1/4 left-1/4`}
            >
                <h1
                    className={`text-[25px] sm:text-[35px] md:text-[40px] lg:text-[60px] leading-[1.2] text-[#3d3a3a] font-[600] capitalize`}
                >
                    Welcome to Your Ultimate Shopping Destination
                </h1>
                <p className="pt-5 text-[14px] sm:text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
                " ModCub, where each purchase narrates a unique tale. Dive into our diverse marketplace curated by passionate vendors globally. From fashion to electronics, home decor to gourmet delights, discover treasures to enrich every moment. Join our dynamic community and embark on a voyage of exploration, inspiration, and boundless potential."
                </p>
                <Link to="/products" className="inline-block">
                    <div className={`${styles.button} mt-5`}>
                        <span className="text-[#fff] font-[Poppins] text-[14px] sm:text-[18px]">
                            Shop Now
                        </span>
                    </div>
                </Link>
            </div> */}
    </div>
  );
};

export default Hero;
