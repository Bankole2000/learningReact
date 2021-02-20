import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
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
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 500);
    return () => {
      abortController.abort();
      console.log("Cleanup");
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
