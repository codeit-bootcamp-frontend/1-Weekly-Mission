import useGetData from './useGetData';
import { SAMPLE } from 'constants/path';

function useGetSampleUser() {
  const user = useGetData(SAMPLE.user);
  if (!user) return null;
  return user;
}

export default useGetSampleUser;
