import React from 'react'
import { Link,useParams } from 'react-router-dom'
import Products from '../products'
import {Row,Col,Image, ListGroup, Button} from 'react-bootstrap'
import Rating from '../components/Rating'


function ProductScreen() {
    const { id }= useParams()
    let clickedProduct= giveProduct(id) 
    let matchedProduct= clickedProduct[0]
    function checkStock(value){
        let result= matchedProduct.stocksCount + ' In Stock'
        if (value < 1){
            result = 'Out of Stock'
            return result
        }
        return result
    } 
    function addToCart(stockValue){
        let result= false
        if (stockValue < 1){
            result= true
            return result
        }
        return result
    }   
    console.log('the matched product is: ',matchedProduct);
    console.log(matchedProduct.title);                        
    console.log(matchedProduct.desc);                        
    console.log(matchedProduct.brand);                        
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={matchedProduct.image} alt='product image' fluid/>                    
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{matchedProduct.title}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={matchedProduct.rating}/><span className='rating-value'>{matchedProduct.rating} Stars</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: $ {matchedProduct.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {matchedProduct.desc} 
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>$ {matchedProduct.price}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status:</Col>
                            <Col><span className='stock-status'>{checkStock(matchedProduct.stocksCount)}</span></Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button disabled={addToCart(matchedProduct.stocksCount)} className='btn btn-block'>Add to Cart</Button>
                    </ListGroup.Item>
                </Col>
            </Row>
        </div>
    )
}

function giveProduct(id){
    let idToSearch= id
    let matchedProduct= Products.filter(function(prod){
        return prod._id === idToSearch
    })
    console.log('i m in giveproduct function and the matched product is: ',matchedProduct)
    console.log('now i am returning this above product');
    return matchedProduct
}


export default ProductScreen