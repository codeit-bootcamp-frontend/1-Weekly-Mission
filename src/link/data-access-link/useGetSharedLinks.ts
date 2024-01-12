import { useCallback, useEffect } from "react";
import { axiosInstance } from "@/src/sharing/util";
import { mapLinksData } from "@/src/link/util-map/mapLinksData";
import { useAsync } from "@/src/sharing/util";
import { LinkRawData } from "@/src/link/type";
import { formatLinkRawData } from "../util-map";

export const useGetSharedLinks = (userId: number, folderId?: string) => {
  const getLinks = useCallback(
    () => axiosInstance.get<{ data: LinkRawData[] }>(`users/${userId}/links?folderId=${folderId}`),
    [userId, folderId]
  );
  const { execute, loading, error, data } = useAsync({
    asyncFunction: getLinks,
    enabled: !!userId && !!folderId,
  });

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, folderId]);

  const linksData = data?.data?.map(formatLinkRawData).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
