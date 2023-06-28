"use client"
import React, {useState, useEffect}from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useSWR from 'swr';
 import '../../src/components/assets/css/Allproducts.css'; // Import your custom CSS file

interface Product {
  image_link: string;
  brand: string;
  name: string;
  price_sign: string;
  price: number;
  currency: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function AllProducts() {

  const { data, error, isLoading } = useSWR<Product[]>(
    // 'https://makeup-api.herokuapp.com/api/v1/products.json',
    '/api/apidata.json',
    fetcher
  );

  // if(!isLoading){
  //   data[5].image_link = "https://st3.depositphotos.com/1322515/35964/v/600/depositphotos_359648638-stock-illustration-image-available-icon.jpg"
  //   console.log(data[5].image_link)
  //   console.log(data[5].name)
  // }

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 100;
  const totalPages = Math.ceil((data?.length || 0)/productsPerPage)

  if (error) {
    return <h2>An error has occurred</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  //pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <div className="pagination-container">
        <Pagination>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <Pagination.Item
                  key={page}
                  active={page === currentPage}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
      <div className="card-container">
        {currentProducts?.map((products: Product, index: number) => (
          <Card key={index} className="products-card">
            {products.image_link ? (
              <Card.Img
                variant="top"
                className="product-image"
                src={products.image_link}
              />
            ) : (
              <div className="no-image">No Image Provided</div>
            )}
            <Card.Body>
              <Card.Title className="card-title">{products.brand}</Card.Title>
              <Card.Text className="card-name">{products.name}</Card.Text>
              <Card.Text className="card-dollarsign">
                {products.price_sign}
                {products.price} {products.currency}
              </Card.Text>
              <div className="button-container">
                <Button variant="dark">Buy now</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;

      {/* <div className="card-container">
        {filteredProducts?.map((products: Product, index: number) => (
          <Card key={index} className="products-card">
            {products.image_link ? (
              <Card.Img
                variant="top"
                className="product-image"
                src={products.image_link}
              />
            ) : (
              <div className="no-image">No Image Provided</div>
            )}
            <Card.Body>
              <Card.Title className="card-title">{products.brand}</Card.Title>
              <Card.Text className="card-name">{products.name}</Card.Text>
              <Card.Text className="card-dollarsign">
                {products.price_sign}
                {products.price} {products.currency}
              </Card.Text>
              <div className="button-container">
                <Button variant="dark">Buy now</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllProducts; */}

//OLD CODE 
// "use client";
// import React from "react";
// import Pagination from 'react-bootstrap/Pagination';
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import useSWR from "swr";
// import '../../src/components/assets/css/Allproducts.css'
// //simplifies data fetching
// //imports the 'useSWR' hook from the swr library. SWR is a React hook for data fetching that simplifies asynchronous data fetching.

// //The 'fetcher' function takes a URL as input, performs a GET reuest to that URL using the 'fetch' function and returns the JSON response of that request.
// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// //Declaring a React functional component called 'Allproducts'
// function Allproducts() {

// //using the 'useSWR' hook to fetch data from the specified URL using the 'fetcher' function defined earlier
//   const { data, error, isLoading } = useSWR(
//     "https://makeup-api.herokuapp.com/api/v1/products.json",
//     fetcher
//   );

// //This condition checks if there is an error fetching the data. If 'error' is truthy it returns a heading element displaying the error message.
//   if (error) {
//     return <h2>An error has occurred</h2>;
//   }

//   if (isLoading) {
//     return <h2>Loading...</h2>;
//   }

// //The {!isLoading && data.map(...)} is a conditional response. It checks if 'isLoading' is falsy and then proceeds to render the content inside the curly braces. It maps over the 'data' array and returns a paragraph (<p>) element for each element in the 'data' array
//   return (
//     <div>
//       <div className="pagination-container">
//         <Pagination>
//           {data.map((products, index) => (
//             <Pagination.Item key={index} onClick={() => console.log(`Clicked page ${index + 1}`)}>
//               {index + 1}
//             </Pagination.Item>
//           ))}
//         </Pagination>
//       </div>
//             <div className="card-container">
//               {data.map((products,index) => (
//               <Card className ="products-card">
//                 {products.image_link?(
//                   <Card.Img variant="top" style={{width: '200px', height: '250px'}} className ="product-image" src={products.image_link}/>
//                 ):(
//                    <div className="no-image">No Image Provided </div>
//                 )}
//                   <Card.Body>
//                     <Card.Title className ="card-title">{products.brand}</Card.Title>
//                     <Card.Text className ="card-name">{products.name}</Card.Text> 
//                     <Card.Text className ="card-dollarsign">{products.price_sign}{products.price}  {products.currency}</Card.Text>
//                     <Button variant ="dark"> Buy now </Button>        
//                   </Card.Body>
//               </Card>
//               ))}
//             </div>
//        </div>
//   );
// }

// //This exports the 'Allproducts' component as the default export of the module allowing it to be imported and used in other parts of the codebase
// export default Allproducts;