import { ChangeEvent } from "react";
import { LinkData } from "types/folder";

export interface FolderUIProps {
  addLinkValue: string;
  keyword: string;
  selected: string;
  isLoading: boolean;
  folderNames: string[];
  links: LinkData[];
  filteredLinks: LinkData[];
  handleAddLink: (link: string) => void;
  handleOnChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDeletekeyword: () => void;
  handleSelectedFolder: (category: string) => void;
}
