import useGetData from "./useGetData";
import { LinksType, LinksDataType } from "@/utils/types";

const useGetLinks = (folderId?: number | null): LinksDataType[] => {
  const query = folderId ? `?folderId=${folderId}` : "";
  const links = useGetData<LinksType>({ path: "FOLDER_LINKS", query });

  if (!links) return [];
  return links.data;
};

export default useGetLinks;
