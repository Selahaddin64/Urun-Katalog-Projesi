import React from "react";
import Link from 'next/link';
import { HeartIcon } from "@heroicons/react/outline";

interface Props {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  const url = `https://assignment-api.piton.com.tr${product.image}`
  return (
    <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-slate-100 p-8 md:h-[550px] md:w-[300px] md:p-10">
      <div className="relative h-64 w-full md:h-72">
      <Link href={{
            pathname: "productDetail",
            query: { slug: product.id }
          }}>
        <img src={url} alt={""}  />
      </Link>
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-3 text-base text-black md:text-l text-center mt-6">
          <h2>{product.name}</h2>
          <hr />
          <p className="text-blue-600">{product.price}.00 ₺</p>
        </div>

        <div className="flex h-6 w-6 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 md:h-[40px] md:w-[40px]  ">
          <HeartIcon className="h-6 w-6 text-white"  />
        </div>
      </div>
    </div>
  );
}
