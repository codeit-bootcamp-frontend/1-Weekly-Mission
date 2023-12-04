import type { PersonalFolder } from "./personalFolderType";

export interface modalType {
  onShow: (isOpen: boolean, modalName: string) => void;
  folders?: PersonalFolder;
  link?: string;
  currentFolder?: string;
  folderId?: string;
  userId?: string | undefined;
}
