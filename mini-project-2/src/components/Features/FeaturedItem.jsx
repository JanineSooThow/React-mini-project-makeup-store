import React from 'react';
import Card from 'react-bootstrap/Card';
import '../assets/css/featuredstyles.css';

export default function FeaturedItem(props) {
  return (
    <div className ="card-container">
        <Card className ="featured-card">
            <Card.Img variant="top" src={props.imageURL} style={{ width: '200px', height: '250px' }} className ="card-image" /> 
            <Card.Body>
                <Card.Title className ="card-title">{props.brand}</Card.Title>
                <Card.Text className ="card-text">{props.name}</Card.Text>
            </Card.Body>
        </Card>
    </div>
  );
}
