import useGetData from "./useGetData";
import { SampleUserType } from "@/utils/types";

const useGetSampleUser = (): SampleUserType | null => {
  const user = useGetData<SampleUserType>({ path: "SHARED_USER" });

  if (!user) return null;
  return user;
};

export default useGetSampleUser;
