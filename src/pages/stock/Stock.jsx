import Loading from "../../components/loading/Loading";
import useFetch from "../../hooks/useFetch";
import StockProduct from "./components/StockProduct";

const Stock = () => {
  const { data, dataError, dataLoading } = useFetch(
    "https://6900cd45ff8d792314bb8eac.mockapi.io/api/v1/products"
  );

  return (
    <div className="flex justify-center items-center flex-col gap-8 py-4 w-full">
      <h1 className="text-3xl font-bold text-blue-600">Stock</h1>

      {dataLoading && <Loading />}

      {dataError && <h1>{dataError}</h1>}

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full container mx-auto gap-4">
        {data.map((item) => (
          <StockProduct key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Stock;
