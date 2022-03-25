import React from 'react';
import './Cart.css';

const Cart = () => {
   
    return(
        <div className='cart'>
            <h2> Cart info </h2>
            <h4>Selected Items :  </h4>
            <h3> Price : $ </h3>
            <p>Shipping : $ </p>
            <p> Tax : $  </p>
            <h3>Grand Total : $ </h3>
        </div>
    );
};

export default Cart;