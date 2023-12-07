import { ReactNode, createContext, useContext, useState } from "react";

interface ObserverProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  navBar: {
    isNavBarVisible: boolean;
    setIsNavBarVisible: (value: boolean) => void;
  };
  addLink: {
    isAddLinkVisible: boolean;
    setIsAddLinkVisible: (value: boolean) => void;
  };
  footer: {
    isFooterVisible: boolean;
    setIsFooterVisible: (value: boolean) => void;
  };
}

const ObserverContext = createContext<UserContextProps>({
  navBar: {
    isNavBarVisible: false,
    setIsNavBarVisible: () => {},
  },
  addLink: {
    isAddLinkVisible: false,
    setIsAddLinkVisible: () => {},
  },
  footer: {
    isFooterVisible: false,
    setIsFooterVisible: () => {},
  },
});

const ObserverProvider = ({ children }: ObserverProviderProps) => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [isAddLinkVisible, setIsAddLinkVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  return (
    <ObserverContext.Provider
      value={{
        navBar: { isNavBarVisible, setIsNavBarVisible },
        addLink: { isAddLinkVisible, setIsAddLinkVisible },
        footer: { isFooterVisible, setIsFooterVisible },
      }}
    >
      {children}
    </ObserverContext.Provider>
  );
};

const useObserverContext = () => {
  const context = useContext(ObserverContext);
  if (!context) {
    throw new Error("반드시 ObserverProvider 안에서 사용해야 합니다.");
  }
  return context;
};

export { ObserverContext, ObserverProvider, useObserverContext };
