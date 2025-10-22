import { useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Products from "./components/products/Products";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Mobile", price: 10, items: 1 },
    { id: 2, name: "TV", price: 20, items: 1 },
    { id: 3, name: "Laptop", price: 30, items: 1 },
    { id: 4, name: "Smart_Watch", price: 40, items: 1 },
  ]);

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />

      <Products products={products} />
    </div>
  );
};

export default App;
