import { UserDataType, UserType } from '@/lib/types/dataType';
import useGetData from './useGetData';
import { PATH } from '@/lib/constants/path';

/**
 * @param {*} userId user 정보를 얻을 user의 ID
 * @returns user의 정보가 담긴 객체
 */
function useGetUser(userId: number): UserDataType | null {
  const user = useGetData<UserType>(`${PATH.user}/${userId}`);

  if (!user) return null;
  return user.data[0];
}

export default useGetUser;
