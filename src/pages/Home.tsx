// src/pages/Home.tsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="mb-3">🌿 GreenLife Store</h1>
      <p className="mb-4">Tu tienda de confianza para plantas de interior de alta calidad.</p>
      <Link to="/products">
        <button className="btn btn-success btn-lg">Comenzar</button>
      </Link>
    </div>
  );
};

export default Home;
