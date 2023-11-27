import { useCallback, useEffect } from "react";
import { axiosInstance } from "sharing/util";
import { mapLinksData } from "link/util-map/mapLinksData";
import { useAsync } from "sharing/util";
import { ALL_LINKS_ID } from "link/data-access-link/constant";

interface LinkApiResponse {
  id: string;
  created_at: string;
  url: string;
  image_source: string;
  title: string;
  description: string;
}

interface LinkData {
  id: string;
  createdAt: string;
  imageSource: string;
  url: string;
  title: string;
  description: string;
}

export const useGetLinks = (folderId: string = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get<LinkApiResponse[]>(`users/1/links${queryString}`),
    [queryString]
  );
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
  }, [folderId]);

  const mapDataFormat = (link: LinkApiResponse): LinkData => ({
    id: link.id,
    createdAt: link.created_at,
    imageSource: link.image_source,
    url: link.url,
    title: link.title,
    description: link.description,
  });

  const linksData = data?.data?.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
