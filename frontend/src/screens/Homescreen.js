import products from '../products'
import { Card, Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

function Homescreen() {
    return (
        <div><h1>Latest Products</h1><hr /><Row>
            {products.map(function (prod) {
                return (
                    <Col sm={12} md={6} lg={4} xl={3}>
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