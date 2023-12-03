import { useEffect, useState } from "react";
import { instance } from "src/libs/api";

function useGetLinkAll() {
  const [allLinkList, setAllLinkList] = useState<Link>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getFolder() {
    setIsLoading(true);
    const response = await instance.get<{}, Link>("/api/users/1/links");
    setAllLinkList(response);
    console.log(response)
    setIsLoading(false);
  }

  useEffect(() => {
    getFolder();
  }, []);

  return { allLinkList, isLoading };
}

export default useGetLinkAll;
