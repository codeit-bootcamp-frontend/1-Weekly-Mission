import { ChangeEvent } from "react";
import { LinkData } from "types/folder";

export interface FolderUIProps {
  target: React.MutableRefObject<null>;
  addLinkValue: string;
  isVisibleHero: boolean;
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
