import { ALL_LINKS_ID } from "@/constants/constants";
import useAsync from "@/hooks/useAsync";
import { Link, Links } from "@/types/type";
import { axiosInstance } from "@/utils/axiosInstance";
import mapLinksData from "@/utils/mapLinksData";
import { useCallback, useEffect } from "react";

export const useGetLinks = (folderId: string) => {
  const queryString = folderId === ALL_LINKS_ID ? "links" : `links?folderId=${folderId}`;
  const getLinks = useCallback(() => axiosInstance.get<{ data: Links }>(queryString), [queryString]);

  const { execute, loading, error, data } = useAsync<{ data: Links }>(getLinks);

  const mapDataFormat = ({ id, created_at, url, image_source, title, description }: Link) => ({
    id,
    created_at,
    image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data?.folder?.map(mapDataFormat).map(mapLinksData);

  useEffect(() => {
    if (folderId) {
      execute();
    }
  }, [execute, folderId]);

  return { execute, loading, error, data: linksData };
};
