import { EffectCallback, useEffect } from "react";

export const useEffectOnce = (callback: EffectCallback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
