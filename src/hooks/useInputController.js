import { useState } from 'react';

function useInputController(func) {
  const [values, setValues] = useState('');
  const [errorText, setErrorText] = useState('');

  function handleChange(e) {
    const value = e.target.value;
    setValues(value);
  }

  const handleBlur = () => {
    func(values, setErrorText);
  };

  const handleFocus = () => {
    if (errorText) {
      setErrorText('');
    }
  };

  return {
    values,
    setValues,
    errorText,
    setErrorText,
    handleChange,
    handleBlur,
    handleFocus,
  };
}

export default useInputController;
