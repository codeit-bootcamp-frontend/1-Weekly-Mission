import { createContext } from "react";
import { User } from "../dataType/dataType";

interface AccountType {
  account: { data: User[] } | null | any;
  errorMessage: string | null | any;
}

export const AccountContext = createContext<AccountType>({
  account: null,
  errorMessage: null,
});
