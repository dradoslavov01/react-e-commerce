export const removeCartItem = (itemToRemove, setCartItems) => {
  setCartItems((prevItems) => prevItems.filter(item => item.id !== itemToRemove.id));
};
