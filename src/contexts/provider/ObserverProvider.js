import { useRef, useState } from "react";
import ObserverContext from "./../ObserverContext";

const ObserverProvider = ({ children }) => {
  const [isHeaderVisible, setIsHeadervisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const headerRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <ObserverContext.Provider
      value={{
        headerRef: { headerRef, isHeaderVisible, setIsHeadervisible },
        footerRef: { footerRef, isFooterVisible, setIsFooterVisible },
      }}
    >
      {children}
    </ObserverContext.Provider>
  );
};

export default ObserverProvider;
