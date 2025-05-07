export const adjustQty = (id, setCartItems, newQty) => {
  setCartItems(prevItems =>
    prevItems.map(cartItem =>
      cartItem.id === id
        ? { ...cartItem, quantity: newQty }
        : cartItem
    )
  );
};
