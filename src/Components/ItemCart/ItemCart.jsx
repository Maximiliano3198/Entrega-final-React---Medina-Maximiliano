import React from 'react';
import { useCartContext } from '../Context/CartContext';

const ItemCart = ({ producto }) => {
    const { removeProduct } = useCartContext();
    return (
      <div className="itemCart">
        <img src={producto.img} alt={producto.title} />
        <div>
          <p>Título: {producto.title}</p>
          <p>Cantidad: {producto.quantity}</p>
          <p>Precio u.: {producto.price}</p>
          <p>Subtotal: ${producto.quantity * producto.price}</p>
          <button onClick={() => removeProduct(producto.id)}>Eliminar</button>
        </div>
      </div>
    );
};

export default ItemCart;