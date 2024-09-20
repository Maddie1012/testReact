import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

function App() {
  const [cart, setCart] = useState(['Apple', 'Banan']);
  const [inputValue, setInputValue] = useState('');

  function changeInput(e) {
    setInputValue(e.target.value);
  }

  function addProduct() {
    const newProduct = inputValue;
    setCart([...cart, newProduct]);
    setInputValue('');
  }

  return (
    <CartContext.Provider value={{ cart, inputValue, changeInput, addProduct }}>
      <Cart />
    </CartContext.Provider>
  );
}

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <AddToCartButton />
    </div>
  );
}

function AddToCartButton() {
  const { inputValue, changeInput, addProduct } = useContext(CartContext);
  return (
    <div>
      <input type="text" value={inputValue} onChange={changeInput} />
      <br />
      <button onClick={addProduct}>Добавить в корзину</button>
    </div>
  );
}

export default App;
