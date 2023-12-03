import { useState, useEffect } from "react";
import { Folder } from "@/api/folder";

type Result = {
  folderId: string;
  folderName: string;
  linksdata: LinksData[];
};

type LinksData = {
  id: number;
  created_at: string;
  updated_at: any;
  url: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id?: number;
};

function useFetchLinksData(fetchFunc: Function, targetArr: Folder[]) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (targetArr.length < 1) {
      return;
    }
    setIsLoading(true);
    fetchFunc(targetArr).then((result: Result) => {
      setData(result);
    });
  }, [targetArr]);

  return [data, isLoading];
}

export default useFetchLinksData;
