import useGetData from "./useGetData";
import { FoldersType, FoldersDataType } from "@/utils/types";

const useGetFolders = (): FoldersDataType[] => {
  const folders = useGetData<FoldersType>({ path: "FOLDER_FOLDERS" });

  if (!folders) return [];
  return folders.data;
};

export default useGetFolders;
