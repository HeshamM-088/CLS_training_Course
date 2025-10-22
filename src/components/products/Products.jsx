import Buttons from "../buttons/Buttons";
import Item from "./Item";

const Products = ({
  products,
  increment,
  decrement,
  deleteProduct,
  emptyCart,
  resetCart,
  changeMode,
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 container mx-auto">
      <h1 className="text-3xl text-green-600 font-bold">Products</h1>

      <Buttons
        emptyCart={emptyCart}
        resetCart={resetCart}
        changeMode={changeMode}
      />

      {products.map((product) => (
        <Item
          product={product}
          decrement={decrement}
          increment={increment}
          deleteProduct={deleteProduct}
          key={product.id}
        />
      ))}

      <h1 className="text-3xl text-green-600 font-bold">Total Amount : ....</h1>
    </div>
  );
};

export default Products;
