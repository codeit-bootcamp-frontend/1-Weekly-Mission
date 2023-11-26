import { createContext } from "react";
import { User } from "../dataType/dataType";

interface AccountType {
  account: { data: User[] };
  errorMessage: any;
  isVisible: boolean;
  isSecondVisible: boolean;
  searchResult: string;
}

export const AccountContext = createContext<AccountType>({
  account: { data: [] },
  errorMessage: { message: "" },
  isVisible: false,
  isSecondVisible: false,
  searchResult: "",
});
