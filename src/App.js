import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { NavigationBar, Login, Register } from './components';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="App">
      <NavigationBar cart={cart} favoriteItems={favoriteItems} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
