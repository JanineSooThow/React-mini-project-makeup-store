import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FeaturedItem from './FeaturedItem';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../assets/css/featuredstyles.css'


const featuredproducts = [
  {imageURL: "https://d3t32hsnjxo7q6.cloudfront.net/i/8bfba92993344fec7c4179ddd74ddde4_ra,w158,h184_pa,w158,h184.jpg", brand: "L'oreal", name: "L'oreal Infallible Nail Polish"}, 
  {imageURL: "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076", brand: "Colourpop", name: "Blotted Lip Lipstick"},
  {imageURL: "https://d3t32hsnjxo7q6.cloudfront.net/i/c2fcd605bbf3941b521fb74bfa942ac6_ra,w158,h184_pa,w158,h184.png", brand: "Maybelline", name: "Maybelline Kohl Eyeliner"},
  {imageURL: "https://d3t32hsnjxo7q6.cloudfront.net/i/be5757ecba60adb5369518ee5eb5d16e_ra,w158,h184_pa,w158,h184.jpg", brand: "Milani", name: "Milani Liquid Eyeliner"},
  {imageURL: "https://www.clinique.com/media/export/cms/products/181x209/clq_7C5H01_181x209.png", brand: "Clinique", name: "Repairwear Smooth Makeup Foundation"},
];

//Using React Bootstrap 
export default function FeaturedList(props) {
  return (
    <div className="parent-container"> 
     <h3 className="featured-heading">FEATURED </h3>
      <Row xs="auto" className="g-4">
        {featuredproducts.map((product, idx) => (
          <Col key={idx}>
            <FeaturedItem imageURL={product.imageURL} brand={product.brand} name={product.name} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
