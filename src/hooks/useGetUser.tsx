import useGetData from "./useGetData";
import { PathType } from "../api";

const useGetUser = () => {
  const user = useGetData({ path: "FOLDER_USER" as PathType });
  if (!user) return null;
  return user.data[0];
};

export default useGetUser;
