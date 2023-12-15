import { ALL_LINKS_ID } from "@/constants/constants";
import useAsync from "@/hooks/useAsync";
import { Link, Links } from "@/types/type";
import { axiosInstance } from "@/utils/axiosInstance";
import mapLinksData from "@/utils/mapLinksData";
import { useCallback, useEffect } from "react";

export const useGetLinks = (folderId: string) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(() => axiosInstance.get<Links>(`users/1/links${queryString}`), [queryString]);
  const { execute, loading, error, data } = useAsync<Links>(getLinks);

  const mapDataFormat = ({ id, created_at, url, image_source, title, description }: Link) => ({
    id,
    created_at,
    image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data?.map(mapDataFormat).map(mapLinksData);

  useEffect(() => {
    if (folderId) execute();
  }, [folderId, execute]);

  return { execute, loading, error, data: linksData };
};
