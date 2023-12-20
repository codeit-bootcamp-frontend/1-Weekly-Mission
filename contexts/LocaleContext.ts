import { createContext } from "react";
import { MappedDataProps } from "@/types/mappedFolderTypes";
export type LocaleContextProps = {
  ObjectValue: { [key: string]: MappedDataProps };
  LinkSDataArr: MappedDataProps[];
};

const LocaleContext = createContext<LocaleContextProps>({
  ObjectValue: {},
  LinkSDataArr: [],
});

export default LocaleContext;
