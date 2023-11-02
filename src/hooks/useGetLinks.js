import useGetData from "./useGetData";

const useGetLinks = (folderId) => {
  const query = folderId ? `?folderId=${folderId}` : "";
  const links = useGetData("folder", "links", query);
  if (!links) return null;
  return links.data;
};

export default useGetLinks;
