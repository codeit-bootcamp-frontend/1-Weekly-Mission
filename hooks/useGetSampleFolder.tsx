import useGetData from "./useGetData";
import { SampleFolderDataType, SampleFolderType } from "@/utils/types";

const useGetSampleFolder = (): SampleFolderDataType | null => {
  const folder = useGetData<SampleFolderType>({ path: "SHARED_FOLDER" });

  if (!folder) return null;
  return folder.folder;
};

export default useGetSampleFolder;
