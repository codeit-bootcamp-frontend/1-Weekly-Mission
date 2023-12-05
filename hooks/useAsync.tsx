import { useState, useEffect, useCallback } from "react";

type Status = "idle" | "pending" | "success" | "error";

interface State<T> {
  data: T | null;
  status: Status;
  error: any;
}

interface AsyncFunctionProps<T, A extends any[]> {
  asyncFunction: (...args: A) => Promise<T>;
  immediate: boolean;
  params: A;
}

/** { getCurrentUserData, params: {} } 이런 식으로 써야 할듯 */
export function useAsync<T, A extends any[]>({ asyncFunction, immediate = true, params }: AsyncFunctionProps<T, A>) {
  const [state, setState] = useState<State<T>>({
    data: null,
    status: "idle",
    error: null,
  });

  const execute = useCallback(
    async (params: any) => {
      setState({ data: null, status: "pending", error: null });
      try {
        const response: T = await asyncFunction(...params);
        setState({ data: response, status: "success", error: null });
      } catch (error) {
        setState({ data: null, status: "error", error });
      }
    },
    [asyncFunction]
  );

  // 선언 즉시 실행할 수 있도록 한다.
  useEffect(() => {
    if (immediate) {
      execute(params);
    }
  }, [immediate, execute, params]);

  return { execute, ...state };
}

export default useAsync;
