import React from 'react';

const Cart = (props) => {
    const { cart } = props || {}
    console.log(cart)
    return (
        <div>
            {
                cart.map(pdName => <li>{ pdName.strMeal}</li>)
           }
        </div>
    );
};

export default Cart;