import products from '../products'
import { Card, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Homescreen() {
    const [products, setProducts]= useState([])
    useEffect(()=>{
        async function fetchProducts(){
            const {data}= await axios.get('http://127.0.0.1:8000/api/all_products')
            setProducts(data)
        }
        fetchProducts()        
    },[])
    return (
        <div><h1>Latest Products</h1><hr /><Row>
            {products.map(function (prod) {
                return (
                    <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Card.Body>
                                <Product product={prod} />
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
        </div>
    )
}

export default Homescreen