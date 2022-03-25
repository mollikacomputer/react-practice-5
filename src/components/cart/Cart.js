import React from 'react';
import './Cart.css';

const Cart = (props) => {
   const {cart} = props;
   let total = 0;
   let shipping = 0;
   for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
   }
   const tax = Number(parseFloat(total*.1).toFixed(2));
   const grandTotal = total+shipping+tax;
    return(
        <div className='cart'>
            <h2> Cart info </h2>
            <h4>Selected Items : {cart.length} </h4>
            <h3> Price : ${total}</h3>
            <p>Shipping : ${shipping} </p>
            <p> Tax : ${tax}  </p>
            <h3>Grand Total : ${grandTotal} </h3>
        </div>
    );
};

export default Cart;