import { useState } from 'react';

function useSignInputError(values, func) {
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleBlur = () => {
    func(values, setError, setErrorText);
  };

  const handleFocus = () => {
    if (error) {
      setError(false);
    }
  };

  return [error, errorText, handleBlur, handleFocus];
}

export default useSignInputError;
