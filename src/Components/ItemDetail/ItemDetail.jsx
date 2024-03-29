import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useCartContext } from "../Context/CartContext";

const ItemDetail = ({ producto }) => {

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(producto, quantity);
    }

    return (
        <div className="d-flex align-items-center justify-content-center flex-wrap bg-success">
            <Card className="mt-2 mb-5" style={{ width: '35rem' }} >
                <Card.Img variant="top" src={producto.img} style={{ width: '300px', height: '300px', objectFit: 'cover', display: 'block',
    margin: 'auto', }} />
                <Card.Body >
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                        {producto.description}
                    </Card.Text>
                </Card.Body >
                <ListGroup className="list-group-flush">
                    <ListGroup.Item><strong>Categoria:</strong> {producto.categoryid}</ListGroup.Item>
                    <ListGroup.Item><strong>Precio:</strong> ${producto.price}</ListGroup.Item>
                    <ListGroup.Item><strong>Stock:</strong>{" "}
                        {isNaN(producto.stock) ? "Sin stock" : producto.stock}</ListGroup.Item>
                </ListGroup>

                <Card.Body className="d-flex justify-content-between align-items-center">
                    <Link to="/" className="btn btn-danger">
                        Regresar
                    </Link>
                        <div>
                            {goToCart ? <Link className="btn btn-primary" to='/cart'>Ir al carrito</Link> : <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />}
                        </div>
                </Card.Body>

            </Card>
        </div>
    );
}


export default ItemDetail