import Item from "./Item";

const Products = ({ products }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 container mx-auto">
      <h1 className="text-3xl text-green-600 font-bold">Products</h1>

      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}

      <h1 className="text-3xl text-green-600 font-bold">Total Amount : ....</h1>
    </div>
  );
};

export default Products;
