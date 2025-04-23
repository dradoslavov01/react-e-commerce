import { useState } from 'react';
import { NavigationBar } from './components';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavigationBar cart={cart} favoriteItems={favoriteItems} isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
