import useGetData from './useGetData';
import { SAMPLE } from '@/constants/path';
import { SampleUserType } from '@/constants/sampleDataType';

function useGetSampleUser(): SampleUserType | null {
  const userData = useGetData<SampleUserType>(SAMPLE.user);

  if (!userData) return null;
  return userData;
}

export default useGetSampleUser;
