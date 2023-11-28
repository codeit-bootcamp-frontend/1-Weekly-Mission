import { MouseEvent, useState } from "react";

function useModalController(prevent?: boolean) {
  const [state, setState] = useState(false);

  const handleClick = (e: MouseEvent) => {
    if (prevent) {
      e.preventDefault();
    }

    setState((state) => !state);
  };

  return { state, handleClick };
}

export default useModalController;
