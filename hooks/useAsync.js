import { useState } from "react";

export function useAsync(asyncFunction) {
  const [userEmail, setUserEmail] = useState(false);

  const wrappedFunction = async () => {
    try {
      const { email } = await asyncFunction();
      setUserEmail(email);
    } catch (error) {
      console.error(error);
    }
  };

  return [userEmail, wrappedFunction];
}
