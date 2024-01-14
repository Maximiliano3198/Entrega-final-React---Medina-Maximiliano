import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Item = ({producto}) => {
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    };

    return (
        <Link to={`/item/${producto.id}`} style={linkStyle}>
            <div>
                <Card.Img variant="top" src={producto.img} alt={producto.title}  />
                <Card.Body className='bg-light text-center'>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>$ {producto.price}</Card.Text>
                    <Card.Text><strong>Stock:</strong>{" "}
                        {isNaN(producto.stock) ? "Sin stock" : producto.stock}</Card.Text>
                </Card.Body>
            </div>
        </Link>
    )
}

export default Item