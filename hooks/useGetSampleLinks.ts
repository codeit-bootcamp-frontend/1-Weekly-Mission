import useGetData from './useGetData';
import { SAMPLE } from '@/constants/path';
import { SampleFolderType, SampleLinkType } from '@/constants/sampleDataType';

function useGetSampleLinks(): SampleLinkType[] {
  const folderData = useGetData<SampleFolderType>(SAMPLE.folder);

  if (!folderData) return [];
  return folderData.folder.links;
}

export default useGetSampleLinks;
