import { useState, useEffect, useCallback } from 'react';
import { getResponse } from '../api';

/**
 * data를 받아오고, state를 바꿔주는 함수
 * @param {*} path 데이터를 요청할 url path
 * @param {*} query 데이터 요청 시 필요한 query
 * @returns 받아 온 data 원본
 */
function useGetData(path, query = '') {
  const [data, setData] = useState(null);

  const getData = useCallback(async () => {
    const result = await getResponse(path, query);
    if (!result) setData(null);
    else setData(result);
  }, [path, query]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
}

export default useGetData;
