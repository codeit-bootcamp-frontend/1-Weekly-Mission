import { useCallback, useState } from "react";

/**
 * 비동기 함수를 처리하고 실행 상태를 추적하기 위한 훅입니다.
 *
 * @param {Function} asyncFunction - 실행할 비동기 함수.
 * @returns {[boolean, Function]} - 배열로 반환되며 첫 번째 요소는 실행 상태(pending)를 나타내는 불리언 값이고,
 * 두 번째 요소는 비동기 함수를 래핑한 함수입니다.
 */
const useAsync = (asyncFunction) => {
  const [pending, setPending] = useState(false);

  const wrappedFunction = useCallback(
    async (...args) => {
      try {
        setPending(true);
        return await asyncFunction(...args);
      } catch (error) {
        console.log(error);
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return [pending, wrappedFunction];
};

export default useAsync;
