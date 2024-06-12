import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import TrendingCloths from "../components/Route/Trending_Items/TrendingCloths";
// import Categories from "../components/Route/Categories/Categories";
// import BestDeals from "../components/Route/Trending_Items/TrendingElectronics";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import TrendingElectronics from "../components/Route/Trending_Items/TrendingElectronics";
import TrendingDiscounts from "../components/Route/Trending_Items/TrendingDiscounts";
import NewArrivals from "../components/Route/NewArrivals/NewArrivals";

const HomePage = () => {
    return (
        <div className="bg-[#E7F2F9]">
            <Header activeHeading={1} />
            <Hero />
            {/* <div className=" w-auto h-1 my-20 bg-amber-900  rounded-full m-auto"></div> */}
            <TrendingCloths />
            {/* <div className=" w-auto h-1 my-20 bg-amber-900  rounded-full m-auto"></div> */}
            <TrendingElectronics />
            {/* <div className=" w-[1400px] h-1 my-20 bg-amber-900  rounded-full m-auto"></div> */}
            {/* <Events /> */}
            <TrendingDiscounts/>
            <NewArrivals/>
            {/* <div className=" w-auto h-1 my-20 bg-amber-900  rounded-full m-auto"></div> */}
            <FeaturedProduct />
            {/* <Sponsored /> */}
            <Footer />
        </div>
    );
};

export default HomePage;
