import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast from "react-hot-toast";

import { getError } from "../utils/error";
import ProductDetailItem from '../components/ProductDetailItem';
import Header from '../components/Header';

export default function ProductDetail() {
const { query } = useRouter();
const { slug } = query;
const [products,setProducts]=useState({});

useEffect(()=>{
    const token = localStorage.getItem('tempUserAuth');
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_PRODUCTDETAIL_URL}/${slug}`,
      headers: {
          'access-token': token
      }
    }).then((response)=>{
        setProducts(response.data.product);
    }).catch((err)=>{
        toast.error(getError(err));
    });
},[slug]);

  return(
    <div>
      <Head>
        <title>PitonShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ProductDetailItem product={products} key={products.id} />;
    </div>
  )
};