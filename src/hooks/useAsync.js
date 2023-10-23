import { useState, useCallback } from "react";

function useAsync(asyncFunction) {
  console.log(asyncFunction);
  const [error, setError] = useState(null);

  const wrappedFunction = useCallback(async () => {
    try {
      return await asyncFunction();
    } catch (error) {
      setError(error);
    } finally {
    }
  }, [asyncFunction]);
  console.log(asyncFunction);
  return [error, wrappedFunction];
}

export default useAsync;

// function useAsync(asyncFunction) {
//   console.log(asyncFunction);
//   const [error, setError] = useState(null);

//   const wrappedFunction = useCallback(async (asyncFunction) => {
//     try {
//       return await asyncFunction();
//     } catch (error) {
//       setError(error);
//     } finally {
//     }
//   }, []);
//   console.log(asyncFunction);
//   return [error, wrappedFunction];
// }

// export default useAsync;
