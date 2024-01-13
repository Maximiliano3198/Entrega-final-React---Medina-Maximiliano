import React from 'react'
import Item from '../Item/Item';
import { Card } from 'react-bootstrap';

const ItemList = ({items}) => {
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center flex-wrap bg-success">
                {items.map((producto) => (
                    <Card key={producto.id} style={{ width: '18rem' }} className="col-md-3 m-4">
                        
                        <Item producto={producto} />

                    </Card>
                ))}
            </div>
    </div>
  )
}

export default ItemList