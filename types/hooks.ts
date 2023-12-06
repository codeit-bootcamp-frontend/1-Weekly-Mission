import { Dispatch, SetStateAction } from "react";

export interface useBooleanOutput {
  isTrue: boolean;
  setIsTrue: Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
}
