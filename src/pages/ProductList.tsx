import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

const products: Product[] = [
  { id: 1, name: 'Cactus', price: 10, img: '/cactus.jpg' },
  { id: 2, name: 'Orquídea', price: 25, img: '/orquidea.jpg' },
  { id: 3, name: 'Bonsái', price: 50, img: '/bonsai.jpg' },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🌱 Nuestras Plantas</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Añadir a la cesta</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
