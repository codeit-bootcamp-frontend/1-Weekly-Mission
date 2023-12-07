import { FormEvent, MouseEvent, useState } from "react";

function useModalController(prevent?: boolean) {
  const [state, setState] = useState(false);
  const [target, setTarget] = useState<null | string>();

  const handleClick = (e: MouseEvent | FormEvent) => {
    if (prevent) {
      e.preventDefault();
    }

    setState((state) => !state);
  };

  return { state, target, handleClick, setTarget };
}

export default useModalController;
