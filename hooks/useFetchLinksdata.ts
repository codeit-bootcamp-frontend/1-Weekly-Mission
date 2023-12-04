import { useState, useEffect } from "react";
import { UserFolder } from "@/api/folder";
import { LinksDataProps } from "@/components/types/folderTypes";

function useFetchLinksData(fetchFunc: Function, targetArr: UserFolder[]) {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (targetArr.length < 1) {
      return;
    }
    setIsLoading(true);
    fetchFunc(targetArr).then((result: LinksDataProps) => {
      setData(result);
    });
  }, [targetArr]);

  return [data, isLoading];
}

export default useFetchLinksData;
