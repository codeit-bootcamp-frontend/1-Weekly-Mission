import { MappedDataProps } from "@/components/types/mappedFolderTypes";
import { createContext } from "react";

export type LocaleContextProps = {
  ObjectValue: { [key: string]: MappedDataProps };
  LinkSDataArr: MappedDataProps[];
  folderIdKey: string;
};

const LocaleContext = createContext<LocaleContextProps>({
  ObjectValue: {},
  LinkSDataArr: [],
  folderIdKey: "",
});

export default LocaleContext;
