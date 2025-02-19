// src/components/ProductCard.tsx
import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isInCart?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button 
          onClick={() => onAddToCart(product)} 
          disabled={isInCart}
          className="btn btn-primary">
          {isInCart ? 'Agregado' : 'Añadir a la cesta'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

