import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductDetailItem from '../components/ProductDetailItem';
import Header from '../components/Header';

export default function ProductDetail() {
const { query } = useRouter();
const { slug } = query;
const [products,setProducts]=useState([]);

console.log(slug)

useEffect(()=>{
    axios.get(`https://assignment-api.piton.com.tr/api/v1/product/get/${slug}`,{
      headers:{
        "access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IiIsImlhdCI6MTY1MDE4OTM0NywiZXhwIjoxNjc2MTA5MzQ3fQ.r7j-guzdX9M9LVaxzwGtLvACwI3HbfbGkOj-QbHKRJo"
      }
    }).then((response)=>{
        setProducts(response.data.product);
    }).catch(()=>{
        console.log("Err");
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