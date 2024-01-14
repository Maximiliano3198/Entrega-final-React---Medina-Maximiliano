import React from 'react';
import { useCartContext } from '../Context/CartContext';

const CartWidget = () => {
    const { totalProducts, cart } = useCartContext();

    const estiloCarrito = {
        width: '40px',
        height: '40px',
    };

    const estiloBoton = {
        border: 'none',
        background: 'transparent',
        display: 'flex',
        alignItems: 'flex-end',
        cursor: 'pointer',
        outline: 'none',
        position: 'relative', 
    };

    const estiloContador = {
        border: '5px solid red',
        padding: '0.1px',
        position: 'absolute', 
        bottom: 0,
        right: 35, 
    };

    return (
        <button style={estiloBoton}>
            <span className="badge rounded-pill bg-danger" style={estiloContador}>
                {totalProducts() || cart}
            </span>
            <img style={estiloCarrito} src='/sack.png' alt="Carrito" />
        </button>
    );
};

export default CartWidget;
