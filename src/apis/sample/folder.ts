import requestAPI from '../api';

// 토큰 없이 테스트용 유저 요청
const getSampleFolder = async () => {
  const { result } = await requestAPI('sample/folder');
  return result;
};

export default getSampleFolder;
