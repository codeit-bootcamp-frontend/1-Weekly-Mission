import useGetData from './useGetData';
import { SAMPLE } from '@/lib/constants/path';
import { SampleFolderDataType, SampleFolderType } from '@/lib/types/sampleDataType';

function useGetSampleFolder(): SampleFolderDataType | null {
  const folderData = useGetData<SampleFolderType>(SAMPLE.folder);

  if (!folderData) return null;
  return folderData.folder;
}

export default useGetSampleFolder;
