import React from 'react';
import './style/Products.css';
import Star from '@material-ui/icons/Star';

function Products({ id, title, price, rating, image }) {
    return (
        <div className="product">

            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <Star style={{ color: '#FFC300' }} />
                        ))}
                </div>
            </div>

            <img src={image} alt={title} />
            <button>Add to basket</button>
            
        </div>
    );
}

export default Products;
