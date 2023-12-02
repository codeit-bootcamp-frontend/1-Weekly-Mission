import { createContext } from "react";

const HeaderContext = createContext({
  isHeaderVisible: false,
  setIsHeaderVisible: (): void => {},
});

export default HeaderContext;
