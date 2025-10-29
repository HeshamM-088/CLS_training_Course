import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import Login from "../pages/login/Login";
import Stock from "../pages/stock/Stock";
import Products from "../pages/products/Products";
import NotFound from "../pages/notfound/NotFound";
import Users from "./../pages/users/Users";
import StockDetails from "../pages/stock-details/StockDetails";

const AppRoutes = ({ products, setProducts, themeMode, setThemeMode }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Stock />} />
      <Route path="/products/:stockId" element={<StockDetails />} />
      <Route
        path="/cart"
        element={
          <Products
            setThemeMode={setThemeMode}
            products={products}
            themeMode={themeMode}
            setProducts={setProducts}
          />
        }
      />
      <Route path="/users" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
