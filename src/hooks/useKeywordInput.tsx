import { useCallback, useState } from "react";

function useKeywordInput(initial_key = "") {
  const [keyword, setText] = useState(initial_key);
  const handleKeywordInput = useCallback((value: string) => setText(value), []);

  return { keyword, handleKeywordInput };
}

export default useKeywordInput;
