import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const StockDetails = () => {
  const { stockId } = useParams();

  const { data, dataError, dataLoading } = useFetch(
    `https://6900cd45ff8d792314bb8eac.mockapi.io/api/v1/products/${stockId}`
  );

  console.log(data);

  return (
    <div>
      <h1>StockDetails</h1>

      <h1> {data?.name}</h1>

      <Link to="/products">Back</Link>
    </div>
  );
};

export default StockDetails;
