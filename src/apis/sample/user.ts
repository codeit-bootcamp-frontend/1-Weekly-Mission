import requestAPI from '../api';

// 엑세스토큰 없이 테스트용 유저 요청
const getSampleUser = async () => {
  const { result } = await requestAPI('sample/user');
  return result;
};

export default getSampleUser;
