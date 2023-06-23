'use client'
import React from 'react'
import Header from '../src/components/Header'
const Allproducts = () => {
  return (
    <div>All products page here</div>
  )
}


export default Allproducts

// 'use client'
// import useSWR from 'swr';
// //http://localhost:3000/fetcher
// export default function Makeup() {
//   const fetcher = (url:string) => fetch(url).then((res) => res.json());
//   const { data, error, isLoading } = useSWR('https://makeup-api.herokuapp.com/api/v1/products.json', fetcher);

//   if (error) {
//     return <h2>An error has occurred</h2>;
//   }

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <>
//      {data.map((products:any)=>{
//         return <p key={products.id}>{products.name}</p> //fetching entire array
//      })}
      
//     </>
//   );
// }