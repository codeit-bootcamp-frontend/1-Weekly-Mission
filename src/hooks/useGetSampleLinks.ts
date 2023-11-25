import { SampleLinkType } from 'constants/sampleDataType';
import useGetData from './useGetData';
import { SAMPLE } from 'constants/path';

function useGetSampleLinks(): SampleLinkType[] {
  const folderData = useGetData(SAMPLE.folder);

  if (folderData) {
    folderData.type = 'sample_folder';
    if (folderData.type === 'sample_folder') return folderData.folder.links;
  }

  return [];
}

export default useGetSampleLinks;
