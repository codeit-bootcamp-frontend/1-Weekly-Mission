import { createContext } from "react";
type SearchContextProps = {
  inputValue: string;
  handleInputFunc: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const SearchContext = createContext<SearchContextProps>({
  inputValue: "",
  handleInputFunc: (): void => {},
});

export default SearchContext;
