import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavigationBar, Login, Register } from './components';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavigationBar cart={cart} favoriteItems={favoriteItems} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
