import { useCallback, useState } from "react";

function useKeywordInput(initial_key = "", rule: RegExp | null, msg = "") {
  const [keyword, setKeyword] = useState(initial_key);
  const [errormsg, setErrormsg] = useState("");
  function handleKeywordInput(value: string) {
    setKeyword(value);
    if (!value) {
      setErrormsg("내용을 입력해주세요.");
    }
    if (!rule?.test(keyword)) {
      setErrormsg(msg || "형식에 맞지 않습니다.");
    } else {
      setErrormsg("");
    }
  }

  return { keyword, handleKeywordInput, errormsg };
}

export default useKeywordInput;
