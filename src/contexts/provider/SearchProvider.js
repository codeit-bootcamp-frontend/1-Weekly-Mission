import SearchContext from "../SearchContext";

import React, { useState } from "react";

const SearchProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
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
