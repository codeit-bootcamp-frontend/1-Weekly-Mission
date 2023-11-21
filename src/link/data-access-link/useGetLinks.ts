import { useCallback, useEffect } from "react";
import { axiosInstance } from "sharing/util";
import { mapLinksData } from "link/util-map/mapLinksData";
import { useAsync } from "sharing/util";
import { ALL_LINKS_ID } from "./constant";

export interface Link {
  id: number;
  created_at: Date;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export const useGetLinks = (folderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(() => axiosInstance.get<Link[]>(`users/1/links${queryString}`), [queryString]);
  const { execute, loading, error, data } = useAsync<Link[]>(getLinks);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDataFormat = ({ id, created_at, url, image_source, title, description }: Link) => ({
    id,
    createdAt: created_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data ? data.map(mapDataFormat).map(mapLinksData) : null;

  return { execute, loading, error, data: linksData };
};
