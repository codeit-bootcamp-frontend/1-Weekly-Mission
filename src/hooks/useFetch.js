import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [items, setItems] = useState([]);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchcingData() {
      const response = await fetch(url);
      if (response.status === 200) {
        const jsonData = await response.json();
        if (!cleanup) {
          setItems(jsonData);
          setIsLoading(false);
        }
      }
    }
    // mount시 cleanup은 false
    let cleanup = false;
    fetchcingData();

    return () => {
      cleanup = true;
    };
  }, [url]);

  return [items, loading];
};

export default useFetch;
