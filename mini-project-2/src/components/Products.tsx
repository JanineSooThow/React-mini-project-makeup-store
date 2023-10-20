//All products component
import React, {useState}from 'react';
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

  //Code for if an image fails to load 
  //  if(!isLoading){
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
      {/* Adding the SearchFilter component
      <SearchFilter brand={data}/>  */}
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
                <Button variant="dark" >Add to cart</Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;