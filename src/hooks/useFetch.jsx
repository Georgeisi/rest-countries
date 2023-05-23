import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch(url);
      let countryData = await res.json();
      // console.log(countryData);
      setData(countryData);
      setLoading(false);
    };
    setTimeout(() => {
      getData()
      
    }, 2000);
  }, [url]);

  return { data, loading };
};
