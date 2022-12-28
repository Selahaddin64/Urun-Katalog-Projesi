
import { HeartIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';

interface Props {
    product: Product;
}

function ProductDetailItem({ product }: Props) {
    const url = `https://assignment-api.piton.com.tr${product.image}`
  return (
    <div>
        <div className="py-2">
        <Link href={"/"}>back to products</Link>
    </div>
    <div className="grid md:grid-cols-4 md:gap-3 flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-slate-100 p-8 md:h-[550px] md:w-[2000px] md:p-10">
        <div className="md:col-span-1 pl-6 h-fit w-[320px]">     
            <img src={url} alt="" />
        </div>
            <div className='ml-12 pt-28'>
                <ul>
                    <li>
                        <h1 className="text-lg font-bold">{product.name}</h1>
                    </li>
                      <li className='pt-6 md:w-[500px]'>Description: {product.description}</li>
                  </ul>
              </div>
              <div>
                  <div className="card p-5">
                  <div className='ml-52 '><HeartIcon fill="currentColor" className="h-6 w-6 float-left text-red-600"/> 3 likes</div>
                  {/* {product.likes.length} */}
                      <div className="mt-80 text-2xl rounded-full w-32 h-8 text-white font-bold bg-blue-600">
                          <div className='text-center'>{product.price}.00 ₺</div>
                      </div>
                  </div>
              </div>
        </div>
    </div> 
  );
};

export default ProductDetailItem;