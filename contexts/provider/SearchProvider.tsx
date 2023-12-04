import React, { useState } from "react";
import SearchContext from "../SearchContext";

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <SearchContext.Provider
      value={{ inputValue: inputValue, handleInputFunc: handleInputValue }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
