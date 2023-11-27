export const copyToClipboard = (text: string): Promise<void> => {
  // `navigator.clipboard`가 사용 가능한 경우
  if (navigator?.clipboard) {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text successfully copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text to clipboard", err);
        throw err; // 에러를 다시 throw하여 호출한 곳에서 처리할 수 있게 함
      });
  } else {
    // `navigator.clipboard`를 사용할 수 없는 경우 대체 방법 사용
    return new Promise<void>((resolve, reject) => {
      const tempElement = document.createElement("textarea");
      tempElement.value = text;
      document.body.appendChild(tempElement);
      tempElement.select();
      try {
        const successful = document.execCommand("copy");
        if (successful) {
          console.log("Text successfully copied to clipboard");
          resolve();
        } else {
          console.error("Failed to copy text to clipboard");
          reject(new Error("Failed to copy text to clipboard"));
        }
      } catch (err) {
        console.error("Failed to copy text to clipboard", err);
        reject(err);
      } finally {
        document.body.removeChild(tempElement);
      }
    });
  }
};
