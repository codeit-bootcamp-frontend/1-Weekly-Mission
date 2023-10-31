import { useState } from 'react';

function useInputValue() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  return [values, handleChange];
}

export default useInputValue;
