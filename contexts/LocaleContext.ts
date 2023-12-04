import { createContext } from "react";

export type CombinedLinksDataArray = {
  folderId: any;
  folderName: string;
  linksdata: CombinedLinksData[];
};

export type CombinedLinksData = {
  id: number;
  created_at: string;
  updated_at: any;
  url: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id?: number;
};

export type LocaleContextProps = {
  ObjectValue: { [key: string]: string };
  LinkSDataArr: CombinedLinksDataArray[];
  folderIdKey: string;
};

const LocaleContext = createContext({
  ObjectValue: {},
  LinkSDataArr: [],
  folderIdKey: "",
});

export default LocaleContext;
