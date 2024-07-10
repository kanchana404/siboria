import { Button } from "@/components/ui/button";
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
    </>
  );
};

export default page;
