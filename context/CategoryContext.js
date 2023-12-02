import { createContext, useContext, useState } from "react";

export const ResultContext = createContext();

export function ResultContextProvider({ children }) {
  const [result, setResult] = useState([]);

  const value = {
    result,
    setResult,
  };

  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
}

export function useResultContext() {
  return useContext(ResultContext);
}
