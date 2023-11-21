import { useAsync } from "sharing/util";
import { axiosInstance } from "sharing/util";

export interface SampleUser {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export const useGetUser = () => {
  const getUser = () => axiosInstance.get<SampleUser>("sample/user");
  const { loading, error, data } = useAsync<SampleUser>(getUser);
  return { loading, error, data };
};
