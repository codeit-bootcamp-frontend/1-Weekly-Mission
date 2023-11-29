import useGetData from "./useGetData";
import { PathType } from "../api";

const useGetSampleLinks = () => {
  const folder = useGetData({ path: "SHARED_FOLDER" as PathType });
  if (!folder) return null;
  return folder.folder.links;
};

export default useGetSampleLinks;
