import { createContext } from "react";

const HeaderContext = createContext({
  isHeaderVisible: false,
  setIsHeaderVisible: () => {},
});

export default HeaderContext;
