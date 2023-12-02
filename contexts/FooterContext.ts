import { createContext } from "react";

const FooterContext = createContext({
  isFooterVisible: false,
  setIsFooterVisible: () => {},
});

export default FooterContext;
