import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch from the url");
          }
          return res.json();
        })
        .then((data) => {
          console.log({ data });
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 2000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
