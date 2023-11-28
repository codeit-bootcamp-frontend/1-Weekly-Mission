import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

interface ObserverProviderProps {
  children: ReactNode;
}

interface UserContextProps {
  navBarRef: {
    navBarRef: RefObject<HTMLElement> | null;
    isNavBarVisible: boolean;
    setIsNavBarVisible: (value: boolean) => void;
  };
  addLinkRef: {
    addLinkRef: RefObject<HTMLElement> | null;
    isAddLinkVisible: boolean;
    setIsAddLinkVisible: (value: boolean) => void;
  };
  footerRef: {
    footerRef: RefObject<HTMLElement> | null;
    isFooterVisible: boolean;
    setIsFooterVisible: (value: boolean) => void;
  };
}

const ObserverContext = createContext<UserContextProps>({
  navBarRef: {
    navBarRef: null,
    isNavBarVisible: false,
    setIsNavBarVisible: () => {},
  },
  addLinkRef: {
    addLinkRef: null,
    isAddLinkVisible: false,
    setIsAddLinkVisible: () => {},
  },
  footerRef: {
    footerRef: null,
    isFooterVisible: false,
    setIsFooterVisible: () => {},
  },
});

const ObserverProvider = ({ children }: ObserverProviderProps) => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [isAddLinkVisible, setIsAddLinkVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const navBarRef = useRef<HTMLElement>(null);
  const addLinkRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  return (
    <ObserverContext.Provider
      value={{
        navBarRef: { navBarRef, isNavBarVisible, setIsNavBarVisible },
        addLinkRef: { addLinkRef, isAddLinkVisible, setIsAddLinkVisible },
        footerRef: { footerRef, isFooterVisible, setIsFooterVisible },
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
