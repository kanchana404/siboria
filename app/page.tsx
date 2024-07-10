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

          <Button className="bg-orange-500 text-white w-40 h-12 mt-10">
            Discover <br /> Now
          </Button>
        </div>
        <div>
          <Image src="/pot.png" alt="pot" width={400} height={400} />
        </div>
      </div>
    </>
  );
};

export default page;
