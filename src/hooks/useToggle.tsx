import { useCallback, useState } from "react";
import { useBooleanOutput } from "@/types/hooks";

export default function useToggle(defaultValue?: boolean): useBooleanOutput {
  const [isOn, setIsOn] = useState(!!defaultValue);
  const toggle = useCallback(() => setIsOn((prev) => !prev), []);

  return { isOn, toggle };
}
