import useGetData from './useGetData';
import { SAMPLE } from '@/lib/constants/path';
import { SampleFolderType, SampleLinkType } from '@/lib/types/sampleDataType';

function useGetSampleLinks(): SampleLinkType[] {
  const folderData = useGetData<SampleFolderType>(SAMPLE.folder);

  if (!folderData) return [];
  return folderData.folder.links;
}

export default useGetSampleLinks;
