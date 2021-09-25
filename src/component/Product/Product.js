import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const Product = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.product;
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={strMealThumb} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Name: { strMeal.slice(0,10)}</h5>
                    <p className="card-text">{ strInstructions.slice(0,150)}</p>
                    <button onClick={() => props.addToCart(props.product)} href="/btn" className="btn btn-primary">{cartIcon}  Add to cart</button>
                </div>
            </div>
        </div>

    );
};

export default Product;