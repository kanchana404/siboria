import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className=" news-letter p-5 rounded-xl flex flex-col lg:flex-row items-center lg:items-start">
      <div className="p-11 flex-1">
        <h1 className="text-4xl font-bold text-white">Subscribe our newsletter</h1>
        <p className="text-gray-200 mt-4">
          Receive latest news, updates, and many other things every week.
        </p>

        <div className="mt-8 flex items-center">
          <Input className="w-full lg:w-80" placeholder="Enter your email" />
          <Button className="bg-orange-500 text-white w-20 h-10 ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          </Button>
        </div>
      </div>
      <div className="hidden lg:block lg:flex-shrink-0 lg:-mt-60 lg:ml-20">
        <Image 
          src="/grama.png"
          alt="grama"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
