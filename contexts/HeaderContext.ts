import { createContext } from "react";

const HeaderContext = createContext({
  isHeaderVisible: false,
  setIsHeaderVisible: (e: boolean): void => {},
});

export default HeaderContext;
