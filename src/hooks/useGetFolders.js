import useGetData from "./useGetData";

const useGetFolders = () => {
  const folders = useGetData("folder", "folders");
  if (!folders) return null;
  return folders.data;
};

export default useGetFolders;
