import { getResponse } from '../api';

/**
 * 데이터를 불러오고, 불러 온 데이터로 state를 바꿔주는 함수
 * @param {*} path 불러 올 데이터의 BASE_URL을 제외한 url path
 */
export async function getData(setState, path) {
  const data = await getResponse(path);
  if (!data) return;
  setState(data);
}
