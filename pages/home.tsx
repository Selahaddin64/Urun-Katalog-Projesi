import { Tab } from "@headlessui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

import Header from "../components/Header";
import ProductItem from "../components/ProductItem";
import { fetchProducts } from "../utils/fetchProduct";

interface Props {
  products: Product[];
}
function Home({ products }: Props) {
  const showProducts = () => {
    return products.map((product) => (
      <ProductItem product={product} key={product.id} />
    ));
  };
  return (
    <div>
      <Head>
        <title>PitonShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Tab.Group>
        <Tab.Panels className="mx-auto pt-10 pb-24 sm:px-4">
          <Tab.Panel className="tabPanel">{showProducts()}</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Home;

// Backend Code
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const products = await fetchProducts();
  return {
    props: {
      products,
    },
  };
};
