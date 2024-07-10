import Image from 'next/image';
import React from 'react';

const Categories = () => {
  return (
    <div className="hidden lg:block ml-8 mt-20">
      <h1 className="text-4xl font-bold">Top Categories</h1>
      <p className="text-gray-500 mt-3">
        Party we years to order allow asked of. We so opinion friends me
        message as delight.
      </p>

      <div className="flex mt-8 p-10">
        <div className="flex">
          <div>
            <Image
              src="/c1.png"
              alt="c1"
              width={320}
              height={320}
              className="mb-5"
            />
            <Image src="/c3.png" alt="c3" width={320} height={320} />
          </div>
          <div className="ml-5">
            <Image
              src="/c2.png"
              alt="c2"
              width={400}
              height={400}
              className="mb-5"
            />
          </div>
          <div className="ml-5">
            <Image
              src="/c4.png"
              alt="c4"
              width={550}
              height={550}
              className="mb-5"
            />
            <div className="flex">
              <Image
                src="/c5.png"
                alt="c5"
                width={190}
                height={190}
                className="mr-5"
              />
              <Image
                src="/c6.png"
                alt="c6"
                width={300}
                height={300}
                className="mb-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
