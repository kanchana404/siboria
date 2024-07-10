import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

//desktop nav
const Nav = () => {
  return (
    <nav className="flexCenter margin-auto flex w-full max-w-7xl justify-between pl-10 pt-4 pb-3">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={75} height={75} />
      </Link>

      <ul className="hidden h-full text-gray-500 gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className=" hover:text-black">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex justify-center items-center mr-3">
        <button className="bg-orange-500 text-white py-2 px-4 rounded">
          Our Collection
        </button>
      </div>
      {/* mobile nav */}
      <div className="lg:hidden mr-5">
  <Sheet>
    <SheetTrigger>
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
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </SheetTrigger>
    <SheetContent className="items-center">
  <nav className="mt-10">
    <ul>
      {NAV_LINKS.map((link) => (
        <li key={link.key} className="mb-5 text-gray-500 hover:text-black">
          <Link href={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
</SheetContent>

  </Sheet>
</div>

    </nav>
  );
};

export default Nav;
