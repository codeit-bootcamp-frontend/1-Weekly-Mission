interface SharedPageProps {
  userEmail: string;
  profile: string;
  userName: string;
  folderName: string;
  fullData: Link[];
}

interface SharedPageNavProps {
  userEmail: string;
}

interface SharedPageHeaderProps {
  profile: string;
  userName: string;
  folderName: string;
  fullData: Link[];
}

interface FolderListProps {
  fullData: Folders;
  handleFolderClick: (folderId: unknown, folderName: string) => void;
  isTotalClicked: boolean;
}

interface FolderListItemProps {
  data: SingleFolder;
  handleFolderClick: (folderId: unknown, folderName: string) => void;
  isSelected: boolean;
  handleButtonClick: (id: number) => void;
  isTotalClicked: boolean;
}

interface FolderCardsProps {
  fullData: SingleFolderData[];
  fullFolderData: SingleFolder[];
}

interface FolderCardProps {
  data: SingleFolderData;
  fullFolderData: SingleFolder[];
}

interface AddLinkProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onLinkValueAdded: (value: string) => void;
}

interface SearchProps {
  getInputValue: (input: string) => void;
}

interface SharedPageCardProps {
  data: Link;
}
