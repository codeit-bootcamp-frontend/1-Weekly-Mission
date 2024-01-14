import { LinkData } from "@/types/link";
import { ChangeEvent } from "react";

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
