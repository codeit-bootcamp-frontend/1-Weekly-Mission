import { IFolderTagData } from "../../../utils/types/common.types";
export interface IModalContentsProps {
  isOpen?: boolean;
  TagListData?: IFolderTagData[];
  changeOpenState?: (args0: boolean) => void;
  link?: string;
  folderTagName?: string;
}
