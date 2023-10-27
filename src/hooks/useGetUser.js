import useGetData from './useGetData';
import { USERS } from '../constants/path';

function useGetUser() {
  const user = useGetData(USERS[1].userInfo);
  if (!user) return null;
  return user.data[0];
}

export default useGetUser;
