export function toastPop({ text, setToast }) {
  setToast(<div>{text}</div>);
  const timer = setTimeout(() => {
    setToast(null);
  }, 1500);
  return <div>{text}</div>;
}
