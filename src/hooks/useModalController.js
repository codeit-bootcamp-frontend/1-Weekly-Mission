import { useState } from 'react';

function useModalColtroller(prevent) {
  const [state, setState] = useState(false);

  const handleClick = (e) => {
    if (prevent) {
      e.preventDefault();
    }

    setState((state) => !state);
  };

  return { state, handleClick };
}

export default useModalColtroller;
