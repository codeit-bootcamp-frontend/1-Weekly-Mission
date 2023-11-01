import { useCallback, useState } from "react";

/**
 * 비동기 함수를 처리하는 React Custom Hook입니다.
 *
 * @param {function} asyncFunction - 비동기 함수입니다.
 * @returns {object} - `pending` 및 `wrappedFunction`을 포함하는 객체를 반환합니다.
 * @property {boolean} pending - 현재 비동기 함수가 실행 중인지 여부를 나타내는 불리언 값입니다.
 * @property {function} wrappedFunction - `asyncFunction`을 감싸고, 실행 중에 `pending` 값을 설정하고 비동기 함수의 결과를 반환하는 함수입니다.
 *
 * @example
 * const fetchData = async () => {
 *   // 비동기 작업 수행
 * };
 *
 * const { pending, wrappedFunction } = useAsync(fetchData);
 *
 * // wrappedFunction을 사용하여 fetchData를 실행하고, pending 값을 모니터링할 수 있습니다.
 */
const useAsync = (asyncFunction) => {
  const [pending, setPending] = useState(false);

  const wrappedFunction = useCallback(
    async (...args) => {
      try {
        setPending(true);
        return await asyncFunction(...args);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return { pending, wrappedFunction };
};

export default useAsync;
