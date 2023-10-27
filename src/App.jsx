import { useState, createContext } from 'react';
import Router from "./router";

export const ShopContext = createContext(null);

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(cartItems => {
      const index = cartItems.findIndex(obj => (
        obj.name === item.name &&
        obj.price === item.price &&
        obj.selectedSize === item.selectedSize
      ));

      if (index !== -1) {
        const updatedArray = [...cartItems];
        updatedArray[index].value += item.value;
        return updatedArray;
      } else {
        return [...cartItems, item];
      }
    });


    // setCartItems([...cartItems, item]);
  };

return (
  <div>
    <ShopContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      <Router />
    </ShopContext.Provider>
  </div>
);
};

export default App;
