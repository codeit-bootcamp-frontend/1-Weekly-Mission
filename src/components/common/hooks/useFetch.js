import { useEffect, useState } from "react";

export default function useFetch(func) {
  const [value, setValue] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await func;
        setValue(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return value;
}
