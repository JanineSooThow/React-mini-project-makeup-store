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
import React from 'react';
import '../assets/css/featuredstyles.css'

export default function FeaturedItem(props) {
    return (
        <div className ="card-container">
                <div className="card">
                    <img src={props.imageURL} className="card-img-top" alt={props.name} style={{width: '200px', height: '250px'}}/>
                    <div className="card-body">
                        <h4 className="card-title">{props.brand}</h4>
                        <p className="card-text">{props.name}</p>
                </div>
            </div>
        </div>
    );
}
