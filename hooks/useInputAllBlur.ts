import { InputRef } from "@/components/Main/sign/Sign.type";
import { useRef } from "react";

export default function useInputAllBlur() {
  const inputRef = useRef<InputRef>(null);

  const allBlur = () => {
    if (!inputRef.current) return;
    let res;
    for (const f of Object.values(inputRef.current)) {
      if (f instanceof Function) {
        res = f();
      }
    }
    return res;
  };

  return { inputRef, allBlur };
}
