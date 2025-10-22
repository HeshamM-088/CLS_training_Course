const Item = ({ product: { id, name, price, items } }) => {
  return (
    <div className="w-full rounded-lg flex justify-evenly items-center p-4 bg-gray-600 text-white font-bold">
      <h1>{name}</h1>
      <h1>${price}</h1>
      <h1>Items : {items}</h1>
      <button className="btn btn-success">+</button>
      <button className="btn btn-warning">-</button>
      <button className="btn btn-error">del</button>
      <h1>Total Amount : ...</h1>
    </div>
  );
};

export default Item;
