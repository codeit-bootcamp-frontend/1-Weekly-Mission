import useGetData from "./useGetData";

const useGetUser = () => {
  const user = useGetData("folder", "user");
  if (!user) return null;
  return user.data[0];
};

export default useGetUser;
