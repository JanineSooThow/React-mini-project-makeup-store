//TypeScript code representing a React functional component called 'skinProducts'. 
//React and Next.js have been used for this project.

import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useSWR from 'swr';
import '../../src/components/assets/css/Allproducts.css';

interface Product {
  image_link: string;
  brand: string;
  name: string;
  price_sign: string;
  price: number;
  currency: string;
  product_type: string; 
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Skin() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Product[]>([]); 

  const productsPerPage = 100;

  const { error, isLoading } = useSWR<Product[]>('/api/apidata.json', fetcher, {
    onSuccess: (data) => {
      const filteredData = data.filter(
        (product) =>
          product.product_type === "bronzer"||
          product.product_type === "blush"||
          product.product_type === "foundation"
      );
      setData(filteredData);
    }
  });
  
  if (error) {
    return <h2>An error has occurred</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

 {/*total number of pages needed for pagination based on array length and number of products to display per page */}
 const totalPages = Math.ceil((data.length || 0) / productsPerPage);

 {/*clicking on the page number changes/updates the current displayed page of products*/}
  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  {/*Pagination calculations*/}
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      {/*Pagination*/}
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
      {/*Card code below*/}
      <div className="card-container">
        {currentProducts.map((product: Product, index: number) => (
          <Card key={index} className="products-card">
            {product.image_link ? (
              <Card.Img variant="top" className="product-image" src={product.image_link} />
            ) : (
              <div className="no-image">No Image Provided</div>
            )}
            <Card.Body>
              <Card.Title className="card-title">{product.brand}</Card.Title>
              <Card.Text className="card-name">{product.name}</Card.Text>
              <Card.Text className="card-dollarsign">
                {product.price_sign}
                {product.price} {product.currency}
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

export default Skin;
