import Categories from "@/components/Categories";
import ProductCard from "@/components/ProductCard";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { P_DETAILS } from "@/constants";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center ml-14 space-x-8 mt-20">
        <div>
          <h1 className="text-6xl text-dark">
            <b>
              World’s Biggest <br />
              <span className="text-blue inline-block mt-4">
                Antique Collection
              </span>
            </b>
          </h1>
          <p className="text-gray-500 mt-5">
            From they fine john he give of rich he. They age and draw <br />
            mrs like. Improving end distrusts may instantly was <br />
            household applauded incommode.{" "}
          </p>
          <div className="flex">
            <Button className="bg-orange-500 text-white w-40 h-12 mt-10">
              Discover <br /> Now
            </Button>
            <div className="flex mt-7 ml-6">
              <Image src="/play.png" alt="play" width={75} height={75} />
              <h2 className="mt-6 font-semibold text-gray">Watch Video</h2>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex md:flex">
          <Image src="/pot.png" alt="pot" width={400} height={400} />
        </div>
        <div className="hidden lg:flex flex-col items-start space-y-4">
          <div className="flex items-center space-x-2">
            <Image src="/Icon1.png" alt="Icon" width={120} height={120} />
            <div className="-mt-12">
              <p className="text-2xl font-bold">1322</p>
              <p className="text-gray-500">Year</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/Icon2.png" alt="Icon" width={120} height={120} />
            <div className="-mt-12">
              <p className="text-2xl font-bold">29</p>
              <p className="text-gray-500">Bids so far.</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/Icon3.png" alt="Icon" width={120} height={120} />
            <div className="-mt-12">
              <p className="text-2xl font-bold">China</p>
              <p className="text-gray-500">Origin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <Search />
      </div>

      <div className="ml-8">
        <h1 className="text-4xl font-semibold">Recently Added</h1>
        <p className="text-gray-500 mt-3">
          Not thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment.
        </p>
        <div className="items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {P_DETAILS.map((product, index) => (
            <ProductCard
              key={index}
              path={product.path}
              title={product.title}
              Year={product.Year}
              type={product.type}
              price={product.price}
              bid={product.bid}
            />
          ))}
        </div>
      </div>

      <Categories />

      <div className="flex pl-20 mt-40">
        <Image src="/girl.png" alt="girl" width={400} height={400} />

        <div className="ml-20  mt-20">
          <h1 className="text-4xl font-bold ">Buyer’s Feedback</h1>
          <p className="text-gray-500 mt-3 text-md">
            Whole front do of plate heard oh ought. His defective nor convinced
            residence own. Connection has put <br />
            impossible own apartments boisterous.
          </p>
          <div className="flex">
            <Image
              src="/p.png"
              alt="p"
              width={60}
              height={60}
              className="mt-10"
            />
            <div>
              <h1 className="mt-10 ml-5 font-semibold">John Deo</h1>
              <p className="text-gray-500 text-sm ml-5">UI Designer</p>

              <Image 
              src="/rating.png"
              alt="rating"
              width={80}
              height={80}
              className="ml-4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
