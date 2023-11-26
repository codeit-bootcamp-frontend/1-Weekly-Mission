import { createContext } from "react";

const ObserverContext = createContext({
  headerRef: {
    headerRef: null,
    isHeaderVisible: () => {},
    setIsHeadervisible: () => {},
  },
  footerRef: {
    footerRef: null,
    isFooterVisible: () => {},
    setIsFooterVisible: () => {},
  },
});

export default ObserverContext;
