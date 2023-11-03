import { useState } from 'react';

function useModalColtroller() {
  const [state, setState] = useState('false');

  const handleClick = () => {
    setState((state) => !state);
  };

  return { state, handleClick };
}

export default useModalColtroller;
