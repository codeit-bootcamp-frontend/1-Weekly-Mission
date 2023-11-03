import requestAPI from '../api';

// 나의 링크 확인
const getLinks = async () => {
  const { result } = await requestAPI('links', {
    headers: {
      Authorization: localStorage.getItem('accessToken'),
    },
  });

  return result;
};

export default getLinks;
