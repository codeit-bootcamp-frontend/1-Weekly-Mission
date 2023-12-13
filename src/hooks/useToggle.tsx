import { useCallback, useState } from 'react';
interface useBooleanOutput {
  isOn: boolean;
  toggle: () => void;
}

export default function useToggle(defaultValue?: boolean): useBooleanOutput {
  const [isOn, setIsOn] = useState<boolean>(!!defaultValue);
  const toggle = useCallback(() => setIsOn((prev) => !prev), []);

  return { isOn, toggle };
}
