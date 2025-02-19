// src/components/CartItem.tsx
import React from 'react';

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  img,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={img} className="img-fluid rounded-start" alt={name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Precio: ${price}</p>
            <p className="card-text">Cantidad: {quantity}</p>
            <div className="btn-group" role="group">
              <button onClick={() => onDecrement(id)} className="btn btn-secondary">-</button>
              <button onClick={() => onIncrement(id)} className="btn btn-secondary">+</button>
              <button onClick={() => onRemove(id)} className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
