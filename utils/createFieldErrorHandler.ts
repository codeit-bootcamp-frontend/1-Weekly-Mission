const createFieldErrorHandler = (setError: Function) => {
  return {
    setFieldError(field: string, message: string) {
      setError(field, { message });
    },
  };
};

export default createFieldErrorHandler;
