import { useState, useEffect, useCallback } from "react";

type Status = "idle" | "pending" | "success" | "error";

interface Props {
  asyncFunction: (params: any) => Promise<any>;
  immediate?: boolean;
  params: any;
}

interface State<T> {
  data: T | null;
  status: Status;
  error: any;
}

export function useAsync<T>({ asyncFunction, immediate = true, params }: Props) {
  const [state, setState] = useState<State<T>>({
    data: null,
    status: "idle",
    error: null,
  });

  const execute = useCallback(
    async (params: object) => {
      setState({ data: null, status: "pending", error: null });
      try {
        const response = await asyncFunction(params);
        setState({ data: response, status: "success", error: null });
      } catch (error) {
        setState({ data: null, status: "error", error });
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute(params);
    }
  }, [immediate, execute, params]);

  return { execute, ...state };
}

export default useAsync;
