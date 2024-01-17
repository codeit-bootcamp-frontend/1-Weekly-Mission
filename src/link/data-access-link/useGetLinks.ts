import { useCallback, useEffect } from "react";
import { axiosInstance } from "@/src/sharing/util";
import { mapLinksData } from "@/src/link/util-map/mapLinksData";
import { useAsync } from "@/src/sharing/util";
import { ALL_LINKS_ID } from "./constant";
import { SelectedFolderId } from "@/src/folder/type";
import { LinkRawData } from "@/src/link/type";

export const useGetLinks = (folderId?: SelectedFolderId) => {
  const queryString =
    folderId === ALL_LINKS_ID ? "/links" : `/folders/${folderId}/links`;
  const getLinks = useCallback(
    () => axiosInstance.get<LinkRawData[]>(`${queryString}`),
    [queryString]
  );
  const { execute, loading, error, data } = useAsync({
    asyncFunction: getLinks,
    enabled: !!folderId,
  });

  useEffect(() => {
    if (folderId) {
      execute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const linksData = data?.map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
