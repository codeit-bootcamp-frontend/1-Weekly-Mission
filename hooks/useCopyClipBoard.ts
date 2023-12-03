import React from "react";
import { useState } from "react";
import { useCallback } from "react";

export default function useCopyClipBoard() {
  const [result, setResult] = useState<
    | null
    | { state: boolean; message: string }
    | { state: boolean; message: string }
  >(null);

  const handleLinkCopy = useCallback(async (sharedToLink: string) => {
    try {
      await navigator.clipboard.writeText(sharedToLink);
      setResult({
        state: true,
        message: `${sharedToLink}가 복사가 되었습니다`,
      });
    } catch (e) {
      setResult({ state: false, message: "copy가 안 되써욤" });
    } finally {
      setTimeout(() => {
        setResult(null);
      }, 3000);
    }
  }, []);
  return [handleLinkCopy, result];
}
