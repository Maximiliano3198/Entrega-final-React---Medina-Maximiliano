import React from 'react';
import { useCartContext } from '../Context/CartContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemCart = ({ producto }) => {
    const { removeProduct } = useCartContext();
    return (

      <div className="d-flex align-items-start justify-content-center mt-3" >
        <Card key={producto.id} style={{ width: '50rem' }} className="d-flex flex-row mb-3">
          <Card.Img variant="top" src={producto.img} style={{ width: '300px', height: '300px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>{producto.title}</Card.Title>
            <ListGroup className="list-group-flush mt-4">
              <ListGroup.Item>Cantidad: {producto.quantity}</ListGroup.Item>
              <ListGroup.Item>Precio unitario: ${producto.price}</ListGroup.Item>
              <ListGroup.Item>Subtotal: ${producto.quantity * producto.price}</ListGroup.Item>
            </ListGroup>
            <button
              className="btn btn-primary mt-5"
              onClick={() => removeProduct(producto.id)}
            >
              Eliminar
            </button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default ItemCart;