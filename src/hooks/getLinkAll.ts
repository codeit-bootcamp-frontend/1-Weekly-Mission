import { instance } from "libs/api";
import { useEffect, useState } from "react";

function useGetLinkAll() {
  const [allLinkList, setAllLinkList] = useState<Link>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getLinkByAll() {
    setIsLoading(true);
    const response = await instance.get<{}, Link>("/api/users/1/links");
    setAllLinkList(response);
    setIsLoading(false);
  }

  useEffect(() => {
    getLinkByAll();
  }, []);

  return { allLinkList, isLoading };
}

export default useGetLinkAll;
