import useGetData from "./useGetData";

const useGetSampleFolder = () => {
  const folder = useGetData("shared", "folder");
  if (!folder) return null;
  return folder.folder;
};

export default useGetSampleFolder;
