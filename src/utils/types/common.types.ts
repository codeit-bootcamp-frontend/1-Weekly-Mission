export interface IOnClick {
  onClick?: (args0: boolean) => void;
}

export interface IFolderTagData {
  //ITagButtonData
  id: number | string;
  created_at: string;
  name: string;
  user_id: number;
  link: Link;
}
interface Link {
  count: number;
}

export interface IFolderTagNameListData {
  //ITagListDataProps
  id: number | string;
  dataCount: number;
  name: string;
}
