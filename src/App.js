import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { NavigationBar, Login, Register } from './components';
import withPublicRouteProtection from './hoc/withPublicRouteProtection';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const ProtectedLogin = withPublicRouteProtection(Login);
  const ProtectedRegister = withPublicRouteProtection(Register);

  return (
    <div className="App">
      <NavigationBar cart={cart} favoriteItems={favoriteItems} />
      <Routes>
        <Route path="/login" element={<ProtectedLogin />} />
        <Route path="/register" element={<ProtectedRegister />} />
      </Routes>
    </div>
  );
}

export default App;
