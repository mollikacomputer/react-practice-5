import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    const [cart, setCart] = useState([]);
    const addToCart = (product)=>{
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div>
            <h2>product length :  </h2>
            <div className='shop-container' >
                <div className='product-container' >
                    {
                        products.map(product => <Product 
                            product={product} 
                            key={product.id}
                            addToCart ={addToCart}
                            ></Product>)
                    }
                </div>
                <div >
                    <Cart cart={cart} ></Cart>
                </div>
            </div>
        </div>
    );
};
export default Shop;