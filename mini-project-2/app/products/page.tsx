"use client";
import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import useSWR from "swr";
//simplifies data fetching
//imports the 'useSWR' hook from the swr library. SWR is a React hook for data fetching that simplifies asynchronous data fetching.

//The 'fetcher' function takes a URL as input, performs a GET reuest to that URL using the 'fetch' function and returns the JSON response of that request.
const fetcher = (url: string) => fetch(url).then((res) => res.json());

//Declaring a React functional component called 'Allproducts'
function Allproducts() {

//using the 'useSWR' hook to fetch data from the specified URL using the 'fetcher' function defined earlier
  const { data, error, isLoading } = useSWR(
    "https://makeup-api.herokuapp.com/api/v1/products.json",
    fetcher
  );

//This condition checks if there is an error fetching the data. If 'error' is truthy it returns a heading element displaying the error message.
  if (error) {
    return <h2>An error has occurred</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

//The {!isLoading && data.map(...)} is a conditional response. It checks if 'isLoading' is falsy and then proceeds to render the content inside the curly braces. It maps over the 'data' array and returns a paragraph (<p>) element for each element in the 'data' array
  return (
    <div>
      {!isLoading &&
        data.map((products: any) => {
          return (
            <div className="card-container">
              <Card className ="products-card">
                {products.image_link?(
                  <Card.Img variant="top" style={{width: '200px', height: '250px'}} className ="product-image" src={products.image_link}/>
                ):(
                   <div className="no-image">No Image Provided </div>
                )}
                  <Card.Body>
                    <Card.Title className ="card-title">{products.brand}</Card.Title>
                    <Card.Text className ="card-name">{products.name}</Card.Text> 
                    <Card.Text className ="card-dollarsign">{products.price_sign}{products.price}  {products.currency}</Card.Text>
                    <Button variant ="dark"> Buy now </Button>        
                  </Card.Body>
              </Card>
              </div>
            );
          })}
    </div>
  )
}

//This exports the 'Allproducts' component as the default export of the module allowing it to be imported and used in other parts of the codebase
export default Allproducts;
