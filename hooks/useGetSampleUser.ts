import { SampleUserType } from '@/constants/sampleDataType';
import useGetData from './useGetData';
import { SAMPLE } from '@/constants/path';

function useGetSampleUser(): SampleUserType | null {
  const userData = useGetData(SAMPLE.user);

  if (userData) {
    userData.type = 'sample_user';
    if (userData.type === 'sample_user') return userData;
  }

  return null;
}

export default useGetSampleUser;
