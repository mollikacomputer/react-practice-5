import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props);
    const {addToCart, product} = props;
   const {price, name, img, seller,shipping} =props.product;
    return (
        <div className='products'>
            <div className="product">
                <img src={img} alt="images" />
                <h2>Price: ${name.slice(0,15)} </h2>
                <p>Ratings: ${price} </p>
                <p>Shipping : ${shipping} </p>
                <p>Seller Name: ${seller} </p>
                <button onClick={()=>addToCart(product)} className='btn'> Add To Cart </button>
            </div>
        </div>
    );
};

export default Product;