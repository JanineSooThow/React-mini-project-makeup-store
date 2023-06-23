// import React from 'react';

// //product is a prop
// export default function FeaturedItem(props) {
//     return (
//         <div className="featured-item">
//             <img src={props.imageURL} alt={props.name} style={{width: '200px', height: '250px'}}/>
//             <h4>{props.brand}</h4>
//             <p>{props.name}</p>
//         </div>
//     );
// }
//style={{ width: '200px', height: '250px' }}
//Using React Bootstrap Cards
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
