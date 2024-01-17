import { MouseEvent, useState } from "react";

function useToggle() {
  const [state, setState] = useState(false);

  const handleToggle = (e: MouseEvent) => {
    e.preventDefault();
    setState((state) => !state);
  };

  return { state, handleToggle };
}

export default useToggle;
