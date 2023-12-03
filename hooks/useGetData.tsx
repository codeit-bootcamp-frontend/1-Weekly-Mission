import { useState, useCallback, useEffect } from "react";
import { PathType, getResponse } from "@/utils/api";

interface UseGetDataProps {
  path: PathType;
  query?: string;
}

function useGetData<T>({ path, query = "" }: UseGetDataProps): T | null {
  const [data, setData] = useState(null);

  const getData = useCallback(async () => {
    const result = await getResponse(path, query);
    if (!result) setData(null);
    setData(result);
  }, [path, query]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
}

export default useGetData;
