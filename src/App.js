import Header from "./component/Header/Header";
import Product from "./component/Product/Product";
import Cart from "./component/Cart/Cart";
import { useState } from "react";

//const [showCart, setShowcart] = useState(false);

function App() {
  const [showCart, setShowcart] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  function toggleCart1() {
    setShowcart(true);
  }

  function toggleCart2() {
    setShowcart(false);
  }

  function Inq(id) {
    const existing = cartItems.findIndex((item) => item.id === id);
    const updatedItems = [...cartItems];
    updatedItems[existing].quantity += 1;
    setCartItems(updatedItems);
  }
  function Onq(id) {
    const existing = cartItems.findIndex((item) => item.id === id);
    let updatedItems = [...cartItems];

    const quantity = updatedItems[existing].quantity;
    if (quantity == 1) {
      updatedItems = updatedItems.filter((item) => item.id !== id);
      setCartItems(updatedItems);
    } else {
      updatedItems[existing].quantity -= 1;
      setCartItems(updatedItems);
    }
  }

  function addToCart({ id, name, imageLink }) {
    const existing = cartItems.findIndex((item) => item.id === id);

    if (existing == -1) {
      setCartItems((state) => [...state, { id, name, imageLink, quantity: 1 }]);
    } else {
      const updatedItems = [...cartItems];
      updatedItems[existing].quantity += 1;
      setCartItems(updatedItems);
    }
  }
  return (
    <div>
      <Header toggleCart1={toggleCart1} toggleCart2={toggleCart2} />
      <Product addToCart={addToCart} />
      <Cart
        showCart={showCart}
        toggleCart2={toggleCart2}
        cartItems={cartItems}
        Inq={Inq}
        Onq={Onq}
      ></Cart>

      <h1>Welcome to My React App</h1>
    </div>
  );
}

export default App;
