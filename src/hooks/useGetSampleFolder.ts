import { SampleFolderDataType } from 'constants/sampleDataType';
import useGetData from './useGetData';
import { SAMPLE } from 'constants/path';

function useGetSampleFolder(): SampleFolderDataType | null {
  const folderData = useGetData(SAMPLE.folder);

  if (folderData) {
    folderData.type = 'sample_folder';
    if (folderData.type === 'sample_folder') return folderData.folder;
  }

  return null;
}

export default useGetSampleFolder;
