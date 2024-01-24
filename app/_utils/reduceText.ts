export const reduceText = (text: string | undefined, length: number) => {
  if (!text) return;
  if (text.length > length) {
    return `${text.slice(0, length)}...`;
  } else {
    return text;
  }
};
