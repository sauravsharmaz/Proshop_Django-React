import React from 'react'
import {Card } from 'react-bootstrap'

function Product({product}){
    return(
        <div>
        <Card.Img src={product.image} />
        <h2>{product.title} </h2><p>{product.brand}</p><hr />
        <Card.Text>{product.desc}</Card.Text>
        <h2>${product.price}</h2>
        </div>
    );
}

export default Product