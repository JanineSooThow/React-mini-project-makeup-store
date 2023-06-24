"use client";
import React, { useEffect, useState } from "react";

//simplifies data fetching
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

//useEffect allows fetching of data from an API
function Allproducts() {
  // const [products, setProducts] = useState([]);

  const { data, error, isLoading } = useSWR(
    "https://makeup-api.herokuapp.com/api/v1/products.json",
    fetcher
  );

  if (error) {
    return <h2>An error has occurred</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      All products page here
      {!isLoading &&
        data.map((products: any) => {
          return (
          <p>
            {/* Insert cards here */}
            {products.brand}
          </p>);
        })}
    </div>
  );
}

export default Allproducts;
