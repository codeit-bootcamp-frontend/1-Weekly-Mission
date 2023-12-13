import useGetData from './useGetData';
import { SAMPLE } from '@/lib/constants/path';
import { SampleUserType } from '@/lib/types/sampleDataType';

function useGetSampleUser(): SampleUserType | null {
  const userData = useGetData<SampleUserType>(SAMPLE.user);

  if (!userData) return null;
  return userData;
}

export default useGetSampleUser;
