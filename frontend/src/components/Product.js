import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'

function Product({ product }) {
    return (
        <div> 
            <Card.Img src={product.image} />
            <Link to={`/product/${product._id}`}>
                <h2>{product.title}</h2>
            </Link>
            <p>{product.brand}</p><hr />
            <Card.Text>{product.desc}</Card.Text>
            <Rating value={product.rating} />
            <h2>${product.price}</h2> 
        </div>
    );
}

export default Product