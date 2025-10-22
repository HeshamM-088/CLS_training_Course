import { useState } from "react";
import NavBar from "./components/NavBar";
import Products from "./components/products/Products";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Mobile", price: 10, items: 1 },
    { id: 2, name: "TV", price: 20, items: 1 },
    { id: 3, name: "Laptop", price: 30, items: 1 },
    { id: 4, name: "Smart_Watch", price: 40, items: 1 },
  ]);

  const [stock] = useState([
    { id: "a", name: "Mobile", price: 10, items: 1 },
    { id: "b", name: "TV", price: 20, items: 1 },
    { id: "c", name: "Laptop", price: 30, items: 1 },
    { id: "d", name: "Smart_Watch", price: 40, items: 1 },
  ]);

  const [themeMode, setThemeMode] = useState(true);

  const increment = (productID) => {};
  const decrement = () => {};
  const deleteProduct = () => {};
  const emptyCart = () => {};
  const resetCart = () => {};
  const changeMode = () => {};
  const addProduct = () => {};

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar stock={stock} addProduct={addProduct} />

      <Products
        products={products}
        increment={increment}
        decrement={decrement}
        deleteProduct={deleteProduct}
        emptyCart={emptyCart}
        resetCart={resetCart}
        changeMode={changeMode}
      />
    </div>
  );
};

export default App;
