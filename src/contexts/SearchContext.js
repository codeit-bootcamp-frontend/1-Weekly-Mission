import { createContext } from "react";

const SearchContext = createContext({
  inputValue: "",
  handleInputFunc: () => {},
});

export default SearchContext;
