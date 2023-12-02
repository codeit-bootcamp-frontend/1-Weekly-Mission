import useGetData from "./useGetData";
import { PathType } from "@/utils/api";

const useGetUser = () => {
  const user = useGetData({ path: "FOLDER_USER" });
  if (!user) return null;
  return user.data[0];
};

export default useGetUser;
