import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto mt-10 pb-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="footer-gap">
          <h2 className="text-2xl font-semibold">Resources</h2>
          <div className="mt-8">
            <ul className="text-gray-600 text-sm">
              <li className="mb-4">Download</li>
              <li className="mb-4">Help Center</li>
              <li className="mb-4">Guide Book</li>
              <li>App Directory</li>
            </ul>
          </div>
        </div>

        <div className="footer-gap">
          <h2 className="text-2xl font-semibold">Seboria</h2>
          <div className="mt-8">
            <ul className="text-gray-600 text-sm">
              <li className="mb-4">Why Seboria</li>
              <li className="mb-4">Our Collection Process</li>
              <li className="mb-4">Customer Stories</li>
              <li>Instagram post</li>
            </ul>
          </div>
        </div>

        <div className="footer-gap">
          <h2 className="text-2xl font-semibold">Company</h2>
          <div className="mt-8">
            <ul className="text-gray-600 text-sm">
              <li className="mb-4">Antiques</li>
              <li className="mb-4">About Seboria</li>
              <li className="mb-4">Success</li>
              <li>Information</li>
            </ul>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-8">
            <p className="text-gray-600 text-sm">
              Feel free to get in touch with <br /> us via email
            </p>
            <Image 
              className="mt-10"
              src="/social.png"
              alt="social"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
