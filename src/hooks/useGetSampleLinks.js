import useGetData from "./useGetData";

const useGetSampleLinks = () => {
  const folder = useGetData("shared", "folder");
  if (!folder) return null;
  return folder.folder.links;
};

export default useGetSampleLinks;
