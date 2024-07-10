import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

type p_props = {
    path: string;
    title: string;
    Year: string;
    type: string;
    price: string;
    bid: string;
}

const ProductCard = ({path, title, Year, type, price, bid}: p_props) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <Image src={path} width={400} height={400} alt="product" className="rounded-lg" />
      </div>
      <div className="flex flex-col justify-between p-2 mt-4">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-gray-500">Year: {Year} | {type}</p>
          <div className="flex items-center justify-between mt-5">
            <h1 className="text-2xl font-bold">${price}</h1>
            <Button className="product-button mt-0 ml-4">View Details</Button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-7">
          <p className="text-black font-semibold">{bid} bids so far.</p>
          <p className="text-gray-500">Bidding Closes in 12 Days</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
