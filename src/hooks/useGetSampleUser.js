import useGetData from "./useGetData";

const useGetSampleUser = () => {
  const user = useGetData("shared", "user");
  if (!user) return null;
  return user;
};

export default useGetSampleUser;
