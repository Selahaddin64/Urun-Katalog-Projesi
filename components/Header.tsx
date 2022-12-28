import Link from "next/link";
import React from "react";
import {HeartIcon} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative transition">
            <button className="title">Piton<span className="text-gray-400">Shop</span></button>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
              5
            </span>
            <HeartIcon className="headerIcon" />
          </div>
        </Link>
        <div className="relative transition">
        <button className="text">Logout</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
