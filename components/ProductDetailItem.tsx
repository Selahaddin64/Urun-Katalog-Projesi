import { HeartIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

function ProductDetailItem({ product }: Props) {
  const url = `${process.env.NEXT_PUBLIC_IMAGE_URL}${product.image}`;
  return (
    <div>
      <div className="py-2">
        <Link href={"home"}>back to products</Link>
      </div>
      <div className="flex grid h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-slate-100 p-8 md:h-[550px] md:w-[2000px] md:grid-cols-4 md:gap-3 md:p-10">
        <div className="h-fit w-[320px] pl-6 md:col-span-1">
          <img src={url} alt="" />
        </div>
        <div className="ml-12 pt-28">
          <ul>
            <li>
              <h1 className="text-lg font-bold">{product.name}</h1>
            </li>
            <li className="pt-6 md:w-[500px]">
              Description: {product.description}
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="ml-52 ">
              <HeartIcon
                fill="currentColor"
                className="float-left h-6 w-6 text-red-600"
              />{" "}
              3 likes
            </div>
            {/* {product.likes.length} */}
            <div className="mt-80 h-8 w-32 rounded-full bg-blue-600 text-2xl font-bold text-white">
              <div className="text-center">{product.price}.00 ₺</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailItem;
