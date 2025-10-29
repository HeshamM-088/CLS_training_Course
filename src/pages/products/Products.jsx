import Buttons from "../../components/buttons/Buttons";
import Item from "./Item";

const Products = ({ products, setProducts, themeMode, setThemeMode }) => {
  let totalAmount =
    products.length &&
    products
      .map(({ price, items }) => price * items)
      .reduce((num1, num2) => num1 + num2);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 container mx-auto">
      <h1 className="text-3xl text-green-600 font-bold">Cart</h1>

      <Buttons
        setThemeMode={setThemeMode}
        themeMode={themeMode}
        setProducts={setProducts}
        products={products}
      />

      {products.map((product) => (
        <Item
          product={product}
          key={product.id}
          setProducts={setProducts}
          products={products}
        />
      ))}

      {products.length ? (
        <h1 className="text-3xl text-green-600 font-bold">
          Total Amount : {totalAmount}
        </h1>
      ) : (
        <h1 className="text-3xl text-green-600 font-bold">No Items Found</h1>
      )}
    </div>
  );
};

export default Products;
