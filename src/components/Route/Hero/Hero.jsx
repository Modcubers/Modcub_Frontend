import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { Carousel } from "flowbite-react";

const Hero = () => {
    return (
        <div className={`relative min-h-[70vh] sm:min-h-[80vh] bg-no-repeat`}>
            <div className="h-[400px] sm:h-[600px]">
                <Carousel indicators={false}>
                    <img
                        src="https://t3.ftcdn.net/jpg/02/75/23/70/360_F_275237026_qVTrrqF9SkSiZ8tRDjwk78DRd1Wu3hRk.jpg"
                        alt="..."
                    />
                    <img
                        src="https://img.freepik.com/free-photo/image-modern-guy-holding-shopping-bag-shoulder-turn-shushing-camera-telling-se_1258-154586.jpg?w=996&t=st=1715159576~exp=1715160176~hmac=9f1cb2ba7df4ca2a69487af8f01823128f343f1aa8846121bb464661f891035f"
                        alt="..."
                    />
                    <img
                        src="https://img.freepik.com/premium-photo/arabic-family-shopping-holding-bags-pointing-finger-aside-yellow-background_116547-9699.jpg"
                        alt="..."
                    />
                    <img
                        src="https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg"
                        alt="..."
                    />
                </Carousel>
            </div>
            <div
                className={`${styles.section} w-[90%] sm:w-[60%] sm:absolute top-1/4 left-1/4`}
            >
                <h1
                    className={`text-[25px] sm:text-[35px] md:text-[40px] lg:text-[60px] leading-[1.2] text-[#3d3a3a] font-[600] capitalize`}
                >
                    Best Collection for <br /> home Decoration
                </h1>
                <p className="pt-5 text-[14px] sm:text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Beatae, assumenda? Quisquam itaque <br /> exercitationem
                    labore vel, dolore quidem asperiores, laudantium temporibus
                    soluta optio consequatur <br /> aliquam deserunt officia.
                    Dolorum saepe nulla provident.
                </p>
                <Link to="/products" className="inline-block">
                    <div className={`${styles.button} mt-5`}>
                        <span className="text-[#fff] font-[Poppins] text-[14px] sm:text-[18px]">
                            Shop Now
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
