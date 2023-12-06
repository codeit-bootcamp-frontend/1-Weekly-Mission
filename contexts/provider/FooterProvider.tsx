import { useState } from "react";
import FooterContext from "../FooterContext";

const FooterProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  return (
    <FooterContext.Provider value={{ isFooterVisible, setIsFooterVisible }}>
      {children}
    </FooterContext.Provider>
  );
};

export default FooterProvider;
