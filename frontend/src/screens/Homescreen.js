import products from '../products'
import { Card, Row, Col } from 'react-bootstrap'

function Homescreen() {
    return (
        <div><h1>Latest Products</h1><hr /><Row>
            {products.map(function (prod) {
                return (
                    <Col sm={12} md={6} lg={4} xl={3}>
                        <Card>
                            <Card.Body>
                                <Card.Img src={prod.image} />
                                <h1>{prod.title}</h1>
                                <h5>{prod.desc}</h5>
                                <h2>${prod.price}</h2>
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