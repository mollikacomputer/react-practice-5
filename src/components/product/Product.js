import React from 'react';
import './Product.css';
const Product = () => {
   
    return (
        <div className='products'>
            <div className="product">
                <img src='' alt="images" />
                <h2>  </h2>
                <h2>Price: $ </h2>
                <p>Ratings: $ </p>
                <p>Shipping : $ </p>
                <p>Seller Name: $ </p>
                <button className='btn'> Add To Cart </button>
            </div>
        </div>
    );
};

export default Product;