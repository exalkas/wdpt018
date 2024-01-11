import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);

      const dataJson = await response.json();

      setData(dataJson);
    };

    fetchData();
  }, [url]);

  return { data };
}
