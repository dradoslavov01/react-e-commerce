import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavigationBar, Login, Register, Items } from './components';
import withPublicRouteProtection from './hoc/withPublicRouteProtection';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const ProtectedLogin = withPublicRouteProtection(Login);
  const ProtectedRegister = withPublicRouteProtection(Register);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="App">
      <NavigationBar cart={cart} favoriteItems={favoriteItems} />
      <Routes>
        <Route path="/" element={<Items data={items} />} />
        <Route path="/login" element={<ProtectedLogin />} />
        <Route path="/register" element={<ProtectedRegister />} />
      </Routes>
    </div>
  );
}

export default App;
