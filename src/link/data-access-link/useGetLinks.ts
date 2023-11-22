import { useCallback, useEffect } from "react";
import { axiosInstance } from "sharing/util";
import { mapLinksData } from "link/util-map/mapLinksData";
import { useAsync } from "sharing/util";
import { ALL_LINKS_ID } from "./constant";

export interface Link {
  id: number;
  created_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
}

export interface Links {
  data: Link[];
}

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

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  useEffect(() => {
    execute();
  }, [folderId, execute]);

  return { execute, loading, error, data: linksData };
};
