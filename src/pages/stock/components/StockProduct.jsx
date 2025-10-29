import { Link } from "react-router-dom";

const StockProduct = ({
  item: { id, stock, price, name, image, description, category },
}) => {
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="w-[70%]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/products/${id}`}>Show Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockProduct;
