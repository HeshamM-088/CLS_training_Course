import { CiDark } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa6";

const Buttons = ({ themeMode, setThemeMode, setProducts, products }) => {
  const resetCart = () => {
    let newProducts = products.map((product) => {
      product.items = 1;
      return product;
    });

    setProducts(newProducts);
  };

  return (
    <div className="w-full flex justify-evenly items-center">
      <button className="btn btn-outline btn-md btn-info" onClick={resetCart}>
        Reset
      </button>
      <button
        className="btn btn-outline btn-md btn-success"
        onClick={() => setProducts([])}
      >
        Empty Cart
      </button>
      <button
        className="btn btn-outline btn-md btn-warning"
        onClick={() => setThemeMode((prev) => !prev)}
      >
        {themeMode ? (
          <CiDark className="text-3xl font-bold" />
        ) : (
          <FaRegLightbulb className="text-3xl font-bold" />
        )}
      </button>
    </div>
  );
};

export default Buttons;
