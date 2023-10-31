import useGetData from './useGetData';
import { SAMPLE } from '../constants/path';

function useGetSampleLinks() {
  const folderData = useGetData(SAMPLE.folder);
  if (!folderData) return null;
  return folderData.folder.links;
}

export default useGetSampleLinks;
