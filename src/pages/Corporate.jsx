import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import SidebarLink from "../components/SidebarLink";

const Corporate = () => {
    // Placeholder data until backend integration
    const demoImages = [
        "https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.webp?b=1&s=170667a&w=0&k=20&c=3HUg5TdHHWq4rmYJ7lA0Jn9koAesfCrO4lFiEaUFKuI=",
        "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
        "https://www.maidwale.com/images/about/istockphoto-1283119095-170667a.jpg",
    ];

    return (
        <>
            <div className="font-Poppins">
                <Header activeHeading={0} />
                <div className="relative">
                    <img
                        src={`${demoImages[0]}`}
                        alt="Demo Image 1"
                        className="w-full h-auto rounded-md mb-6 md:mb-0 h-[700px]"
                    />
                    <div className="absolute bottom-10 md:bottom-56 left-4 md:left-40 text-gray-100 text-5xl md:text-6xl font-Poppins font-bold">
                        Corporate
                        <div className="text-base md:text-xl font-medium">
                            Learn what we are all about
                        </div>
                    </div>
                </div>

                <div className="container mx-auto py-8 flex flex-col md:flex-row">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-3xl font-semibold mb-4">
                            <b> Welcome to <a href="https://modcub.in">ModCub.in</a> </b>
                        - Where Diversity Meets Convenience!
                        </h1>
                        <p className="text-lg mb-6">
                        At ModCub.in, we're more than just an eCommerce platform. We're a vibrant marketplace where creativity, innovation, and community converge to offer a truly extraordinary shopping experience.
                        </p>
                        <p className="text-lg mb-6">
                        Our Vision:
ModCub.in envisions a world where every vendor, regardless of size or scale, has the opportunity to showcase their unique products to a global audience. We believe in empowering businesses, fostering creativity, and connecting consumers with the finest selection of goods from around the globe.
                        </p>
                        <p className="text-lg mb-6">
                        Why Choose ModCub.in?
1. *Diverse Selection*: Explore a curated assortment of products spanning fashion, electronics, home decor, beauty, and beyond. With thousands of vendors onboard, there's something for everyone at ModCub.in.
                        </p>
                        <p className="text-lg mb-6">
                         *Quality Assurance*: We uphold the highest standards of quality and authenticity. Every product featured on our platform undergoes rigorous screening to ensure customer satisfaction and peace of mind.

                        </p>
                        <p className="text-lg mb-6">
                        *Seamless Shopping Experience*: Our user-friendly interface and intuitive navigation make browsing and purchasing a breeze. Shop with confidence knowing that your transactions are secure and your information is protected.
                        </p>
                        <p className="text-lg mb-6">
                        *Supporting Small Businesses*: By shopping on ModCub.in, you're not just buying a product - you're supporting independent vendors, artisans, and entrepreneurs. Join us in celebrating diversity and fostering economic growth within our global community.
                        </p>
                        <p className="text-lg mb-6">
                        *Exceptional Customer Service*: Have a question or need assistance? Our dedicated customer support team is here to help. We strive to provide prompt and personalized service to ensure your experience with ModCub.in is nothing short of exceptional.
                        </p>{" "}
                        <p className="text-lg mb-6">
                        Become a Vendor:
                        Are you a creator, innovator, or entrepreneur with a passion for your craft? Join our growing community of vendors and showcase your products to a worldwide audience. With our easy-to-use seller dashboard and robust marketing tools, reaching your target market has never been easier. Partner with ModCub.in and take your business to new heights!
                                                </p>
                        <p className="text-lg mb-6">Connect With Us:
                        Stay up-to-date on the latest trends, promotions, and community events by following us on social media. Join the conversation, share your favorite finds, and be part of the ModCub.in family.</p>

                        <p className="text-lg mb-6">
                        Thank you for choosing ModCub.in. Together, let's embark on a journey of discovery, creativity, and endless possibilities!
                        </p>
                    </div>

                    {/* Show sidebar only on medium and larger screens */}
                    <div className="w-full md:w-1/4 ml-0 md:ml-8">
                        <SidebarLink />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Corporate;
