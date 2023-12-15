import useAsync from "@/hooks/useAsync";
import { Link } from "@/types/type";
import fetchSharedFolder from "@/utils/fetchSharedFolder";
import mapLinksData from "@/utils/mapLinksData";
import { useCallback, useEffect } from "react";

interface SharedFolder {
  folder: {
    id: number;
    name: string;
  };
  owner: {
    userId: number;
    name: string;
    profileImageSource: string;
  };
  links: Link[];
}

const useGetSharedFolder = (folderId: string) => {
  const getSharedFolder = useCallback(() => fetchSharedFolder(folderId), [folderId]);

  const mapDataFormat = ({ id, created_at, url, image_source, title, description }: Link) => ({
    id,
    created_at,
    image_source,
    url,
    title,
    description,
  });

  const { execute, loading, error, data } = useAsync<SharedFolder>(getSharedFolder);
  const linksData = data?.links?.map(mapDataFormat).map(mapLinksData);
  useEffect(() => {
    if (folderId) execute();
  }, [execute, folderId]);

  return { loading, error, data: { ...data, links: linksData } };
};

export default useGetSharedFolder;
