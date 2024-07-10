import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Search = () => {
  return (
    <div className="flex bg-white p-6 mt-6 rounded-2xl">
      <div className=" search-margin">
        <h1 className="text-xl text-black font-semibold">Location</h1>
        <div className="flex">
          <p className="text-gray">Norway</p>
          <div className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className=" search-margin">
        <h1 className="text-xl text-black font-semibold">Location</h1>
        <div className="flex">
          <p className="text-gray">Norway</p>
          <div className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className=" search-margin">
        <h1 className="text-xl text-black font-semibold">Location</h1>
        <div className="flex">
          <p className="text-gray">Norway</p>
          <div className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className=" search-margin">
        <h1 className="text-xl text-black font-semibold">Location</h1>
        <div className="flex">
          <p className="text-gray">Norway</p>
          <div className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>

      <Button className=" w-40 h-12">
        <div></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        Search
      </Button>
    </div>
  );
};

export default Search;
