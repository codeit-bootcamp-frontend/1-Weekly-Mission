import { requestAPI } from '../api';

// 토큰 없이 테스트용 유저 요청
const getSampleFolder = async () => {
  const response = await requestAPI('sample/folder');
  return response;
};

export default getSampleFolder;
