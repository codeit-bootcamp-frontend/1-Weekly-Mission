import { UserData, UserList } from '@/lib/types/dataType';
import useGetData from './useGetData';
import { PATH } from '@/lib/constants/path';

/**
 * @param {*} userId user 정보를 얻을 user의 ID
 * @returns user의 정보가 담긴 객체
 */
function useGetUser(userId: number): UserData | null {
  const user = useGetData<UserList>(`${PATH.user}/${userId}`);

  if (!user) return null;
  return user.data[0];
}

export default useGetUser;
