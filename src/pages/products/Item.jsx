const Item = ({
  product: { id, name, price, items },

  setProducts,
  products,
}) => {
  const increment = (productID) => {
    let newProducts = products.map((product) => {
      if (product.id == productID) {
        product.items += 1;
      }

      return product;
    });

    setProducts(newProducts);
  };

  const decrement = (productID) => {
    let newProducts = products.map((product) => {
      if (product.id == productID) {
        product.items -= 1;
      }

      return product;
    });

    setProducts(newProducts);
  };

  const deleteProduct = (productID) => {
    let newProducts = products.filter((product) => {
      return product.id != productID;
    });

    setProducts(newProducts);
  };

  return (
    <div className="w-full rounded-lg flex justify-evenly items-center p-4 bg-gray-600 text-white font-bold">
      <h1>{name}</h1>
      <h1>${price}</h1>
      <h1>Items : {items}</h1>
      <button className="btn btn-sm btn-success" onClick={() => increment(id)}>
        +
      </button>
      <button
        className="btn btn-sm btn-warning"
        disabled={items == 1 ? true : false}
        onClick={() => decrement(id)}
      >
        -
      </button>
      <button
        className="btn btn-sm btn-error"
        onClick={() => deleteProduct(id)}
      >
        del
      </button>
      <h1>Total Amount : {price * items}</h1>
    </div>
  );
};

export default Item;
