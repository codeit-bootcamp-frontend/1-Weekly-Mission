import useGetData from "./useGetData";
import { UsersDataType, UsersType } from "@/utils/types";

const useGetUser = (): UsersDataType | null => {
  const user = useGetData<UsersType>({ path: "FOLDER_USER" });

  if (!user) return null;
  return user.data[0];
};

export default useGetUser;
