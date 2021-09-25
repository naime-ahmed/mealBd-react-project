import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Main = () => {
    const [food, setFood] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
            .then(res => res.json())
            .then(data => setFood(data.meals))
        
    }, []);

    const addToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (

        <div className="container">
            <div className="input-group mb-3 mt-3 w-50 mx-auto">
                <input type="text"
                    class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>

            <div className="row d-flex">
                <div className="row col-md-10 g-4">
                    {
                        food.map(product => <Product
                        key={product.idMeal}
                            product={product}
                            addToCart={addToCart}
                        ></Product>)
                     }
                </div>
                <div className="col-md-2">
                    <h5 >Selected Meal List</h5>

                    <Cart cart={cart}
                    ></Cart>
                </div>
            </div>
     </div>
    );
};

export default Main;