import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [dataLoading, setDataloading] = useState(true);
  const [dataError, setDataError] = useState(null);

  const getData = async () => {
    try {
      const req = await fetch(url);
      const res = await req.json();
      setDataloading(false);
      setData(res);
    } catch (e) {
      setDataloading(false);
      setDataError(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { data, dataLoading, dataError };
};

export default useFetch;
