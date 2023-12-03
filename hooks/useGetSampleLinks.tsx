import useGetData from "./useGetData";
import { SampleFolderType, SampleLinksType } from "@/utils/types";

const useGetSampleLinks = (): SampleLinksType[] => {
  const folder = useGetData<SampleFolderType>({ path: "SHARED_FOLDER" });

  if (!folder) return [];
  return folder.folder.links;
};

export default useGetSampleLinks;
