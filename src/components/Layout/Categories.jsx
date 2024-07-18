import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const Categories_Arr = [
    { name: "All", Link: "" },
    { name: "Electronics", Link: "Electronics" },
    { name: "Clothes", Link: "Cloths" },
    { name: "Cosmetics", Link: "Cosmetics and Body Care" },
    { name: "Shoes", Link: "Shoes" },
    { name: "Gaming", Link: "Gaming" },
    { name: "Books", Link: "Books" },
    { name: "Watches", Link: "Watches" },
    { name: "Furniture", Link: "Furniture" },
    { name: "Jewelry", Link: "Jewelry" },
    { name: "Music", Link: "Music" },
    { name: "Home Decor", Link: "Home Decor" },
    { name: "Supplement", Link: "Supplement" },
  ];

  return (
    <div className="bg-[#043773] text-white p-3 flex items-center justify-between max-1000px:overflow-x-scroll">
      {Categories_Arr.map((category, index) => (
        <Link key={index} to={`?category=${category.Link}`} className="max-1000px:min-w-[100px]">
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
