import { useCallback, useState } from "react";
import { useBooleanOutput } from "@/types/hooks";

export default function useToggle(defaultValue?: boolean): useBooleanOutput {
  const [isTrue, setIsTrue] = useState(!!defaultValue);
  const toggle = useCallback(() => setIsTrue((prev) => !prev), []);

  return { isTrue, setIsTrue, toggle };
}
