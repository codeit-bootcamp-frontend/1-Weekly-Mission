import { Folder } from "@/api/folder";
import { createContext } from "react";

type LocaleContextProps = {
  ObjectValue: { [key: string]: string };
  LinkSDataArr: Folder[];
  folderIdKey: string;
};

const LocaleContext = createContext({
  ObjectValue: {},
  LinkSDataArr: [],
  folderIdKey: "",
});

export default LocaleContext;
