import { useState } from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";

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

  return (
    <div
      className={`flex ${
        themeMode ? "bg-white" : "bg-black"
      }    flex-col justify-center items-center `}
    >
      <NavBar products={products} stock={stock} setProducts={setProducts} />

      <AppRoutes
        products={products}
        setProducts={setProducts}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />
    </div>
  );
};

export default App;
