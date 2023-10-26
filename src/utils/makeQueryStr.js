/**
 * 데이터 요청 시 필요한 쿼리 문자열을 만들어주는 함수
 */
export function makeQueryStr(type, id) {
  if (!type || !id) return;
  return `?${type}=${id}`;
}
