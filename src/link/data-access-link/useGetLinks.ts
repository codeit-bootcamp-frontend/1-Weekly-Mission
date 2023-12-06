import { useCallback, useEffect } from "react";
import { axiosInstance } from "@/src/sharing/util";
import { mapLinksData } from "@/src/link/util-map/mapLinksData";
import { useAsync } from "@/src/sharing/util";
import { ALL_LINKS_ID } from "./constant";
import { SelectedFolderId } from "@/src/folder/type";
import { LinkRawData } from "@/src/link/type";

export const useGetLinks = (folderId: SelectedFolderId = ALL_LINKS_ID) => {
  const queryString = folderId === ALL_LINKS_ID ? "" : `?folderId=${folderId}`;
  const getLinks = useCallback(
    () => axiosInstance.get<{ data: LinkRawData[] }>(`users/1/links${queryString}`),
    [queryString]
  );
  const { execute, loading, error, data } = useAsync(getLinks);

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  const mapDataFormat = ({
    id,
    created_at,
    updated_at,
    url,
    image_source,
    title,
    description,
  }: LinkRawData) => ({
    id,
    createdAt: created_at,
    updatedAt: updated_at,
    imageSource: image_source,
    url,
    title,
    description,
  });

  const linksData = data?.data.map(mapDataFormat).map(mapLinksData) ?? [];

  return { execute, loading, error, data: linksData };
};
