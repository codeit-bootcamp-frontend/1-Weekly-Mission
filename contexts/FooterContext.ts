import { createContext } from "react";

const FooterContext = createContext({
  isFooterVisible: false,
  setIsFooterVisible: (e: boolean): void => {},
});

export default FooterContext;
