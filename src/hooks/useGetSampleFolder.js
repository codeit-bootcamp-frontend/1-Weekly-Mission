import useGetData from './useGetData';
import { SAMPLE } from '../constants/path';

function useGetSampleFolder() {
  const folder = useGetData(SAMPLE.folder);
  if (!folder) return null;
  return folder.folder;
}

export default useGetSampleFolder;
