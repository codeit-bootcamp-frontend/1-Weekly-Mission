import { useState } from "react";

export function useAsync(asyncFunction) {
  const [userEmail, setUserEmail] = useState(false);

  const wrappedFunction = async () => {
    const { email } = await asyncFunction();
    setUserEmail(email);
  };

  return [userEmail, wrappedFunction];
}
