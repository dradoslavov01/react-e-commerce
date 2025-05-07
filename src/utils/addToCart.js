export const addToCart = (item, setCartItems) => {
  setCartItems(prevItems => {
    const existingItem = prevItems.find(({ id }) => id === item.id);

    return existingItem
      ? prevItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
      : [...prevItems, { ...item, quantity: 1 }];
  });
};
