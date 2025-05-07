import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavigationBar, Login, Register, Items, Contacts } from './components';
import withPublicRouteProtection from './hoc/withPublicRouteProtection';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

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

  console.log(cart);
  

  return (
    <div className="App">
      <NavigationBar cart={cart} />
      <Routes>
        <Route path="/" element={<Items data={items} setCart={setCart} />} />
        <Route path="/login" element={<ProtectedLogin />} />
        <Route path="/register" element={<ProtectedRegister />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
