import useGetData from "./useGetData";
import { PathType } from "../api";

const useGetSampleFolder = () => {
  const folder = useGetData({ path: "SHARED_FOLDER" as PathType });
  if (!folder) return null;
  return folder.folder;
};

export default useGetSampleFolder;
