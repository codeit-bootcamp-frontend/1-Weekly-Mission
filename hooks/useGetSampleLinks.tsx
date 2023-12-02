import useGetData from "./useGetData";
import { PathType } from "@/utils/api";

const useGetSampleLinks = () => {
  const folder = useGetData({ path: "SHARED_FOLDER" });
  if (!folder) return null;
  return folder.folder.links;
};

export default useGetSampleLinks;
