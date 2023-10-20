//lip products component
import React, { useState } from 'react';
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
  product_type: string; // Add product_type property
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Lips() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Product[]>([]); // Add the setData hook

  const productsPerPage = 100;

  const { error, isLoading } = useSWR<Product[]>('/api/apidata.json', fetcher, {
    onSuccess: (data) => {
      const filteredData = data.filter(
        (product) =>
          product.product_type === "lipstick" ||
          product.product_type === "lip_liner" 
      );
      setData(filteredData);
    }
  });

  const totalPages = Math.ceil((data.length || 0) / productsPerPage);

  if (error) {
    return <h2>An error has occurred</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  // if (!currentProducts || currentProducts.length === 0) {
  //   return <h2>No products found.</h2>;
  // }

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
                <Button variant="dark">Add to cart</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Lips;