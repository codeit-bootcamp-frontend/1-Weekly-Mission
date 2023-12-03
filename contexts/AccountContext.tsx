import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { User } from "@/dataType/dataType";
import { useFetch } from "@/hooks/useFetch";

interface AccountType {
  account: { data: User[] };
  errorMessage: { message: string } | any;
  isVisible: boolean;
  isSecondVisible: boolean;
  searchResult: string;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  setIsSecondVisible: Dispatch<SetStateAction<boolean>>;
  setSearchResult: Dispatch<SetStateAction<string>>;
}

export const AccountContext = createContext<AccountType>({
  account: { data: [] },
  errorMessage: { message: "" },
  isVisible: false,
  isSecondVisible: false,
  searchResult: "",
  setIsVisible: setIsVisible,
  setIsSecondVisible: setIsVisible,
  setSearchResult: setIsVisible2,
});

export function AccountProvider({ children }: any) {
  const { data: userData, errorMessage } = useFetch("users/1", 1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSecondVisible, setIsSecondVisible] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<string>("");

  if (!userData) return;

  return (
    <AccountContext.Provider
      value={{
        account: userData,
        errorMessage,
        isVisible,
        isSecondVisible,
        searchResult,
        setIsVisible,
        setIsSecondVisible,
        setSearchResult,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}

export function useAccount() {
  const accountContext = useContext(AccountContext);
  if (!accountContext) {
    throw new Error("accountContext 안에서 써야 합니다");
  }

  return accountContext;
}

function setIsVisible(value: SetStateAction<boolean>): void {
  throw new Error("Function not implemented.");
}
function setIsVisible2(value: SetStateAction<string>): void {
  throw new Error("Function not implemented.");
}
