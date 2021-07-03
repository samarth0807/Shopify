import React from 'react'
import {NavLink,Link} from 'react-router-dom';
import Rating from 'react-rating'
export default function Product({product}) {
  return (
    <div className=" text-left"  >
      <div >
      <Link to={`product/${product._id}`}>
      <img src={product.image} className="img-fluid"></img>
    <h1>{product.name}</h1>
    <Rating
            emptySymbol="far fa-star fa-1x"
            fullSymbol="fas fa-star fa-1x"
          />
 
    <h1>Price:{product.price}</h1>
    </Link>
      </div>
    
  </div>
  )
}
