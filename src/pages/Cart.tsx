import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { incrementItem, decrementItem, removeFromCart } from '../redux/cartSlice';

function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>🛒 Tu Carrito</h2>
      {cart.items.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
          {item.quantity}
          <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${cart.totalPrice}</h3>
    </div>
  );
}

export default Cart;
